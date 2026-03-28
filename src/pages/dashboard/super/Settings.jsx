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
    <div className="p-4 lg:p-6 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4">

      <h1 className="text-xl md:text-2xl font-bold">Settings</h1>

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
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Profile Info</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-3 py-2 border rounded-lg"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-lg"
      />

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
