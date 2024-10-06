import { useNavigate } from "react-router-dom";

export default function Onboarding4() {
  const navigate = useNavigate();

  const handleSetGoal= () => {
    navigate('/breatheIntro');
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("/onboarding_wave_4.png")' }}>
      <div className="absolute bottom-0 w-full p-4">
        <div className="text-white text-2xl font-bold">Daily Step Goal</div>
        <div className="bg-white bg-opacity-90">
          <div className="text-xl py-4 py-2">
            <input type="radio" placeholder="casual" className=""/>
            <span>Causal </span>
            <span>5k steps a day</span>
          </div>
          <div className="text-xl py-4 py-2">
            <input type="radio" placeholder="regular" className=""/>
            <span>Regular </span>
            <span>10k steps a day</span>
          </div>
        </div>
        <div>
          <input type="checkbox" placeholder="dailyBreath" className=""/>
          <span>I want to join the daily breath challenge</span>
        </div>
        <div className="mb-4">
          <input type="checkbox" placeholder="dailyTasks" className=""/>
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
  