import { v4 as uuidv4 } from "uuid"
export const jobReportsData = [
    {
      id: "rpt-001",
      jobId: "job-101",
      jobTitle: "Frontend Developer",
      reporter: "John Doe",
      message: "Job description is inaccurate",
      date: "2026-03-27T12:30:00Z",
      status: "pending", // pending | in_progress | resolved | rejected
    },
    {
      id: "rpt-002",
      jobId: "job-102",
      jobTitle: "Backend Developer",
      reporter: "Jane Smith",
      message: "Salary field missing",
      date: "2026-03-26T09:45:00Z",
      status: "resolved",
    },
  ];

  export const reports = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      companyName: "X tech",
      poster: "John_Doe",
      logo_url: "",
      status: "pending",
      messages: [
        {
          id: uuidv4() ,
          message: "This job looks like a scam, asking for upfront payment.",
          reporter: "john_doe",
          date: "2026-03-20T10:30:00Z",
        },
        {
          id: uuidv4() ,
          message: "I also noticed suspicious contact details.",
          reporter: "mary_jane",
          date: "2026-03-21T14:15:00Z",
        },
      ],
    },
    {
      id: 2,
      jobTitle: "Backend Engineer",
      companyName: "X tech",
      logo_url: "",
      poster: "John_Doe",
      status: "reviewed",
      messages: [
        {
          id: uuidv4() ,
          message: "Job description is misleading.",
          reporter: "james_tech",
          date: "2026-03-19T09:00:00Z",
        },
      ],
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      companyName: "X tech",
      poster: "John_Doe",
      logo_url: "",
      status: "resolved",
      messages: [
        {
          id: uuidv4() ,
          message: "Employer never responds after application.",
          reporter: "sophia_ui",
          date: "2026-03-18T11:45:00Z",
        },
        {
          id: uuidv4() ,
          message: "Same issue here, seems inactive.",
          reporter: "michael_design",
          date: "2026-03-19T16:20:00Z",
        },
      ],
    },
    {
      id: 4,
      jobTitle: "Data Analyst",
      companyName: "X tech",
      poster: "John_Doe",
      logo_url: "",
      status: "pending",
      messages: [
        {
          id: uuidv4() ,
          message: "Salary information is fake.",
          reporter: "analyst_ke",
          date: "2026-03-22T08:10:00Z",
        },
      ],
    },
  ];