import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { fetchWildfireData } from "../services/dataService";
import dayjs from "dayjs";

const SearchComponent = ({
  filter,
  setFilter,
  setWildfireData,
  setIsLoading,
  setClicked
}) => {
  const [dateValue, setDateValue] = useState(null);

  const onDateChange = (value) => {
    setFilter({
      month: dayjs(value).format("MMM").toUpperCase(),
      year: dayjs(value).format("YYYY"),
    });
    setDateValue(value);
  };

  const searchData = async () => {
    setIsLoading(true);
    const data = await fetchWildfireData(filter.month, filter.year);
    setWildfireData(data);
    setIsLoading(false);
    setClicked(true)
  };

  return (
    <Grid container spacing={3} marginBlockEnd={4}>
      <Grid justifyContent="flex-start" item xs={12}>
        <h1>Wildfire Data Search</h1>
        Select the month and year you want to search and then hit the button
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={"Search month and year"}
            views={["month", "year"]}
            value={dateValue}
            onChange={(newValue) => onDateChange(newValue)}
            required
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() => searchData()}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchComponent;
