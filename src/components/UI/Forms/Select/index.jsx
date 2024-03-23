import { useState } from "react";
import s from "./style.module.scss";
import {
  Autocomplete,
  TextField,
  Box,
  MenuItem,
  Slider,
} from "@mui/material";
import { Label } from "@mui/icons-material";



const SelectFilter = ({ placeholder }) => {
  const [book, setBook] = useState("");

  return (
    <TextField
      className={s.input}
      id="outlined-basic" 
      label={placeholder}
      variant="outlined"
      select={true}
      value={book}
      onChange={(event) => setBook(event.target.value)}
      InputLabelProps={{ style: { color: "#929292" } }}
      sx={{
        outlineColor: "black",
        borderRadius: "4px",
        background: "#2c30331a",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderWidth: "0",
          },
        },
      }}
    >
      <MenuItem value="Azon">Azon</MenuItem>
      <MenuItem value="Hilol Nashr">Hilol Nashr</MenuItem>
      <MenuItem value="Qamar">Qamar</MenuItem>
    </TextField>
  );
};


const SelectInput = () => {
  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.label} {option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Kitob muallifi kiriting"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          InputLabelProps={{ style: { color: "#929292" } }}
          sx={{
            outlineColor: "black",
            borderRadius: "4px",
            background: "#2c30331a",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderWidth: "0",
              },
            },
          }}
        />
      )}
    />
  );
};

function valuetext(value) {
  return `${value}°C`;
}

const SliderFilter = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
     <Box>
        <label>Narxlari</label>
       <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        InputLabelProps={{ style: { color: '#929292' } }}
        sx={{
          outlineColor:"black",
          borderRadius:"4px",
          '& .MuiOutlinedInput-root': {
            color:"chocolate",
            '& fieldset': {
              borderWidth: '0', 
              color:"chocolate"
          },
        },
      }}
      />
     </Box>
  );
}

export { SelectFilter, SelectInput, SliderFilter };



const countries = [
  { code: "", label: "Muhammad Yusuf", phone: "" },
  { code: "", label: "Abror Muxtor Aliy", phone: "" },
  { code: "", label: "Hasanxon Yahyo Abdulmajid", phone: "" },
];
