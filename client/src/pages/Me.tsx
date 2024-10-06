import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Me.css'; // Import the CSS file
import { useEffect, useState } from 'react'; // Import useState
import { getCookie } from '../cookie';
import { getPokes, getUser, pokeFriend } from '../api';
import { messaging } from '../firebaseConfig';
import { onMessage } from 'firebase/messaging';

function Me() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility
  const [user, setUser] = useState<any>(null);

  const handleBack = () => {
    navigate('/home');
  };

  const handlePoke = (friendName: string) => {
    const username = getCookie("username");
    pokeFriend(username, friendName);
    toast.success(`You poked ${friendName}!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const username = getCookie("username");
      const data = await getUser(username);
      setUser(data);

      onMessage(messaging, (payload: any) => {
        console.log('Message received: ', payload);
        // ...
        toast.success(`You were poked by ${payload}!`, {
          position: "top-center",
          autoClose: 3000,
        });
      });
    }

    fetchData();

    // Loop every 500 ms to check for new messages
    const inter = setInterval(async () => {
      const username = getCookie("username");
      const data = await getPokes(username);
      const pokes = data.pokes;
      if (pokes.length > 0) {
        console.log("Pokes: ", pokes);
        toast.success(pokes[0], {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }, 500);

    return () => clearInterval(inter);
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle popup visibility
  };

  if (user === null) return;

  return (
    <div className="ProfileContainer">
      <ToastContainer position="top-center" /> {/* ToastContainer at the top */}
      <button className="BackButton" onClick={handleBack}>← </button>
      <div className="ProfileHeader">
        <img className="ProfileImage" src="/profile.png" alt="Profile" />
        <h2 className="UserName">{user.name}</h2>
        <p className="UserHandle">@{user.id} | 3 Following | 3 Followers</p>
      </div>

      <div className="ActivitySection">
        <h4>Total Activity</h4>
        <p className="ActivityText">Total XP: 4,594,304</p>
        <p className="ActivityText">Challenges Completed: 43</p>
        <p className="ActivityText">Joined: October 6th, 2024</p>
      </div>

      <div className="FriendsSection">
        <h4>Friends</h4>
        {/* <div className='PendF'> */}
          {/* Pending Friends <span className="Arrow">→</span> */}
        {/* </div> */}
        <div className="FriendItem">
          <span>Michael</span>
          <span>Today</span>
          <button className="PokeButton" onClick={() => handlePoke('mikey')}>Poke!</button>
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
