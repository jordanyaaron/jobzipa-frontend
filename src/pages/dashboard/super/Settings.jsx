import React, { useState , useRef , useCallback } from "react";
import Cropper from "react-easy-crop";
import {
  PlusIcon,
} from "@heroicons/react/24/outline";
export default function SettingsSuper() {
const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "preferences", label: "Preferences" },
    { id: "notifications", label: "Notifications" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="mt-[64px] lg:m-0 p-4 lg:p-6 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4">

      <h1 className="hidden lg:block text-2xl font-bold">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 rounded-lg text-sm whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-black text-white" 
                : "bg-[var(--hover)] text-[var(--text)]"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--background)]">
        {activeTab === "profile" && <ProfileSettings />}
        {activeTab === "preferences" && <PreferenceSettings />}
        {activeTab === "notifications" && <NotificationSettings />}
        {activeTab === "security" && <SecuritySettings />}
      </div>

    </div>
  );
}


function ProfileSettings() {
  const profilePictureRef = useRef(null)
  const [imageSrc, setImageSrc] = useState("https://jobzipa-profile-images.s3.eu-north-1.amazonaws.com/detault.jpg");
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [openCropper, setOpenCropper] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // field to send
  const [profileImage, setProfileImage] = useState(null);

  const [form, setForm] = useState({
    username: "adminjoe",
    firstName: "Jordan",
    lastName: "Daniel",
    gender: "Male",
    profileImage: profileImage,
  });

  const [preview, setPreview] = useState(null);

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle image upload
  const handleImageChange = (e) => {
      const file = e.target.files?.[0];
          if (file) {
          const imageURL = URL.createObjectURL(file);
          setSelectedImage(imageURL);
          setCrop({ x: 0, y: 0 }); // reset crop state
          setZoom(1);
      }
      setOpenCropper(true)
  };

  const handleSelectProfileImage = (e) => {
    profilePictureRef.current.click();
  };

  const  handleCancelCropping = () => {
    setOpenCropper(!openCropper)
  }


  const  handleCropProfilePicture = async () => {
    try {
      const image = await createImage(selectedImage);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
      );

      const base64Image = canvas.toDataURL("image/jpeg");
      const file = base64ToFile(base64Image, "company_logo.jpg");
      setProfileImage(file);
      setImageSrc(base64Image);
      setSelectedImage(null);
      } catch (e) {
        console.error(e);
    }
    setOpenCropper(!openCropper)
  };


  //  Crop complete
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const createImage = (url) =>
      new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous");
      image.src = url;
  });

  // 🔹 HELPER FUNCTION (nje)
  function base64ToFile(base64, filename) {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}



  return (
    <>
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Profile Info</h2>

          {/* Profile Picture */}
          <div className="relative w-16">
            <div className="w-16 h-16 rounded-full items-center gap-4 bg-gray-200 overflow-hidden">
                <img src={imageSrc} alt="profile" className="w-full h-full object-cover" />
            </div>
            <button onClick={handleSelectProfileImage} 
              className="
                bg-[var(--main-bg)]
                text-[var(--text)]
                absolute top-11 right-2
                border-2 border-[var(--text)]
                rounded-full
                p-1
                cursor-pointer
              "
            >
              <PlusIcon className="h-3 w-3" />
            </button>
            <input 
              ref={profilePictureRef}
              className="hidden" 
              id="logoInput" 
              type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />

          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />

          {/* Gender */}
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* Save */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Save Changes
          </button>
        </div>

       {openCropper && (
          <div
              className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
          >
              <div
              className="
                  relative
                  w-[90%]
                  max-w-[400px]
                  h-[80vh]
                  max-h-[500px]
                  rounded-xl
                  bg-white
                  dark:bg-slate-900
                  shadow-2xl
                  border
                  border-gray-200
                  dark:border-slate-700
                  p-4
                  flex
                  flex-col
              "
              >
              {/* Cropper Area */}
              <div className="relative flex-1 overflow-hidden rounded-lg">
                  <Cropper
                    image={selectedImage}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 4}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
              </div>

              {/* Buttons */}
              <div className="flex justify-between gap-3 mt-4">
                  <button
                  onClick={handleCancelCropping}
                  className="
                      flex-1
                      h-[45px]
                      rounded-lg
                      border
                      border-gray-300
                      dark:border-slate-600
                      text-gray-700
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-slate-800
                      transition
                  "
                  >
                  Cancel
                  </button>

                  <button
                  onClick={handleCropProfilePicture}
                  className="
                      flex-1
                      h-[45px]
                      rounded-lg
                      text-white
                      bg-gradient-to-r
                      from-[#3E907D]
                      to-[#061a1fbb]
                      hover:from-[#142a25]
                      hover:to-[#061a1fbb]
                      dark:from-[#b3baead6]
                      dark:to-[#3c6fae]
                      dark:hover:from-[#b3baea]
                      dark:hover:to-[#325e94]
                      transition-all
                      duration-300
                      active:scale-95
                      transition-all
                      duration-200
                  "
                  >
                  Crop Logo
                  </button>
              </div>
              </div>
          </div>
      ) }
    </>
   
  );
}

function PreferenceSettings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Preferences</h2>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Dark Mode
      </label>
    </div>
  );
}


function NotificationSettings() {
  const [settings, setSettings] = useState({
    staff: true,
    payout: true,
    post: true,
  });

  const toggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Notifications</h2>

      {Object.keys(settings).map((key) => (
        <label key={key} className="flex items-center gap-2 capitalize">
          <input
            type="checkbox"
            checked={settings[key]}
            onChange={() => toggle(key)}
          />
          {key}
        </label>
      ))}
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Security</h2>

      <input
        type="password"
        placeholder="New Password"
        className="w-full px-3 py-2 border rounded-lg"
      />

      <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
        Change Password
      </button>
    </div>
  );
}
