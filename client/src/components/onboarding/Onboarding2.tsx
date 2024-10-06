import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../api";

export default function Onboarding2() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleCreate = async () => {
    try {
      await newUser(username, name);
      document.cookie = `username=${username}; expires=Sat, 20 Nov 2286 12:00:00 UTC; path=/`;
      navigate('/onboarding/3');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center relative font-poppins" style={{ backgroundImage: 'url("/onboarding_wave_2.png")' }}>
      <div className="absolute bottom-20 w-full pb-16 flex flex-col items-center">
        <div className="text-[#1D95F4] text-xl mb-4 font-bold">Account Setup</div>
        <div className="mb-4 border-[#F66C65] border-2 rounded-md w-fit">
          <div className="w-fit">
            <input type="text" placeholder="Your Name" className="w-3/4 py-2 border-b border-[#F66C65] outline-none" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="w-fit">
            <input type="text" placeholder="Username" className="w-3/4 py-2 outline-none" onChange={(e) => setUsername(e.target.value)}/>
          </div>
        </div>
        <div>
          <button onClick={handleCreate} className="rounded-full text-white bg-gradient-to-r px-24 from-[#F66C65] to-[#E13A50]">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}
  