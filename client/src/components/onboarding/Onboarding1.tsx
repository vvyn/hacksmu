import { useNavigate } from "react-router-dom";

export default function Onboarding1() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding/2');
  };

  return (
    <>
      <div className="bg-[#EFF5F6]">
        <div className="text-4xl font-bold pt-8">Name of App</div>
        <div className="text-3xl">Tagline</div>
        <img src="/onboarding_wave.png" alt="wave" />
        <div>
          <button onClick={handleGetStarted} className="w-3/4 rounded-full text-white bg-gradient-to-r from-[#F66C65] to-[#E13A50]">
            Get Started
          </button>
        </div>
        <div className="mt-2">
          <button className="w-3/4 rounded-full text-[#F66C65] border-[#F66C65]">
            I Already Have An Account
          </button>
        </div>
      </div>
    </>
  )
}
  
