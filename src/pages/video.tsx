import { Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Text>Your video is ready:</Text>
      <iframe
        width="560"
        height="315"
        src="http://www.youtube.com/embed/Y8ACyHYsb6Q?modestbranding=1"
        title="new"
      />
    </>
  );
};

export default Home;
