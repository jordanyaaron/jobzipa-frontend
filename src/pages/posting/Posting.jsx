import { Link ,useNavigate} from 'react-router-dom';
import toast , { Toaster } from 'react-hot-toast';
import axios from "axios";
import React, { useEffect, useRef, useState ,useCallback} from "react";
import Cropper from "react-easy-crop";
import QuillEditor from '../../components/QuilEditor';
import logoAddIcon from '../../assets/icons/gallery.png';
import closeIcon from '../../assets/icons/close.png';
import plusIcon from '../../assets/icons/plus.png';
import removeLogoIcon from '../../assets/icons/removeImg.png';
import '../../css/QuillEditor.css';



export default function Posting() {
    const fileInputRef = useRef(null); // tunatumia ref ku-access input
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [biography, setBiography] = useState("");
    const [jobDescriptions, setJobDescriptions] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [position, setPosition] = useState("");
    const [locationRigion, setLocationRegion] = useState("");
    const [locationCountry, setLocationCountry] = useState("");
    const [locations, setLocations] = useState([]);
    const [tags, setTags] = useState([]);
    const [mode, setMode] = useState("ON");
    const [type, setType] = useState("FT");
    const [applicationLink,setApplicationsLink ] = useState("");
    const [cropperDisplay,setCropperDisplay ] = useState("none");
    const [isSubmitCommand,setIsSubmitComand ] = useState(false); // for location 
    const [, ] = useState("");
    const [companyLogo, setCompanyLogo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const [isMultiple, setIsMultiple] = useState(false); // checkbox state
    const [positionType, setPositionType] = useState("number"); // input type
    const [positionValue, setPositionValue] = useState(""); // input value
    const [imageSrc, setImageSrc] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [errors, setErrors] = useState({});
    const [isPostCommand, setIsPostCommand] = useState(false);
    const isAuthenticated = useState(false);
    
    // const ac = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); 

    // REFS FOR EVERY INPUT LOCATION
    const logPickerRef = useRef(null);
    const companyNameRef = useRef(null);
    const biographyRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionsRef = useRef(null);
    const positionRef = useRef(null);
    const locationRef = useRef(null);
    // const applicationLink = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    // REFS FOR EVERY INPUT LOCATION
    const bioQuill = useRef(null);
    const descriptionQuill = useRef(null);
    const companyNameFieldRef = useRef(null);
    const biographyFieldRef = useRef(null);
    const titleFieldRef = useRef(null);
    const descriptionsFieldRef = useRef(null);
    const positionFieldRef = useRef(null);
    const regionFieldRef = useRef(null);
    const countryFieldRef = useRef(null);
    const onsiteFieldRef = useRef(null);
    const jobTypeFieldRef = useRef(null);
    const jobModeFieldRef = useRef(null);
    const appLinkFieldRef = useRef(null);
    // const FieldRef = useRef(null);
    
    // const applicationLink = useRef(null);
   
    

    //  SUBMITION HANDLER ( Form validation )
        const handleSubmit = () => {
            let newErrors = {};
            if (!createCroppedImage || !selectedImage){newErrors.logo = "Logo is equired!";} 
            if (!companyName.trim()){ newErrors.name = "Company name is required!";}  
            if (!biography){newErrors.biography = "Biography is equired!";}   
            if (!title.trim()){newErrors.title = "Title is required!";}   
            if (!jobDescriptions.trim()){newErrors.description = "Job description's required!";}   
            if (!positionValue.trim()){newErrors.position = "Position should not be empty!";}
            if(!locationRigion) {
                if (locations.length === 0){
                    newErrors.locations = "At least one location is required!";
                }
            }else{
                handleAddLocationOnSubmit()
            }
            
            
            
            if (isQuillContentEmpty(jobDescriptions)) {
                {newErrors.description = "Job description's required!";} 
            }
            if (isQuillContentEmpty(biography)) {
                {newErrors.biography = "Biography is equired!";} 
            }
              

            // setErrors(newErrors);

            // scroll to first input with error
                // Kama kuna errors
            if (Object.keys(newErrors).length > 0) {
                // Pata key ya kwanza yenye error
                const firstErrorKey = Object.keys(newErrors)[0];

                // Scroll kwenye field husika
                const refMap = {
                    logo: logPickerRef,
                    name: companyNameRef,
                    biography: biographyRef,
                    title: titleRef,
                    description: descriptionsRef,
                    position: positionRef,
                    locations : locationRef
                };

                const firstRef = refMap[firstErrorKey];
                if (firstRef?.current) {
                    firstRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                }

                // Set only one error to display
                toast.error(newErrors[firstErrorKey]);
                // setErrors({ [firstErrorKey]: newErrors[firstErrorKey] });
                return;
            }  
            handlePostJob();
        };

    //  SUBMITION HANDLER ( Posting after a form validation) 
        const handlePostJob = async () => {
            console.log("🔥 handlePostJob CALLED!");
            console.log("🔥🔥🔥 WE GOT ",locations.length, ' IN HERE Thank you');

            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", jobDescriptions);
            formData.append("biography", biography);
            formData.append("company", companyName);
            formData.append("location", JSON.stringify(locations)); 
            formData.append("tags", JSON.stringify(tags));
            formData.append("job_type", type);
            formData.append("job_mode", mode);
            formData.append("position", positionValue);
            formData.append("application_link", applicationLink);
            formData.append("customer_email", 'guest@example.com')
            if (companyLogo) formData.append("company_logo", companyLogo);

            // if (guestEmail) formData.append("guest_email", 'guest@example.com');
        
            // formData.append("locations", JSON.stringify(locations));
            // formData.append("tags", JSON.stringify(tags));

            setIsLoading(true)
            const BASE_URL = "http://127.0.0.1:8000";

            // if (!isAuthenticated) {
            //     formData.append("guest_email", guestEmail);
            // }
        
            // const headers = {
            //     "Content-Type": "multipart/form-data",
            // };

            let headers = {};
        
            if (isAuthenticated) {
                headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
            }

            console.log({
                job_mode: mode,
                application_link: applicationLink,
              });
        
            try {
                const res = await axios.post(
                    "http://127.0.0.1:8000/api/jobs/", 
                    formData, 
                    { headers }
                );
                setIsLoading(false)
                toast.success("Job posted successfully!");
                resetJobForm()
                // Reset form state
            } catch (error) {
                setIsLoading(false)
                console.error("Post Job Error:", error.response || error);
                toast.error("Failed to post job. Please try again.");
            }
        };

        const resetJobForm = () => {
            // resting state
            setTitle("");
            setJobDescriptions("");
            setBiography("");
            setCompanyName("");
            setLocations([]);
            setTags([]);
            setType("FT");
            setMode("ON");
            setPositionValue("");
            setIsMultiple(false)
            setLocationRegion('')
            setLocationCountry('')
            setApplicationsLink('');
            handleRemoveLogo()
            bioQuill.current?.clear();
            descriptionQuill.current?.clear();
       
          };
          
        const isQuillContentEmpty = (html) => {
            if (!html) return true;
            
            const temp = document.createElement("div");
            temp.innerHTML = html;
            
            // chukua maandishi halisi
            const text = temp.textContent || temp.innerText || "";
            
            return text.trim().length === 0;
        };
          
           


    //  LOGO PICKER OPEN
        const handleButtonClick = () => {
            fileInputRef.current.click();
        };

    //  LOGO CHANGE HANDLER
        const handleFileChange = (e) => {
                const file = e.target.files?.[0];
                if (file) {
                const imageURL = URL.createObjectURL(file);
                setSelectedImage(imageURL);
                setCrop({ x: 0, y: 0 }); // reset crop state
                setZoom(1);
            }
            
            // reader.readAsDataURL(file);
            setCropperDisplay('flex')
        };

    //  Crop complete
        const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
            setCroppedAreaPixels(croppedAreaPixels);
        }, []);

    //  Helper function to generate cropped image
    //  CROPING LOGO IMAGE
        const createCroppedImage = async () => {
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
            setCompanyLogo(file);
            setCroppedImage(base64Image);
            setCropperDisplay('none')
            } catch (e) {
            console.error(e);
            }
        };


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

    //  Utility to load image
        const createImage = (url) =>
            new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener("load", () => resolve(image));
            image.addEventListener("error", (error) => reject(error));
            image.setAttribute("crossOrigin", "anonymous");
            image.src = url;
        });

    //  CANCEL CROPPING
        const handleCancelCropping = () => {
            setCropperDisplay('none')
        };

    //  CANCEL CROPPING
        const handleRemoveLogo = () => {
            setCroppedImage(null);
            setSelectedImage(null)
        };

    //  BACK CROPPING
        useEffect(() => {
            const handleBack = (event) => {
                // condition yako
                if (window.confirm("Una hakika unataka kurudi nyuma?")) {
                console.log("User anajaribu kurudi nyuma");
                } else {
                // block back
                navigate(1); // stay kwenye page
                }
            };

            window.addEventListener("popstate", handleBack);

            return () => window.removeEventListener("popstate", handleBack);
        }, [navigate]);

    //  BIOGRAPHY CROPPING
        const handleBioChange = (value) => {
            setBiography(value); // update useState kila change
        };

    
    // DESCIPTION OF JOB 
        const handleContentChange = (value) => {
            setJobDescriptions(value); // update useState kila change
        };
       

    //  ADD TAGS
        const handleSelectChange = (e) => {
            const value = e.target.value;

            if (!value) return;

            // Check duplicates
            if (tags.includes(value)) {
            toast.error("This tag is already added!");
            e.target.value = ""; // reset select
            return;
            }

            // Add tag
            setTags([...tags, value]);
            toast.success(`Tag "${value}" added!`);
            e.target.value = ""; // reset select after adding
        };

    //  REMOVE TAGS
        const handleRemoveTag = (index) => {
        const removed = tags[index];
        setTags(tags.filter((_, i) => i !== index));
        toast.success(`Tag "${removed}" removed!`);
        };

    //  ADD LOCATION
        const handleAddLocation = () => {
            
            const duplicate = locations.some(
            (loc) =>
                loc.locationRigion.toLowerCase() === locationRigion.trim().toLowerCase() &&
                loc.locationCountry.toLowerCase() === locationCountry.toLowerCase()
            );

            if (!locationRigion) {
                toast.error('Please enter a region or city!');
                return;
            }


            if (duplicate) {
                toast.error('This location already exists');
                return;
            }
            // if (!locationRigion.trim() || !locationCountry) return;
            const newLocation = { locationRigion: locationRigion.trim(), locationCountry };
                setLocations((prev) => [...prev, newLocation]);
                setLocationRegion("");
                setLocationCountry("");
        };

     //  ADD LOCATION ON SUBMIT IF ANY
     const handleAddLocationOnSubmit  = () => {
        const region = locationRigion.trim();
        const country = locationCountry.trim();


        console.log('LOCATION IS:' + region)
      
        // 1️⃣ Copy current locations
        let finalLocations = [...locations];
      
        // 2️⃣ Auto-add input location ikiwa ipo na si duplicate
        if (region) {
          const duplicate = finalLocations.some(
            (loc) =>
              loc.locationRigion.toLowerCase() === region.toLowerCase() &&
              loc.locationCountry.toLowerCase() === country.toLowerCase()
          );
      
          if (!duplicate) {
            finalLocations.push({ locationRigion: region, locationCountry: country });
            setLocations(finalLocations)

            console.log("LOCATION NUMBER IS",setLocations.length)
            console.log(finalLocations.length)
            console.log({finalLocations})
          } else {
            toast.error("This location already exists!");
          }

        }
      
        // 3️⃣ Check if after this, locations is empty
        if (finalLocations.length === 0) {
          toast.error("At least one location is required!");
          return;
        }
      
        // 4️⃣ Use finalLocations to submit (API / whatever)
        console.log("Submitting locations:", finalLocations);
      
        // 5️⃣ Clear input fields
        setLocationRegion("");
        setLocationCountry("");
      
        // 6️⃣ Optional: update state if you want list to reflect new addition
        setLocations(finalLocations);
      };
      
    
    //  REMOVE LOCATION
        const handleRemoveLocation = (index) => {
        setLocations((prev) => prev.filter((_, i) => i !== index));
        };


    //  CHECKBOX
        const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setIsMultiple(checked);

        if (checked) {
            setPositionType("text");
            setPositionValue("multiple Positions");
        } else {
            setPositionType("number");
            setPositionValue("");
        }
        };
    return (
        <>
          <main 
          className="w-[650px] min-h-[calc(100vh-162px)] bg-white mx-auto my-3 p-[60px] pt-[13px] relative overflow-y-auto text-left">

{/* Admin Label */}
<em className="block mb-4">Admin</em>

{/* Organisation Details */}
<section className="mb-8">
  <h1 className="text-[30px] font-extrabold text-[#3E907D] mb-0">Organisation Details</h1>

  {/* Logo Upload */}
  <div className="mt-4">
    {!imageSrc && !croppedImage ? (
      <button
        onClick={handleButtonClick}
        className="flex flex-col items-center justify-center w-full h-[130px] bg-gradient-to-r from-[#3E907D] to-[#061a1fbb] rounded-[30px] mt-5 cursor-pointer border-0 overflow-hidden"
      >
        <img src={logoAddIcon} alt="Add Logo" className="h-[30px] w-[30px] mt-4" />
        <p className="text-white font-light text-[18px] mt-2">Tap here to add company logo</p>
      </button>
    ) : (
      <div className="relative w-[200px] mt-5">
        {/* Buttons for Crop/Remove */}
        <div className="absolute right-1 flex flex-col">
          <button
            className="h-[30px] w-[30px] mb-1.5 rounded-full bg-black/60 flex justify-center items-center"
            onClick={handleButtonClick}
          >
            <img src={logoAddIcon} alt="" className="h-[15px] w-[15px]" />
          </button>
          <button
            className="h-[30px] w-[30px] mb-1.5 rounded-full bg-black/60 flex justify-center items-center"
            onClick={handleRemoveLogo}
          >
            <img src={removeLogoIcon} alt="" className="h-[15px] w-[15px]" />
          </button>
        </div>
        <img
          src={croppedImage || imageSrc}
          alt="Company Logo"
          className="w-[150px] h-[150px] object-cover rounded-[10px] border border-gray-300"
        />
      </div>
    )}
    {errors.logo && <p className="text-red-500 mt-2">{errors.logo}</p>}
    <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
  </div>

  {/* Company Name */}
  <div className="mt-4">
    <h3 className="text-[25px] font-normal mb-2">Company Name</h3>
    <input
      type="text"
      placeholder="Enter Company Name . . ."
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
      className="w-full border border-gray-300 rounded-[5px] px-4 py-3 text-[18px] focus:outline-none"
    />
    {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
  </div>

  {/* Company Biography */}
  <div className="mt-4">
    <h3 className="text-[25px] font-normal mb-2">Company Biography</h3>
    {errors.biography && <p className="text-red-500 mb-2">{errors.biography}</p>}
    <div className="ml-0 mr-0">
      <QuillEditor
        ref={bioQuill}
        value={biography}
        onChange={handleBioChange}
        placeholder="Describe about the company..."
      />
    </div>
    <div className="mt-5">
      <p className="font-semibold">Hints:</p>
      <p className="text-[12px] text-gray-500">
        Company History(shortly), Mission, Vision, Products/Services, Future Goals, Values, Leadership, Culture, Achievements.
      </p>
    </div>
  </div>
</section>

</main>

        </>
      );
      
}