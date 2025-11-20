// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import EndFooter from '../components/EndFooter';

// const CookiePolicyPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <section className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8 text-[#002d45]">Cookie Policy</h1>
//         <h2 className="text-2xl font-semibold mb-4 text-[#2e376d]">Cookie Policy for International Conference Biomedical Engineering</h2>
//         <p className="text-lg mb-6 text-gray-700">
//           World Conference on Artificial Intelligence, Machine Learning, and Robotics
//           <br />
//           July 28 - 30, 2026 | Crowne Plaza – St. Peter’s, Rome, Italy
//         </p>

//         <div className="space-y-6 text-gray-800">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">1. What Are Cookies</h3>
//             <p>
//               Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">2. How We Use Cookies</h3>
//             <p>
//               We use cookies to enhance your experience on our website, including remembering your login details, preferences, and providing personalized content. Cookies also help us analyze website traffic and improve our services.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">3. Types of Cookies We Use</h3>
//             <ul className="list-disc list-inside space-y-2">
//               <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
//               <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
//               <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
//               <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">4. Managing Cookies</h3>
//             <p>
//               You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect the functionality of our website.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">5. Third-Party Cookies</h3>
//             <p>
//               Some cookies may be set by third-party services that appear on our pages. We have no control over these cookies, and they are subject to the respective third party's privacy policy.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">6. Updates to This Policy</h3>
//             <p>
//               We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 text-center text-gray-600">
//           <p>Last Updated: October 16, 2025</p>
//           <p>For questions, contact us at <a href="mailto:secretary@globalbiomedicalsummit.com" className="text-blue-600 underline">secretary@globalbiomedicalsummit.com</a></p>
//         </div>
//       </section>
//       {/* <Footer /> */}
//       <EndFooter />
//     </div>
//   );
// };

// export default CookiePolicyPage;




import React from 'react';
import Header from '../components/Header';
import EndFooter from '../components/EndFooter';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-14 px-4 md:px-16 max-w-5xl mx-auto leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#002d45]">
          Cookie Policy
        </h1>

        <p className="text-center text-sm text-gray-600 mb-10">
          Effective Date: <strong>October 16, 2025</strong>
        </p>

        <div className="space-y-8 text-gray-800 text-sm md:text-[15px]">
          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">1. What Are Cookies?</h3>
            <p>
              Cookies are small text files that are placed on your computer, smartphone, or tablet
              when you visit our website. They help our site recognize your device, remember your
              preferences, and improve your browsing experience. Cookies also provide us with
              statistical information about how you interact with our content.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">2. How We Use Cookies</h3>
            <p>
              We use cookies to ensure the website functions properly, enhance your user experience,
              and collect insights that allow us to improve the conference website. Cookies help us:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Remember user preferences such as language and region.</li>
              <li>Analyze website traffic and visitor behavior.</li>
              <li>Facilitate secure login sessions and registration processes.</li>
              <li>Provide tailored content and improve navigation speed.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">3. Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Required for the basic functionality of our
                website, such as accessing secure areas and enabling form submissions.
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> Collect anonymous data on how
                users interact with the website, helping us optimize design and functionality.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember user preferences (like display
                settings) to enhance usability.
              </li>
              <li>
                <strong>Marketing and Advertising Cookies:</strong> Used to show relevant content and
                advertisements based on your browsing habits.
              </li>
              <li>
                <strong>Third-Party Cookies:</strong> Set by external services integrated into our
                site, such as video players, analytics tools, or social media plugins.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">4. Managing Cookies</h3>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow
              you to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Delete existing cookies from your device.</li>
              <li>Block all cookies or certain types of cookies.</li>
              <li>Receive notifications before a cookie is stored.</li>
            </ul>
            <p className="mt-2">
              Please note that disabling cookies may affect certain features of our website, such as
              registration forms or personalized content.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">5. Third-Party Cookies</h3>
            <p>
              Some cookies may be placed by third-party services integrated into our website, such
              as analytics providers or media players. These third parties operate independently and
              have their own privacy and cookie policies. We recommend reviewing them to understand
              how your data is used.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">6. Analytics and Tracking</h3>
            <p>
              We may use tools like Google Analytics to track user interactions on our site. These
              cookies collect anonymous information such as page visits, duration, and referral
              sources to help us improve user experience. You can opt out of Google Analytics by
              visiting the
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline ml-1"
              >
                Google Analytics Opt-Out Page
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">7. Consent</h3>
            <p>
              By using our website, you consent to the use of cookies in accordance with this
              Cookie Policy. Upon your first visit, a banner may appear requesting your consent for
              certain cookies. You may withdraw or change your consent at any time via browser
              settings or our cookie preferences tool (if available).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">8. Updates to This Policy</h3>
            <p>
              We may update this Cookie Policy periodically to reflect changes in our technology,
              legal requirements, or operational practices. The latest version will always be posted
              on this page, and the “Effective Date” will indicate the most recent update.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">9. Contact Us</h3>
            <p>
              For any questions or concerns regarding this Cookie Policy, please contact us at:
            </p>
            <div className="mt-2 pl-4">
              <p><strong>Conference Secretariat</strong></p>
              <p>International Conference on Biomedical Engineering</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:secretary@globalbiomedicalsummit.com"
                  className="text-blue-600 underline"
                >
                  secretary@globalbiomedicalsummit.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a
                  href="https://globalbiomedicalsummit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://globalbiomedicalsummit.com/
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-xs">
          <p>© 2025 International Conference on Biomedical Engineering. All rights reserved.</p>
        </div>
      </section>
      <EndFooter />
    </div>
  );
};

export default CookiePolicyPage;
