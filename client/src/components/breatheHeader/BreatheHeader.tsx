import { Container, Title, Text, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './BreatheHeader.module.css';
import { useEffect, useState } from 'react';
import { getCookie } from '../../cookie';
import { getUser } from '../../api';

export function BreatheHeader() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  const goToBreathePage = () => {
    navigate('/breathe');
  };

  useEffect(() => {
    async function fetchData() {
      const username = getCookie("username");
      const data = await getUser(username);
      setUser(data);
    }

    fetchData();
  });

  if (user === null) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Container size="md" onClick={goToBreathePage}>
        <div className={classes.inner}>
          <div className={classes.content}>
          <Text className={classes.welcomeText}>
              Welcome back, {' '}
              <Text
                component="span"
                inherit
                c='blue'
              >
                {user.name}
              </Text>
            </Text>
            <div className={classes.rectangle}>
            <Title className={classes.title} pt={150} c={'White'} fz={60}>
              Take a {' '}
              <Text
                component="span"
                inherit
                c={'White'}
                className={classes.cursive} 
              >
                deep breath...
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
