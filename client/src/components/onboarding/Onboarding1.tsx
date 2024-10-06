import { useNavigate } from "react-router-dom";

export default function Onboarding1() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding/2');
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center relative font-poppins overflow-hidden" style={{ backgroundImage: 'url("/onboarding_wave_1.png")' }}>
      <div className="">
        <div className="text-5xl pt-72 font-bold text-white drop-shadow-md">Calm Companion</div>
        <div className="absolute bottom-0 w-full p-4 pb-16">
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
      </div>
    </div>
  )
}
  
