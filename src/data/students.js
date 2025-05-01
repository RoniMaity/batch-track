const students = [
  {
    id: "2024-26082002B",
    name: "Jared Owens",
    roll_no: "2024-26082002B",
    email: "jared.owens@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2002-08-26",
    phone_no: "+91 92341 62409",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 48],
        mod_sem_marks: 40,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 45, 50],
        mod_sem_marks: 45,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [30, 35, 40, 45],
        mod_sem_marks: 38,
        attendance: 65,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 2,
    },
  },
  {
    id: "2024-11092004",
    name: "Juan Stafford",
    roll_no: "2024-11092004",
    email: "juan.stafford@gmail.com",
    graduation_year: "2026",
    dob: "2004-09-11",
    phone_no: "+91 84704 46636",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 90, 88, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 90, 88],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [75, 80, 85, 90],
        mod_sem_marks: 88,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["Infosys", "TCS"],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-28032003",
    name: "Joshua Paul",
    roll_no: "2024-28032003",
    email: "joshua.paul@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2003-03-28",
    phone_no: "+91 84513 74220",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 78,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 65,
      },
    },
    interview: {
      applied: false,
      companies: ["Wipro"],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "Secretary",
      },
      {
        name: "Music Society",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-18112004",
    name: "Christopher Hayes",
    roll_no: "2024-18112004",
    email: "chris.hayes@gmail.com",
    graduation_year: "2026",
    dob: "2004-11-18",
    phone_no: "+91 79574 46882",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["Wipro"],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-28092002",
    name: "David Zimmerman",
    roll_no: "2024-28092002",
    email: "david.zimmerman@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2002-09-28",
    phone_no: "+91 56306 89051",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: ["TCS"],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "Member",
      },
      {
        name: "Literary Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-03092005B",
    name: "Linda Martinez",
    roll_no: "2024-03092005B",
    email: "linda.martinez@gmail.com",
    graduation_year: "2026",
    dob: "2005-09-03",
    phone_no: "+91 46706 24757",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [88, 90, 85, 92],
        mod_sem_marks: 90,
        attendance: 90,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 88,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 85,
      },
    },
    interview: {
      applied: true,
      companies: ["HCL", "Infosys"],
    },
    clubs: [
      {
        name: "Music Society",
        position: "President",
      },
      {
        name: "Drama Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-08072002",
    name: "Kristin Willis",
    roll_no: "2024-08072002",
    email: "kristin.willis@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2002-07-08",
    phone_no: "+91 95213 34639",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-07112003",
    name: "Lonnie Taylor",
    roll_no: "2024-07112003",
    email: "lonnie.taylor@gmail.com",
    graduation_year: "2026",
    dob: "2003-11-07",
    phone_no: "+91 51645 03375",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 82,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 78,
      },
    },
    interview: {
      applied: true,
      companies: ["TCS"],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-01122005",
    name: "Diane Peterson",
    roll_no: "2024-01122005",
    email: "diane.peterson@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2005-12-01",
    phone_no: "+91 78857 38777",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 88, 90, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["Infosys", "Google"],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "Vice President",
      },
      {
        name: "Music Society",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-27102005",
    name: "Marisa Maxwell",
    roll_no: "2024-27102005",
    email: "marisa.maxwell@gmail.com",
    graduation_year: "2026",
    dob: "2005-10-27",
    phone_no: "+91 47917 91741",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Music Society",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-18112005B",
    name: "Elizabeth Taylor",
    roll_no: "2024-18112005B",
    email: "elizabeth.taylor@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2005-11-18",
    phone_no: "+91 42674 83404",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["HCL"],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-20112004",
    name: "Eddie Russell",
    roll_no: "2024-20112004",
    email: "eddie.russell@gmail.com",
    graduation_year: "2026",
    dob: "2004-11-20",
    phone_no: "+91 76639 00815",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-03122002",
    name: "Jeff Bryant",
    roll_no: "2024-03122002",
    email: "jeff.bryant@gmail.com",
    graduation_year: "2026",
    dob: "2002-12-03",
    phone_no: "+91 83287 10252",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 90, 88, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 90, 88],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [75, 80, 85, 90],
        mod_sem_marks: 88,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["TCS", "Infosys"],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-14052004",
    name: "Alicia Reynolds",
    roll_no: "2024-14052004",
    email: "alicia.reynolds@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2004-05-14",
    phone_no: "+91 54208 35359",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-16092002",
    name: "Teresa Farley",
    roll_no: "2024-16092002",
    email: "teresa.farley@gmail.com",
    graduation_year: "2026",
    dob: "2002-09-16",
    phone_no: "+91 44762 87336",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [88, 90, 85, 92],
        mod_sem_marks: 90,
        attendance: 90,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 88,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 85,
      },
    },
    interview: {
      applied: true,
      companies: ["Amazon", "Infosys"],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "Secretary",
      },
      {
        name: "Literary Club",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-12022004A",
    name: "Dan Mcclain",
    roll_no: "2024-12022004A",
    email: "dan.mcclain@yahoo.com",
    graduation_year: "2026",
    dob: "2004-02-12",
    phone_no: "+91 78828 80131",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["Google", "HCL"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-16092004",
    name: "Darius Kelley",
    roll_no: "2024-16092004",
    email: "darius.kelley@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2004-09-16",
    phone_no: "+91 95200 09534",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Member",
      },
      {
        name: "Dance Society",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-15042006",
    name: "Kathleen Alvarez",
    roll_no: "2024-15042006",
    email: "kathleen.alvarez@gmail.com",
    graduation_year: "2026",
    dob: "2006-04-15",
    phone_no: "+91 92430 25398",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["HCL"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-31072002",
    name: "John Rosario",
    roll_no: "2024-31072002",
    email: "john.rosario@gmail.com",
    graduation_year: "2026",
    dob: "2002-07-31",
    phone_no: "+91 92554 11628",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-27052003",
    name: "Jane Morales",
    roll_no: "2024-27052003",
    email: "jane.morales@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2003-05-27",
    phone_no: "+91 92383 40761",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [88, 90, 85, 92],
        mod_sem_marks: 90,
        attendance: 90,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 88,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 85,
      },
    },
    interview: {
      applied: true,
      companies: ["Infosys", "Amazon"],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-19062003B",
    name: "Ashley Martin",
    roll_no: "2024-19062003B",
    email: "ashley.martin@gmail.com",
    graduation_year: "2026",
    dob: "2003-06-19",
    phone_no: "+91 94921 26525",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 88, 90, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["Infosys", "Wipro", "Amazon"],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "President",
      },
      {
        name: "Dance Society",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-29062004",
    name: "Theresa Waters",
    roll_no: "2024-29062004",
    email: "theresa.waters@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2004-06-29",
    phone_no: "+91 92669 45260",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-05122002",
    name: "Bryan Cooper",
    roll_no: "2024-05122002",
    email: "bryan.cooper@gmail.com",
    graduation_year: "2026",
    dob: "2002-12-05",
    phone_no: "+91 97099 63570",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["Wipro", "Infosys"],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-23082003",
    name: "Jeremy Osborn",
    roll_no: "2024-23082003",
    email: "jeremy.osborn@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2003-08-23",
    phone_no: "+91 95366 04549",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Member",
      },
      {
        name: "Coding Club",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-25072005",
    name: "Justin Mendez",
    roll_no: "2024-25072005",
    email: "justin.mendez@gmail.com",
    graduation_year: "2026",
    dob: "2005-07-25",
    phone_no: "+91 98602 45678",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 88, 90, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["Infosys", "Amazon"],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-25022006B",
    name: "Kristopher Rodriguez",
    roll_no: "2024-25022006B",
    email: "kristopher.rodriguez@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2006-02-25",
    phone_no: "+91 99210 64218",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-26032003",
    name: "Isaac Tran",
    roll_no: "2024-26032003",
    email: "isaac.tran@gmail.com",
    graduation_year: "2026",
    dob: "2003-03-26",
    phone_no: "+91 94922 92956",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [88, 90, 85, 92],
        mod_sem_marks: 90,
        attendance: 90,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 88,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 85,
      },
    },
    interview: {
      applied: true,
      companies: ["Google", "Amazon"],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-02092002",
    name: "Robert Coleman",
    roll_no: "2024-02092002",
    email: "robert.coleman@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2002-09-02",
    phone_no: "+91 99691 29652",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-01112002",
    name: "Kristin Green",
    roll_no: "2024-01112002",
    email: "kristin.green@gmail.com",
    graduation_year: "2026",
    dob: "2002-11-01",
    phone_no: "+91 91525 70730",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["Infosys"],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-11032003",
    name: "Lisa Sanchez",
    roll_no: "2024-11032003",
    email: "lisa.sanchez@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2003-03-11",
    phone_no: "+91 93081 83270",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-21052002B",
    name: "Amanda Harris",
    roll_no: "2024-21052002B",
    email: "amanda.harris@gmail.com",
    graduation_year: "2026",
    dob: "2002-05-21",
    phone_no: "+91 93503 17820",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 88, 90, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["TCS", "Amazon"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-09052003",
    name: "Jeffery Peterson",
    roll_no: "2024-09052003",
    email: "jeffery.peterson@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2003-05-09",
    phone_no: "+91 91996 69306",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "President",
      },
      {
        name: "Coding Club",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-08102004",
    name: "Jeremy Williams",
    roll_no: "2024-08102004",
    email: "jeremy.williams@gmail.com",
    graduation_year: "2026",
    dob: "2004-10-08",
    phone_no: "+91 97332 55355",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["Wipro"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-14052004",
    name: "Christine Bryan",
    roll_no: "2024-14052004",
    email: "christine.bryan@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2004-05-14",
    phone_no: "+91 89108 10177",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-28012004",
    name: "Jaime Marshall",
    roll_no: "2024-28012004",
    email: "jaime.marshall@gmail.com",
    graduation_year: "2026",
    dob: "2004-01-28",
    phone_no: "+91 96119 92991",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 88, 90, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["HCL", "Infosys", "TCS"],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-16052005B",
    name: "Elizabeth Reed",
    roll_no: "2024-16052005B",
    email: "elizabeth.reed@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2005-05-16",
    phone_no: "+91 98633 06188",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-14112003",
    name: "Gary Hobbs",
    roll_no: "2024-14112003",
    email: "gary.hobbs@gmail.com",
    graduation_year: "2026",
    dob: "2003-11-14",
    phone_no: "+91 93140 38973",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [78, 82, 80, 85],
        mod_sem_marks: 80,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 78, 80, 82],
        mod_sem_marks: 78,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [70, 75, 78, 80],
        mod_sem_marks: 75,
        attendance: 82,
      },
    },
    interview: {
      applied: true,
      companies: ["TCS"],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-11092002",
    name: "Jennifer Perez",
    roll_no: "2024-11092002",
    email: "jennifer.perez@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2002-09-11",
    phone_no: "+91 96426 80097",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [40, 45, 50, 48],
        mod_sem_marks: 42,
        attendance: 70,
      },
      "Data Structures and Algorithms": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
      "Mathematics II": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 40,
        attendance: 68,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-12082005",
    name: "Michael Wells",
    roll_no: "2024-12082005",
    email: "michael.wells@gmail.com",
    graduation_year: "2026",
    dob: "2005-08-12",
    phone_no: "+91 95480 01209",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 88, 90, 92],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 85, 88, 90],
        mod_sem_marks: 85,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [78, 82, 85, 88],
        mod_sem_marks: 82,
        attendance: 92,
      },
    },
    interview: {
      applied: true,
      companies: ["Wipro", "HCL"],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-26072002",
    name: "Mark Simpson",
    roll_no: "2024-26072002",
    email: "mark.simpson@edu.university.ac.in",
    graduation_year: "2026",
    dob: "2002-07-26",
    phone_no: "+91 93825 87985",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [35, 40, 45, 50],
        mod_sem_marks: 45,
        attendance: 68,
      },
      "Data Structures and Algorithms": {
        contest_marks: [38, 42, 48, 50],
        mod_sem_marks: 40,
        attendance: 70,
      },
      "Mathematics II": {
        contest_marks: [65, 70, 68, 72],
        mod_sem_marks: 68,
        attendance: 75,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
];

export default students;