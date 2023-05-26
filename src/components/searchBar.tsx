import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import { FormEvent, useState } from "react";
import CountrySelect from "./searchAutoCoplete";
import { LocationOnOutlined } from "@mui/icons-material";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyAsuW5ZfYvaAbzy_G9SfJFTf1wMAN5Mqpg");

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("Dhaka");
  const [loading, setLoading] = useState<boolean>(false);
  const [locationLoading, setLocationLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const [found, setFound] = useState<boolean>(true);

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
          setFound(false);
          setSearched(true);
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  function getLocation() {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos.coords.latitude, pos.coords.longitude);
        Geocode.enableDebug();
        Geocode.fromLatLng(
          pos.coords.latitude.toString(),
          pos.coords.longitude.toString()
        ).then(
          (response) => {
            const address = response.results[0].formatted_address;
            console.log(address);
            setSearchValue(address);
            setLocationLoading(false);
          },
          (error) => {
            setLocationLoading(false);
            console.error(error);
          }
        );
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <Box>
      {found && (
        <Box>
          PACE Home Improvement Financing
          <Box>
            A simple way to pay for energy and safety home improvements.
          </Box>
        </Box>
      )}
      {!found && (
        <Box>
          <Box>We're sorry. Your address is outside of our coverage area</Box>
          <Box>
            Based on your home address {searchValue}, PACE is not yet available
            as a financing option.
          </Box>
        </Box>
      )}
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
            Check Another Address{" "}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              window.open(
                "https://renewfinancial.formstack.com/forms/pacepetition"
              );
            }}
          >
            {" "}
            Request Jurisdiction Approval{" "}
          </Button>
        </Box>
      )}
      <Box>
        <Button
          onClick={getLocation}
          sx={{}}
          startIcon={<LocationOnOutlined />}
          disabled={locationLoading}
        >
          {" "}
          Use current location{" "}
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
