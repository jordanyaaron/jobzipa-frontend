import { addDays, subDays, format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from "date-fns";

// Random integer helper
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate random visitors by date range
export const generateRandomVisitors = ({ startDate, endDate, interval = "day" }) => {
  const data = [];
  let current = new Date(startDate);

  while (current <= endDate) {
    let label = "";
    switch (interval) {
      case "day":
        label = format(current, "dd MMM");
        break;
      case "week":
        label = `${format(startOfWeek(current), "dd MMM")} - ${format(endOfWeek(current), "dd MMM")}`;
        current = endOfWeek(current); // jump to end of week
        break;
      case "month":
        label = format(current, "MMM yyyy");
        current = endOfMonth(current); // jump to end of month
        break;
      case "year":
        label = format(current, "yyyy");
        current = endOfYear(current); // jump to end of year
        break;
      default:
        label = format(current, "dd MMM");
    }

    data.push({
      date: label,
      visitors: randomInt(20, 500), // random visitor count
    });

    current = addDays(current, 1); // move to next day
  }

  return data;
};

// Random visitors by country
export const generateVisitorsByCountry = () => {
  const countries = ["US", "UK", "DE", "FR", "TZ", "KE", "IN"];
  return countries.map((c) => ({
    country: c,
    visitors: randomInt(50, 1000),
  }));
};