import { useNavigate } from "react-router-dom";

export default function Onboarding2() {
  const navigate = useNavigate();

  const handleCreate= () => {
    navigate('/onboarding/3');
  };

  return (
    <>
      <div className="pb-20 bg-[#EFF5F6] ">
        <img src="/onboarding_wave_2.png" alt="wave" />
      </div>
      <div className="text-[#1D95F4] text-xl">Account Setup</div>
      <div>
        <input type="text" placeholder="Email" className="w-3/4 border-b-2 border-[#F66C65]"/>
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Username" className="w-3/4 border-b-2 border-[#F66C65]"/>
      </div>
      <div>
        <button onClick={handleCreate} className="w-3/4 rounded-full text-white bg-gradient-to-r from-[#F66C65] to-[#E13A50]">
          Create
        </button>
      </div>
    </>
  )
}
  