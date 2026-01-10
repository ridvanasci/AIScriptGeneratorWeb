import React, { useState } from 'react';
import './App.css';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return (
      <div className="App">
        <button onClick={() => setShowPrivacy(false)} style={{ margin: '20px', padding: '10px' }}>← Back</button>
        <PrivacyPolicy />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="hero">
        <div className="container">
          <h1>AI Script Generator</h1>
          <p>Create engaging video scripts with AI-powered content generation</p>
          <div className="download-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.aiscriptgenerator.app" target="_blank" rel="noopener noreferrer" className="btn-primary">Download for Android</a>
            <a href="#" className="btn-secondary">View on GitHub</a>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <h3>🤖 AI-Powered</h3>
              <p>Generate unique scripts using advanced AI technology</p>
            </div>
            <div className="feature">
              <h3>⏱️ Multiple Durations</h3>
              <p>Create scripts for 2, 5, or 8-minute videos</p>
            </div>
            <div className="feature">
              <h3>🎯 Platform Optimized</h3>
              <p>Tailored for YouTube, TikTok, Instagram, and Facebook</p>
            </div>
            <div className="feature">
              <h3>🎭 Various Tones</h3>
              <p>Casual, professional, funny, or serious content</p>
            </div>
            <div className="feature">
              <h3>📱 Mobile First</h3>
              <p>Designed for content creators on the go</p>
            </div>
            <div className="feature">
              <h3>📄 Export Options</h3>
              <p>Save as PDF or copy to clipboard</p>
            </div>
          </div>
        </div>
      </section>

      <section className="screenshots">
        <div className="container">
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            <div className="screenshot-placeholder">Home Screen</div>
            <div className="screenshot-placeholder">Script Generation</div>
            <div className="screenshot-placeholder">Results View</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2026 AI Script Generator. Built with Flutter & AI.</p>
          <button onClick={() => setShowPrivacy(true)} style={{ background: 'none', border: 'none', color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</button>
        </div>
      </footer>
    </div>
  );
}

export default App;