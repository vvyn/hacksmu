import { RingProgress, Table, Text, Button, Center } from '@mantine/core';
import classes from './ChallengeProgress.module.css';

export function ChallengeProgress() {
  return (
    <div className={classes.container}>

      <Text className={classes.title} size="xl" fw={800} c={'blue'}>
        Walk 10k Steps
      </Text>


      <RingProgress
      ta={Center}
        sections={[{ value: (3000 / 10000) * 100, color: '#2098F5' }]}  
        label={
          <Text size="lg" ta="center" c={'cyan'} fw={700}>
            3/10k
          </Text>
        }
        size={120}
        thickness={6}
        rootColor="#d3d3d3"
        className={classes.progressRing}
      />

      <Text className={classes.subTitle} size="lg" fw={600} mt={50} c={'black'}>
        Challenge Members
      </Text>
      <Table highlightOnHover>
        <tbody>
          <tr>
          <Button variant="outline" size="xs" leftSection={<span>⚫</span>} className={classes.memberButton}>
                Me
              </Button>
          </tr>
          <tr>
          <Button variant="outline" size="xs" leftSection={<span>⚫</span>} className={classes.memberButton}>
                You
              </Button>
          </tr>
          <tr>
            <td>
              <Button variant="outline" size="xs" leftSection={<span>➕</span>} className={classes.memberButton}>
                Invite another Friend to Join!
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className={classes.mentalHealthLinks}>
        <Text className={classes.subTitle} fz={48} fw={600} mt={60} c={'black'}>
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
