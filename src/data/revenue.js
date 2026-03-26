import { v4 as uuidv4 } from "uuid";

export const revenueData = [
    { id: "1", placement: "job_list", amount: 500, date: "2026-03-01" },
    { id: "2", placement: "sidebar", amount: 300, date: "2026-03-01" },
    { id: "3", placement: "banner", amount: 700, date: "2026-03-01" },
    { id: "4", placement: "job_detail", amount: 450, date: "2026-03-01" },
  
    { id: "5", placement: "job_list", amount: 800, date: "2026-03-02" },
    { id: "6", placement: "sidebar", amount: 250, date: "2026-03-02" },
    { id: "7", placement: "banner", amount: 900, date: "2026-03-02" },
    { id: "8", placement: "job_detail", amount: 400, date: "2026-03-02" },
  
    { id: "9", placement: "job_list", amount: 650, date: "2026-03-03" },
    { id: "10", placement: "sidebar", amount: 350, date: "2026-03-03" },
    { id: "11", placement: "banner", amount: 720, date: "2026-03-03" },
    { id: "12", placement: "job_detail", amount: 500, date: "2026-03-03" },
  
    { id: "13", placement: "job_list", amount: 880, date: "2026-03-04" },
    { id: "14", placement: "sidebar", amount: 270, date: "2026-03-04" },
    { id: "15", placement: "banner", amount: 640, date: "2026-03-04" },
    { id: "16", placement: "job_detail", amount: 420, date: "2026-03-04" },
  
    { id: "17", placement: "job_list", amount: 910, date: "2026-03-05" },
    { id: "18", placement: "sidebar", amount: 300, date: "2026-03-05" },
    { id: "19", placement: "banner", amount: 750, date: "2026-03-05" },
    { id: "20", placement: "job_detail", amount: 460, date: "2026-03-05" },
  
    { id: "21", placement: "job_list", amount: 820, date: "2026-03-06" },
    { id: "22", placement: "sidebar", amount: 310, date: "2026-03-06" },
    { id: "23", placement: "banner", amount: 680, date: "2026-03-06" },
    { id: "24", placement: "job_detail", amount: 390, date: "2026-03-06" },
  
    { id: "25", placement: "job_list", amount: 770, date: "2026-03-07" },
    { id: "26", placement: "sidebar", amount: 280, date: "2026-03-07" },
    { id: "27", placement: "banner", amount: 810, date: "2026-03-07" },
    { id: "28", placement: "job_detail", amount: 430, date: "2026-03-07" },
  
    { id: "29", placement: "job_list", amount: 900, date: "2026-03-08" },
    { id: "30", placement: "sidebar", amount: 320, date: "2026-03-08" },
    { id: "31", placement: "banner", amount: 760, date: "2026-03-08" },
    { id: "32", placement: "job_detail", amount: 410, date: "2026-03-08" },
  
    { id: "33", placement: "job_list", amount: 850, date: "2026-03-09" },
    { id: "34", placement: "sidebar", amount: 290, date: "2026-03-09" },
    { id: "35", placement: "banner", amount: 700, date: "2026-03-09" },
    { id: "36", placement: "job_detail", amount: 480, date: "2026-03-09" },
  
    { id: "37", placement: "job_list", amount: 920, date: "2026-03-10" },
    { id: "38", placement: "sidebar", amount: 330, date: "2026-03-10" },
    { id: "39", placement: "banner", amount: 780, date: "2026-03-10" },
    { id: "40", placement: "job_detail", amount: 450, date: "2026-03-10" },
  
    { id: "41", placement: "job_list", amount: 610, date: "2026-03-11" },
    { id: "42", placement: "sidebar", amount: 260, date: "2026-03-11" },
    { id: "43", placement: "banner", amount: 840, date: "2026-03-11" },
    { id: "44", placement: "job_detail", amount: 390, date: "2026-03-11" },
  
    { id: "45", placement: "job_list", amount: 730, date: "2026-03-12" },
    { id: "46", placement: "sidebar", amount: 310, date: "2026-03-12" },
    { id: "47", placement: "banner", amount: 690, date: "2026-03-12" },
    { id: "48", placement: "job_detail", amount: 420, date: "2026-03-12" },
  
    { id: "49", placement: "job_list", amount: 880, date: "2026-03-13" },
    { id: "50", placement: "sidebar", amount: 300, date: "2026-03-13" },
    { id: "51", placement: "banner", amount: 760, date: "2026-03-13" },
    { id: "52", placement: "job_detail", amount: 470, date: "2026-03-13" },
  
    { id: "53", placement: "job_list", amount: 920, date: "2026-03-14" },
    { id: "54", placement: "sidebar", amount: 340, date: "2026-03-14" },
    { id: "55", placement: "banner", amount: 810, date: "2026-03-14" },
    { id: "56", placement: "job_detail", amount: 450, date: "2026-03-14" },
  
    { id: "57", placement: "job_list", amount: 760, date: "2026-03-15" },
    { id: "58", placement: "sidebar", amount: 280, date: "2026-03-15" },
    { id: "59", placement: "banner", amount: 730, date: "2026-03-15" },
    { id: "60", placement: "job_detail", amount: 410, date: "2026-03-15" },
  
    { id: "61", placement: "job_list", amount: 870, date: "2026-03-16" },
    { id: "62", placement: "sidebar", amount: 320, date: "2026-03-16" },
    { id: "63", placement: "banner", amount: 790, date: "2026-03-16" },
    { id: "64", placement: "job_detail", amount: 460, date: "2026-03-16" },
  
    { id: "65", placement: "job_list", amount: 910, date: "2026-03-17" },
    { id: "66", placement: "sidebar", amount: 350, date: "2026-03-17" },
    { id: "67", placement: "banner", amount: 820, date: "2026-03-17" },
    { id: "68", placement: "job_detail", amount: 480, date: "2026-03-17" },
  
    { id: "69", placement: "job_list", amount: 840, date: "2026-03-18" },
    { id: "70", placement: "sidebar", amount: 300, date: "2026-03-18" },
    { id: "71", placement: "banner", amount: 770, date: "2026-03-18" },
    { id: "72", placement: "job_detail", amount: 430, date: "2026-03-18" },
  
    { id: "73", placement: "job_list", amount: 880, date: "2026-03-19" },
    { id: "74", placement: "sidebar", amount: 310, date: "2026-03-19" },
    { id: "75", placement: "banner", amount: 800, date: "2026-03-19" },
    { id: "76", placement: "job_detail", amount: 470, date: "2026-03-19" },
  
    { id: "77", placement: "job_list", amount: 930, date: "2026-03-20" },
    { id: "78", placement: "sidebar", amount: 340, date: "2026-03-20" },
    { id: "79", placement: "banner", amount: 820, date: "2026-03-20" },
    { id: "80", placement: "job_detail", amount: 490, date: "2026-03-20" },
  
    { id: "81", placement: "job_list", amount: 700, date: "2026-03-21" },
    { id: "82", placement: "sidebar", amount: 260, date: "2026-03-21" },
    { id: "83", placement: "banner", amount: 760, date: "2026-03-21" },
    { id: "84", placement: "job_detail", amount: 420, date: "2026-03-21" },
  
    { id: "85", placement: "job_list", amount: 860, date: "2026-03-22" },
    { id: "86", placement: "sidebar", amount: 300, date: "2026-03-22" },
    { id: "87", placement: "banner", amount: 780, date: "2026-03-22" },
    { id: "88", placement: "job_detail", amount: 440, date: "2026-03-22" },
  
    { id: "89", placement: "job_list", amount: 910, date: "2026-03-23" },
    { id: "90", placement: "sidebar", amount: 330, date: "2026-03-23" },
    { id: "91", placement: "banner", amount: 810, date: "2026-03-23" },
    { id: "92", placement: "job_detail", amount: 470, date: "2026-03-23" },
  
    { id: "93", placement: "job_list", amount: 880, date: "2026-03-24" },
    { id: "94", placement: "sidebar", amount: 310, date: "2026-03-24" },
    { id: "95", placement: "banner", amount: 790, date: "2026-03-24" },
    { id: "96", placement: "job_detail", amount: 460, date: "2026-03-24" },
  
    { id: "97", placement: "job_list", amount: 920, date: "2026-03-25" },
    { id: "98", placement: "sidebar", amount: 340, date: "2026-03-25" },
    { id: "99", placement: "banner", amount: 820, date: "2026-03-25" },
    { id: "100", placement: "job_detail", amount: 500, date: "2026-03-25" },
  ];