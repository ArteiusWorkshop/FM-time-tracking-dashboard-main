import {
  Box,
  Typography,
  Avatar,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import styles from "./styles/UserCardM.module.css";
import { UIContext } from "../../context/Ui";
const UserCardM = () => {
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
          <Box padding={4}>
            <Avatar
              alt="Jeremy Robson"
              src="/img/image-jeremy.png"
              className={styles.avatar}
            />
          </Box>
          <Box paddingLeft={4}>
            <Typography fontWeight={500} color="hsl(235, 25%, 61%)">
              Report for
            </Typography>
            <Typography
              variant="h1"
              fontSize="50px"
              fontWeight={300}
              color="hsl(236, 100%, 87%)"
            >
              Jeremy Robson
            </Typography>
          </Box>
        </Box>
        <Box className={styles.footerBox}>
          <ToggleButtonGroup
            color="primary"
            orientation="vertical"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Mode"
            sx={{
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "start",
            }}
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
    </>
  );
};

export default UserCardM;
