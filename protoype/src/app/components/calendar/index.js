'use client'
 
import { useState, useEffect } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const Calendar = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])


  const [defaultDateValue, setDefaultDateValue] = useState([
    new Date('2017-02-01 01:00:00'),
    new Date('2023-02-02 14:00:00')
  ]);

  return (
    <div>
      { !isClient ? 'This is never prerendered' : <DateRangePicker
        value={defaultDateValue}
        onChange={setDefaultDateValue}
        defaultOpen={true}
        defaultCalendarValue={[
            defaultDateValue[0],defaultDateValue[1]
          
        ]}
      />}
    </div>
  );
};

export default Calendar;
