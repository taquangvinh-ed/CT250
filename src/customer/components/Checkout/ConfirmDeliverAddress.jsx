import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Autocomplete, Box, Button, TextField } from "@mui/material";

const ConfirmDeliverAddress = () => {
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [village, setVillage] = useState(null);
  const options = [
    { label: "Hà Nội", id: 1 },
    { label: "Thành phố Hồ Chí Minh", id: 2 },
    { label: "Cần Thơ", id: 3 },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const address = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      streetAddress: formData.get("address"),
      city: city ? city.label : null,
      state: state ? state.label : null,
      village: village ? village.label : null,
      phoneNumber: formData.get("phoneNumber"),
    };
    console.log("address", address);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 border border-black">
        <div className=" border border-black col-span-1 grid grid-cols-1 border rounded-e-sm shadow-md h-[30rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button sx={{ mt: 2 }} size="large" variant="contained">
              Deliver here
            </Button>
          </div>
        </div>
        <div className=" col-span-2 border border-black grid grid-cols-2">
          <div className="col-span-3">
            <Box className=" w-full border rounded-s-md shadow-md p-5">
              <form onSubmit={handleSubmit} className="border border-green-700">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  <div className="col-span-1 grid grid-cols-1 border border-black">
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Họ"
                      fullWidth
                      autoComplete="family-name"
                    ></TextField>
                  </div>
                  <div className="col-span-1 grid grid-cols-1 border border-black">
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="Tên"
                      fullWidth
                      autoComplete="given-name"
                    ></TextField>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 border border-black">
                    <TextField
                      required
                      id="address"
                      name="address"
                      label="Địa chỉ"
                      fullWidth
                      autoComplete="address"
                      multiline
                      rows={4}
                    ></TextField>
                  </div>
                  <div className="col-span-1 grid grid-cols-1 border border-black">
                    <Autocomplete
                      id="city"
                      options={options}
                      getOptionLabel={(option) => option.label} // Lấy nhãn từ đối tượng
                      onChange={(event, newValue) => {
                        setCity(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Tỉnh/Thành phố"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="col-span-1 grid grid-cols-1 border border-black">
                    <Autocomplete
                      id="state"
                      options={options}
                      getOptionLabel={(option) => option.label} // Lấy nhãn từ đối tượng
                      onChange={(event, newValue) => {
                        setState(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Quận/Huyện"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="col-span-1 grid grid-cols-1 border border-black">
                    <Autocomplete
                      id="village"
                      options={options}
                      getOptionLabel={(option) => option.label} // Lấy nhãn từ đối tượng
                      onChange={(event, newValue) => {
                        setVillage(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Phường/Xã"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="col-span-1 grid grid-cols-1 border border-black">
                    <TextField
                      type="number"
                      required
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Số điện thoại"
                      fullWidth
                      autoComplete="phone-number"
                    ></TextField>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 border border-black">
                    <div className="w-full h-full py-4 flex justify-center items-center border border-black">
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          padding: "0.8rem",
                          bgcolor: "RGB(42 193 36)",
                          fontSize: "1rem",
                        }}
                      >
                        Hoàn thành
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeliverAddress;
