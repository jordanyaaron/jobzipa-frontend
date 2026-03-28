import React, { useState } from "react";

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
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    gender: "",
    profileImage: null,
  });

  const [preview, setPreview] = useState(null);

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, profileImage: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Profile Info</h2>

      {/* Profile Picture */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          {preview ? (
            <img src={preview} alt="profile" className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-gray-500">
              No Image
            </div>
          )}
        </div>

        <input type="file" accept="image/*" onChange={handleImageChange} />
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
