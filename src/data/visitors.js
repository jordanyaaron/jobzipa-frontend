import {
    startOfWeek,
    addDays,
    format,
    addWeeks,
    startOfMonth,
    endOfMonth,
    isAfter,
    startOfYear,
    addMonths,
  } from "date-fns";
  
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  export const generateVisitors = (interval, startDate) => {
    const data = [];
  
    // ✅ WEEK
    if (interval === "week") {
      const start = startOfWeek(startDate, { weekStartsOn: 1 });
  
      for (let i = 0; i < 7; i++) {
        const day = addDays(start, i);
  
        data.push({
          day: format(day, "EEE"),
          visitors: randomInt(50, 300),
        });
      }
  
      return data;
    }
  
    // ✅ MONTH (weeks)
    if (interval === "month") {
      let current = startOfWeek(startOfMonth(startDate), { weekStartsOn: 1 });
      const end = endOfMonth(startDate);
  
      let weekIndex = 1;
  
      while (!isAfter(current, end)) {
        data.push({
          day: `Week ${weekIndex}`,
          visitors: randomInt(200, 800),
        });
  
        current = addWeeks(current, 1);
        weekIndex++;
      }
  
      return data;
    }
  
    // ✅ YEAR (months)
    if (interval === "year") {
      let current = startOfYear(startDate);
  
      for (let i = 0; i < 12; i++) {
        data.push({
          day: format(current, "MMM"),
          visitors: randomInt(500, 2000),
        });
  
        current = addMonths(current, 1);
      }
  
      return data;
    }
  
    return data;
  };