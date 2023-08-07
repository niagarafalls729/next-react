'use client'
import {useState,useEffect } from 'react'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import moment from 'moment';

const Calendar = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    // 현재 시간 가져오기
    const now = moment();

    // 다음 주의 시간 계산 (현재 시간에서 1주일 뒤)
    const nextWeek = moment(now).add(1, 'weeks');

    // 원하는 형식으로 포   맷팅 (YYYY-MM-DD HH:mm:ss)
    const formattedNow = now.format('YYYY-MM-DD HH:mm:ss');
    const formattedNextWeek = nextWeek.format('YYYY-MM-DD HH:mm:ss');

    const [nowCalendar, setNowCalendar] = useState([
        new Date(formattedNow),
        new Date(formattedNextWeek)
    ]);
    return(
        
        <div>  
            {!mounted ?'loading....' :<ul>
                                        <li>현재 시간: {moment(nowCalendar[0]).format('YYYY-MM-DD HH:mm:ss')}</li>
                                        <li>다음 주의 시간: {moment(nowCalendar[1]).format('YYYY-MM-DD HH:mm:ss')}</li>
                                      </ul>}
            {!mounted ?'loading....' :
            <DateRangePicker 
            value={nowCalendar}
            onChange={setNowCalendar} 
            defaultOpen={true}
            defaultCalendarValue={[nowCalendar[0], nowCalendar[1]]}
            />
            }
        </div>
    )
}
export default Calendar;