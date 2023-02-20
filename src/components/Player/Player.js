import "./Player.scss";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
export const Player = () => {
  return (
    <div className="Player-container">
      <div className="player-title-container">
        <BsFillPlayFill className="play-icon" />
        <h1 className="player-title">Video introduction presentation</h1>
        <p className="player-subtitle">To compliment your ideas</p>
      </div>
    </div>
  );
};
