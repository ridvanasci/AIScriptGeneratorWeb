import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy for AI Script Generator</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <p><strong>Developer:</strong> ReedOne</p>
      <p><strong>App:</strong> AI Script Generator (com.aiscriptgenerator.app)</p>
      
      <h2>Information We Collect</h2>
      <p>AI Script Generator by ReedOne does not collect, store, or transmit any personal information. All script generation happens locally on your device. We do not collect:</p>
      <ul>
        <li>Personal identification information</li>
        <li>Device information</li>
        <li>Usage analytics</li>
        <li>Location data</li>
      </ul>
      
      <h2>Data Usage</h2>
      <p>The AI Script Generator app processes your input text locally to generate scripts. No data is sent to external servers or third parties by ReedOne. All processing occurs on your device.</p>
      
      <h2>Third-Party Services</h2>
      <p>This app does not integrate with any third-party analytics, advertising, or data collection services.</p>
      
      <h2>Data Security</h2>
      <p>Since no data is collected or transmitted, your information remains secure on your device at all times.</p>
      
      <h2>Children's Privacy</h2>
      <p>Our app does not collect any information from children under 13 years of age.</p>
      
      <h2>Contact</h2>
      <p>For questions about this privacy policy for AI Script Generator, please contact ReedOne at: erptechnik@gmail.com</p>
      
      <h2>Changes to This Policy</h2>
      <p>ReedOne may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
    </div>
  );
};

export default PrivacyPolicy;