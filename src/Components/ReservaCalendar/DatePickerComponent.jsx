import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePickerComponent.module.css';
import ptBR from 'date-fns/locale/pt-BR';
import { isBefore } from 'date-fns';
import { useMediaQuery } from 'react-responsive';

const DatePickerComponent = () => {
  // const [startDate, setStartDate] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 620 }); 

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  // Função para destacar as datas passadas
  const highlightPastDates = (date) => {
    return isBefore(date, new Date());
  };

  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <DatePicker
          selectsRange
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          onChange={(dates) => setDateRange({ startDate: dates[0], endDate: dates[1] })}
          inline
          locale={ptBR}
          calendarClassName={styles.datePicker}
          monthsShown={isMobile ? 1 : 2} 
          highlightDates={[{ before: new Date() }]} 
          renderDayContents={(day, date) => (
            <div className={highlightPastDates(date) ? styles.highlighted : null}>
              {day}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
