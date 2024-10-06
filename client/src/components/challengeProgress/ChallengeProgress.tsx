import { RingProgress, Table, Text, Button, Center } from '@mantine/core';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import classes from './ChallengeProgress.module.css';

export function ChallengeProgress() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className={classes.container}>
      <button className="BackButton" onClick={handleBack}>← </button>

      <Text className={classes.title} size="lg" fw={800} c={'blue'}>
        Walk 5k Steps
      </Text>

      <RingProgress
        ta={Center}
        sections={[{ value: (3000 / 5000) * 100, color: '#2098F5' }]} // Updated for 5k
        label={
          <Text size="lg" ta="center" c={'#2098F5'} fw={700}>
            3/5k
          </Text>
        }
        size={150} // Increased size for the progress ring
        thickness={6}
        rootColor="#d3d3d3"
        className={classes.progressRing}
      />

      <Text className={classes.subTitle} size="lg" fw={600} mt={20} c={'black'}>
        Challenge Friends
      </Text>
      <Table className={classes.memberTable}>
        <tbody>
          <tr>
            <td>
              <div className={classes.memberButton}>⚫</div>
              <span className={classes.memberText}>me</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.memberButton}>⚫</div>
              <span className={classes.memberText}>you</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.inviteButton}>➕</div>
              <span className={classes.inviteText}>Invite another friend to join!</span>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className={classes.mentalHealthLinks}>
        <Text className={classes.subTitle} fz={25} fw={600} mt={60} c={'black'}>
          Resources
        </Text>
        <ul>
          <li>
            <a href="https://www.smu.edu/studentaffairs/drbobsmithhealthcenter/counseling-services" target="_blank" rel="noopener noreferrer">
              SMU Mental Health Services
            </a>
          </li>
          <li>
            <a href="https://www.smu.edu/studentaffairs/drbobsmithhealthcenter/counseling-services/smu-teletherapy" target="_blank" rel="noopener noreferrer">
              SMU Health Teletherapy
            </a>
          </li>
          <li>
            <a href="https://www.smu.edu/studentaffairs/drbobsmithhealthcenter/counseling-services/psychiatric-services" target="_blank" rel="noopener noreferrer">
              SMU Psychiatric Services
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
