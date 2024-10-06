import { useNavigate } from "react-router-dom";

export default function Onboarding3() {
  const navigate = useNavigate();

  const handleCreate= () => {
    navigate('/onboarding/4');
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/onboarding_wave_3.png")' }}>
      <div className="absolute bottom-0 w-full p-4 pb-16">
        <div className="text-[#1D95F4] text-xl mb-8 font-bold">Connect your health info</div>
        <div>
          <button onClick={handleCreate} className="w-3/4 rounded-full text-white bg-gradient-to-r from-[#F66C65] to-[#E13A50]">
            Connect
          </button>
          <button onClick={handleCreate} className="w-3/4 rounded-full text-[#F66C65] bg-transparent">
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}
  