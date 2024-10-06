import { useNavigate } from "react-router-dom";

export default function Onboarding3() {
  const navigate = useNavigate();

  const handleCreate= () => {
    navigate('/onboarding/4');
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/onboarding_wave_2.png")' }}>
      <div className="bg-[#EFF5F6] pb-40">
        <img src="/onboarding_wave_3.png" alt="wave" />
      </div>
      <div className="text-[#1D95F4] text-xl">Personal Information (optional)</div>
      <div>
        <input type="text" placeholder="First Name" className="w-3/4 border-b-2 border-[#F66C65]"/>
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Last Name" className="w-3/4 border-b-2 border-[#F66C65]"/>
      </div>
      <div>
        <button onClick={handleCreate} className="w-3/4 rounded-full text-white bg-gradient-to-r from-[#F66C65] to-[#E13A50]">
          Create
        </button>
      </div>
    </div>
  )
}
  