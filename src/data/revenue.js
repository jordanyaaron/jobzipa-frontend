import { v4 as uuidv4 } from "uuid";

const placements = ["job_list", "job_detail", "sidebar", "banner"];

function randomDate(start, end) {
  const date = new Date(+start + Math.random() * (end - start));
  return date.toISOString().split("T")[0];
}

export const revenueData = Array.from({ length: 20 }).map(() => ({
    id: uuidv4(),
    type: "advertising",
    placement: placements[Math.floor(Math.random() * placements.length)],
    amount: Math.floor(Math.random() * 3000) + 200,
    date: randomDate(new Date(2024, 0, 1), new Date()),
}));