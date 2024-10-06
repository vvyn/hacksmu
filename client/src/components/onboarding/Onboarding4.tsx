import { useNavigate } from "react-router-dom";

export default function Onboarding4() {
  const navigate = useNavigate();

  const handleSetGoal= () => {
    navigate('/breatheIntro');
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/onboarding_wave_4.png")' }}>
      <div className="absolute bottom-4 w-full p-4">
        <div className="text-white text-2xl font-bold mb-2">Daily Step Goal</div>
        <div className="bg-white bg-opacity-90 border-2 border-[#F66C65]">
          <div className="text-xl py-2 text-left pl-4 flex flex-row items-center">
            <input type="radio" placeholder="casual" name="steps" className="mr-4 bg-[#e5e7eb]"/>
            <span className="grow">Beginner </span>
            <span className="mr-4 text-sm text-[#A8A8A8]">5k steps a day</span>
          </div>
          <div className="text-xl py-2 text-left pl-4 flex flex-row items-center">
            <input type="radio" placeholder="regular" name="steps" className="mr-4 bg-[#e5e7eb]"/>
            <span className="grow">Standard </span>
            <span className="mr-4 text-sm text-[#A8A8A8]">10k steps a day</span>
          </div>
          <div className="text-xl py-2 text-left pl-4 flex flex-row items-center">
            <input type="radio" placeholder="regular" name="steps" className="mr-4 bg-[#e5e7eb]"/>
            <span className="grow">Advanced </span>
            <span className="mr-4 text-sm text-[#A8A8A8]">15k steps a day</span>
          </div>
        </div>
        <div className="flex flex-row items-center ml-4 mt-4">
          <input type="checkbox" placeholder="dailyBreath" className="mr-2"/>
          <span>I want to join the daily breath challenge</span>
        </div>
        <div className="flex flex-row items-center ml-4 mb-4 mt-4">
          <input type="checkbox" placeholder="dailyTasks" className="mr-2"/>
          <span>I want reminders to complete daily tasks</span>
        </div>
        <div>
          <button onClick={handleSetGoal} className="w-3/4 rounded-full text-white bg-gradient-to-r from-[#F66C65] to-[#E13A50]">
            Set Goal
          </button>
        </div>
      </div>
    </div>
  )
}
  