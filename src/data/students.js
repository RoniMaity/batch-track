const students = [
  {
    id: "2024-26082002B",
    name: "Jared Owens",
    roll_no: "2024-26082002B",
    email: "ericarroyo@flowers.info",
    graduation_year: "2026",
    dob: "2002-08-26",
    phone_no: "(923)416-2409x9703",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [80, 70, 77, 96],
        mod_sem_marks: 100,
        attendance: 8,
      },
      "Data Structures and Algorithms": {
        contest_marks: [77, 98, 90, 84],
        mod_sem_marks: 80,
        attendance: 89,
      },
      "Mathematics II": {
        contest_marks: [0, 99, 76, 89],
        mod_sem_marks: 73,
        attendance: 94,
      },
    },
    interview: {
      applied: false,
      companies: ["Amazon", "TCS"],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-11092004",
    name: "Juan Stafford",
    roll_no: "2024-11092004",
    email: "cheryl51@peterson-campbell.com",
    graduation_year: "2026",
    dob: "2004-09-11",
    phone_no: "847-044-6636x81426",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [73, 79, 83, 82],
        mod_sem_marks: 83,
        attendance: 93,
      },
      "Data Structures and Algorithms": {
        contest_marks: [76, 99, 73, 95],
        mod_sem_marks: 90,
        attendance: 83,
      },
      "Mathematics II": {
        contest_marks: [10, 94, 90, 99],
        mod_sem_marks: 71,
        attendance: 84,
      },
    },
    interview: {
      applied: true,
      companies: ["Google", "Wipro", "Infosys"],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-28032003",
    name: "Joshua Paul",
    roll_no: "2024-28032003",
    email: "xfloyd@baxter-bennett.com",
    graduation_year: "2026",
    dob: "2003-03-28",
    phone_no: "845-137-4220x30752",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [79, 81, 85, 95],
        mod_sem_marks: 95,
        attendance: 88,
      },
      "Data Structures and Algorithms": {
        contest_marks: [79, 100, 76, 89],
        mod_sem_marks: 85,
        attendance: 8,
      },
      "Mathematics II": {
        contest_marks: [7, 83, 96, 77],
        mod_sem_marks: 90,
        attendance: 89,
      },
    },
    interview: {
      applied: false,
      companies: ["HCL"],
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
      contest_offenses: 2,
    },
  },
  {
    id: "2024-18112004",
    name: "Christopher Hayes",
    roll_no: "2024-18112004",
    email: "harrisjeffrey@walsh-brady.com",
    graduation_year: "2026",
    dob: "2004-11-18",
    phone_no: "7957446882",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [76, 91, 72, 83],
        mod_sem_marks: 99,
        attendance: 93,
      },
      "Data Structures and Algorithms": {
        contest_marks: [73, 74, 83, 71],
        mod_sem_marks: 90,
        attendance: 95,
      },
      "Mathematics II": {
        contest_marks: [74, 73, 73, 92],
        mod_sem_marks: 99,
        attendance: 79,
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
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-28092002",
    name: "David Zimmerman",
    roll_no: "2024-28092002",
    email: "angelabecker@anderson-barrett.net",
    graduation_year: "2026",
    dob: "2002-09-28",
    phone_no: "(563)068-9051",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [73, 97, 87, 96],
        mod_sem_marks: 92,
        attendance: 77,
      },
      "Data Structures and Algorithms": {
        contest_marks: [83, 93, 74, 92],
        mod_sem_marks: 87,
        attendance: 98,
      },
      "Mathematics II": {
        contest_marks: [80, 76, 79, 97],
        mod_sem_marks: 70,
        attendance: 82,
      },
    },
    interview: {
      applied: false,
      companies: ["Wipro", "TCS"],
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
      contest_offenses: 0,
    },
  },
  {
    id: "2024-03092005B",
    name: "Linda Martinez",
    roll_no: "2024-03092005B",
    email: "johnrobinson@dominguez.com",
    graduation_year: "2026",
    dob: "2005-09-03",
    phone_no: "(467)062-4757x34875",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [94, 99, 80, 89],
        mod_sem_marks: 74,
        attendance: 85,
      },
      "Data Structures and Algorithms": {
        contest_marks: [78, 97, 75, 82],
        mod_sem_marks: 98,
        attendance: 95,
      },
      "Mathematics II": {
        contest_marks: [94, 73, 96, 86],
        mod_sem_marks: 81,
        attendance: 9,
      },
    },
    interview: {
      applied: true,
      companies: ["HCL"],
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
    email: "glennfrank@yahoo.com",
    graduation_year: "2026",
    dob: "2002-07-08",
    phone_no: "(952)133-4639x330",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [71, 90, 96, 84],
        mod_sem_marks: 91,
        attendance: 87,
      },
      "Data Structures and Algorithms": {
        contest_marks: [98, 76, 98, 82],
        mod_sem_marks: 98,
        attendance: 88,
      },
      "Mathematics II": {
        contest_marks: [100, 82, 23, 97],
        mod_sem_marks: 98,
        attendance: 8,
      },
    },
    interview: {
      applied: true,
      companies: ["HCL"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-07112003",
    name: "Lonnie Taylor",
    roll_no: "2024-07112003",
    email: "gordonburch@lopez-howard.com",
    graduation_year: "2026",
    dob: "2003-11-07",
    phone_no: "5164503375",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [88, 77, 74, 96],
        mod_sem_marks: 98,
        attendance: 86,
      },
      "Data Structures and Algorithms": {
        contest_marks: [78, 97, 85, 81],
        mod_sem_marks: 92,
        attendance: 7,
      },
      "Mathematics II": {
        contest_marks: [97, 89, 89, 85],
        mod_sem_marks: 72,
        attendance: 82,
      },
    },
    interview: {
      applied: false,
      companies: ["TCS", "Google"],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Member",
      },
      {
        name: "Music Society",
        position: "Vice President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 2,
    },
  },
  {
    id: "2024-01122005",
    name: "Diane Peterson",
    roll_no: "2024-01122005",
    email: "halldenise@walker.org",
    graduation_year: "2026",
    dob: "2005-12-01",
    phone_no: "001-016-788-5738x777",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [77, 83, 26, 95],
        mod_sem_marks: 77,
        attendance: 7,
      },
      "Data Structures and Algorithms": {
        contest_marks: [79, 86, 89, 78],
        mod_sem_marks: 96,
        attendance: 90,
      },
      "Mathematics II": {
        contest_marks: [78, 97, 26, 79],
        mod_sem_marks: 92,
        attendance: 100,
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
      contest_offenses: 1,
    },
  },
  {
    id: "2024-27102005",
    name: "Marisa Maxwell",
    roll_no: "2024-27102005",
    email: "lmcbride@sawyer.org",
    graduation_year: "2026",
    dob: "2005-10-27",
    phone_no: "479-179-1741",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [92, 94, 81, 82],
        mod_sem_marks: 7,
        attendance: 7,
      },
      "Data Structures and Algorithms": {
        contest_marks: [80, 70, 90, 80],
        mod_sem_marks: 99,
        attendance: 86,
      },
      "Mathematics II": {
        contest_marks: [96, 93, 92, 100],
        mod_sem_marks: 94,
        attendance: 7,
      },
    },
    interview: {
      applied: false,
      companies: ["Google", "Amazon"],
    },
    clubs: [
      {
        name: "Music Society",
        position: "President",
      },
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
    id: "2024-18112005B",
    name: "Elizabeth Taylor",
    roll_no: "2024-18112005B",
    email: "maria37@perry.net",
    graduation_year: "2026",
    dob: "2005-11-18",
    phone_no: "+1-426-748-3404x160",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [76, 81, 98, 71],
        mod_sem_marks: 76,
        attendance: 81,
      },
      "Data Structures and Algorithms": {
        contest_marks: [78, 76, 80, 95],
        mod_sem_marks: 95,
        attendance: 89,
      },
      "Mathematics II": {
        contest_marks: [83, 85, 72, 100],
        mod_sem_marks: 76,
        attendance: 81,
      },
    },
    interview: {
      applied: false,
      companies: ["Google", "HCL"],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-20112004",
    name: "Eddie Russell",
    roll_no: "2024-20112004",
    email: "scottwilliam@mcgee.com",
    graduation_year: "2026",
    dob: "2004-11-20",
    phone_no: "+1-766-390-0815x599",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [88, 97, 84, 76],
        mod_sem_marks: 78,
        attendance: 0,
      },
      "Data Structures and Algorithms": {
        contest_marks: [81, 81, 96, 72],
        mod_sem_marks: 99,
        attendance: 95,
      },
      "Mathematics II": {
        contest_marks: [35, 98, 79, 78],
        mod_sem_marks: 80,
        attendance: 82,
      },
    },
    interview: {
      applied: false,
      companies: ["Amazon"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-03122002",
    name: "Jeff Bryant",
    roll_no: "2024-03122002",
    email: "zfreeman@gmail.com",
    graduation_year: "2026",
    dob: "2002-12-03",
    phone_no: "832-871-0252x040",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [89, 95, 71, 80],
        mod_sem_marks: 100,
        attendance: 82,
      },
      "Data Structures and Algorithms": {
        contest_marks: [86, 83, 90, 94],
        mod_sem_marks: 70,
        attendance: 3,
      },
      "Mathematics II": {
        contest_marks: [75, 82, 87, 92],
        mod_sem_marks: 79,
        attendance: 99,
      },
    },
    interview: {
      applied: false,
      companies: ["Google", "HCL", "TCS"],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-14052004",
    name: "Alicia Reynolds",
    roll_no: "2024-14052004",
    email: "tmartinez@gmail.com",
    graduation_year: "2026",
    dob: "2004-05-14",
    phone_no: "542-083-5359",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [79, 77, 72, 89],
        mod_sem_marks: 86,
        attendance: 91,
      },
      "Data Structures and Algorithms": {
        contest_marks: [74, 99, 85, 72],
        mod_sem_marks: 82,
        attendance: 87,
      },
      "Mathematics II": {
        contest_marks: [84, 81, 84, 90],
        mod_sem_marks: 98,
        attendance: 9,
      },
    },
    interview: {
      applied: true,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 3,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-16092002",
    name: "Teresa Farley",
    roll_no: "2024-16092002",
    email: "kgordon@krause-saunders.com",
    graduation_year: "2026",
    dob: "2002-09-16",
    phone_no: "447-628-7336",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [82, 86, 86, 84],
        mod_sem_marks: 99,
        attendance: 97,
      },
      "Data Structures and Algorithms": {
        contest_marks: [73, 97, 96, 79],
        mod_sem_marks: 78,
        attendance: 89,
      },
      "Mathematics II": {
        contest_marks: [95, 73, 84, 80],
        mod_sem_marks: 87,
        attendance: 80,
      },
    },
    interview: {
      applied: true,
      companies: ["Amazon", "Google", "Infosys"],
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
      attendance_offenses: 1,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-12022004A",
    name: "Dan Mcclain",
    roll_no: "2024-12022004A",
    email: "kara91@yahoo.com",
    graduation_year: "2026",
    dob: "2004-02-12",
    phone_no: "001-011-288-0131x3923",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [44, 95, 100, 92],
        mod_sem_marks: 98,
        attendance: 77,
      },
      "Data Structures and Algorithms": {
        contest_marks: [77, 75, 99, 85],
        mod_sem_marks: 71,
        attendance: 84,
      },
      "Mathematics II": {
        contest_marks: [44, 77, 70, 84],
        mod_sem_marks: 85,
        attendance: 86,
      },
    },
    interview: {
      applied: true,
      companies: ["Google", "HCL"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 2,
    },
  },
  {
    id: "2024-16092004",
    name: "Darius Kelley",
    roll_no: "2024-16092004",
    email: "derrick60@davis.com",
    graduation_year: "2026",
    dob: "2004-09-16",
    phone_no: "(352)000-9534x95855",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [85, 91, 97, 71],
        mod_sem_marks: 100,
        attendance: 0,
      },
      "Data Structures and Algorithms": {
        contest_marks: [82, 98, 98, 85],
        mod_sem_marks: 88,
        attendance: 92,
      },
      "Mathematics II": {
        contest_marks: [87, 76, 72, 73],
        mod_sem_marks: 100,
        attendance: 7,
      },
    },
    interview: {
      applied: true,
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
      attendance_offenses: 3,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-15042006",
    name: "Kathleen Alvarez",
    roll_no: "2024-15042006",
    email: "ggarza@yahoo.com",
    graduation_year: "2026",
    dob: "2006-04-15",
    phone_no: "+1-924-302-5398",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [95, 86, 94, 79],
        mod_sem_marks: 83,
        attendance: 98,
      },
      "Data Structures and Algorithms": {
        contest_marks: [71, 80, 71, 74],
        mod_sem_marks: 83,
        attendance: 83,
      },
      "Mathematics II": {
        contest_marks: [79, 87, 79, 98],
        mod_sem_marks: 77,
        attendance: 88,
      },
    },
    interview: {
      applied: false,
      companies: ["HCL"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 3,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-31072002",
    name: "John Rosario",
    roll_no: "2024-31072002",
    email: "gabriel33@hotmail.com",
    graduation_year: "2026",
    dob: "2002-07-31",
    phone_no: "2255541628",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [70, 74, 90, 70],
        mod_sem_marks: 80,
        attendance: 8,
      },
      "Data Structures and Algorithms": {
        contest_marks: [76, 79, 78, 77],
        mod_sem_marks: 91,
        attendance: 79,
      },
      "Mathematics II": {
        contest_marks: [0, 92, 95, 100],
        mod_sem_marks: 70,
        attendance: 9,
      },
    },
    interview: {
      applied: true,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 2,
    },
  },
  {
    id: "2024-27052003",
    name: "Jane Morales",
    roll_no: "2024-27052003",
    email: "quinncatherine@sampson.biz",
    graduation_year: "2026",
    dob: "2003-05-27",
    phone_no: "023-834-0761",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [82, 84, 98, 95],
        mod_sem_marks: 96,
        attendance: 75,
      },
      "Data Structures and Algorithms": {
        contest_marks: [93, 89, 80, 92],
        mod_sem_marks: 97,
        attendance: 93,
      },
      "Mathematics II": {
        contest_marks: [6, 99, 85, 100],
        mod_sem_marks: 72,
        attendance: 79,
      },
    },
    interview: {
      applied: false,
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
      contest_offenses: 2,
    },
  },
  {
    id: "2024-19062003B",
    name: "Ashley Martin",
    roll_no: "2024-19062003B",
    email: "michael08@yahoo.com",
    graduation_year: "2026",
    dob: "2003-06-19",
    phone_no: "1492126525",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [74, 85, 93, 98],
        mod_sem_marks: 90,
        attendance: 88,
      },
      "Data Structures and Algorithms": {
        contest_marks: [85, 90, 97, 87],
        mod_sem_marks: 84,
        attendance: 8,
      },
      "Mathematics II": {
        contest_marks: [93, 81, 75, 80],
        mod_sem_marks: 83,
        attendance: 90,
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
    email: "sullivanbrenda@king.com",
    graduation_year: "2026",
    dob: "2004-06-29",
    phone_no: "326-694-5260x93098",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [73, 80, 75, 96],
        mod_sem_marks: 99,
        attendance: 84,
      },
      "Data Structures and Algorithms": {
        contest_marks: [84, 90, 100, 79],
        mod_sem_marks: 85,
        attendance: 92,
      },
      "Mathematics II": {
        contest_marks: [4, 83, 98, 74],
        mod_sem_marks: 95,
        attendance: 78,
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
      attendance_offenses: 0,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-05122002",
    name: "Bryan Cooper",
    roll_no: "2024-05122002",
    email: "garrettrobert@gmail.com",
    graduation_year: "2026",
    dob: "2002-12-05",
    phone_no: "070.996.3570x029",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [74, 96, 81, 96],
        mod_sem_marks: 91,
        attendance: 3,
      },
      "Data Structures and Algorithms": {
        contest_marks: [97, 85, 86, 71],
        mod_sem_marks: 94,
        attendance: 96,
      },
      "Mathematics II": {
        contest_marks: [8, 78, 84, 70],
        mod_sem_marks: 73,
        attendance: 0,
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
      attendance_offenses: 2,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-23082003",
    name: "Jeremy Osborn",
    roll_no: "2024-23082003",
    email: "perezbradley@gmail.com",
    graduation_year: "2026",
    dob: "2003-08-23",
    phone_no: "(553)660-4549x743",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [90, 74, 78, 99],
        mod_sem_marks: 79,
        attendance: 100,
      },
      "Data Structures and Algorithms": {
        contest_marks: [72, 80, 91, 77],
        mod_sem_marks: 100,
        attendance: 9,
      },
      "Mathematics II": {
        contest_marks: [91, 87, 70, 70],
        mod_sem_marks: 92,
        attendance: 100,
      },
    },
    interview: {
      applied: true,
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
      attendance_offenses: 3,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-25072005",
    name: "Justin Mendez",
    roll_no: "2024-25072005",
    email: "agarner@diaz.com",
    graduation_year: "2026",
    dob: "2005-07-25",
    phone_no: "086.024.5678x3194",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [74, 96, 88, 88],
        mod_sem_marks: 72,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [74, 83, 82, 95],
        mod_sem_marks: 97,
        attendance: 88,
      },
      "Mathematics II": {
        contest_marks: [97, 73, 78, 76],
        mod_sem_marks: 77,
        attendance: 82,
      },
    },
    interview: {
      applied: false,
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
    email: "benjaminrodgers@schneider.com",
    graduation_year: "2026",
    dob: "2006-02-25",
    phone_no: "(492)106-4218x900",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [0, 92, 84, 77],
        mod_sem_marks: 87,
        attendance: 94,
      },
      "Data Structures and Algorithms": {
        contest_marks: [81, 87, 90, 95],
        mod_sem_marks: 73,
        attendance: 91,
      },
      "Mathematics II": {
        contest_marks: [81, 83, 89, 81],
        mod_sem_marks: 95,
        attendance: 98,
      },
    },
    interview: {
      applied: false,
      companies: ["HCL"],
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
    email: "ksandoval@cunningham.com",
    graduation_year: "2026",
    dob: "2003-03-26",
    phone_no: "001-492-292-9560x77845",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [89, 80, 93, 86],
        mod_sem_marks: 83,
        attendance: 100,
      },
      "Data Structures and Algorithms": {
        contest_marks: [98, 83, 29, 87],
        mod_sem_marks: 74,
        attendance: 83,
      },
      "Mathematics II": {
        contest_marks: [89, 98, 70, 72],
        mod_sem_marks: 70,
        attendance: 78,
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
    email: "ambergarcia@hotmail.com",
    graduation_year: "2026",
    dob: "2002-09-02",
    phone_no: "096-912-9652",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [83, 77, 100, 93],
        mod_sem_marks: 76,
        attendance: 100,
      },
      "Data Structures and Algorithms": {
        contest_marks: [89, 85, 73, 88],
        mod_sem_marks: 72,
        attendance: 89,
      },
      "Mathematics II": {
        contest_marks: [75, 87, 88, 92],
        mod_sem_marks: 87,
        attendance: 83,
      },
    },
    interview: {
      applied: false,
      companies: ["Google"],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "Vice President",
      },
      {
        name: "Literary Club",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 2,
    },
  },
  {
    id: "2024-01112002",
    name: "Kristin Green",
    roll_no: "2024-01112002",
    email: "kennethmitchell@tucker.biz",
    graduation_year: "2026",
    dob: "2002-11-01",
    phone_no: "+1-915-257-0730x772",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [10, 75, 71, 71],
        mod_sem_marks: 83,
        attendance: 97,
      },
      "Data Structures and Algorithms": {
        contest_marks: [84, 70, 89, 92],
        mod_sem_marks: 81,
        attendance: 88,
      },
      "Mathematics II": {
        contest_marks: [76, 93, 22, 92],
        mod_sem_marks: 98,
        attendance: 95,
      },
    },
    interview: {
      applied: true,
      companies: ["Infosys"],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "Vice President",
      },
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
    email: "fordjonathan@kent.com",
    graduation_year: "2026",
    dob: "2003-03-11",
    phone_no: "230-818-3270x686",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [89, 99, 91, 83],
        mod_sem_marks: 73,
        attendance: 100,
      },
      "Data Structures and Algorithms": {
        contest_marks: [74, 70, 70, 91],
        mod_sem_marks: 100,
        attendance: 86,
      },
      "Mathematics II": {
        contest_marks: [99, 85, 0, 87],
        mod_sem_marks: 73,
        attendance: 91,
      },
    },
    interview: {
      applied: false,
      companies: ["HCL", "Google"],
    },
    clubs: [
      {
        name: "Music Society",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-21052002B",
    name: "Amanda Harris",
    roll_no: "2024-21052002B",
    email: "nwashington@gmail.com",
    graduation_year: "2026",
    dob: "2002-05-21",
    phone_no: "6350317820",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [89, 77, 96, 90],
        mod_sem_marks: 95,
        attendance: 79,
      },
      "Data Structures and Algorithms": {
        contest_marks: [86, 73, 78, 86],
        mod_sem_marks: 80,
        attendance: 100,
      },
      "Mathematics II": {
        contest_marks: [0, 98, 79, 81],
        mod_sem_marks: 78,
        attendance: 76,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-09052003",
    name: "Jeffery Peterson",
    roll_no: "2024-09052003",
    email: "heather51@evans.com",
    graduation_year: "2026",
    dob: "2003-05-09",
    phone_no: "001-199-696-9306x31301",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [74, 79, 89, 98],
        mod_sem_marks: 91,
        attendance: 90,
      },
      "Data Structures and Algorithms": {
        contest_marks: [99, 99, 72, 100],
        mod_sem_marks: 89,
        attendance: 81,
      },
      "Mathematics II": {
        contest_marks: [86, 82, 2, 97],
        mod_sem_marks: 71,
        attendance: 81,
      },
    },
    interview: {
      applied: false,
      companies: ["TCS"],
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
      attendance_offenses: 0,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-08102004",
    name: "Jeremy Williams",
    roll_no: "2024-08102004",
    email: "obrown@yahoo.com",
    graduation_year: "2026",
    dob: "2004-10-08",
    phone_no: "(173)332-5355",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [82, 81, 100, 90],
        mod_sem_marks: 96,
        attendance: 96,
      },
      "Data Structures and Algorithms": {
        contest_marks: [76, 83, 96, 94],
        mod_sem_marks: 97,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [86, 85, 85, 99],
        mod_sem_marks: 89,
        attendance: 75,
      },
    },
    interview: {
      applied: true,
      companies: ["Wipro"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-14052004",
    name: "Christine Bryan",
    roll_no: "2024-14052004",
    email: "hendersongabriel@gmail.com",
    graduation_year: "2026",
    dob: "2004-05-14",
    phone_no: "(891)081-0177",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [80, 100, 77, 91],
        mod_sem_marks: 94,
        attendance: 99,
      },
      "Data Structures and Algorithms": {
        contest_marks: [98, 73, 91, 71],
        mod_sem_marks: 82,
        attendance: 99,
      },
      "Mathematics II": {
        contest_marks: [0, 96, 80, 84],
        mod_sem_marks: 90,
        attendance: 100,
      },
    },
    interview: {
      applied: true,
      companies: ["HCL", "Wipro"],
    },
    clubs: [],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-28012004",
    name: "Jaime Marshall",
    roll_no: "2024-28012004",
    email: "rsmith@richards-mosley.com",
    graduation_year: "2026",
    dob: "2004-01-28",
    phone_no: "461-199-2991x9172",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [90, 84, 89, 99],
        mod_sem_marks: 88,
        attendance: 98,
      },
      "Data Structures and Algorithms": {
        contest_marks: [75, 73, 70, 89],
        mod_sem_marks: 81,
        attendance: 78,
      },
      "Mathematics II": {
        contest_marks: [70, 85, 86, 91],
        mod_sem_marks: 77,
        attendance: 98,
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
      attendance_offenses: 3,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-16052005B",
    name: "Elizabeth Reed",
    roll_no: "2024-16052005B",
    email: "jessetran@yahoo.com",
    graduation_year: "2026",
    dob: "2005-05-16",
    phone_no: "4863306188",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [71, 76, 87, 80],
        mod_sem_marks: 98,
        attendance: 83,
      },
      "Data Structures and Algorithms": {
        contest_marks: [85, 83, 95, 93],
        mod_sem_marks: 99,
        attendance: 87,
      },
      "Mathematics II": {
        contest_marks: [93, 76, 73, 90],
        mod_sem_marks: 86,
        attendance: 86,
      },
    },
    interview: {
      applied: true,
      companies: ["Google"],
    },
    clubs: [
      {
        name: "Dance Society",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-14112003",
    name: "Gary Hobbs",
    roll_no: "2024-14112003",
    email: "joshua52@clark.com",
    graduation_year: "2026",
    dob: "2003-11-14",
    phone_no: "+1-031-403-8973",
    hostel: "In-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [76, 92, 81, 85],
        mod_sem_marks: 74,
        attendance: 76,
      },
      "Data Structures and Algorithms": {
        contest_marks: [98, 88, 87, 100],
        mod_sem_marks: 93,
        attendance: 95,
      },
      "Mathematics II": {
        contest_marks: [79, 84, 88, 98],
        mod_sem_marks: 94,
        attendance: 95,
      },
    },
    interview: {
      applied: false,
      companies: [],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "President",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-11092002",
    name: "Jennifer Perez",
    roll_no: "2024-11092002",
    email: "bcruz@rhodes.com",
    graduation_year: "2026",
    dob: "2002-09-11",
    phone_no: "664.268.0097x3918",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [79, 96, 86, 95],
        mod_sem_marks: 72,
        attendance: 91,
      },
      "Data Structures and Algorithms": {
        contest_marks: [95, 98, 98, 92],
        mod_sem_marks: 88,
        attendance: 80,
      },
      "Mathematics II": {
        contest_marks: [86, 76, 96, 96],
        mod_sem_marks: 87,
        attendance: 93,
      },
    },
    interview: {
      applied: false,
      companies: ["HCL"],
    },
    clubs: [
      {
        name: "Drama Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 1,
      contest_offenses: 1,
    },
  },
  {
    id: "2024-12082005",
    name: "Michael Wells",
    roll_no: "2024-12082005",
    email: "goodgwendolyn@hotmail.com",
    graduation_year: "2026",
    dob: "2005-08-12",
    phone_no: "(454)480-1209",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [79, 96, 82, 70],
        mod_sem_marks: 100,
        attendance: 95,
      },
      "Data Structures and Algorithms": {
        contest_marks: [96, 95, 91, 75],
        mod_sem_marks: 85,
        attendance: 98,
      },
      "Mathematics II": {
        contest_marks: [83, 92, 86, 77],
        mod_sem_marks: 93,
        attendance: 81,
      },
    },
    interview: {
      applied: false,
      companies: ["Wipro", "HCL", "Google"],
    },
    clubs: [
      {
        name: "Literary Club",
        position: "Member",
      },
    ],
    ufm_violations: {
      attendance_offenses: 2,
      contest_offenses: 0,
    },
  },
  {
    id: "2024-26072002",
    name: "Mark Simpson DDS",
    roll_no: "2024-26072002",
    email: "sandraelliott@hotmail.com",
    graduation_year: "2026",
    dob: "2002-07-26",
    phone_no: "238.258.7985x63506",
    hostel: "Off-Campus",
    subjects: {
      "Web Application": {
        contest_marks: [91, 92, 89, 100],
        mod_sem_marks: 93,
        attendance: 94,
      },
      "Data Structures and Algorithms": {
        contest_marks: [86, 96, 87, 85],
        mod_sem_marks: 87,
        attendance: 97,
      },
      "Mathematics II": {
        contest_marks: [89, 74, 96, 91],
        mod_sem_marks: 95,
        attendance: 98,
      },
    },
    interview: {
      applied: false,
      companies: ["TCS", "Google"],
    },
    clubs: [
      {
        name: "Coding Club",
        position: "President",
      },
      {
        name: "Coding Club",
        position: "Secretary",
      },
    ],
    ufm_violations: {
      attendance_offenses: 0,
      contest_offenses: 2,
    },
  },
];

export default students