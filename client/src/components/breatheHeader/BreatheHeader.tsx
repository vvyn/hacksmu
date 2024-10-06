import { Container, Title, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './BreatheHeader.module.css';

export function BreatheHeader() {
  const navigate = useNavigate();

  // Function to navigate to the breath page
  const goToBreathPage = () => {
    navigate('/breath');
  };

  return (
    <div className={classes.root}>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
          <Text className={classes.welcomeText} pb={100}>
              Welcome back, {' '}
              <Text
                component="span"
                inherit
                c='blue'
              >
                Jessica
              </Text>
            </Text>
            <div className={classes.rectangle}>
            <Title className={classes.title}>
              Take a {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
                className={classes.cursive} 
              >
                deep breath
              </Text>
            </Title>


            <Image
              src="/corgiEarWag.gif"
              alt="Corgi"
              width={180}  
              height={180}
              className={classes.corgi}
              mt="lg"
            />

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
