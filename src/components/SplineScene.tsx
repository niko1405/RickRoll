import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { images } from "../images";

const SplineScene = () => {
  const [explanation, setExplanation] = useState<boolean>(true);

  const handleContinue = () => {
    setExplanation(false);
  };

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center">
      {explanation && (
        <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center">
          <p className="font-mono text-4xl font-bold text-white mb-6">
            Controls
          </p>
          <div className="flex flex-row items-center justify-center">
            <img
              src={images.screenRotation}
              alt="ScreenRotation"
              width="100px"
            />
            <img src={images.tabFingers} alt="Movement Control" width="200px" />
          </div>
          <img src={images.zoom} alt="Zoom Control" width="200px" />
          <button
            className="rounded-3xl bg-transparent text-white outline-dashed font-bold w-60 h-14 text-3xl border-white mt-5"
            onClick={handleContinue}
          >
            Got it!
          </button>
        </div>
      )}
      <Spline
        hidden={explanation}
        scene="https://prod.spline.design/dC15IrwajPWUjopo/scene.splinecode"
      />
    </div>
  );
};

export default SplineScene;
