const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Compile the Q2 sales data and prepare a report",
        date: "2025-07-05",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Meeting",
        description: "Meeting with ABC Corp to discuss new features",
        date: "2025-06-29",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server Migration",
        description: "Migrate the staging server to new hardware",
        date: "2025-06-20",
        category: "IT",
      },
    ],
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "jane123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Mockups",
        description: "Create UI mockups for the new dashboard",
        date: "2025-07-03",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "User Testing",
        description: "Conduct usability testing for version 1.4",
        date: "2025-06-25",
        category: "QA",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Landing Page SEO",
        description: "Optimize landing page keywords",
        date: "2025-06-22",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client Feedback Analysis",
        description: "Summarize client feedback from surveys",
        date: "2025-07-02",
        category: "Research",
      },
    ],
  },
  {
    id: 3,
    email: "michael.brown@example.com",
    password: "mike123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review pull requests for bug fixes",
        date: "2025-07-04",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Performance Audit",
        description: "Analyze website load times",
        date: "2025-06-26",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Backup",
        description: "Backup user data to external storage",
        date: "2025-06-23",
        category: "IT",
      },
    ],
  },
  {
    id: 4,
    email: "sarah.jones@example.com",
    password: "sarah123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "New Hire Orientation",
        description: "Prepare onboarding materials for new employees",
        date: "2025-07-06",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Policy Update",
        description: "Update the leave policy documentation",
        date: "2025-06-24",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Budget Review",
        description: "Review Q3 marketing budget allocations",
        date: "2025-06-21",
        category: "Finance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Job Fair Coordination",
        description: "Coordinate logistics for upcoming job fair",
        date: "2025-07-08",
        category: "HR",
      },
    ],
  },
  {
    id: 5,
    email: "robert.wilson@example.com",
    password: "rob123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer Support Tickets",
        description: "Resolve all high-priority customer tickets",
        date: "2025-07-05",
        category: "Support",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Knowledge Base Update",
        description: "Add new FAQs to the knowledge base",
        date: "2025-06-27",
        category: "Support",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Live Chat Coverage",
        description: "Handle live chat support for 4 hours",
        date: "2025-06-22",
        category: "Support",
      },
    ],
  },
];

const admins = [
  {
    id: 101,
    email: "admin.one@example.com",
    password: "admin123",
  },
  {
    id: 102,
    email: "admin.two@example.com",
    password: "admin123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("Employees", JSON.stringify(employees));
  localStorage.setItem("Admins", JSON.stringify(admins));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("Employees"));
  const admin = JSON.parse(localStorage.getItem("Employees"));

  return {
    employees,
    admin,
  };
};
