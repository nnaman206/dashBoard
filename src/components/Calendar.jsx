import React, { useState } from 'react';
import {
  addDays,
  startOfWeek,
  format,
  subWeeks,
  addWeeks,
  isSameDay
} from 'date-fns';

const WeekCalendar = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const getWeekDates = () => {
    return Array.from({ length: 7 }, (_, i) =>
      addDays(currentWeekStart, i)
    );
  };

  const nextWeek = () => {
    setCurrentWeekStart(prev => addWeeks(prev, 1));
  };

  const prevWeek = () => {
    setCurrentWeekStart(prev => subWeeks(prev, 1));
  };

  const weekDates = getWeekDates();
  const today = new Date();

  return (
    <div className="w-70 mx-auto p-4 bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevWeek}
          className="text-2xl cursor-pointer text-gray-600 hover:text-blue-600"
        >
          ‹
        </button>
        <h2 className="text-xl font-semibold text-center">Today'Article</h2>
        <button
          onClick={nextWeek}
          className=" cursor-pointer text-2xl text-gray-600 hover:text-blue-600"
        >
          ›
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-700 mb-2">
        {weekDates.map((date, i) => (
          <div key={i}>{format(date, 'EEE')}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center text-blue-700 font-medium mb-4">
        {weekDates.map((date, i) => (
          <div
            key={i}
            className={`p-2 bg-blue-100 ${
              isSameDay(date, today) ? 'rounded-full border-2 border-blue-600' : 'rounded'
            }`}
          >
            {format(date, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
