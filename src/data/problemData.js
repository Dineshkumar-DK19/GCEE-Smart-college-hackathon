// src/data/problemData.js

export const problemData = [
  {
    id: "PS01",
    dept: "EEE",
    title: "Smart Campus Energy Management",
    description: "Manual tracking of electricity consumption in classrooms and labs is inefficient and prone to errors. We need a system to monitor usage patterns and identify wastage.",
    objective: "Develop a system to monitor and optimize electricity usage across classrooms and labs using IoT sensors and real-time analytics.",
    features: "Real-time Dashboard, Anomaly Detection, Auto-alert system for high usage, Historical Data Reports.",
    background: "Currently, consumption is measured monthly via meter reading. No granular data exists to find which labs are wasting power.",
    targetUsers: ["Admin Office", "Estate Management"],
    appType: "Web",
    sensitivity: "Medium",
    priority: "High",
    deliverables: "Web Dashboard & IoT Hardware Prototype",
    constraints: "Must work with existing campus WiFi infrastructure.",
    submittedBy: {
      name: "Prof. Rajesh Kumar",
      designation: "HOD - EEE",
      email: "rajesh@college.edu",
      contact: "9876543210"
    }
  },
  {
    id: "PS02",
    dept: "CSE",
    title: "AI-Driven Attendance System",
    description: "Taking attendance manually eats up 10-15 minutes of lecture time. Proxies are common.",
    objective: "Create a facial recognition-based attendance system that automatically marks students present when they enter the class.",
    features: "Face Detection, Spoofing Prevention, Integration with College DB, Mobile App for Faculty.",
    background: "Roll calls are done manually on paper registers.",
    targetUsers: ["Faculty", "Students"],
    appType: "Mobile",
    sensitivity: "High",
    priority: "Medium",
    deliverables: "Mobile App & Admin Panel",
    constraints: "Must adhere to privacy laws regarding biometric data.",
    submittedBy: {
      name: "Dr. Anitha S",
      designation: "Associate Professor",
      email: "anitha@college.edu",
      contact: "9988776655"
    }
  },
  {
    id: "PS03",
    dept: "IT",
    title: "Blockchain for Certificates",
    description: "Certificate forgery is a growing concern. Verification by employers takes too long.",
    objective: "A decentralized platform to issue and verify student certificates (degrees, bonafides) on the blockchain.",
    features: "Immutable Records, QR Code Verification, Instant Validation.",
    background: "Paper certificates are issued; verification requires email correspondence.",
    targetUsers: ["Exam Cell", "Students", "Employers"],
    appType: "Web",
    sensitivity: "High",
    priority: "High",
    deliverables: "DApp & Smart Contract Code",
    constraints: "Low gas fees preferred.",
    submittedBy: {
      name: "Prof. David",
      designation: "Assistant Professor",
      email: "david@college.edu",
      contact: "9123456789"
    }
  },
  {
    id: "PS04",
    dept: "Hostel Office",
    title: "Hostel Grievance Portal",
    description: "Students struggle to report plumbing or electrical issues. Wardens find it hard to track repairs.",
    objective: "A centralized web portal for hostel students to raise complaints and track resolution status.",
    features: "Ticket System, Status Tracking, Feedback Mechanism, Worker Assignment.",
    background: "Complaint book kept at the entrance; often ignored.",
    targetUsers: ["Students", "Admin Office"],
    appType: "Web",
    sensitivity: "Low",
    priority: "Medium",
    deliverables: "Full Stack Web Application",
    constraints: "Simple UI for non-technical workers.",
    submittedBy: {
      name: "Mr. Senthil",
      designation: "Warden",
      email: "warden@college.edu",
      contact: "9876500000"
    }
  },
  {
    id: "PS05",
    dept: "Admin Office",
    title: "Alumni Network App",
    description: "Alumni connections are scattered across LinkedIn and WhatsApp. No central directory exists.",
    objective: "Connect current students with alumni for mentorship, job referrals, and networking.",
    features: "Alumni Directory, Job Board, Mentorship Request, Event Calendar.",
    background: "Data stored in Excel sheets.",
    targetUsers: ["Students", "Alumni"],
    appType: "Mobile",
    sensitivity: "Medium",
    priority: "Low",
    deliverables: "Cross-platform Mobile App",
    constraints: "Data migration from Excel.",
    submittedBy: {
      name: "Mrs. Priya",
      designation: "Admin Officer",
      email: "admin@college.edu",
      contact: "9898989898"
    }
  }
];