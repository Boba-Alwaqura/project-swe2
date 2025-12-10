import { useState } from "react";
import "./RequestForm.css"; // مهم جدًا

export default function RequestForm() {
  const [voiceChat, setVoiceChat] = useState(true);
  const [ranked, setRanked] = useState(false);

  return (
    <div className="request-form">
      <h1>Create New Teammate Request</h1>

      <p>Follow these steps to find your perfect squad.</p>

      {/* Tabs */}
      <div className="tabs">
        <span className="active">Game & Prefs</span>
        <span>Requirements</span>
        <span>Details</span>
        <span>Review</span>
      </div>

      {/* Choose game */}
      <div className="section">
        <label>Choose Game</label>
        <select>
          <option>Select a game</option>
          <option>Valorant</option>
          <option>Fortnite</option>
          <option>League of Legends</option>
        </select>
      </div>

      {/* Toggles */}
      <div className="toggle-row">
        <div className="toggle-group">
          <span>🎧 Voice Chat</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={voiceChat}
              onChange={() => setVoiceChat(!voiceChat)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-group">
          <span>🏆 Ranked Play</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={ranked}
              onChange={() => setRanked(!ranked)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Region */}
      <div className="section">
        <label>Region / Server</label>
        <select>
          <option>Select region</option>
          <option>EU</option>
          <option>NA</option>
          <option>ASIA</option>
        </select>
      </div>

      <div className="btn-row">
        <button>Next</button>
      </div>
    </div>
  );
}
