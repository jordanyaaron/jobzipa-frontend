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

  export const  reports = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      status: "pending",
      messages: [
        {
          message: "This job looks like a scam, asking for upfront payment.",
          reporter: "john_doe",
          date: "2026-03-20",
        },
        {
          message: "I also noticed suspicious contact details.",
          reporter: "mary_jane",
          date: "2026-03-21",
        },
      ],
    },
    {
      id: 2,
      jobTitle: "Backend Engineer",
      status: "reviewed",
      messages: [
        {
          message: "Job description is misleading.",
          reporter: "james_tech",
          date: "2026-03-19",
        },
      ],
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      status: "resolved",
      messages: [
        {
          message: "Employer never responds after application.",
          reporter: "sophia_ui",
          date: "2026-03-18",
        },
        {
          message: "Same issue here, seems inactive.",
          reporter: "michael_design",
          date: "2026-03-19",
        },
      ],
    },
    {
      id: 4,
      jobTitle: "Data Analyst",
      status: "pending",
      messages: [
        {
          message: "Salary information is fake.",
          reporter: "analyst_ke",
          date: "2026-03-22",
        },
      ],
    },
  ];