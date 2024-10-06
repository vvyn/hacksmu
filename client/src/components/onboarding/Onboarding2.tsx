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
    <div className="h-screen w-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/onboarding_wave_2.png")' }}>
      <div className="absolute bottom-0 w-full p-4 pb-16">
        <div className="text-[#1D95F4] text-xl">Account Setup</div>
        <div>
          <input type="text" placeholder="Your Name" className="w-3/4 border-b-2 border-[#F66C65]" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Username" className="w-3/4 border-b-2 border-[#F66C65]" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <button onClick={handleCreate} className="w-3/4 rounded-full text-white bg-gradient-to-r from-[#F66C65] to-[#E13A50]">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}
  