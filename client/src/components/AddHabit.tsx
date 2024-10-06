import { useNavigate } from 'react-router-dom';

function AddHabit() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between mb-16'>
        <button className="text-sm" onClick={handleBack}>← Back</button>
        <div className='font-bold text-xl'>Add New Habit</div>
      </div>

      <div className='text-left'>
        <div className='font-bold text-xs'>NAME</div>
        <div className='font-bold text-xl'>Daily Step Goal</div>
        <div className='border-b-2 border-slate-200 my-4'></div>
      </div>

      <div className='text-left'>
        <div className='font-bold text-xs'>GOAL</div>
        {/* <img
          src="corg_walk.gif"
          alt="Dog ears"
        /> */}
        <div className="mb-4 mx-4 mt-4 rounded-xl py-3 text-white bg-gradient-to-br from-[#5AD7F5] bg-[#1D95F4]">
          <span className='ml-4 text-3xl'>10K</span>
          <div className='mt-2 pl-4 mx-4 rounded-xl bg-slate-200'>Daily</div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <div>
          <div className="bg-[#60D0F3] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl"></div>
          <div className="text-[#60D0F3]">5k</div>
        </div>
        <div>
          <div className="bg-[#1D95F4] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl">✓</div>
          <div className="text-[#1D95F4]">10k</div>
        </div>
        <div>
          <div className="bg-[#60D0F3] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl"></div>
          <div className="text-[#60D0F3]">15k</div>
        </div>
        <div>
          <div className="bg-[#60D0F3] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl"></div>
          <div className="text-[#60D0F3]">custom</div>
        </div>
      </div>

      <button className="w-3/4 mx-2 mt-2 rounded-full py-3 text-black bg-gradient-to-br from-[#F3F4F6] to-[#FFFFFF]">Add Reminder</button>

      <img src="/corg_walk.gif" alt="Add Reminder" className="w-3/4 mx-4 mt-4" />

      <button className="w-3/4 mx-4 mt-4 rounded-full py-3 text-white bg-gradient-to-br from-[#1D95F4] to-[#5AD7F5]">Let's Go →</button>
    </div>
  );
}

export default AddHabit;
