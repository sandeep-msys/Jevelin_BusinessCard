import "./Goals.scss";
import React from "react";

const Goals = () => {
  const enableGoalAnimations = () => {
    document.getElementById("goalInstaImage").style.visibility = "visible";
    document.getElementById("goalInstaImage").style.animation = "slideLeft 1s";
    setTimeout(function () {
      document.getElementById("goalOfficeImage").style.visibility = "visible";
      document.getElementById("goalOfficeImage").style.animation =
        "slideRight 1s";
    }, 500);
  };
  return (
    <div
      className="Goals-container"
      id="About"
      onMouseOver={() => {
        enableGoalAnimations();
      }}
    >
      <div className="goal-slide-container">
        <div className="goal-about-container">
          <h1 className="goal-about-title">About our main company goal</h1>
          <p className="goal-about-subtitle">
            Vivamus fermentum, augue a gravida gravida, odio erat malesuada est,
            eu condimentum lorem felis sed risus.
          </p>
          <div className="goal-count-container">
            <div className="each-goal-counter-container">
              <h1 className="each-goal-count">20+</h1>
              <p className="each-goal-count-matter">Investors</p>
            </div>
            <div className="each-goal-counter-container">
              <h1 className="each-goal-count">15k</h1>
              <p className="each-goal-count-matter">Projects</p>
            </div>
          </div>
        </div>
        <div className="goal-image-container" id="goalInstaImage">
          <img
            src="https://jevelin.shufflehound.com/business/wp-content/uploads/sites/39/2019/11/call-1866884_1920.jpg"
            alt="/"
            className="goal-image"
          />
        </div>
      </div>

      <div className="goal-slide-container reverse">
        <div className="goal-about-container">
          <h1 className="goal-about-title">When you put your mind to it</h1>
          <p className="goal-about-subtitle">
            Vivamus fermentum, augue a gravida gravida, odio erat malesuada est,
            eu condimentum lorem felis sed risus.
          </p>
          <button className="goal-button">Read more</button>
        </div>
        <div className="goal-image-container" id="goalOfficeImage">
          <img
            src="https://jevelin.shufflehound.com/business/wp-content/uploads/sites/39/2019/11/austin-distel-wawEfYdpkag-unsplash.jpg"
            alt="/"
            className="goal-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;
