import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// register the hook.
gsap.registerPlugin(useGSAP);

export default function GSAPHookImplementation() {
  // create a ref to reuse it on any element.
  const demoRef = useRef(null);

  // just add the animation styles you want.
  useGSAP(() => {
    gsap.to(demoRef.current, {
      rotation: 1440,
      duration: 2,
      repeat: 2,
    });
  });

  // add the ref to the element you want to effect to.
  return (
    <>
      <div className="box gradient-green text-center" ref={demoRef}>
        Hello GSAP Hook
      </div>
    </>
  );
}
