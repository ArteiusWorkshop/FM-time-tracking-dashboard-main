import Box from "@mui/material/Box";
import datos from "../../data/data.json";
import UserCardM from "../Ui/UserCardM";
import CardM from "../Ui/CardM";

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
        <CardM cType="work" data={work} />
      </Box>
      <Box>
        <CardM cType="play" data={play} />
      </Box>
      <Box>
        <CardM cType="study" data={study} />
      </Box>
      <Box>
        <CardM cType="exercise" data={excercise} />
      </Box>
      <Box>
        <CardM cType="selfcare" data={selfcare} />
      </Box>
      <Box>
        <CardM cType="social" data={social} />
      </Box>
    </>
  );
};

export default Desktop;
