import React from "react";
import { Typography, Box } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: "#bbb" }} />
      <Typography variant="h4" color="textSecondary" mt={2}>
        Sorry, something went wrong.
      </Typography>
      <p className="text-gray-500">
        Page you are looking for is not available.
      </p>
    </Box>
  );
};

export default ErrorPage;
