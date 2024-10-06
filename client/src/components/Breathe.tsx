import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Breathe() {
  const [animationMoving, setAnimationMoving] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setAnimationMoving(true);
    setAnimationComplete(false);
    setTimeout(() => {
      setAnimationComplete(true);
      setAnimationMoving(false);
    }, 10000);
  };

  const handleContinue = () => {
    navigate('/home');
  };

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-[#62BAF4] to-[#56DDF4] justify-center items-center flex flex-col">
        <div className="relative"> 
          <img
            src="breathe_ears.gif"
            alt="Dog ears"
            className="z-10 absolute -top-20 left-0 w-72 h-72"
          />
          <div className="w-52 h-52 bg-white rounded-full flex justify-center items-center">
            <img src="breathe_face.gif" alt="Dog breathing" />
          </div>
          <svg
            className={`absolute top-0 left-0 w-full h-full ${animationMoving ? "animate-progress" : ""}`}
            viewBox="0 0 100 100"
          >
            <circle
              className="text-[#62BAF4]"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeDasharray="283"
              strokeDashoffset="283"
              style={{
                transition: animationMoving ? "stroke-dashoffset 10s linear" : "",
                strokeDashoffset: animationMoving ? "0" : "283",
              }}
              transform="rotate(-90 50 50)" 
            />
          </svg>
        </div>

        <div className="py-4 text-4xl font-bold text-[#F3576B]">Breathe</div>
        <div className="pt-4 pb-8 text-2xl text-white px-8">Don't forget to drink your water today</div>
        <button
          className={`w-32 h-12 rounded-full ${animationComplete ? "bg-[#F3576B] text-white" : "bg-white text-black"}`}
          onClick={animationComplete ? handleContinue : handleStart}
        >
          {animationComplete ? "Continue" : "Start"}
        </button>
      </div>
    </>
  );
}

export default Breathe;
