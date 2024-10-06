import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Breathe() {
  const [animationMoving, setAnimationMoving] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setAnimationMoving(true);
    setTimeout(() => {
      setAnimationComplete(true);
      setAnimationMoving(false);
    }, 30000);
  };

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-[#62BAF4] to-[#56DDF4] justify-center items-center flex flex-col">
        <div className="relative">
          <div className="w-52 h-52 bg-white rounded-full flex justify-center items-center">
            <img src="dog_breathe.png" alt="Dog breathing" />
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
                transition: animationMoving ? "stroke-dashoffset 30s linear" : "",
                strokeDashoffset: animationMoving ? "0" : "283",
              }}
              transform="rotate(-90 50 50)" 
            />
          </svg>
        </div>

        <div className="py-4 text-4xl font-bold">Breathe</div>
        <div className="pt-4 pb-8 text-2xl text-white px-8">Don't forget to drink your water today</div>
        <button
          className="bg-white w-32 h-12 rounded-full"
          onClick={animationComplete ? handleContinue : handleStart}
        >
          {animationComplete ? "Continue" : "Start"}
        </button>
      </div>
    </>
  );
}

export default Breathe;
