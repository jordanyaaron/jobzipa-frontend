import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 text-[var(--text)] leading-relaxed">

      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        At JobZipa (https://jobzipa.com), we respect your privacy and are
        committed to protecting your personal information.
      </p>

      {/* Information */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-3">
        We may collect non-personal information such as browser type, device
        information, IP address, and usage data to improve our services and user
        experience.
      </p>

      {/* Cookies */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-3">
        We use cookies to enhance user experience and analyze website traffic.
        Third-party vendors, including Google AdSense, may use cookies to serve
        personalized advertisements.
      </p>

      {/* Ads */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Third-Party Advertising</h2>
      <p className="mb-3">
        We use third-party advertising services such as{" "}
        <strong>Google AdSense</strong>. These services may collect data to show
        relevant ads based on your browsing behavior.
      </p>

      {/* Data Sharing */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Data Sharing</h2>
      <p className="mb-3">
        We do not sell, trade, or rent users’ personal information to third
        parties.
      </p>

      {/* Rights */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-3">
      Your Rights:
      If you have interacted with JobZipa, you may request 
      information about any data we may hold related to 
      your usage of our website, including cookies or browsing 
      data. You may also request deletion or restriction of such 
      data where applicable. Please contact us at {" "}
        <a
          href="mailto:support@jobzipa.com?subject=Data Request - JobZipa"
          className="text-blue-500 underline"
        >
          support@jobzipa.com
        </a>.
      </p>

      {/* Contact */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-3">
        If you have any questions about this Privacy Policy, contact us at:{" "}
        <br />
        <a
          href="mailto:support@jobzipa.com?subject=Privacy Policy Inquiry"
          className="text-blue-500 underline"
        >
          support@jobzipa.com
        </a>
      </p>

      {/* Agreement */}
      <p className="mt-6">
        By using JobZipa, you agree to this Privacy Policy.
      </p>

    </div>
  );
}