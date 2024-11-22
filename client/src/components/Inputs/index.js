import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { greySearch } from "../../assets";
import "../../styles/components/input.css";

export const Input = ({ color, item, value, handleChange, onKeyDown }) => {
  return (
    <input
      className="InputText x14 alignCenter"
      style={{ backgroundColor: color }}
      placeholder={item.placeholder}
      name={item.name}
      type={item.type}
      onChange={handleChange}
      value={value}
      onKeyDown={onKeyDown}
      required
    />
  );
};

export const TextArea = ({ name, placeholder, onChange, value }) => {
  return (
    <textarea
      className="textArea"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      required
    />
  );
};

export const DetailDataInput = ({ item, index }) => (
  <div
    key={index}
    className="spaceBetween auditoriumContentCard auditoriumTextSize"
    style={{ paddingTop: index === 0 && 0 }}
  >
    <p>{item.text}</p>
    <p style={{ fontWeight: "700" }}>{item.number}</p>
  </div>
);

export const DetailDataInput1 = ({ item, index, length }) => (
  <div
    key={index}
    className="spaceBetween auditoriumContentCard auditoriumTextSize"
    style={{
      paddingTop: index === 0 && 0,
      paddingBottom: index === length - 1 ? 0 : item.text && "14px",
      borderBottom: index === length - 1 && "none",
    }}
  >
    <div>
      <div className="alignCenter">
        {item.img && (
          <img
            src={item.img}
            alt="questionImg"
            className="questionImg"
            style={{ marginRight: "10px" }}
          />
        )}
        <p>{item.title}</p>
      </div>
      {item.text && (
        <p className="graySceneText" style={{}}>
          &nbsp;
        </p>
      )}
    </div>
    <div>
      <p
        className="auditoriumTextSize"
        style={{ fontWeight: "700", textAlign: "right" }}
      >
        {item.scene}
      </p>
      <p className="graySceneText" style={{}}>
        {item.text}
      </p>
    </div>
  </div>
);

export const SearchInputBasic = ({ onChange, placeholder }) => {
  return (
    <div className="searchSquare alignCenter">
      <img src={greySearch} alt="greySearch" />
      <input
        type="text"
        className="searchInput"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export const SelectBox1 = ({ item, value, handleSelect, mobile }) => {
  return (
    <Box sx={{ mb: !mobile ? 3.5 : 0 }}>
      {!mobile && <label style={{ color: "#FFFFFF" }}>{item?.label}</label>}
      <FormControl fullWidth>
        <Select
          displayEmpty
          name={item.name}
          onChange={handleSelect}
          value={value}
          variant="standard"
          className="selectBox"
        >
          <MenuItem value="">Все {item.label}</MenuItem>
          {item?.option.map(
            (optionValue, optionIndex) =>
              optionValue && (
                <MenuItem
                  key={optionIndex}
                  value={optionValue}
                  style={{ color: "#686868" }}
                >
                  {optionValue}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export const SelectBox = ({ item, value, handleSelect }) => (
  <Box>
    <label style={{ color: "#FFFFFF" }}>{item?.label}</label>
    <FormControl fullWidth>
      <Select
        displayEmpty
        name={item.name}
        onChange={handleSelect}
        value={value}
        variant="standard"
        className="selectBox"
        sx={{ height: "50px" }}
      >
        <MenuItem value="" disabled hidden>
          Все
        </MenuItem>
        {item?.option.map(
          (optionValue, optionIndex) =>
            optionValue && (
              <MenuItem
                key={optionIndex}
                value={optionValue}
                style={{ color: "#686868" }}
              >
                {optionValue}
              </MenuItem>
            )
        )}
      </Select>
    </FormControl>
  </Box>
);

export const CheckBox1 = ({
  name,
  title,
  checked,
  value,
  textColor,
  onChange,
}) => (
  <FormControlLabel
    sx={{
      color: textColor ? textColor : `var(--secondaryWhiteColor)`,
      "& .MuiFormControlLabel-label": {
        fontSize: "14px",
        fontWeight: 400,
      },
    }}
    control={
      <Checkbox
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        sx={{
          padding: "3px 8px",
          "& .MuiSvgIcon-root": {
            fontSize: "28px",
            color: "#CFCFCF",
          },
        }}
        color="default"
      />
    }
    label={title}
  />
);

export const MobileCheckBox = ({
  name,
  title,
  checked,
  value,
  textColor,
  onChange,
}) => (
  <FormControlLabel
    control={
      <Checkbox
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        sx={{
          fontSize: "20px",
          color: "#686868",
        }}
        color="default"
      />
    }
    label={title}
  />
);
