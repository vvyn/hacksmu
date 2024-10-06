import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Me.css'; // Import the CSS file
import { useState } from 'react'; // Import useState

function Me() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility

  const handleBack = () => {
    navigate('/home');
  };

  const handlePoke = (friendName: string) => {
    toast.success(`You poked ${friendName}!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle popup visibility
  };

  return (
    <div className="ProfileContainer">
      <ToastContainer position="top-center" /> {/* ToastContainer at the top */}
      <button className="BackButton" onClick={handleBack}>← </button>
      <div className="ProfileHeader">
        <img className="ProfileImage" src="/profile.png" alt="Profile" />
        <h2 className="UserName">Jessica</h2>
        <p className="UserHandle">@jessiiii | 3 Following | 3 Followers</p>
      </div>

      <div className="ActivitySection">
        <h4>Total Activity</h4>
        <p className="ActivityText">Total XP: 4,594,304</p>
        <p className="ActivityText">Challenges Completed: 43</p>
        <p className="ActivityText">Joined: October 6th, 2024</p>
      </div>

      <div className="FriendsSection">
        <h4>Friends</h4>
        <div className='PendF'>
          Pending Friends <span className="Arrow">→</span>
        </div>
        <div className="FriendItem">
          <span>Bud</span>
          <span>Today</span>
          <button className="PokeButton" onClick={() => handlePoke('Bud')}>Poke!</button>
        </div>
        <div className="FriendItem">
          <span>Buddy</span>
          <span>2+ days ago</span>
          <button className="PokeButton" onClick={() => handlePoke('Buddy')}>Poke!</button>
        </div>
        <button className="AddFriendsButton" onClick={togglePopup}>Add Friends!</button>
      </div>


      {isPopupOpen && (
        <div className="Popup">
          <div className="PopupContent">
            <h4>Add Friends</h4>
            <p>Enter the id's of friends you want to add:</p>
            <input type="text" placeholder="Friend's name" />
            <button className="CloseButton" onClick={togglePopup}>Close</button>
            <button className="SubmitButton">Add Friend</button>
          </div>
        </div>
      )}

      <h4>Total Activity</h4>

      <div className="AchievementsSection">
        <div className="Achievement">10 Days!</div>
        <div className="Achievement">30 Days!</div>
        <div className="Achievement2">15 Challenges!</div>
      </div>
    </div>
  );
}

export default Me;
