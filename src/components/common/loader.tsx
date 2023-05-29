import { Box, CircularProgress } from "@mui/material";

function LoaderComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={45} />
    </Box>
  );
}

export default LoaderComponent;
