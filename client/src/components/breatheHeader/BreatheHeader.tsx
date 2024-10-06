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
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
          <Text className={classes.welcomeText}>
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
            <Title className={classes.title} pt={150}>
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
              width={100}  
              height={100}
              className={classes.corgi}
              mt="lg"
            />
            <div className={classes.arrow}>
              ➔
            </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
