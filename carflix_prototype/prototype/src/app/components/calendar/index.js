'use client'
import {useState } from 'react'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const Calendar = () => {
    const [value, setValue] = useState([
        new Date('2017-02-01 01:00:00'),
        new Date('2023-02-02 14:00:00')
      ]);

    return(
        <div>
            <DateRangePicker
            value={value} 
            onChange={setValue} 
            defaultOpen={true}
            defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-03-01 23:59:59')]}
            />

        </div>
    )
}
export default Calendar;