import React, { useState } from "react";
import { DateRangePicker } from "rsuite";

const { allowedMaxDays } = DateRangePicker;
const Calendar = ({...props}) => {
    // const [value, setValue] = useState();

    // console.log(value);

  return (
    <div className="my-2">
      <label className="text-12">Tentukan lama sewa mobil (max. 7 hari)</label>
      <DateRangePicker
      {...props}
        placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
        showOneCalendar
        disabledDate={allowedMaxDays(7)}
        block
        // value={value}
        // onChange={setValue}
        format = "dd-MMM-yyyy"
      
      />
    </div>
  );
};

export default Calendar;
