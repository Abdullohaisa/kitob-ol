import { useState } from "react";
import s from "./style.module.scss";
import { Autocomplete, TextField, Box, MenuItem, Slider } from "@mui/material";

const SelectFilter = ({ placeholder }) => {
  const [book, setBook] = useState("");

  return (
    <TextField
      className={`${s.input} ${s.inputWhite}`}
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
      className={s.inputWhite}
      id="country-select-demo"
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
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

const SliderFilter = ({ setPrice, price }) => {
  const handleChange = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <div className={s.slider}>
      <label>Narx</label>
      <Slider
        min={0}
        max={1000000}
        step={10000}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={[]}
        sx={{
          outlineColor: "black",
          borderRadius: "4px",
          "& .MuiSlider-thumb": {
            color: "white",
            border: "4px solid #1C2D3F", // Thumb rangi
          },
          "& .MuiSlider-rail": {
            backgroundColor: "silver", // Yorlig'i rangi
          },
          "& .MuiSlider-track": {
            backgroundColor: "#1C2D3F",
            height: "5px", // Orqa tomoni rangi
          },
          "& .MuiSlider-valueLabel": {
            color: "white", // Qiymat belgisi rangi
          },
        }}
      />
    </div>
  );
};

const SliderInput = ({ price, setPrice }) => {
  const [minPrice, setMinPrice] = useState(price[0]);
  const [maxPrice, setMaxPrice] = useState(price[1]);

  const handleMinPriceChange = (e) => {
    const newMinPrice = e.target.value;
    setMinPrice(e.target.value);
    setPrice([e.target.value, maxPrice]);
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = e.target.value;
    setMaxPrice(e.target.value);
    setPrice([minPrice, e.target.value]);
  };

  return (
    <div className={s.inputPriceBox}>
      <input 
         type="number"
         value={minPrice}
         onChange={handleMinPriceChange}
         className={`${s.inputPrice} ${s.left} ${s.inputWhite}`}
          />
      <input 
         type="number"
         value={maxPrice} 
         onChange={handleMaxPriceChange}
         className={`${s.inputPrice} ${s.right} ${s.inputWhite}`}
          />
    </div>
  );
};

export { SelectFilter, SelectInput, SliderFilter, SliderInput };

const countries = [
  { code: "", label: "Muhammad Yusuf", phone: "" },
  { code: "", label: "Abror Muxtor Aliy", phone: "" },
  { code: "", label: "Hasanxon Yahyo Abdulmajid", phone: "" },
];
