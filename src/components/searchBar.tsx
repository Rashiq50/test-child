import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { FormEvent, useState } from "react";
import CountrySelect from "./searchAutoCoplete";

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    console.log("submitted", searchValue);
    e.preventDefault();
    fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${searchValue}`, {
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
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
        component={"form"}
        onSubmit={onSubmit}
        sx={{ display: "flex", gap: 2, flexDirection: ["column", "row"] }}
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
      {/* <Box sx={{ mt: 2 }}>Result : {searchData ?? "N/A"}</Box> */}
    </Box>
  );
}

export default SearchBar;
