import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Me.css'; // Import the CSS file

function Me() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Navigate back to home page
  };

  const handlePoke = (friendName: string) => {
    toast.success(`You poked ${friendName}!`, {
      position: "top-center", // Move toast to the top center
      autoClose: 3000, // Notification will auto-close after 3 seconds
    });
  };

  return (
    <div className="ProfileContainer">
      <ToastContainer position="top-center" /> {/* ToastContainer at the top */}
      <button className="BackButton" onClick={handleBack}>← Back</button>
      <div className="ProfileHeader">
        <img className="ProfileImage" src="profile-pic.jpg" alt="Profile" />
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
        <button className="AddFriendsButton">Add Friends!</button>
      </div>

      <div className="AchievementsSection">
        <div className="Achievement">Badge 1</div>
        <div className="Achievement">Badge 2</div>
        <div className="Achievement">Badge 3</div>
      </div>
    </div>
  );
}

export default Me;
