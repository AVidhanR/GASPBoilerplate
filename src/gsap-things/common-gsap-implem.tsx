import "./App.css";
import { gsap } from "gsap";

export default function CommonGSAPImplementation() {
  gsap.to(".box", {
    duration: 2,
    rotation: 360,
    repeat: 2,
  });

  return (
    <div className="main-div">
      <h1>gsap animation - using npm.</h1>
      <div className="box gradient-green"></div>
      <h2>refresh to see the animation maybe... 👀</h2>
    </div>
  );
}
