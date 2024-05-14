import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Moment } from "moment";

type YearSelectProps = {
  onSelect: (date: Moment | null) => void;
};

export function YearSelect({ onSelect }: YearSelectProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker label={'"year"'} views={["year"]} onChange={onSelect} />
    </LocalizationProvider>
  );
}
