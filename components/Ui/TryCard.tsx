import { Box, Typography, IconButton } from "@mui/material";
import { FC } from "react";
import { useContext } from "react";
import styles from "./styles/TryCard.module.css";
import CardProps from "../interfaces/CardProps";
import { UIContext } from "../../context/Ui";
import Image from "next/image";

const TryCard: FC<CardProps> = ({ cType, data }) => {
  const { display } = useContext(UIContext);

  const current =
    display === "daily"
      ? data?.timeframes.daily.current
      : display == "weekly"
      ? data?.timeframes.weekly.current
      : display == "monthly"
      ? data?.timeframes.monthly.current
      : data?.timeframes.daily.current;
  const previous =
    display === "daily"
      ? data?.timeframes.daily.previous
      : display == "weekly"
      ? data?.timeframes.weekly.previous
      : display == "monthly"
      ? data?.timeframes.monthly.previous
      : data?.timeframes.daily.previous;

  return (
    <>
      <Box className={cType}>
        <Box className={styles.footerBox}></Box>
        <a href="#">
          <Box className={styles.innerBox}>
            <Box className={styles.leftBox}>
              <Box>
                <Typography className={styles.ctype}>{cType}</Typography>
              </Box>
              <Box pt={3}>
                <Typography className={styles.current}>{current}hrs</Typography>
              </Box>
              <Box paddingTop={1}>
                <Typography fontSize="18px">
                  Last Week - {previous}hrs
                </Typography>
              </Box>
            </Box>
            <Box className={styles.rightBox}>
              <Box>
                <IconButton color="secondary" aria-label="More">
                  <Image
                    src={"/img/icon-ellipsis.svg"}
                    width="21"
                    height="5"
                    alt="More"
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </a>
      </Box>
    </>
  );
};

export default TryCard;
