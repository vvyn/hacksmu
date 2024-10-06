import { ChallengeProgress } from "../components/challengeProgress/ChallengeProgress";
import { MantineProvider } from "@mantine/core";

function ChallengeProgressPage() {

  return (
    <>
      <MantineProvider>
        <ChallengeProgress />
      </MantineProvider>
    </>
  )
}

export default ChallengeProgressPage;