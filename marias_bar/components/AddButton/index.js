import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AddButton.module.css";

export default function FloatingActionButtons({ action }) {
  return (
    <Box
      className={styles.container}
      sx={{ "& > :not(style)": { m: 1 } }}
      onClick={() => action()}
    >
      <Fab aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
