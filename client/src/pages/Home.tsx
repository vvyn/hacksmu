import { Container, Image, Text, Title } from "@mantine/core";
import { MantineProvider } from '@mantine/core';
import classes from './Home.module.css';
import { useEffect, useState } from "react";
import { getUser } from "../api";
import { getCookie } from "../cookie";

function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const username = getCookie("username");
      const data = await getUser(username);
      setUser(data);
    }

    fetchData();
  }, []);

  if (user === null) {
    return
  }

  return (
    <>
    <MantineProvider>
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
                {user.name}
              </Text>
            </Text>
            <div className={classes.rectangle}>
            <Title className={classes.title} pt={150}>
              Total Daily Check-ins: 
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
                className={classes.cursive} 
              >
                {user.daily.length}
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
    </MantineProvider>
    </>
  );
}

export default Home;
