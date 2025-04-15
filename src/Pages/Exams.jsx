import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '../Component/Header';
import { FaGraduationCap, FaBook, FaUniversity, FaFlask, FaChartBar, FaGlobe } from 'react-icons/fa';

const Exams = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const exams = [
    // Engineering Exams
    {
      id: 1,
      name: 'JEE Main',
      category: 'engineering',
      type: 'National Level',
      conductingBody: 'National Testing Agency (NTA)',
      frequency: 'Twice a year (January & April)',
      description: 'National level entrance exam for admission to undergraduate engineering programs in NITs, IIITs, and other participating institutions',
      eligibility: 'Class 12 with Physics, Chemistry, and Mathematics',
      syllabus: [
        'Physics',
        'Chemistry',
        'Mathematics'
      ],
      pattern: {
        mode: 'Computer Based Test',
        duration: '3 hours',
        sections: 3,
        questions: 90,
        marking: '+4 for correct, -1 for incorrect'
      },
      importantDates: {
        registration: 'December - January',
        exam: 'January & April',
        result: 'Within 1 month of exam'
      },
      officialWebsite: 'https://jeemain.nta.nic.in/'
    },
    {
      id: 2,
      name: 'JEE Advanced',
      category: 'engineering',
      type: 'National Level',
      conductingBody: 'IITs (Rotating Basis)',
      frequency: 'Once a year (May)',
      description: 'Second stage of IIT entrance exam for admission to undergraduate programs in IITs',
      eligibility: 'Top 2,50,000 JEE Main qualifiers',
      syllabus: [
        'Physics',
        'Chemistry',
        'Mathematics'
      ],
      pattern: {
        mode: 'Computer Based Test',
        duration: '3 hours per paper (2 papers)',
        sections: 3,
        questions: 54,
        marking: 'Varies by question type'
      },
      importantDates: {
        registration: 'April - May',
        exam: 'May',
        result: 'June'
      },
      officialWebsite: 'https://jeeadv.ac.in/'
    },
    // Medical Exams
    {
      id: 3,
      name: 'NEET',
      category: 'medical',
      type: 'National Level',
      conductingBody: 'National Testing Agency (NTA)',
      frequency: 'Once a year (May)',
      description: 'National level entrance exam for admission to undergraduate medical programs',
      eligibility: 'Class 12 with Physics, Chemistry, and Biology',
      syllabus: [
        'Physics',
        'Chemistry',
        'Biology'
      ],
      pattern: {
        mode: 'Pen and Paper Based Test',
        duration: '3 hours 20 minutes',
        sections: 3,
        questions: 180,
        marking: '+4 for correct, -1 for incorrect'
      },
      importantDates: {
        registration: 'December - January',
        exam: 'May',
        result: 'June'
      },
      officialWebsite: 'https://neet.nta.nic.in/'
    },
    // Government Service Exams
    {
      id: 4,
      name: 'UPSC Civil Services',
      category: 'government',
      type: 'National Level',
      conductingBody: 'Union Public Service Commission (UPSC)',
      frequency: 'Once a year',
      description: 'National level exam for recruitment to various civil services of the Government of India',
      eligibility: 'Bachelor\'s degree in any discipline',
      syllabus: [
        'General Studies',
        'Optional Subject',
        'Essay',
        'Current Affairs'
      ],
      pattern: {
        mode: 'Pen and Paper Based Test',
        duration: 'Varies by stage',
        stages: 3,
        marking: 'Varies by stage'
      },
      importantDates: {
        registration: 'February - March',
        prelims: 'June',
        mains: 'September',
        interview: 'January - April'
      },
      officialWebsite: 'https://upsc.gov.in/'
    },
    {
      id: 5,
      name: 'SSC CGL',
      category: 'government',
      subject: 'General Intelligence, English, Quantitative Aptitude',
      description: 'Staff Selection Commission Combined Graduate Level examination',
      requirements: ['Bachelor\'s degree', 'Age limit: 18-32 years', 'Indian citizenship'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e1f3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      importantDates: ['Tier 1: July 2024', 'Tier 2: October 2024'],
      syllabus: ['General Intelligence', 'English Language', 'Quantitative Aptitude', 'General Awareness']
    },
    // University Entrance Exams
    {
      id: 6,
      name: 'CUET',
      category: 'university',
      subject: 'Domain Subjects, General Test, Language',
      description: 'Common University Entrance Test for central universities',
      requirements: ['Class 12 or equivalent', 'Age limit: No upper limit'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      importantDates: ['Registration: February 2024', 'Exam: May 2024'],
      syllabus: ['Domain-specific subjects', 'General Test', 'Language Test']
    },
    {
      id: 7,
      name: 'LPUNEST',
      category: 'university',
      subject: 'Engineering, Management, Law, Design',
      description: 'Lovely Professional University National Entrance and Scholarship Test',
      requirements: ['Class 12 or equivalent', 'Age limit: No upper limit'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      importantDates: ['Multiple sessions throughout the year'],
      syllabus: ['Program-specific subjects', 'General Aptitude', 'English Language']
    },
    // Post-Graduation Exams
    {
      id: 8,
      name: 'GATE',
      category: 'postgraduate',
      type: 'National Level',
      conductingBody: 'IITs (Rotating Basis)',
      frequency: 'Once a year (February)',
      description: 'National level entrance exam for admission to postgraduate programs in IITs, NITs, and other institutions',
      eligibility: 'Bachelor\'s degree in Engineering/Technology or Master\'s degree in Science',
      syllabus: [
        'Core subject knowledge',
        'General Aptitude',
        'Engineering Mathematics'
      ],
      pattern: {
        mode: 'Computer Based Test',
        duration: '3 hours',
        sections: 2,
        questions: 65,
        marking: '+1 or +2 for correct, -1/3 for incorrect'
      },
      importantDates: {
        registration: 'August - September',
        exam: 'February',
        result: 'March'
      },
      officialWebsite: 'https://gate.iitk.ac.in/'
    },
    {
      id: 9,
      name: 'CAT',
      category: 'management',
      type: 'National Level',
      conductingBody: 'Indian Institutes of Management (IIMs)',
      frequency: 'Once a year (November)',
      description: 'National level entrance exam for admission to MBA programs in IIMs and other top B-schools',
      eligibility: 'Bachelor\'s degree with 50% marks',
      syllabus: [
        'Quantitative Ability',
        'Verbal Ability',
        'Data Interpretation',
        'Logical Reasoning'
      ],
      pattern: {
        mode: 'Computer Based Test',
        duration: '2 hours',
        sections: 3,
        questions: 66,
        marking: '+3 for correct, -1 for incorrect'
      },
      importantDates: {
        registration: 'August - September',
        exam: 'November',
        result: 'January'
      },
      officialWebsite: 'https://iimcat.ac.in/'
    },
    // Language Exams
    {
      id: 10,
      name: 'IELTS',
      category: 'language',
      subject: 'English Language',
      description: 'International English Language Testing System for study, work or migration',
      requirements: ['Valid passport', 'Registration fee', 'Basic English proficiency'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00ada094a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      importantDates: ['Multiple test dates throughout the year'],
      syllabus: ['Listening', 'Reading', 'Writing', 'Speaking'],
      bandScores: ['9: Expert User', '8: Very Good User', '7: Good User', '6: Competent User']
    }
  ];

  const filteredExams = activeTab === 'all' 
    ? exams 
    : exams.filter(exam => exam.category === activeTab);

  const getIcon = (category) => {
    switch (category) {
      case 'engineering':
        return <FaUniversity className="text-4xl text-blue-500" />;
      case 'medical':
        return <FaFlask className="text-4xl text-green-500" />;
      case 'government':
        return <FaGraduationCap className="text-4xl text-orange-500" />;
      case 'university':
        return <FaBook className="text-4xl text-purple-500" />;
      case 'postgraduate':
        return <FaChartBar className="text-4xl text-red-500" />;
      case 'language':
        return <FaGlobe className="text-4xl text-gray-500" />;
      default:
        return <FaBook className="text-4xl text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      {/* Category Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
              activeTab === 'all' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            All Exams
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
              activeTab === 'engineering' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Engineering
          </button>
          <button
            onClick={() => setActiveTab('medical')}
            className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
              activeTab === 'medical' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Medical
          </button>
          <button
            onClick={() => setActiveTab('government')}
            className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
              activeTab === 'government' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Government
          </button>
          <button
            onClick={() => setActiveTab('university')}
            className={`px-4 py-2 rounded-full text-sm cursor-pointer${
              activeTab === 'university' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            University
          </button>
          <button
            onClick={() => setActiveTab('postgraduate')}
            className={`px-4 py-2 rounded-full text-sm cursor-pointer${
              activeTab === 'postgraduate' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Postgraduate
          </button>
          <button
            onClick={() => setActiveTab('language')}
            className={`px-4 py-2 rounded-full text-sm cursor-pointer${
              activeTab === 'language' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Language
          </button>
        </div>
      </div>

      {/* Exam Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Entrance Exams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredExams.map((exam) => (
            <motion.div
              key={exam.id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6"
            >
              <div className="flex justify-center mb-4">
                {getIcon(exam.category)}
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">{exam.name}</h3>
              <p className="text-sm text-gray-300 mb-2 text-center">{exam.type}</p>
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">{exam.description}</p>
              <button
                onClick={() => setSelectedExam(exam)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Exam Details Modal */}
      {selectedExam && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedExam(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-gray-800 rounded-lg max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{selectedExam.name}</h2>
              <button
                onClick={() => setSelectedExam(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex justify-center mb-6">
              {getIcon(selectedExam.category)}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{selectedExam.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p><span className="font-semibold">Type:</span> {selectedExam.type}</p>
                    <p><span className="font-semibold">Conducting Body:</span> {selectedExam.conductingBody}</p>
                    <p><span className="font-semibold">Frequency:</span> {selectedExam.frequency}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Eligibility:</span> {selectedExam.eligibility}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Syllabus</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedExam.syllabus.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Exam Pattern</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-semibold">Mode:</span> {selectedExam.pattern.mode}</p>
                  <p><span className="font-semibold">Duration:</span> {selectedExam.pattern.duration}</p>
                  <p><span className="font-semibold">Sections:</span> {selectedExam.pattern.sections}</p>
                  <p><span className="font-semibold">Questions:</span> {selectedExam.pattern.questions}</p>
                  <p><span className="font-semibold">Marking Scheme:</span> {selectedExam.pattern.marking}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
                <div className="space-y-2 text-gray-300">
                  {Object.entries(selectedExam.importantDates).map(([key, value]) => (
                    <p key={key}>
                      <span className="font-semibold capitalize">{key}:</span> {value}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Official Website</h3>
                <a
                  href={selectedExam.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  {selectedExam.officialWebsite}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Exams; 