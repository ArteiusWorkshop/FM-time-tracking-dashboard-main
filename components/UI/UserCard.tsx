import {
  Box,
  Typography,
  Avatar,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useContext, useState } from "react";
import Card from "./Card";
import styles from "./styles/UserCard.module.css";
import datos from "../../data/data.json";
import { UIContext } from "../../context/Ui";

const UserCard = () => {
  const work = datos.find((data) => data.title == "Work");
  const play = datos.find((data) => data.title == "Play");
  const study = datos.find((data) => data.title == "Study");
  const excercise = datos.find((data) => data.title == "Exercise");
  const social = datos.find((data) => data.title == "Social");
  const selfcare = datos.find((data) => data.title == "Self Care");

  const { dailyDisplay, weeklyDisplay, monthlyDisplay } = useContext(UIContext);

  const [alignment, setAlignment] = useState("daily");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const MuiToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "transparent",
    },
  });
  return (
    <>
      <Box className={styles.mainBox}>
        <Box className={styles.innerBox}>
          <Box width="90px" paddingLeft="30px">
            <Avatar
              alt="Jeremy Robson"
              src="/img/image-jeremy.png"
              className={styles.avatar}
            />
          </Box>
          <Box>
            <Typography fontWeight={500} color="hsl(235, 25%, 61%)">
              Report for
            </Typography>
            <Typography
              variant="h2"
              fontSize="26px"
              fontWeight={400}
              color="hsl(236, 100%, 87%)"
            >
              Jeremy Robson
            </Typography>
          </Box>
        </Box>
        <Box className={styles.footerBox}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Mode"
            sx={{ width: "100%", justifyContent: "space-evenly" }}
          >
            <MuiToggleButton onClick={dailyDisplay} value="daily">
              Daily
            </MuiToggleButton>
            <MuiToggleButton onClick={weeklyDisplay} value="weekly">
              Weekly
            </MuiToggleButton>
            <MuiToggleButton onClick={monthlyDisplay} value="monthly">
              Monthly
            </MuiToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Card cType="work" data={work} />
      <Card cType="play" data={play} />
      <Card cType="study" data={study} />
      <Card cType="exercise" data={excercise} />
      <Card cType="social" data={social} />
      <Card cType="selfcare" data={selfcare} />
    </>
  );
};

export default UserCard;
