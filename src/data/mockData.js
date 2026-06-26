export const SITE_INFO = {
  name: 'Singh Commerce Classes',
  founder: 'Ashutosh Singh',
  motto: 'यद् भावं तद् भवति',
  mottoTransliteration: 'Yad Bhavam Tad Bhavati',
  mottoMeaning: 'As you think, so you become',
  phone: '+91-8800727377',
  phoneRaw: '918800727377',
  whatsappLink: 'https://wa.me/918800727377?text=Hello! I want to know more about admissions at Singh Commerce Classes.',
  address: 'B-242, Street No. 11, Main Market, Bhajanpura, New Delhi - 110053',
  mapLink: 'https://maps.app.goo.gl/iG9GwAa6Pyba8sc28',
  nearestMetro: 'Welcome Station (Pink Line) — 10 min by auto',
  workingHours: {
    weekday: 'Monday to Saturday: 9:00 AM — 7:00 PM',
    weekend: 'Sunday: 10:00 AM — 2:00 PM',
  },
  email: 'info@singhcommerceclasses.in',
  website: 'https://singhcommerceclasses.in',
};

export const COURSES = [
  {
    id: 'class-xi',
    name: 'Class XI Commerce',
    duration: '1 Academic Year',
    color: 'blue',
    colorClass: 'bg-blue-500',
    badgeClass: 'bg-blue-50 text-blue-700',
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    highlights: ['Exam-focused study material', 'Regular mock tests', 'Doubt clearing sessions', 'NCERT + Reference book coverage'],
    seatsLeft: 12,
    nextBatch: 'July 2025',
    icon: '📘',
  },
  {
    id: 'class-xii',
    name: 'Class XII Commerce',
    duration: '1 Academic Year',
    color: 'green',
    colorClass: 'bg-green-500',
    badgeClass: 'bg-green-50 text-green-700',
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    highlights: ['Board exam preparation', 'Regular mock tests', 'Previous year paper solving', 'Personal mentoring'],
    seatsLeft: 8,
    nextBatch: 'July 2025',
    icon: '📗',
  },
  {
    id: 'bcom',
    name: 'B.Com',
    duration: '3 Years (Semester-wise)',
    color: 'purple',
    colorClass: 'bg-purple-500',
    badgeClass: 'bg-purple-50 text-purple-700',
    subjects: ['Accountancy', 'Statistics', 'Income Tax', 'Business Law'],
    highlights: ['DU exam focused', 'Semester-wise coverage', 'Assignment support', 'CA Foundation bridge'],
    seatsLeft: 15,
    nextBatch: 'August 2025',
    icon: '📕',
  },
  {
    id: 'bba',
    name: 'B.B.A.',
    duration: '3 Years (Semester-wise)',
    color: 'orange',
    colorClass: 'bg-brand-orange',
    badgeClass: 'bg-brand-orange-light text-brand-orange',
    subjects: ['Business Management', 'Statistics', 'Business Law', 'Economics'],
    highlights: ['Industry-oriented teaching', 'Case study approach', 'Semester support', 'Presentation skills'],
    seatsLeft: 10,
    nextBatch: 'August 2025',
    icon: '📙',
  },
];

export const COURSE_OPTIONS = [
  { value: '', label: 'Select a Course' },
  { value: 'class-xi', label: 'Class XI' },
  { value: 'class-xii', label: 'Class XII' },
  { value: 'bcom-1', label: 'B.Com (1st Year)' },
  { value: 'bcom-2', label: 'B.Com (2nd Year)' },
  { value: 'bcom-3', label: 'B.Com (3rd Year)' },
  { value: 'bba', label: 'B.B.A.' },
  { value: 'not-sure', label: 'Not Sure' },
];

export const STATS = [
  { number: 500, suffix: '+', label: 'Students Enrolled', icon: '🎓' },
  { number: 10, suffix: '+', label: 'Years of Excellence', icon: '📚' },
  { number: 95, suffix: '%', label: 'Success Rate', icon: '✅' },
  { number: 50, suffix: '+', label: 'Board Toppers', icon: '🏆' },
];

export const FEATURES = [
  { icon: '📖', title: 'Subject Experts', description: 'Dedicated teachers for each subject, not generalists' },
  { icon: '📋', title: 'Structured Notes', description: 'Comprehensive, exam-oriented printed notes provided' },
  { icon: '🔄', title: 'Doubt Sessions', description: 'Weekly dedicated doubt-clearing sessions' },
  { icon: '📊', title: 'Regular Tests', description: 'Monthly mock tests with detailed performance reports' },
  { icon: '👨‍👩‍👧', title: 'Parent Connect', description: 'Regular PTMs and progress updates via WhatsApp' },
  { icon: '💡', title: 'Small Batches', description: 'Maximum 30 students per batch for personal attention' },
];

export const TOPPERS = [
  // ── Class XII — Real student data (sorted by best subject score) ──
  { id: 1,  name: 'Lakshit Jansal',    score: '98%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 98%, Economics: 90%, Business Studies: 95%', avatar: '/images/toppers/Lakshit Jamnal.png' },
  { id: 2,  name: 'Mansi Gupta',       score: '97%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 97%, Economics: 93%, Business Studies: 92%', avatar: '/images/toppers/Mansi Gupta.png' },
  { id: 3,  name: 'Kanishka',          score: '97%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 97%, Economics: 93%, Business Studies: 96%', avatar: '/images/toppers/Kanishka.png' },
  { id: 4,  name: 'Sakshi',            score: '97%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 97%, Economics: 96%, Business Studies: 90%', avatar: '/images/toppers/Sakshi.png' },
  { id: 5,  name: 'Siddhi Jain',       score: '97%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 97%, Economics: 92%, Business Studies: 90%', avatar: '/images/toppers/Siddhi Jain.png' },
  { id: 6,  name: 'Anshika Goswami',   score: '96%',  batch: '2025', category: 'Class XII', highlight: 'Economics: 96%', avatar: '/images/toppers/Anshika Goswami.png' },
  { id: 7,  name: 'Om Rawat',          score: '96%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 90%, Economics: 93%, Business Studies: 96%', avatar: '/images/toppers/Om Rawat.png' },
  { id: 8,  name: 'Kanika',            score: '96%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 94%, Economics: 92%, Business Studies: 96%', avatar: '/images/toppers/Kanika.png' },
  { id: 9,  name: 'Ayush Singh',       score: '93%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 92%, Economics: 93%, Business Studies: 83%', avatar: '/images/toppers/Ayush Singh.png' },
  { id: 10, name: 'Akshat Gupta',      score: '91%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 91%', avatar: 'https://placehold.co/80x80/E8621A/ffffff?text=AG' },
  { id: 11, name: 'Simran',            score: '90%',  batch: '2025', category: 'Class XII', highlight: 'Economics: 90%', avatar: '/images/toppers/Simran.png' },
  { id: 12, name: 'Sejal Singh',       score: '90%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 80%, Economics: 90%', avatar: '/images/toppers/Sejal Singh.png' },
  { id: 13, name: 'Siddharth Jain',    score: '85%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 85%', avatar: '/images/toppers/Siddharth Jain.png' },
  { id: 14, name: 'Gaurav Sharma',     score: '84%',  batch: '2025', category: 'Class XII', highlight: 'Business Studies: 84%', avatar: '/images/toppers/Gaurav Sharma.png' },
  { id: 15, name: 'Minal Panchal',     score: '83%',  batch: '2025', category: 'Class XII', highlight: 'Economics: 83%', avatar: '/images/toppers/Minal Panchal.png' },
  { id: 16, name: 'Neha',              score: '83%',  batch: '2025', category: 'Class XII', highlight: 'Economics: 83%', avatar: '/images/toppers/Neha.png' },
  { id: 17, name: 'Anshika Gupta',     score: '82%',  batch: '2025', category: 'Class XII', highlight: 'Business Studies: 82%', avatar: '/images/toppers/Anshika Gupta.png' },
  { id: 18, name: 'Pragya Joshi',      score: '82%',  batch: '2025', category: 'Class XII', highlight: 'Economics: 82%', avatar: 'https://placehold.co/80x80/1A56DB/ffffff?text=PJ' },
  { id: 19, name: 'Divyanshu',         score: '81%',  batch: '2025', category: 'Class XII', highlight: 'Accountancy: 81%', avatar: '/images/toppers/Divyanshu.png' },
  { id: 20, name: 'Palak',             score: '79%',  batch: '2025', category: 'Class XII', highlight: 'Economics: 79%', avatar: 'https://placehold.co/80x80/059669/ffffff?text=P' },
  { id: 21, name: 'Anushka',           score: '76%',  batch: '2025', category: 'Class XII', highlight: 'Economics: 76%', avatar: '/images/toppers/Anushka.png' },
  // ── Class XI — Existing (unchanged) ──
  { id: 22, name: 'Kunal Mehra',    score: '94.2%', batch: '2024', category: 'Class XI', highlight: 'Accountancy: 99/100', avatar: 'https://placehold.co/80x80/1A56DB/ffffff?text=KM' },
  { id: 23, name: 'Simran Kaur',    score: '93.6%', batch: '2024', category: 'Class XI', highlight: 'Economics: 96/100', avatar: 'https://placehold.co/80x80/059669/ffffff?text=SK' },
  { id: 24, name: 'Vikash Yadav',   score: '92.0%', batch: '2023', category: 'Class XI', highlight: 'Business Studies: 95/100', avatar: 'https://placehold.co/80x80/F59E0B/ffffff?text=VY' },
  { id: 25, name: 'Ananya Joshi',   score: '91.4%', batch: '2023', category: 'Class XI', highlight: 'Accountancy: 93/100', avatar: 'https://placehold.co/80x80/0B2545/ffffff?text=AJ' },
  // ── B.Com — Existing (unchanged) ──
  { id: 26, name: 'Ravi Kumar',     score: '88.5%', batch: '2024', category: 'B.Com', highlight: 'Income Tax: 94/100', avatar: 'https://placehold.co/80x80/E8621A/ffffff?text=RK' },
  { id: 27, name: 'Megha Agarwal',  score: '87.2%', batch: '2023', category: 'B.Com', highlight: 'Accountancy: 91/100', avatar: 'https://placehold.co/80x80/1A56DB/ffffff?text=MA' },
  { id: 28, name: 'Deepak Sharma',  score: '86.8%', batch: '2023', category: 'B.Com', highlight: 'Business Law: 89/100', avatar: 'https://placehold.co/80x80/059669/ffffff?text=DS' },
  { id: 29, name: 'Priti Singh',    score: '85.5%', batch: '2022', category: 'B.Com', highlight: 'Statistics: 88/100', avatar: 'https://placehold.co/80x80/F59E0B/ffffff?text=PS' },
  { id: 30, name: 'Amit Tiwari',    score: '84.9%', batch: '2022', category: 'B.Com', highlight: 'Accountancy: 90/100', avatar: 'https://placehold.co/80x80/0B2545/ffffff?text=AT' },
];


export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    batch: 'Class XII, 2024 Batch',
    rating: 5,
    text: "Ashutosh sir's way of explaining Accountancy made even the most complex journal entries feel simple. Scored 92 in Boards!",
    avatar: 'https://placehold.co/40x40/E8621A/ffffff?text=PS',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    batch: 'B.Com 2nd Year',
    rating: 5,
    text: "The notes provided are exam-focused and complete. I didn't need any other study material.",
    avatar: 'https://placehold.co/40x40/1A56DB/ffffff?text=RV',
  },
  {
    id: 3,
    name: 'Anjali Gupta',
    batch: 'Class XI, 2024 Batch',
    rating: 5,
    text: "Small batch size meant I could ask doubts without hesitation. Best decision for my Class XI prep.",
    avatar: 'https://placehold.co/40x40/059669/ffffff?text=AG',
  },
  {
    id: 4,
    name: 'Mohit Agarwal',
    batch: 'Class XII, 2023 Batch',
    rating: 5,
    text: "The regular mock tests and detailed analysis helped me understand my weak areas. Went from 70% to 91% in boards.",
    avatar: 'https://placehold.co/40x40/F59E0B/ffffff?text=MA',
  },
  {
    id: 5,
    name: 'Sneha Patel',
    batch: 'B.Com 1st Year',
    rating: 5,
    text: "Ashutosh sir doesn't just teach subjects — he teaches how to think. The conceptual clarity I gained here is unmatched.",
    avatar: 'https://placehold.co/40x40/0B2545/ffffff?text=SP',
  },
  {
    id: 6,
    name: 'Karan Malhotra',
    batch: 'Class XI, 2023 Batch',
    rating: 5,
    text: "The WhatsApp doubt support is a game changer. I could get help even at 10 PM before exams. Truly dedicated teaching.",
    avatar: 'https://placehold.co/40x40/E8621A/ffffff?text=KM',
  },
];

export const SUCCESS_STORIES = [
  {
    id: 1,
    name: 'Aarav Sharma',
    batch: 'Class XII, 2024 Batch',
    avatar: 'https://placehold.co/60x60/E8621A/ffffff?text=AS',
    text: "When I joined Singh Commerce Classes, I was struggling with Accountancy. Ashutosh sir's patient teaching and structured approach transformed my understanding completely. I went from barely passing to scoring 96.4% in my boards. The regular tests and personalized feedback were crucial to my success.",
  },
  {
    id: 2,
    name: 'Nisha Gupta',
    batch: 'Class XII, 2024 Batch',
    avatar: 'https://placehold.co/60x60/1A56DB/ffffff?text=NG',
    text: "I was confused about choosing between multiple coaching centers. From the very first demo class, I knew Singh Commerce Classes was different. The small batch size, quality notes, and Ashutosh sir's dedication made all the difference. Scored 94.8% and now pursuing CA.",
  },
  {
    id: 3,
    name: 'Ravi Kumar',
    batch: 'B.Com, 2024 Batch',
    avatar: 'https://placehold.co/60x60/059669/ffffff?text=RK',
    text: "As a B.Com student, finding good coaching in Bhajanpura was tough. Singh Commerce Classes not only covered my university syllabus but also prepared me for competitive exams. The income tax and business law classes were exceptionally well-taught.",
  },
];

export const NOTES = [
  { id: 1, title: 'Chapter 1 — Introduction to Accountancy (Notes)', subject: 'Accountancy', class: 'Class XI', type: 'PDF Notes', uploadDate: 'June 2025', size: '2.4 MB' },
  { id: 2, title: 'Journal Entries Practice Set 1', subject: 'Accountancy', class: 'Class XI', type: 'Practice Questions', uploadDate: 'June 2025', size: '1.8 MB' },
  { id: 3, title: 'Demand and Supply — Concept Notes', subject: 'Economics', class: 'Class XI', type: 'PDF Notes', uploadDate: 'May 2025', size: '3.1 MB' },
  { id: 4, title: 'Business Studies Ch. 3 — Nature of Business', subject: 'Business Studies', class: 'Class XI', type: 'PDF Notes', uploadDate: 'May 2025', size: '2.0 MB' },
  { id: 5, title: 'Class XII Accounts — Depreciation Notes', subject: 'Accountancy', class: 'Class XII', type: 'PDF Notes', uploadDate: 'June 2025', size: '2.7 MB' },
  { id: 6, title: 'Partnership Accounts Practice Set', subject: 'Accountancy', class: 'Class XII', type: 'Practice Questions', uploadDate: 'June 2025', size: '1.5 MB' },
  { id: 7, title: 'Macroeconomics — National Income', subject: 'Economics', class: 'Class XII', type: 'PDF Notes', uploadDate: 'May 2025', size: '2.9 MB' },
  { id: 8, title: 'Business Studies — Marketing Management', subject: 'Business Studies', class: 'Class XII', type: 'PDF Notes', uploadDate: 'May 2025', size: '2.2 MB' },
  { id: 9, title: 'Previous Year Paper — Accountancy 2024', subject: 'Accountancy', class: 'Class XII', type: 'Previous Year Papers', uploadDate: 'April 2025', size: '4.1 MB' },
  { id: 10, title: 'B.Com Sem 1 — Financial Accounting Notes', subject: 'Accountancy', class: 'B.Com', type: 'PDF Notes', uploadDate: 'June 2025', size: '3.5 MB' },
  { id: 11, title: 'Statistics — Measures of Central Tendency', subject: 'Statistics', class: 'B.Com', type: 'PDF Notes', uploadDate: 'May 2025', size: '2.1 MB' },
  { id: 12, title: 'Income Tax — Salary Computation Notes', subject: 'Income Tax', class: 'B.Com', type: 'PDF Notes', uploadDate: 'June 2025', size: '2.8 MB' },
  { id: 13, title: 'Business Law — Contract Act Summary', subject: 'Business Law', class: 'B.Com', type: 'PDF Notes', uploadDate: 'May 2025', size: '1.9 MB' },
  { id: 14, title: 'B.B.A. — Principles of Management', subject: 'Business Management', class: 'B.B.A.', type: 'PDF Notes', uploadDate: 'June 2025', size: '2.6 MB' },
  { id: 15, title: 'Business Law — Sale of Goods Act', subject: 'Business Law', class: 'B.B.A.', type: 'PDF Notes', uploadDate: 'May 2025', size: '1.7 MB' },
  { id: 16, title: 'Economics — Micro & Macro Concepts', subject: 'Economics', class: 'B.B.A.', type: 'PDF Notes', uploadDate: 'June 2025', size: '3.2 MB' },
  { id: 17, title: 'Statistics Practice Questions — B.Com', subject: 'Statistics', class: 'B.Com', type: 'Practice Questions', uploadDate: 'April 2025', size: '1.4 MB' },
  { id: 18, title: 'Previous Year Paper — Economics 2024', subject: 'Economics', class: 'Class XII', type: 'Previous Year Papers', uploadDate: 'April 2025', size: '3.8 MB' },
];

export const LECTURES = [
  {
    moduleId: 1,
    moduleName: 'Accountancy',
    totalLectures: 12,
    lectures: [
      { id: 1, title: 'Introduction to Accountancy', duration: '45 min', status: 'watched' },
      { id: 2, title: 'Journal Entries — Part 1', duration: '52 min', status: 'current' },
      { id: 3, title: 'Journal Entries — Part 2', duration: '48 min', status: 'locked' },
      { id: 4, title: 'Ledger Posting', duration: '38 min', status: 'locked' },
      { id: 5, title: 'Trial Balance', duration: '42 min', status: 'locked' },
      { id: 6, title: 'Depreciation Methods', duration: '55 min', status: 'locked' },
      { id: 7, title: 'Bank Reconciliation Statement', duration: '40 min', status: 'locked' },
      { id: 8, title: 'Rectification of Errors', duration: '46 min', status: 'locked' },
      { id: 9, title: 'Bills of Exchange', duration: '35 min', status: 'locked' },
      { id: 10, title: 'Financial Statements — Part 1', duration: '50 min', status: 'locked' },
      { id: 11, title: 'Financial Statements — Part 2', duration: '47 min', status: 'locked' },
      { id: 12, title: 'Revision & Practice', duration: '60 min', status: 'locked' },
    ],
  },
  {
    moduleId: 2,
    moduleName: 'Economics',
    totalLectures: 10,
    lectures: [
      { id: 13, title: 'Introduction to Micro Economics', duration: '40 min', status: 'locked' },
      { id: 14, title: 'Demand and Supply', duration: '55 min', status: 'locked' },
      { id: 15, title: 'Elasticity of Demand', duration: '42 min', status: 'locked' },
      { id: 16, title: 'Production and Costs', duration: '48 min', status: 'locked' },
      { id: 17, title: 'Market Forms — Perfect Competition', duration: '45 min', status: 'locked' },
      { id: 18, title: 'Market Forms — Monopoly', duration: '38 min', status: 'locked' },
      { id: 19, title: 'National Income Accounting', duration: '52 min', status: 'locked' },
      { id: 20, title: 'Money and Banking', duration: '44 min', status: 'locked' },
      { id: 21, title: 'Government Budget', duration: '36 min', status: 'locked' },
      { id: 22, title: 'Balance of Payments', duration: '40 min', status: 'locked' },
    ],
  },
  {
    moduleId: 3,
    moduleName: 'Business Studies',
    totalLectures: 8,
    lectures: [
      { id: 23, title: 'Nature and Purpose of Business', duration: '35 min', status: 'locked' },
      { id: 24, title: 'Forms of Business Organisation', duration: '42 min', status: 'locked' },
      { id: 25, title: 'Business Environment', duration: '38 min', status: 'locked' },
      { id: 26, title: 'Planning and Organising', duration: '45 min', status: 'locked' },
      { id: 27, title: 'Staffing and Directing', duration: '40 min', status: 'locked' },
      { id: 28, title: 'Controlling', duration: '35 min', status: 'locked' },
      { id: 29, title: 'Marketing Management', duration: '50 min', status: 'locked' },
      { id: 30, title: 'Financial Management', duration: '48 min', status: 'locked' },
    ],
  },
];

export const DASHBOARD_STATS = [
  { icon: '📚', label: 'Notes Accessed', value: 12, color: 'bg-blue-50 text-royal-blue' },
  { icon: '🎬', label: 'Videos Watched', value: '8 of 24', color: 'bg-green-50 text-success' },
  { icon: '📝', label: 'Assignments Done', value: '3 of 5', color: 'bg-brand-orange-light text-brand-orange' },
];

export const RECENT_ACTIVITY = [
  { subject: 'Accountancy', item: 'Journal Entries — Part 1', type: 'Video', date: 'June 7, 2025', status: 'New' },
  { subject: 'Economics', item: 'Demand & Supply Notes', type: 'PDF', date: 'June 6, 2025', status: 'Viewed' },
  { subject: 'Accountancy', item: 'Chapter 1 Practice Set', type: 'Assignment', date: 'June 5, 2025', status: 'Downloaded' },
  { subject: 'Business Studies', item: 'Nature of Business Notes', type: 'PDF', date: 'June 4, 2025', status: 'Viewed' },
  { subject: 'Accountancy', item: 'Introduction to Accountancy', type: 'Video', date: 'June 3, 2025', status: 'Viewed' },
];

export const PREMIUM_FEATURES = [
  { icon: '🎬', title: 'Video Lectures', description: '30+ hours of recorded lectures by Ashutosh sir covering all 3 subjects' },
  { icon: '📄', title: 'PDF Notes', description: 'Complete subject notes, practice sets, and previous year papers' },
  { icon: '💬', title: 'Doubt Support', description: 'Weekly live doubt sessions + WhatsApp support group access' },
];

export const PREMIUM_CURRICULUM = {
  Accountancy: [
    { chapter: 1, name: 'Introduction to Accountancy', lectures: 3, duration: '~45 mins' },
    { chapter: 2, name: 'Journal Entries', lectures: 4, duration: '~60 mins' },
    { chapter: 3, name: 'Ledger & Trial Balance', lectures: 3, duration: '~50 mins' },
    { chapter: 4, name: 'Depreciation', lectures: 2, duration: '~40 mins' },
    { chapter: 5, name: 'Bank Reconciliation', lectures: 2, duration: '~35 mins' },
    { chapter: 6, name: 'Rectification of Errors', lectures: 2, duration: '~30 mins' },
    { chapter: 7, name: 'Bills of Exchange', lectures: 2, duration: '~35 mins' },
    { chapter: 8, name: 'Financial Statements', lectures: 4, duration: '~55 mins' },
  ],
  Economics: [
    { chapter: 1, name: 'Micro Economics Basics', lectures: 2, duration: '~40 mins' },
    { chapter: 2, name: 'Demand & Supply', lectures: 3, duration: '~55 mins' },
    { chapter: 3, name: 'Elasticity', lectures: 2, duration: '~35 mins' },
    { chapter: 4, name: 'Production & Costs', lectures: 2, duration: '~40 mins' },
    { chapter: 5, name: 'Market Forms', lectures: 3, duration: '~50 mins' },
    { chapter: 6, name: 'National Income', lectures: 2, duration: '~45 mins' },
    { chapter: 7, name: 'Money & Banking', lectures: 2, duration: '~40 mins' },
    { chapter: 8, name: 'Government Budget', lectures: 2, duration: '~35 mins' },
    { chapter: 9, name: 'Balance of Payments', lectures: 2, duration: '~30 mins' },
  ],
  'Business Studies': [
    { chapter: 1, name: 'Nature of Business', lectures: 2, duration: '~35 mins' },
    { chapter: 2, name: 'Forms of Organisation', lectures: 2, duration: '~40 mins' },
    { chapter: 3, name: 'Business Environment', lectures: 2, duration: '~35 mins' },
    { chapter: 4, name: 'Planning & Organising', lectures: 3, duration: '~45 mins' },
    { chapter: 5, name: 'Staffing & Directing', lectures: 2, duration: '~40 mins' },
    { chapter: 6, name: 'Controlling', lectures: 2, duration: '~30 mins' },
    { chapter: 7, name: 'Marketing Management', lectures: 3, duration: '~50 mins' },
    { chapter: 8, name: 'Financial Management', lectures: 2, duration: '~45 mins' },
  ],
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Toppers', path: '/toppers' },
  { name: 'Contact', path: '/contact' },
];

export const PORTAL_LINKS = [
  { name: 'Dashboard', path: '/portal/dashboard' },
  { name: 'Notes Library', path: '/portal/notes' },
  { name: 'Online Classes', path: '/portal/classes' },
];

export const FOOTER_COURSE_LINKS = [
  { name: 'Class XI', path: '/courses' },
  { name: 'Class XII', path: '/courses' },
  { name: 'B.Com', path: '/courses' },
  { name: 'B.B.A.', path: '/courses' },
];
