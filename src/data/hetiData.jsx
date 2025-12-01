import React from 'react';
import { Compass, HardHat, Ruler, MapPin, Layers, Anchor, PenTool, Calculator, Cpu, BookOpen } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Career', href: '/placement' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export const COMPANY_INFO = {
  name: "HI-END TECHNICAL INSTITUTE",
  shortName: "HETI",
  tagline: "AN ISO 9001-2015 ORGANISATION",
  address: "25, Bakultala Lane, Gr. Floor",
  mobile: "9123678096",
  email: "hiendtechinst@gmail.com",
  website: "hiendtechschool.com",
  
  mission: "To generate skilled & competent personnel in the field of Survey & Civil Engineering that help them to promote their career in the future prospect.",
  
  vision: "Overall ambition of HETI is to find the talent of youth and convert their strength to build up quality technical professionals who are committed to integrate their knowledge & excellence in their professional endeavors which in turn helps to develop the overall industrial growth.",
  
  objectives: [
    "To develop quality professionals who are committed to excellence in their professional endeavors.",
    "To improve the industry practices through practical and theoretical classes and hence make a contribution to the professional industry.",
    "To serve as a quality employee to their employer in every aspect as per their own position."
  ],

  boardMessageHeadline: "A Stair of Professional",
  boardMessage: "HI-END TECHNICAL INSTITUTE announces with pride the launching of a futuristic Training Program in the field of Survey, design, drawings and programming targeted to build technical professionals. We aim to give them a substantial edge over individuals who have been able to start delivering up to the expectations of their employers after completion of scheduled substantial training given to them. HETI realizes that in today's world speed and efficiency coupled with confidence are the parameters by which a real professional is judged.",

  prospectTitle: "PROSPECT OF TRAINING",
  prospectContent: [
    "The planning and design of various Civil Engineering projects such as construction of highways/city road/PMGSY/state highway, bridges/culvert, tunnels, dams, railways, river/canal, water supply system, waste water system, pipeline and residential areas etc., the surveying measurements needed in the basic stage.",
    "Moreover, during execution, project of any magnitude is constructed along the lines and points established by surveying. Thus, surveying is a basic requirement for all Civil Engineering projects.",
    "Design Engineer performs an important role in the field of planning, design before Construction of Road, Bridge, Highway, Small Building and High-rise Building. Thus, Design is an important part in Civil Engineering.",
    "Civil Engineering and surveying are some of the broadest fields of engineering, and are applied in all construction-related projects. In survey engineering employment opportunities are available locally, state-wide, and nation-wide.",
    "Based on the work experience of a faculty member a student can understand their future prospect by proper training program. Based on above view HI-END TECHNICAL INSTITUTE introduces survey course according to current market requirement so that a student or a professional can walk ahead as an eligible employee or competent professional."
  ]
};

// FULL SYLLABUS EXTRACTION [cite: 56, 59-300]
export const COURSES = [
  {
    id: "HT001",
    title: "Basic Certificate Course on Total Station",
    duration: "40 Hrs",
    qualification: "Fresher / Survey or Civil Discipline",
    category: "Survey",
    icon: <Compass className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Theory of Total Station",
      "Total Instrument Setting",
      "Project Setting",
      "Back Side/Fore Side",
      "Data Storing",
      "Angle and Distance Measurement",
      "Data Download",
      "Import in Drawing",
      "Practical"
    ]
  },
  {
    id: "HT002",
    title: "Basic Certificate Course on Total Station with Live Project",
    duration: "80 Hrs",
    qualification: "Fresher / Survey or Civil Discipline",
    category: "Survey",
    icon: <HardHat className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "All modules of HT001",
      "Live Project Execution",
      "Practical Field Work"
    ]
  },
  {
    id: "HT003",
    title: "Advance Certificate Course on Total Station",
    duration: "80 Hrs",
    qualification: "Survey/Civil or Total Station Professional",
    category: "Survey",
    icon: <Compass className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Theory of Total Station",
      "Total Instrument Setting & Project Setting",
      "Back Side/Fore Side & Data Storing",
      "Angle and Distance Measurement",
      "Layout/Stake out",
      "Traversing & Resection",
      "Area Calculation, REM, RDM",
      "Data Import in Excel / Drawing",
      "Practical"
    ]
  },
  {
    id: "HT004",
    title: "Advance Certificate Course on Total Station with Live Project",
    duration: "120 Hrs",
    qualification: "Survey/Civil or Total Station Professional",
    category: "Survey",
    icon: <HardHat className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "All modules of HT003",
      "Live Project Execution",
      "Advanced Practical Field Work"
    ]
  },
  {
    id: "HT005",
    title: "Total Station (Basic) with Survey Drawing",
    duration: "80 Hrs",
    qualification: "Fresher / Survey or Civil Discipline",
    category: "Survey",
    icon: <PenTool className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Theory of Total Station & Instrument Setting",
      "Project Setting, Back/Fore Side, Data Storing",
      "Angle & Distance Measurement",
      "Data Download & Import in Drawing",
      "Import in Drawing Software",
      "Unit and Page Setting",
      "Drawing, Dimension Command",
      "Layer and Block Concept",
      "Prepare Survey Drawing",
      "Model Space/Paper Space & Printout Setting"
    ]
  },
  {
    id: "HT006",
    title: "Total Station (Basic) with Survey Drawing (Live Project)",
    duration: "120 Hrs",
    qualification: "Fresher / Survey or Civil Discipline",
    category: "Survey",
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "All modules of HT005",
      "Live Project Execution",
      "Advanced Drawing Techniques"
    ]
  },
  {
    id: "HT007",
    title: "Certificate Course on Auto Level",
    duration: "40 Hrs",
    qualification: "Survey or Civil Discipline",
    category: "Survey",
    icon: <Ruler className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Auto Level Theory",
      "Application of Auto Level",
      "Fly and Check Leveling",
      "Fore Site, Back Site",
      "Level Calculation",
      "Height of Instrument method",
      "Rise & Fall method",
      "Practical"
    ]
  },
  {
    id: "HT008",
    title: "Certificate Course on Total Station & Auto Level",
    duration: "100 Hrs",
    qualification: "Survey or Civil Discipline",
    category: "Survey",
    icon: <Compass className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Auto Level Theory & Application",
      "Fly and Check Leveling",
      "Fore Site, Back Site & Level Calculation",
      "Height of Instrument & Rise/Fall method",
      "Total Station Uses & Project Setting",
      "Data Storing & Angle/Distance Measurement",
      "Data Download",
      "Import Field Data in Drawing",
      "Practical"
    ]
  },
  {
    id: "HT009",
    title: "Land Survey (Auto Level, TS, Drawing)",
    duration: "100 Hrs",
    qualification: "Fresher / Survey or Civil Discipline",
    category: "Survey",
    icon: <MapPin className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Theory & Application of Survey",
      "Basic Mathematics",
      "Auto Level Theory & Application",
      "Fly, Check Leveling & Level Calculation",
      "Total Station Uses, Project Setting & Data Storing",
      "Data Download & Import in Drawing Software",
      "Basic of Drawing Software & Dimension Command",
      "Layer and Block Concept",
      "Prepare Survey Drawing & Concept of Contour",
      "Model Space/Paper Space & Printout Setting"
    ]
  },
  {
    id: "HT010",
    title: "Land Survey with Drawing (Live Project)",
    duration: "140 Hrs",
    qualification: "Fresher / Survey or Civil Discipline",
    category: "Survey",
    icon: <HardHat className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "All modules of HT009",
      "Live Project Execution",
      "Comprehensive Field Training"
    ]
  },
  {
    id: "HT011",
    title: "Certificate on Land Survey (Basic)",
    duration: "60 Hrs",
    qualification: "Fresher",
    category: "Survey",
    icon: <MapPin className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Introduction of Survey",
      "Chain Survey Concept",
      "Plane Table Survey Concept",
      "Auto Level Concept",
      "Total Station Survey",
      "Hand GPS Concept",
      "Google Earth Concept",
      "DGPS & Drone Survey Concept",
      "Drawing & Mapping Concept"
    ]
  },
  {
    id: "HT012",
    title: "Certificate on Amin Survey",
    duration: "60 Hrs",
    qualification: "Fresher",
    category: "Survey",
    icon: <BookOpen className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Introduction of Survey",
      "Chain Survey & Plane Table Survey",
      "Prismatic Compass Survey",
      "Settlement Amin Survey",
      "Mouza Map & Land Allotment",
      "Land Measurement",
      "Tracing Drawing",
      "Basic Mathematics & Overall Knowledge"
    ]
  },
  {
    id: "HT013",
    title: "Certificate on Hand GPS with Data Processing",
    duration: "40 Hrs",
    qualification: "Fresher/Survey or Civil",
    category: "Survey",
    icon: <MapPin className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "GPS Operating & Data Recording",
      "Data Processing & Correction",
      "UTM/Lat Long Conversion",
      "Google Earth Data Incorporation",
      "Working with KML & KMZ File",
      "Elevation Profile"
    ]
  },
  {
    id: "HT014",
    title: "Certificate on DGPS with Data Processing (Basic)",
    duration: "80 Hrs",
    qualification: "Survey or Civil Discipline",
    category: "Survey",
    icon: <Cpu className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "GNSS/DGPS technology & Introduction",
      "Equipment Handling",
      "GPS Field Surveying & Data Processing",
      "RTK Survey",
      "Google Earth and Data Checking"
    ]
  },
  {
    id: "HT015",
    title: "Certificate on DGPS with Data Processing (Advance)",
    duration: "120 Hrs",
    qualification: "Survey or Civil Discipline",
    category: "Survey",
    icon: <Cpu className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "All modules of HT014",
      "PPK Survey",
      "Advanced Data Processing"
    ]
  },
  {
    id: "HT016",
    title: "Certificate on DGPS & Total Station (Advance)",
    duration: "140 Hrs",
    qualification: "Survey or Civil Discipline",
    category: "Survey",
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Total Station Theory & Instrument Setting",
      "Project Setting, Back/Fore Sight & Data Storing",
      "Angle/Distance Measurement & Data Download",
      "Import in Drawing & Practical",
      "GNSS/DGPS technology & GPS Introduction",
      "Equipment Handling & GPS Field Surveying",
      "GPS Field Data Processing & RTK Survey",
      "Google Earth and Data Checking"
    ]
  },
  {
    id: "HT017",
    title: "Certificate on Drawing & Mapping",
    duration: "50 Hrs",
    qualification: "Fresher / Survey/Civil",
    category: "Design",
    icon: <PenTool className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Basic of Drawing Software & File Types",
      "Concept of Unit, Interface and Basics",
      "Drawing, Editing Tools",
      "Organization and Properties",
      "Annotation and Documentation",
      "Advance Layer and Block Concept",
      "3D Modelling & Isometric Drawing",
      "Attribute Block",
      "Model Space/Paper Space, Plotting & Printing"
    ]
  },
  {
    id: "HT018",
    title: "Certificate on Survey Drawing & Mapping",
    duration: "50 Hrs",
    qualification: "Survey or Civil Discipline",
    category: "Design",
    icon: <MapPin className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Basic of Drawing Software & File Types",
      "Interface, Basics, Drawing & Editing Tools",
      "Organization, Properties, Annotation",
      "Advance Layer and Block Concept",
      "Contour Concept & Interpolation Method",
      "Level Checking & Grid Formation",
      "Model Space/Paper Space, Plotting & Printing"
    ]
  },
  {
    id: "HT019",
    title: "Certificate on Survey Based LISP Programming",
    duration: "50 Hrs",
    qualification: "Any CAD Professional",
    category: "Programming",
    icon: <Calculator className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Introduction of LISP & Data Handling",
      "While and Repeat Loop & If Statement",
      "Data Type & Entity Handling (Part I & II)",
      "Object Handling & Script Programming",
      "File Handling, Validation and Checking",
      "Long & Cross Section",
      "Cad Based Program Creation",
      "Working with 100 Practical Program",
      "Overall Discussion"
    ]
  },
  {
    id: "HT020",
    title: "Certificate on Advance LISP Programming",
    duration: "60 Hrs",
    qualification: "Any CAD Professional",
    category: "Programming",
    icon: <Cpu className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "All modules of HT019",
      "Advance Validation",
      "VBA Application",
      ".Net & Arx Concept",
      "100 Practical Program Solving",
      "Overall Discussion"
    ]
  },
  {
    id: "HT021",
    title: "Certificate Course on BBS & Estimation",
    duration: "25 Hrs",
    qualification: "Civil Discipline",
    category: "Design",
    icon: <Calculator className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Basic of BBS (inch/ft & Mt/mm)",
      "BBS for Footing in Excel",
      "BBS for Column & Beams",
      "BBS for Slab / Circular Slab",
      "BBS for Septic Tank",
      "BBS for Retaining Wall",
      "BBS for Cantilever Beam & Stairs",
      "Over All Discussion, Project & Examination"
    ]
  },
  {
    id: "HT022",
    title: "Certificate Course on Road Design with DPR",
    duration: "50 Hrs",
    qualification: "Civil Discipline",
    category: "Design",
    icon: <Ruler className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Road Survey Concept & Types of Roads",
      "Soil Investigation & Sub Grade Design",
      "Horizontal, Vertical Design",
      "Super Elevation & Curve Design",
      "Traffic Data & Pavement Design",
      "Drainage Design",
      "Safety and Environment",
      "Project & Examination"
    ]
  },
  {
    id: "HT023",
    title: "Certificate Course on Building Design with DPR",
    duration: "50 Hrs",
    qualification: "Civil Discipline",
    category: "Design",
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Basic Information of Building & Load Details",
      "Load Analysis & Building Elements",
      "Stair Case, Column Design",
      "Slab, Beam and Stair Case Design",
      "Column and Foundation Design",
      "Load combination",
      "RC details of slab, beam, staircase, column & foundation",
      "Overall Discussion, Submission of Project & Examination"
    ]
  },
  {
    id: "HT024",
    title: "Certificate Course on High-rise Building Design",
    duration: "50 Hrs",
    qualification: "Civil Discipline",
    category: "Design",
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    syllabus: [
      "Basic Information of Building & IS Code details",
      "Load Analysis & Building Elements",
      "Stair Case, Column and Structures Details",
      "Slab, Beam and Stair Case Design",
      "Column and Foundation Design",
      "Frame analysis of the building with load combination",
      "RC details of slab, beam, staircase, column & foundation",
      "Overall Discussion, Submission of Project & Examination"
    ]
  },
  {
    id: "HT025",
    title: "Certificate Course on Bridge Design with DPR",
    duration: "50 Hrs",
    qualification: "Civil Discipline",
    category: "Design",
    icon: <Anchor className="w-8 h-8 text-amber-400" />,
    syllabus: ["Bridge Survey", "Load Calculation", "Structural Design", "DPR Preparation"]
  },
  {
    id: "HT026",
    title: "Certificate Course on Ship Structures",
    duration: "50 Hrs",
    qualification: "Civil/Mechanical Discipline",
    category: "Design",
    icon: <Anchor className="w-8 h-8 text-amber-400" />,
    syllabus: ["Ship structural integrity", "Design fundamentals", "Marine engineering basics"]
  },
  {
    id: "HT027",
    title: "Certificate Course on Piping System of Ship",
    duration: "50 Hrs",
    qualification: "Civil/Mechanical Discipline",
    category: "Design",
    icon: <PenTool className="w-8 h-8 text-amber-400" />,
    syllabus: ["Piping Layout", "Material Selection", "Flow Analysis", "Marine Standards"]
  },
  {
    id: "HT028",
    title: "Land Survey Training (Vocational)",
    duration: "40 Hrs",
    qualification: "ITI Survey/Diploma Survey/B.Tech",
    category: "Vocational",
    icon: <MapPin className="w-8 h-8 text-amber-400" />,
    syllabus: ["Hand GPS", "Total Station", "DGPS & Drawing", "Data Processing"]
  },
  {
    id: "HT029",
    title: "DPR Design on Road, Building",
    duration: "40 Hrs",
    qualification: "B.Tech Civil",
    category: "Vocational",
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    syllabus: ["DPR Creation", "Cost Estimation", "Design Validation"]
  },
  {
    id: "HT030",
    title: "DPR Design on Road, Bridge",
    duration: "40 Hrs",
    qualification: "B.Tech Civil",
    category: "Vocational",
    icon: <Anchor className="w-8 h-8 text-amber-400" />,
    syllabus: ["Bridge DPR", "Road DPR", "Structural Analysis"]
  }
];