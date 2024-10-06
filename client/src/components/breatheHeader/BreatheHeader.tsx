import { Container, Title, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './BreatheHeader.module.css';

export function BreatheHeader() {
  const navigate = useNavigate();

  const goToBreathPage = () => {
    navigate('/breath');
  };

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Time to{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                relax
              </Text>{' '}
              and breathe!
            </Title>

            <Text className={classes.description} mt={30}>
              Take a deep breath and start your breathing exercise. This will help you relax and refresh your mind.
            </Text>

            <Image
              src="client/public/corgiEarWag.gif"  
              alt="Corgi"
              width={200} 
              height={200}
              className={classes.corgi}
              mt={20}
            />

            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={goToBreathPage}
            >
              Start Breathing Exercise
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
