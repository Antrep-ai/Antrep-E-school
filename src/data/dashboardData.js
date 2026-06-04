export const dashboardData = {
  user: {
    name: "Alex Rivera",
    startupName: "OmniFlow AI",
    role: "Founder",
    stage: "Pre-seed",
    sector: "SaaS / DevTools"
  },
  learningProgress: {
    currentModule: {
      title: "Go-To-Market Strategy",
      slug: "gtm-strategy",
      duration: "3.5 hours",
      completedLessons: 2,
      totalLessons: 4,
      category: "GTM"
    },
    percentCompleted: 35,
    modulesCompleted: 3,
    totalModules: 10
  },
  weeklyUpdate: {
    status: "Pending",
    deadline: "Sunday, 11:59 PM",
    submissionHistory: [
      { week: "Week 3", status: "Submitted", date: "2026-05-28" },
      { week: "Week 2", status: "Submitted", date: "2026-05-21" },
      { week: "Week 1", status: "Submitted", date: "2026-05-14" }
    ]
  },
  pendingAssignments: [
    {
      id: "a1",
      title: "The Launch Blueprint",
      courseTitle: "Go-To-Market Strategy",
      dueDate: "June 10, 2026",
      status: "In Progress"
    },
    {
      id: "a2",
      title: "12-Month Runway Forecast",
      courseTitle: "Financial Modelling Basics",
      dueDate: "June 25, 2026",
      status: "Not Started"
    }
  ],
  mentorBooking: {
    availableSlots: 4,
    nextSession: "June 9, 2026 at 2:00 PM with Sarah Jenkins (SaaS Mentor)",
    recentFeedback: "Great progress on customer validation. Keep refining the pricing structure in your GTM strategy."
  },
  investorReadiness: {
    overallScore: 68,
    categories: [
      { name: "Pitch Deck", score: 85, status: "High" },
      { name: "Financial Model", score: 50, status: "Medium" },
      { name: "Market Validation", score: 90, status: "High" },
      { name: "Traction & Cohorts", score: 45, status: "Needs Work" }
    ]
  },
  recommendedResources: [
    {
      id: "r1",
      title: "How to Build a Growth Engine",
      type: "Video Lecture",
      duration: "45 mins",
      link: "#"
    },
    {
      id: "r2",
      title: "Early-stage Cap Table Simulator",
      type: "Tool",
      duration: "Interactive",
      link: "#"
    },
    {
      id: "r3",
      title: "Pitching Seed Investors Checklist",
      type: "PDF Guide",
      duration: "10 mins read",
      link: "#"
    }
  ]
};
