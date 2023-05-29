import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props: {
  label: string;
  values: any[];
  value: any;
  setValue: any;
  error?: boolean;
  disabled?: boolean;
}) {
  const { value, setValue, error = false, disabled = false } = props;

  return (
    <FormControl sx={{ width: ["100%"] }}>
      <Select
        disabled={disabled}
        contentEditable={false}
        error={error}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={setValue}
        placeholder={props.label}
        sx={{
          borderRadius: 2,
          // borderColor: "#b2b2b2",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#535663",
          },
        }}
      >
        <MenuItem value="none" disabled>
          {" "}
          {props.label}{" "}
        </MenuItem>
        {props.values.map((item) => (
          <MenuItem key={`${item.value}`} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
