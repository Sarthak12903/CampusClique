import { useState } from "react";
import { FaCog, FaBell, FaMoon, FaGlobe } from "react-icons/fa";
import { MdOutlinePrivacyTip, MdSecurity } from "react-icons/md";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    emailNotifications: false,
    privateAccount: false,
    soundEnabled: true,
    language: "English",
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-[#1e1e1e] border-b border-gray-700 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <FaCog className="text-cyan-400 text-2xl" />
          <div>
            <h2 className="text-white font-bold text-xl">Settings</h2>
            <p className="text-gray-500 text-sm">
              Manage your account preferences
            </p>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="max-w-2xl mx-auto p-4">
        {/* Appearance */}
        <div className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 mb-4">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <FaMoon className="text-cyan-400" />
            Appearance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-white">Dark Mode</label>
              <button
                onClick={() => handleToggle("darkMode")}
                className={`relative w-12 h-6 rounded-full transition ${
                  settings.darkMode ? "bg-cyan-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    settings.darkMode ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 mb-4">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <FaBell className="text-cyan-400" />
            Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-white">Push Notifications</label>
              <button
                onClick={() => handleToggle("notifications")}
                className={`relative w-12 h-6 rounded-full transition ${
                  settings.notifications ? "bg-cyan-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    settings.notifications ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-white">Email Notifications</label>
              <button
                onClick={() => handleToggle("emailNotifications")}
                className={`relative w-12 h-6 rounded-full transition ${
                  settings.emailNotifications ? "bg-cyan-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    settings.emailNotifications ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-white">Sound Effects</label>
              <button
                onClick={() => handleToggle("soundEnabled")}
                className={`relative w-12 h-6 rounded-full transition ${
                  settings.soundEnabled ? "bg-cyan-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    settings.soundEnabled ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 mb-4">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <MdSecurity className="text-cyan-400 text-2xl" />
            Privacy & Security
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-white">Private Account</label>
              <button
                onClick={() => handleToggle("privateAccount")}
                className={`relative w-12 h-6 rounded-full transition ${
                  settings.privateAccount ? "bg-cyan-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    settings.privateAccount ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
            <button className="w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded transition">
              <div className="flex items-center gap-2">
                <MdOutlinePrivacyTip className="text-cyan-400" />
                <span>Change Password</span>
              </div>
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded transition">
              <div className="flex items-center gap-2">
                <MdSecurity className="text-cyan-400" />
                <span>Two-Factor Authentication</span>
              </div>
            </button>
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 mb-4">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <FaGlobe className="text-cyan-400" />
            Language & Region
          </h3>
          <div className="space-y-4">
            <select
              value={settings.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-red-500 font-bold text-lg mb-4">Danger Zone</h3>
          <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-900/30 rounded transition">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
