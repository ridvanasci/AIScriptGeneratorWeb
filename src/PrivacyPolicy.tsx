import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy for AI Script Generator</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <p><strong>Developer:</strong> ReedOne</p>
      
      <h2>Information We Collect</h2>
      <p>AI Script Generator by ReedOne does not collect, store, or transmit any personal information. All script generation happens locally on your device.</p>
      
      <h2>Data Usage</h2>
      <p>The AI Script Generator app processes your input text locally to generate scripts. No data is sent to external servers or third parties by ReedOne.</p>
      
      <h2>Third-Party Services</h2>
      <p>This app does not integrate with any third-party analytics or advertising services.</p>
      
      <h2>Contact</h2>
      <p>For questions about this privacy policy for AI Script Generator, please contact ReedOne through our GitHub repository or Google Play Store listing.</p>
      
      <h2>Changes to This Policy</h2>
      <p>ReedOne may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
    </div>
  );
};

export default PrivacyPolicy;