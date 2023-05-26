import { Box, Grid, Link, TextField, Typography } from "@mui/material";
import * as React from "react";
import BasicSelect from "./common/basicSelect";
import { LoadingButton } from "@mui/lab";
import LoaderComponent from "./common/loader";

const FindContractor = () => {
  const [selectedState, setSelectedState] = React.useState("none");
  const [selectedCounty, setSelectedCounty] = React.useState("none");
  const [contractorName, setContractorName] = React.useState("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showData, setShowData] = React.useState([]);
  const states = [
    { name: "California", value: "CA" },
    { name: "Florida", value: "FL" },
  ];
  const counties = [
    { name: "Baker FL", value: "Baker FL" },
    { name: "Clay FL", value: "Clay FL" },
    { name: "Alpine CA", value: "Alpine CA" },
    { name: "Butte CA", value: "Butte CA" },
  ];

  const onReset = () => {
    setSelectedState("none");
    setSelectedCounty("none");
    setContractorName("");
    setShowData([]);
  };

  const searchData = () => {
    fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=0&_limit=20`, {
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
          setShowData(data);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          gap: 3,
          alignItems: ["start", "center"],
        }}
      >
        <BasicSelect
          label="Select State"
          values={states}
          value={selectedState}
          setValue={(e: any) => setSelectedState(e.target.value)}
        />
        <BasicSelect
          label="Select County"
          values={counties}
          value={selectedCounty}
          setValue={(e: any) => setSelectedCounty(e.target.value)}
        />
        <Box>Or</Box>
        <TextField
          sx={{ width: "100%", borderRadius: 2 }}
          placeholder="Search By Contractor Name"
          value={contractorName}
          InputProps={{ sx: { borderRadius: 2 } }}
          onChange={(e) => setContractorName(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          gap: 2,
          alignItems: ["start", "center"],
          mt: [4, 4],
        }}
      >
        <LoadingButton
          type="submit"
          sx={{ width: ["100%", "auto"] }}
          loading={loading}
          variant="contained"
          onClick={searchData}
        >
          Search
        </LoadingButton>
        <LoadingButton
          type="submit"
          sx={{ width: ["100%", "auto"] }}
          disabled={loading}
          variant="contained"
          onClick={onReset}
        >
          Reset
        </LoadingButton>
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          gap: 2,
          flexDirection: ["column", "row"],
          flexWrap: ["wrap"],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? <LoaderComponent /> : null}
        {showData.length === 0 && !loading && (
          <Typography fontSize={"small"}>
            {" "}
            Select your state or contractor to start searching{" "}
          </Typography>
        )}
        <Grid container spacing={2}>
          {showData.map((item: any) => (
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  border: "2px solid #b2b2b2",
                  p: 3,
                  minHeight: 80,
                  display: "flex",
                  alignItems: "start",
                  //   width: ["70vw", "30%"],
                  //   maxWidth: [300],
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 1,
                  height: 150,
                }}
              >
                <Link>{item.title}</Link>
                <Box> {item.body.slice(0, 20)} </Box>
                <Link>Load More</Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FindContractor;
