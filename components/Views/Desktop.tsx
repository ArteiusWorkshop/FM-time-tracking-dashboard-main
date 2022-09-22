import Box from "@mui/material/Box";
import datos from "../../data/data.json";
import TryCard from "../Ui/TryCard";
import UserCardM from "../Ui/UserCardM";

const Desktop = () => {
  const work = datos.find((data) => data.title == "Work");
  const play = datos.find((data) => data.title == "Play");
  const study = datos.find((data) => data.title == "Study");
  const excercise = datos.find((data) => data.title == "Exercise");
  const social = datos.find((data) => data.title == "Social");
  const selfcare = datos.find((data) => data.title == "Self Care");
  return (
    <>
      <Box className="main">
        <UserCardM />
      </Box>
      <Box>
        <TryCard cType="work" data={work} />
      </Box>
      <Box>
        <TryCard cType="play" data={play} />
      </Box>
      <Box>
        <TryCard cType="study" data={study} />
      </Box>
      <Box>
        <TryCard cType="exercise" data={excercise} />
      </Box>
      <Box>
        <TryCard cType="selfcare" data={selfcare} />
      </Box>
      <Box>
        <TryCard cType="social" data={social} />
      </Box>
    </>
  );
};

export default Desktop;
