import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const RickRoll = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [rickroll, setRickRoll] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setRickRoll(true);
    }, 3 * 1000);
  }, []);

  const handleContinue = () => {
    setRickRoll(false);
  };

  return (
    <>
      {loading || rickroll ? (
        <div className="w-screen h-screen bg-windows bg-cover flex flex-row items-center justify-center">
          {loading ? (
            <>
              <ReactLoading
                type={"spin"}
                color={"white"}
                height={40}
                width={40}
              />
              <p className="font-mono text-4xl font-bold text-white ml-5">
                loading..
              </p>
            </>
          ) : (
            <button
              className="rounded-3xl bg-blue-800 text-white font-bold w-60 h-14 text-3xl border-2 border-white"
              onClick={handleContinue}
            >
              Continue
            </button>
          )}
        </div>
      ) : (
        <div
          className={`w-screen h-screen bg-gray-800 flex-col items-center justify-center ${
            loading || rickroll ? "hidden" : "flex"
          }`}
        >
          <p className="font-mono text-4xl font-bold text-white mb-6">
            You got rickrolled!
          </p>
          <iframe
            src="https://www.youtube-nocookie.com/embed/BBJa32lCaaY?autoplay=1&loop=1&fs=0&color=white&controls=0&disablekb=1&playlist=BBJa32lCaaY"
            width="460"
            height="315"
            title="Rick Rolled (Short Version)"
            allow="autoplay"
          ></iframe>
        </div>
        // <></>
      )}
    </>
  );
};

export default RickRoll;
