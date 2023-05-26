import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import { FormEvent, useState } from "react";
import CountrySelect from "./searchAutoCoplete";

function AddressNeeded() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(true);

  const onSubmit = (e: FormEvent) => {
    console.log("submitted", searchValue);
    e.preventDefault();
    fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/2`, {
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
          setLoading(false);
          window.open(
            window.location.host +
              "/were-sorry-your-address-outside-our-coverage-area"
          );
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  return (
    <Box>
      <Box>Introduce us to your home, and we’ll see if it’s eligible:</Box>
      {searched && <Box>See if we're available in your community</Box>}
      {!searched && (
        <Box
          component={"form"}
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: ["column", "row"],
            mt: 2,
          }}
        >
          <CountrySelect value={searchValue} setValue={setSearchValue} />
          <LoadingButton
            type="submit"
            sx={{ width: ["100%", "auto"] }}
            loading={loading}
            variant="contained"
          >
            Look Up
          </LoadingButton>
        </Box>
      )}

      {searched && (
        <Box
          sx={{
            my: 2,
            display: "flex",
            gap: 1,
            flexDirection: ["column", "row"],
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setSearched(false);
            }}
          >
            {" "}
            Check Address{" "}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default AddressNeeded;
