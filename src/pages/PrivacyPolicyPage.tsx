// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import EndFooter from '../components/EndFooter';

// const PrivacyPolicyPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <section className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8 text-[#002d45]">Privacy Policy</h1>
//         <h2 className="text-2xl font-semibold mb-4 text-[#2e376d]">Privacy Policy for International Conference Biomedical Engineering</h2>
//         <p className="text-lg mb-6 text-gray-700">
//           World Conference on Artificial Intelligence, Machine Learning, and Robotics
//           <br />
//           July 28–30, 2026 | Crowne Plaza – St. Peter’s, Rome, Italy
//         </p>

//         <div className="space-y-6 text-gray-800">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
//             <p>
//               This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or participate in the ROBOTICS-2026 conference. We are committed to safeguarding your privacy and ensuring compliance with applicable data protection laws.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">2. Information We Collect</h3>
//             <p>
//               We may collect personal information such as your name, email address, job title, company name, and contact details when you register for the conference, submit abstracts, or contact us. We also collect usage data through cookies and similar technologies.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
//             <p>
//               Your information is used to process registrations, communicate event updates, manage submissions, and provide services related to the conference. We may share data with sponsors or partners unless you opt out.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">4. Data Sharing and Disclosure</h3>
//             <p>
//               We do not sell your personal information. However, we may share it with service providers, sponsors, or as required by law. You can opt out of marketing communications at any time.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">5. Data Security</h3>
//             <p>
//               We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">6. Your Rights</h3>
//             <p>
//               You have the right to access, update, or delete your personal information. To exercise these rights, please contact us using the information provided below.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">7. Cookies</h3>
//             <p>
//               Our website uses cookies to enhance your experience. You can manage cookie preferences through your browser settings or our cookie consent tool.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">8. Changes to This Policy</h3>
//             <p>
//               We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
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

// export default PrivacyPolicyPage;


import React from 'react';
import Header from '../components/Header';
import EndFooter from '../components/EndFooter';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-14 px-4 md:px-16 max-w-5xl mx-auto leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#002d45]">
          Privacy Policy
        </h1>

        <p className="text-center text-sm text-gray-600 mb-10">
          Effective Date: <strong>October 16, 2025</strong>
        </p>

        <div className="space-y-8 text-gray-800 text-sm md:text-[15px]">
          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">1. Introduction</h3>
            <p>
              This Privacy Policy outlines how we handle your personal information in connection with
              the <strong>International Conference on Biomedical Engineering (ICBE)</strong>. By
              accessing our website or participating in our events, you consent to the practices
              described in this policy. We are dedicated to maintaining transparency and safeguarding
              the privacy of all our attendees, authors, speakers, and partners.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">2. Information We Collect</h3>
            <p>
              We may collect information directly from you when you register, submit an abstract, or
              contact us. This may include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full name, title, and organization details</li>
              <li>Email address, phone number, and country of residence</li>
              <li>Payment information (processed securely via trusted third-party providers)</li>
              <li>Abstract submission details (title, co-authors, content, etc.)</li>
              <li>Website usage information through cookies and analytics tools</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">3. How We Use Your Information</h3>
            <p>
              The collected data helps us manage your participation in the conference, provide
              important updates, and enhance your overall experience. Specifically, we use your data
              to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Process conference registrations and payments</li>
              <li>Communicate event schedules, updates, and deadlines</li>
              <li>Publish accepted abstracts in official conference proceedings</li>
              <li>Provide technical support and respond to inquiries</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">4. Data Sharing and Disclosure</h3>
            <p>
              We do not sell or rent your personal data. However, we may share limited data with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Conference organizers, committee members, and technical partners</li>
              <li>Payment gateways and IT service providers for secure transaction handling</li>
              <li>Legal authorities, if required by law or regulation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">5. Data Security</h3>
            <p>
              We adopt appropriate technical and organizational measures to protect your information
              against unauthorized access, alteration, or disclosure. While we strive for full
              security, please note that no electronic transmission over the internet can be
              guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">6. Retention of Information</h3>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes
              outlined in this policy or as required by law. Data related to conference participation
              and abstracts may be archived for academic and historical reference.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">7. Cookies and Analytics</h3>
            <p>
              Our website uses cookies and similar technologies to improve performance and analyze
              usage trends. You can manage or disable cookies through your browser settings. Some
              sections of our website may not function properly if cookies are disabled.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">8. Your Rights</h3>
            <p>
              You have the right to access, correct, or request deletion of your personal data.
              Additionally, you may object to certain types of data processing or withdraw consent
              at any time. To exercise these rights, contact us at:
              <a
                href="mailto:secretary@globalbiomedicalsummit.com"
                className="text-blue-600 ml-1 underline"
              >
                secretary@globalbiomedicalsummit.com
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">9. International Data Transfers</h3>
            <p>
              As an international conference, your data may be transferred and processed in different
              countries. We ensure all transfers comply with applicable data protection standards and
              safeguard your information appropriately.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">10. Updates to This Policy</h3>
            <p>
              We reserve the right to update this Privacy Policy as necessary to reflect changes in
              our practices, technology, or legal requirements. Any updates will be posted on this
              page with a revised "Last Updated" date.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-[#2e376d]">11. Contact Information</h3>
            <p>
              For any questions, concerns, or complaints regarding this Privacy Policy or our data
              handling practices, please reach out to:
            </p>
            <div className="mt-2 pl-4">
              <p><strong>Conference Secretariat</strong></p>
              <p>International Conference on Biomedical Engineering</p>
              <p>Email: <a href="mailto:secretary@globalbiomedicalsummit.com" className="text-blue-600 underline">secretary@globalbiomedicalsummit.com</a></p>
              <p>Website: <a href="https://globalbiomedicalsummit.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://globalbiomedicalsummit.com/</a></p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-xs">
          <p>
            © 2025 International Conference on Biomedical Engineering. All rights reserved.
          </p>
        </div>
      </section>
      <EndFooter />
    </div>
  );
};

export default PrivacyPolicyPage;
