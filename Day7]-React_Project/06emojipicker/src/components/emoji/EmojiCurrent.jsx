import React, { useState } from "react";
import "./style.css";

const reactions = ["😊", "😢", "😂", "😡", "👍", "🥳"];

const EmojiCurrent = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);

  return (
    <div className="container">
      <div className="reaction-box">
        <h2 className="heading">Select your reaction</h2>
        <div className="reactions">
          {reactions.map((value, index) => (
            <button
              key={index}
              type="button"
              className={`emoji-btn ${selectedReaction === value ? "active" : ""}`}
              onClick={() => setSelectedReaction(value)}
            >
              {value}
            </button>
          ))}
        </div>
        {selectedReaction && <p className="selected-reaction">You selected: {selectedReaction}</p>}
      </div>
    </div>
  );
};

export default EmojiCurrent;
