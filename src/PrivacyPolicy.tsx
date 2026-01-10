import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <h2>Information We Collect</h2>
      <p>AI Script Generator does not collect, store, or transmit any personal information. All script generation happens locally on your device.</p>
      
      <h2>Data Usage</h2>
      <p>The app processes your input text locally to generate scripts. No data is sent to external servers or third parties.</p>
      
      <h2>Third-Party Services</h2>
      <p>This app does not integrate with any third-party analytics or advertising services.</p>
      
      <h2>Contact</h2>
      <p>For questions about this privacy policy, please contact us through our GitHub repository.</p>
    </div>
  );
};

export default PrivacyPolicy;