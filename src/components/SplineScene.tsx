import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const SplineScene = () => {
  //   const [landscape, setLandscape] = useState<boolean>(false);

  //   useEffect(() => {
  //     let portrait = window.matchMedia("(orientation: portrait)");

  //     let handleOrientation = (e: any) => {
  //       if (e.matches) {
  //         // Portrait mode
  //         console.log("portrait");
  //         setLandscape(false);
  //       } else {
  //         // Landscape
  //         console.log("landscape");
  //         setLandscape(true);
  //       }
  //     };
  //     portrait.addEventListener("change", handleOrientation);

  //     return () => portrait.removeEventListener("change", handleOrientation);
  //   }, []);
  //   console.log("landscape: " + landscape);

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center">
      <Spline scene="https://prod.spline.design/dC15IrwajPWUjopo/scene.splinecode" />
    </div>
  );
};

export default SplineScene;
