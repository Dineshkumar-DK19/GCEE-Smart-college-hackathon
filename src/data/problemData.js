export const problemData = [

/* ===================== ACCOUNTS OFFICE ===================== */

{
  id: "PS01",
  dept: "Accounts Office",
  title: "Automation of Students Academic Details",

  background:
    "Student admission information (gender, category/quota, department, etc.) is collected and stored manually in spreadsheets and files. Department-wise segregation is not maintained. Office staff manually compute analytics such as the number of boys/girls, quota-wise distribution (General, BC, MBC, SC/ST), and department strength. Semester marks are recorded separately in different spreadsheets or files. Retrieving a student profile requires searching multiple sources and is time-consuming.",

  description:
       "1.There is no centralized system for admission and academic data maintenance.\n2. Office staff must manually enter admission details and compute department-level statistics when required, leading to delays and errors.\n3. Category/quota distribution and gender distribution calculations are repeated frequently.\n4. Semester marks are not linked with admission data, making academic analytics difficult.\n5. A single student profile view containing demographic details, admission details, photograph, and semester marks is not currently available.\n6. The office requires a desktop application to enter, update, and maintain student data, and to generate reports on demand.",

  downloads: [
    { name: "Admission Form Sample", url: "/assets/PS01_AdmissionForm.pdf" }
  ],

  objective:
    "1. Provide a desktop application for office staff to enter, update, and maintain student admission data.\n2. Automate department-wise, gender-wise, and category/quota-wise statistical analytics.\n3. Integrate semester marks with admission data for academic reporting.\n4. Enable instant student profile retrieval using roll number, including photo and semester marks.\n5. Minimize manual efforts and ensure accuracy in administrative processes.",

  targetUsers: ["Office Staff"],
  appType: ["Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Somasundaram K",
    designation: "JM Accounts",
    email: "ssvg1199@gmail.com",
    contact: "9842565567",
  },
},

/* ===================== CSE ===================== */

{
  id: "PS02",
  dept: "CSE",
  title: "A Smart Class Advisor Management System Using Automation Technologies",

  background:
    "Currently, two internal assessments are conducted for each semester. For that, the class advisor manually collects subject marks from various teachers handling subjects for that class and prepares a consolidated mark list and posts letters to parents of the students of that class. All these works are done manually. These works need to be automated.",

  description:
    "1.The current process of internal assessment mark management in engineering colleges is performed manually by class advisors, involving mark collection from faculty, preparation of consolidated mark lists, and communication with parents.\n2. This manual system is inefficient, time-consuming, and prone to errors.\n3. Automating these activities is essential to improve accuracy, reduce workload, and ensure timely dissemination of student performance information.",

  objective:
    "To design and develop an automated system for managing internal assessment activities that reduces manual effort, improves accuracy, and ensures timely communication of student performance.",

  targetUsers: ["Students", "Faculty"],
  appType: ["Mobile,Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "DR. N. VASUKI",
    designation: "ASSISTANT PROFESSOR",
    email: "adithyavasuki2@gmail.com",
    contact: "9500511300",
  },
},

{
  id: "PS03",
  dept: "CSE",
  title: "Placement Test Management System (with Anti-Cheating & Analytics)",

  background:
    "Currently, placement tests are conducted using Google Forms. The platform does not prevent copying, switching tabs, or referring to external sources during the test. Result analysis is manual and limited. Department-wise performance reporting and batch analytics are not readily available.",

  description:
    "1.The placement officer needs a secured test platform for students to attend placement tests online.\n2. The administrator should be able to create tests, set time limits, and manage students.\n3. The current tools (such as Google Forms) are not designed for secured assessments and lack anti-cheating controls. \n4.They also do not provide adequate analytics for department-wise performance comparison, shortlisting, or data export for reporting.\n5. The proposed system should minimize cheating, streamline test creation and evaluation, and provide actionable performance analytics for placement activities.",

  objective:
    "1.Enable placement officers to conduct secured online tests.\n2.Prevent cheating using anti-tab-switch, screen monitoring, and copy restrictions.\n3.Provide automated result calculation and ranking.\n4.Provide department-wise performance dashboards, reports, and shortlisting tools.\n5.Allow export of results and analytics in Excel.\n6.Improve transparency, speed, and efficiency of placement assessments.",

  targetUsers: ["Students", "Faculty", "Office Staff"],
  appType: ["Mobile","Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Dr. A. Kavidha",
    designation: "CSE - HOD",
    email: "kavidha.irtt@gmail.com",
    contact: "9442513055",
  },
},

{
  id: "PS04",
  dept: "Zonal Office",
  title: "TNEA Allotment Process Automation – Zone-wise Student Allocation System",

  background:
    "The Erode Zone comprises six TFC centres (20, 21, 30, 70, 71, and 73) from which student allotment lists are received. Currently, allotment details from all six centres are consolidated manually. The data is categorized under General and Government (7.5%) quotas. Students are manually mapped to their respective counselling zones based on the list of colleges assigned to each zone, making the process time-consuming and prone to human errors.",

  description:
    "1.Student allotment details are received as multiple Excel files from different TFC centres under different categories.\n2. These files need to be merged, verified, and mapped to 11 counselling zones based on the final allotted college.\n3. Since the entire process is manual, it involves repetitive work, delays, and possible inconsistencies in zone-wise student allocation.\n4. An automated solution is required to accurately consolidate data and generate zone-wise allotment lists efficiently.",

  downloads: [
    { name: "Input File 1 (Sample)", url: "/assets/PS04_Input_1.xlsx" },
    { name: "Input File 2 (Sample)", url: "/assets/PS04_Input_2.xlsx" },
    { name: "Input File 3 (Sample)", url: "/assets/PS04_Input_3.xlsx" },
    { name: "Input File 4 (Sample)", url: "/assets/PS04_Input_4.xlsx" },
    { name: "Output Format 1", url: "/assets/PS04_Output_1.xlsx" },
    { name: "Output Format 2", url: "/assets/PS04_Output_2.xlsx" },
  ],

  objective:
    "To automate the TNEA counselling allotment process on a zone-wise basis by integrating student allotment data from all TFC centres, consolidating General and Government (7.5%) categories, and systematically allocating students to the 11 counselling zones based on the colleges assigned to each zone.",

  targetUsers: ["Staff"],
  appType: ["Desktop"],
  sensitivity: "Medium",
  priority: "Medium",
  submittedBy: {
    name: "M. Annapoorani",
    designation: "Assistant Professor (Sr)",
    email: "poorani.vmk@gmail.com",
    contact: "9894513301",
  },
},

/* ===================== CSE ===================== */

{
  id: "PS05",
  dept: "CSE",
  title: "Student Record Automation Web Application",

  background:
    "Currently, the college provides a physical student record book to every student, which must be filled manually by staff or students. Writing all details by hand is time-consuming and increases the chances of human error. If the record notebook is lost or damaged, there is no way to recover the information. Updating records across multiple semesters is difficult and inefficient.",

  description:
    "1.Student records contain critical information that must be maintained throughout a student’s academic journey.\n2. These records include personal details, photographs, family information, and professional profile links such as LinkedIn.\n3. Academic data includes semester-wise marks, internal assessment marks, SGPA, and CGPA for up to eight semesters.\n4. In addition, records also include details of students’ participation in events, hackathons, certifications, and coding platforms such as HackerRank and LeetCode.\n5. Maintaining this information manually in physical records is inefficient, error-prone, and insecure.\n6. This problem aims to develop a Student Record Automation Web Application that digitizes the entire student record system.\n7. The web application will be primarily used by staff to securely enter, update, and manage student records, ensuring easy access, data accuracy, backup, and long-term reliability.",


  objective: "1. To develop a web-based application for complete student record automation.\n2. To securely store personal, academic, and professional student details.\n3. To record semester-wise marks, internal marks, SGPA, and CGPA.\n4. To track student participation in events, hackathons, and activities.\n5. To reduce errors, save time, and ensure data recovery through digital storage.\n6. To provide staff with a centralized and reliable web platform for managing student records.",
  targetUsers: ["Staffs"],
  appType: ["Desktop"],
  sensitivity: "Medium",
  priority: "Medium",
  submittedBy: {
    name: "DR. N. VASUKI",
    designation: "ASSISTANT PROFESSOR",
    email: "adithyavasuki2@gmail.com",
    contact: "9500511300",
  },
},


/* ===================== EEE ===================== */

{
  id: "PS06",
  dept: "EEE",
  title: "Smart Monitoring of Hostel Attendance and Parent Notification Platform",

  background:
    "Manual attendance system.",

  description:
    "1.Possibility of malpractice, and the process is tedious and time-consuming.\n2. Exclusive staff in-charge is required.",

objective: "1. Using smart technologies (such as RFID, biometric, QR code, or face recognition) to reduce manual errors and time consumption.\n2. To maintain a centralized and secure database for storing and managing student attendance records.\n3. To provide real-time or scheduled notifications to parents regarding student check-in, check-out, or absentee status.\n4. To improve hostel security by monitoring student movement and identifying unauthorized access or irregular attendance.\n5. To generate reports for hostel administrators to analyze attendance patterns and take timely action when required.\n6. To ensure transparency and accountability between students, hostel authorities, and parents.",
  targetUsers: ["Students", "Faculty", "Office Staff", "All"],
  appType: ["Mobile","Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Dr. M. Mohammadha Hussaini",
    designation: "Associate Professor",
    email: "drmmhussaini@gcee.ac.in",
    contact: "9443406070",
  },
},

{
  id: "PS07",
  dept: "EEE",
  title: "Digital Attendance Management System with Hourly Tracking and Reporting",

  background:
    "In many institutions, student attendance is recorded manually or using basic daily attendance systems. These methods do not support hourly attendance tracking for each class and subject, making it difficult to maintain accurate records. Manual processes are time-consuming and prone to errors, especially when attendance needs to be monitored subject-wise and across multiple classes.",

  description:
    "A digital attendance management system is required to record student attendance on an hourly basis for every class. The system should automatically calculate attendance percentages for each subject and generate detailed reports. These reports must be available both student-wise and subject-wise, enabling faculty to monitor attendance patterns efficiently and take timely academic decisions.",

  objective:
    "To design and implement a digital attendance management system that records hourly attendance for students of every class, calculates attendance percentage for each subject, and generates accurate student-wise and subject-wise attendance reports, thereby reducing manual effort and improving accuracy in attendance management.",

  targetUsers: ["Faculty"],
  appType: "Any",
  sensitivity: "High",
  priority: "Medium",
  submittedBy: {
    name: "Dr R Baby Priya",
    designation: "Assistant Professor",
    email: "babypriya@gcee.ac.in",
    contact: "+91 94869 37393",
  },
},

/* ===================== EXAM CELL ===================== */

{
  id: "PS08",
  dept: "Exam Cell",
  title: "Automated University Theory Examination Seating Arrangement System",

  background:
    "Manual seating arrangement methods are prone to errors such as duplicate seat allocation, uneven distribution of students, violation of examination rules, and hall unavailability. These issues increase administrative workload and may lead to confusion during examinations.",

  description:
    "To conduct university theory examinations, it is necessary to arrange seating for a large number of students across multiple halls while ensuring fairness, preventing malpractice, and utilizing the available space efficiently.",

  objective:
    "An automated system that can generate examination seating arrangements quickly and accurately by considering constraints such as student register numbers, subjects, hall capacities (25 students per hall), and departments (minimum two departments per hall).",

  targetUsers: ["Students"],
  appType: ["Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Dr. V. Thilagavathe",
    designation: "Assistant Professor",
    email: "thilaksirtt@gmail.com",
    contact: "9942765072",
  },
},

/* ===================== EXAM CELL ===================== */

{
  id: "PS09",
  dept: "Exam Cell",
  title: "Automated Hall Invigilation Duty Allocation System",

  background:
    "In our institution, to conduct university theory examinations across multiple halls simultaneously, it requires the allocation of invigilators to ensure fair and smooth examination proceedings. Assigning invigilation duties manually is a challenging and time-consuming task.",

  description:
    "In our institution, conducting examinations requires assigning invigilation duties to faculty members across multiple examination halls and sessions. A hall invigilation duty allocation system that can assign duties accurately and fairly by considering constraints such as department, number of duties per staff member, examination sessions, and hall requirements.",

  objective:
    "The proposed Automated Hall Invigilation Duty Allocation System aims to digitally manage staff data, examination schedules, and hall information to automatically generate optimized invigilation duty rosters and reports.",

  targetUsers: ["Faculty"],
  appType: ["Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Dr. S. Kalaivani",
    designation: "Assistant Professor",
    email: "kalaimagudu@gmail.com",
    contact: "9842986087",
  },
},

{
  id: "PS10",
  dept: "Exam Cell",
  title: "Automated Internal Test Scheduling System",

  background:
    "Our institution conducts internal tests periodically to assess students' academic progress across multiple courses, departments, and semesters. Preparing an internal test schedule manually is a complex and time-consuming process that involves coordinating subjects, classrooms, and student batches while avoiding timetable clashes.",

  description:
    "In our institution, conducting internal tests requires preparing detailed schedules that accommodate multiple departments, subjects, classrooms, and student groups within limited time frames. An automated internal test scheduling system that can generate accurate and conflict-free schedules by considering constraints such as department-wise subjects, student batches, examination duration, and available classrooms.",

  objective:
    "The proposed Automated Internal Test Scheduling System aims to digitally manage academic data and scheduling rules to automatically generate optimized internal test timetables and reports.",

  targetUsers: ["Students"],
  appType: ["Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Dr. V. Thilagavathe",
    designation: "Assistant Professor",
    email: "thilaksirtt@gmail.com",
    contact: "9942765072",
  },
},

{
  id: "PS11",
  dept: "Exam Cell",
  title: "Automated University Practical Examination Slot Allocation System",

  background:
    "Our institution conducts university practical examinations for various courses across multiple departments, laboratories, and batches of students. Allocating practical examination slots manually is a complex and time-consuming task that involves coordinating student groups, laboratory availability, faculty examiners, and examination schedules.",

  description:
    "In our institution, conducting practical examinations involves allocating examination slots for multiple batches of students across different laboratories, subjects, dates, and sessions while ensuring the availability of faculty examiners and laboratory resources. An automated system is required to allocate university practical examination slots accurately and efficiently by considering constraints such as student batches, subjects, laboratory capacity, examiner availability, date, session duration, and university regulations.",

  objective:
    "The proposed Automated University Practical Examination Slot Allocation System aims to digitally manage student data, laboratory details, examiner information, and examination rules to automatically generate optimized practical examination slot schedules and reports.",

  targetUsers: ["Faculty", "Students"],
  appType: ["Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Dr. S. Kalaivani",
    designation: "Assistant Professor",
    email: "kalaimagudu@gmail.com",
    contact: "9842986087",
  },
},

/* ===================== FIRST YEAR ===================== */

{
  id: "PS12",
  dept: "First Year",
  title: "Automation in Management Counselling",

  background:
    "In our college, the Management Quota counselling and admission process is currently carried out through manual and semi-manual methods. Student details are collected using physical application forms or basic online forms, and academic records are verified manually by the admission staff. Merit evaluation, seat availability tracking, and college–course allocation are mostly handled using spreadsheets and manual calculations. Communication with students regarding counselling schedules, seat availability, and admission confirmation is done through phone calls or individual messages, which is time-consuming and inefficient. Since there is no centralized system, maintaining records, avoiding duplicate entries, and tracking the counselling status of each student becomes difficult.",

  description:
    "1.The existing manual Management Quota counselling process in our college faces several challenges such as lack of transparency, high chances of human error, data inconsistency, and delayed decision-making.\n2. Manual merit calculation and seat allocation may lead to mistakes or disputes, and students do not have real-time visibility of their counselling status.\n3. Additionally, managing large volumes of applications becomes difficult for administrators, especially during peak admission periods.\n4. The absence of a structured and centralized platform also increases the administrative workload and reduces trust among students and parents regarding fairness in seat allocation.",

  objective:
    "1.The main objective of this project is to design and develop a web-based Management Quota Counselling System for our college, inspired by the TNEA counselling process.\n2. The system aims to automate the complete counselling workflow from registration to admission confirmation, ensure transparent and merit-based seat allocation, reduce manual work and human errors, provide a centralized platform for student data and seat management, allow students to track their counselling status in real time, and improve efficiency, fairness, and trust in the Management Quota admission process.",

  targetUsers: ["All"],
  appType: ["Mobile","Desktop"],
  sensitivity: "High",
  priority: "High",
  submittedBy: {
    name: "Dr. M. Rajeswari",
    designation: "Assistant Professor",
    email: "rajisdhlp@gmail.com",
    contact: "8526524811",
  },
},

/* ===================== IT ===================== */

{
  id: "PS13",
  dept: "IT",
  title: "Intelligent Digital Notification Framework for GCE Erode",

  background:
    "Currently, notifications and announcements are disseminated through WhatsApp groups, Google Classroom, physical notice boards, printed circulars, and class representatives. This process is fragmented and inconsistent, making it difficult for students and staff to receive timely information. There is no centralized system to track whether a notification has been viewed, acknowledged, or acted upon.",

  description:
    "1.In GCE Erode we generate a high volume of information such as academic schedules, exam notifications, placement updates, event announcements, circulars, OD/leave approvals, and deadlines.\n2. Existing communication methods lack centralization, prioritization, and security.\n3. Notifications are easily missed, delayed, or duplicated across platforms.\n4. There is no departmental filtering, role-based access, analytics, or integration with academic activities.\n5. As a result, important information does not reach the right users at the right time, and administrative overhead increases significantly.",

  objective:
    "To design and develop a centralized intelligent notification framework for our campus that categorizes and prioritizes notifications (academic, administrative, placement, exam, events, emergency), ensures role-based and department-wise dissemination, tracks delivery, acknowledgment, and engagement metrics, supports multi-channel modes (web, mobile, dashboard), reduces communication delays, improves institutional coordination, and enables data analytics and exportable reports for decision-making.",

  targetUsers: ["Students", "Faculty", "Office Staff", "Placement Cell", "HoDs", "Administration"],
  appType: ["Web", "Mobile"],
  sensitivity: "Medium",
  priority: "High",
  submittedBy: {
    name: "Dr. D. R. Anurekha",
    designation: "Assistant Professor",
    email: "dranurekha@gmail.com",
    contact: "9842918929",
  },
},

/* ===================== LIBRARY ===================== */

{
  id: "PS14",
  dept: "Library",
  title: "Desktop Application for Library Book Automation System",

  background:
    "In the current system, library operations are handled manually using register notebooks. Book details such as title, author, and accession number are recorded by hand. Student information, along with book issue and return dates, is also maintained in written form. This manual process is time-consuming, prone to human errors, difficult to maintain, and makes searching or tracking books and overdue records inefficient.",

  description:
    "1.Libraries play a crucial role in academic institutions, but managing library operations manually reduces efficiency and accuracy.\n2. Maintaining book records, tracking issued and returned books, and identifying overdue items become challenging with handwritten registers.\n3. Retrieving information such as book availability or student borrowing history requires significant time and effort.\n4. This problem focuses on developing a desktop-based library automation application to replace the existing manual system.",

  objective:
    "To develop a desktop application for complete library automation, eliminate manual register-based book entry and record keeping, digitize student details and book issue–return transactions, implement keyword-based search for books by title and author, provide statistical analysis of books, usage, and availability, track overdue books, and improve accuracy and efficiency in library management.",

  targetUsers: ["Faculty"],
  appType: ["Desktop"],
  sensitivity: "Medium",
  priority: "High",
  submittedBy: {
    name: "Dr. Sathivel Muruga",
    designation: "Librarian",
    email: "Libraryirtt@gmail.com",
    contact: "9442922723",
  },
},

{
  id: "PS15",
  dept: "Library",
  title: "Desktop Application for Library Book Stock Verification",

  background:
    "Currently, the library uses an existing desktop application for book stock verification. However, the application is outdated, difficult to use, and does not meet modern usability standards. Faculty and library staff find it challenging to perform stock verification efficiently due to a complex interface, slow operations, and limited functionality.",

  description:
    "1.Library stock verification is an essential process to ensure that physical books match recorded inventory.\n2. The existing system makes this task cumbersome for faculty and library staff, leading to delays and inefficiencies during verification periods. An outdated application also increases the risk of data inconsistency and user errors.",

  objective:
    "To design and develop a modern desktop application for library book stock verification, replace the existing outdated system with a user-friendly interface, simplify stock verification for faculty and library staff, improve accuracy and efficiency in library inventory management, and ensure quick identification of missing, extra, or mismatched book records.",

  targetUsers: ["Faculty"],
  appType: ["Desktop"],
  sensitivity: "Medium",
  priority: "High",
  submittedBy: {
    name: "Dr. Sathivel Muruga",
    designation: "Librarian",
    email: "Libraryirtt@gmail.com",
    contact: "9442922723",
  },
},
/* ===================== SPORTS ===================== */

{
  id: "PS16",
  dept: "Sports",
  title: "Mobile Application for Sports Event Management and Indoor Stadium Stock Management",

  background:
    "At present, sports event details are shared through notice boards, verbal announcements, or messaging groups, which often leads to delayed or missed information for students. Indoor stadium equipment and stock are maintained using manual registers or spreadsheets. This method is time-consuming, prone to errors, lacks real-time tracking, and makes it difficult to monitor equipment usage, availability, and loss.",

  description:
    "1.The Physical Education department requires an efficient digital solution to manage sports-related activities.\n2. The absence of a centralized system makes it difficult for staff to publish event details instantly and manage indoor stadium inventory effectively.\n3. Manual processes increase administrative workload and reduce transparency.\n4. This problem aims to address the need for a mobile application where staff can publish sports event details through a dashboard and manage indoor stadium stock digitally.\n5. The application will ensure real-time updates, accurate stock tracking, and easy access to information for students and staff, thereby improving communication, accountability, and overall efficiency within the department.",

  objective:
    "1.To develop a mobile application for the Physical Education department to digitally publish sports event details.\n2. To provide staff with a dashboard for efficient event management and updates.\n3. To implement a centralized system for indoor stadium stock and equipment management.\n4. To reduce manual record-keeping and minimize errors in event and inventory handling.\n5. To improve communication and transparency between staff and students.\n6. To ensure real-time access to event information and stock availability.",

  targetUsers: ["Faculty", "Students"],
  appType: ["Mobile"],
  sensitivity: "Medium",
  priority: "Medium",
  submittedBy: {
    name: "Mr. Loganadhan",
    designation: "Physical Education Trainer",
    email: "",
    contact: "",
  },
},
{
  id: "PS16",
  dept: "CSE",
  title: "Stock Verification Application",

 background:
"stock verification is performed by physically counting inventory items and manually recording the details in registers or spreadsheets, as shown in the sample stock verification outputs. This manual process is time-consuming, error-prone, and inefficient, especially when handling large volumes of stock. Errors such as incorrect quantity entry, missing items, and inconsistent report formats are common.",

description:
"The absence of a centralized digital system makes it difficult to compare physical stock with recorded stock, maintain historical verification data, and generate standardized reports. Preparing final outputs in PDF or Excel formats requires additional manual effort, increasing the risk of data inconsistency and delays.",

objective:
"there is a need for a Stock Verification Application that can automate the recording, verification, and reporting of inventory data, ensuring accuracy, consistency, and easy report generation.\nInputs\n1. Item details such as item code, item name, and category\n2. System-recorded stock quantity\n3. Physically verified stock quantity\n4. Storage location or warehouse details\n5. Verification date and verifier details\n6. Remarks or observations during verification\nOutputs\n1. Item-wise stock verification report showing recorded quantity vs physical quantity\n2. Identification of stock discrepancies (shortage or surplus)\n3. Verification status for each item (matched or mismatched)\n4. Consolidated stock verification summary\n5. Downloadable reports in PDF and Excel formats\n6. Stored historical verification records for audit and reference",

 targetUsers: ["Faculty"],
  appType: ["Mobile","Desktop"],
  sensitivity: "High",
  priority: "",
  submittedBy: {
    name: "Dr.S.Palanisami",
    designation: "Assistant Professor",
    email: "",
    contact: "",
  },
},
{
  id: "PS17",
  dept: "CSE",
  title: "Event Tracker System for College",

 background:
"In most colleges, students are required to obtain On Duty (OD), leave, or permission approvals for academic, co-curricular, and personal reasons. Currently, this process is largely manual, involving handwritten forms, physical signatures, and verbal approvals. Such traditional methods often lead to delays, misplaced requests, lack of transparency, and poor record maintenance. Additionally, tracking the status of requests and maintaining historical data becomes difficult for both students and faculty members.",

description:
"1.The absence of a centralized digital system for managing OD, leave, and permission requests creates inefficiencies in the approval workflow.\n2. Students have no reliable way to track the status of their requests, while faculty members face challenges in verifying, forwarding, and maintaining records.\n3. Approval hierarchies involving Class Advisors, Heads of Departments (HODs), and Principals are not systematically enforced, leading to inconsistent decision-making.\n4. There is also no structured mechanism to forward requests conditionally based on the type or importance of the request.",

objective:
"1.The objective of this project is to develop a College Event Tracker System that allows students to digitally apply for OD, leave, or permission requests.\n2. The system will automate the approval workflow by forwarding requests to the Class Advisor, then to the HOD, and to the Principal when required, based on predefined rules.\n3. It aims to provide transparency, efficiency, and proper record management, while reducing paperwork, approval delays, and administrative burden.\n4. The system will also enable real-time tracking of request status and maintain a centralized database for future reference and auditing.",

 targetUsers: ["Faculty","Students"],
  appType: ["Mobile","Desktop"],
  sensitivity: "",
  priority: "",
  submittedBy: {
    name: "Dr.N.Vasuki",
    designation: "Assistant Professor",
    email: "",
    contact: "",
  },
},
];
