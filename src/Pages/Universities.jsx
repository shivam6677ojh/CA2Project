import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../Component/Header';
import { FaUniversity, FaGraduationCap, FaBuilding, FaSchool } from 'react-icons/fa';

const Universities = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const universities = [
    // IITs
    {
      id: 1,
      name: 'Indian Institute of Technology Bombay',
      category: 'iit',
      type: 'Government',
      location: 'Mumbai, Maharashtra',
      established: '1958',
      description: 'Premier engineering institute in India, known for its excellence in technical education and research',
      courses: [
        'B.Tech in Computer Science',
        'B.Tech in Electrical Engineering',
        'B.Tech in Mechanical Engineering',
        'M.Tech in various specializations',
        'Ph.D. programs'
      ],
      admission: {
        undergraduate: 'JEE Advanced',
        postgraduate: 'GATE',
        phd: 'Written Test + Interview'
      },
      ranking: 'QS World Ranking: 172',
      notableAlumni: ['Narayana Murthy', 'Victor Menezes', 'Krishna Bharat']
    },
    // Private Universities
    {
      id: 2,
      name: 'Amity University – Uttar Pradesh',
      category: 'private',
      type: 'Private',
      location: 'Noida, Uttar Pradesh',
      established: '2005',
      description: 'Leading private university offering diverse programs across various disciplines',
      courses: [
        'Engineering',
        'Management',
        'Law',
        'Arts',
        'Science',
        'Medicine'
      ],
      admission: {
        undergraduate: 'Amity JEE/University Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various industry leaders and professionals']
    },
    {
      id: 3,
      name: 'VIT University (Vellore Institute of Technology)',
      category: 'private',
      type: 'Private',
      location: 'Vellore, Tamil Nadu',
      established: '1984',
      description: 'Premier private technical university known for its strong industry connections',
      courses: [
        'B.Tech in various disciplines',
        'M.Tech programs',
        'MBA',
        'MCA',
        'Ph.D. programs'
      ],
      admission: {
        undergraduate: 'VITEEE',
        postgraduate: 'GATE/University Entrance Test',
        phd: 'Written Test + Interview'
      },
      ranking: 'NIRF Ranking: Top 20',
      notableAlumni: ['Various industry leaders and entrepreneurs']
    },
    {
      id: 4,
      name: 'SRM Institute of Science and Technology',
      category: 'private',
      type: 'Private',
      location: 'Chennai, Tamil Nadu',
      established: '1985',
      description: 'Leading private university with strong focus on research and innovation',
      courses: [
        'Engineering',
        'Medicine',
        'Management',
        'Science',
        'Humanities'
      ],
      admission: {
        undergraduate: 'SRMJEEE',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 30',
      notableAlumni: ['Various industry leaders and researchers']
    },
    {
      id: 5,
      name: 'Shiv Nadar University',
      category: 'private',
      type: 'Private',
      location: 'Greater Noida, Uttar Pradesh',
      established: '2011',
      description: 'Research-focused private university with emphasis on interdisciplinary education',
      courses: [
        'Engineering',
        'Natural Sciences',
        'Humanities',
        'Management',
        'Art & Design'
      ],
      admission: {
        undergraduate: 'SNUSAT',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 50',
      notableAlumni: ['Various industry leaders and researchers']
    },
    {
      id: 6,
      name: 'Ashoka University',
      category: 'private',
      type: 'Private',
      location: 'Sonipat, Haryana',
      established: '2014',
      description: 'Liberal arts university with focus on interdisciplinary education',
      courses: [
        'Economics',
        'History',
        'Political Science',
        'English',
        'Psychology',
        'Mathematics'
      ],
      admission: {
        undergraduate: 'Ashoka Aptitude Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various scholars and professionals']
    },
    {
      id: 7,
      name: 'O.P. Jindal Global University',
      category: 'private',
      type: 'Private',
      location: 'Sonipat, Haryana',
      established: '2009',
      description: 'Leading private university with focus on law, business, and international studies',
      courses: [
        'Law',
        'Business',
        'International Affairs',
        'Public Policy',
        'Liberal Arts'
      ],
      admission: {
        undergraduate: 'JSAT',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 50',
      notableAlumni: ['Various legal and business professionals']
    },
    {
      id: 8,
      name: 'Manipal Academy of Higher Education',
      category: 'private',
      type: 'Private',
      location: 'Manipal, Karnataka',
      established: '1953',
      description: 'Leading private university offering diverse programs in various fields',
      courses: [
        'Engineering',
        'Medicine',
        'Dentistry',
        'Pharmacy',
        'Management',
        'Humanities'
      ],
      admission: {
        undergraduate: 'MET',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 50',
      notableAlumni: ['Rajeev Suri', 'T.V. Mohandas Pai', 'Vijay Mallya']
    },
    {
      id: 9,
      name: 'Christ (Deemed to be University)',
      category: 'private',
      type: 'Private',
      location: 'Bangalore, Karnataka',
      established: '1969',
      description: 'Leading private university with focus on liberal arts and professional education',
      courses: [
        'Arts',
        'Science',
        'Commerce',
        'Management',
        'Law',
        'Social Work'
      ],
      admission: {
        undergraduate: 'University Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various professionals and scholars']
    },
    {
      id: 10,
      name: 'BITS Pilani',
      category: 'private',
      type: 'Private',
      location: 'Pilani, Rajasthan',
      established: '1964',
      description: 'Premier private technical university known for its innovative education system',
      courses: [
        'B.E. in various disciplines',
        'M.E. programs',
        'Ph.D. programs',
        'Integrated First Degree programs'
      ],
      admission: {
        undergraduate: 'BITSAT',
        postgraduate: 'GATE/Interview',
        phd: 'Written Test + Interview'
      },
      ranking: 'NIRF Ranking: Top 20',
      notableAlumni: ['Kumar Mangalam Birla', 'Sanjay Mehrotra', 'Rahul Sharma']
    },
    {
      id: 11,
      name: 'Lovely Professional University',
      category: 'private',
      type: 'Private',
      location: 'Phagwara, Punjab',
      established: '2005',
      description: 'Large private university offering diverse programs across various disciplines',
      courses: [
        'Engineering',
        'Management',
        'Law',
        'Pharmacy',
        'Agriculture',
        'Design'
      ],
      admission: {
        undergraduate: 'LPUNEST',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various industry professionals']
    },
    {
      id: 12,
      name: 'Symbiosis International University',
      category: 'private',
      type: 'Private',
      location: 'Pune, Maharashtra',
      established: '2002',
      description: 'Leading private university with focus on management and liberal arts education',
      courses: [
        'Management',
        'Law',
        'Health Sciences',
        'Media & Communication',
        'Design'
      ],
      admission: {
        undergraduate: 'SET',
        postgraduate: 'SNAP',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 50',
      notableAlumni: ['Various business leaders and professionals']
    },
    {
      id: 13,
      name: 'Flame University',
      category: 'private',
      type: 'Private',
      location: 'Pune, Maharashtra',
      established: '2015',
      description: 'Liberal arts university with focus on interdisciplinary education',
      courses: [
        'Business',
        'Liberal Arts',
        'Communication',
        'Psychology',
        'Economics'
      ],
      admission: {
        undergraduate: 'FLAME Entrance Aptitude Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various professionals and scholars']
    },
    {
      id: 14,
      name: 'Kalinga Institute of Industrial Technology',
      category: 'private',
      type: 'Private',
      location: 'Bhubaneswar, Odisha',
      established: '1992',
      description: 'Leading private technical university with focus on research and innovation',
      courses: [
        'Engineering',
        'Management',
        'Law',
        'Medicine',
        'Dentistry',
        'Pharmacy'
      ],
      admission: {
        undergraduate: 'KIITEE',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 30',
      notableAlumni: ['Various industry leaders and researchers']
    },
    {
      id: 15,
      name: 'Chandigarh University',
      category: 'private',
      type: 'Private',
      location: 'Mohali, Punjab',
      established: '2012',
      description: 'Private university offering diverse programs across various disciplines',
      courses: [
        'Engineering',
        'Management',
        'Law',
        'Pharmacy',
        'Agriculture',
        'Design'
      ],
      admission: {
        undergraduate: 'CUCET',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various industry professionals']
    },
    {
      id: 16,
      name: 'UPES (University of Petroleum and Energy Studies)',
      category: 'private',
      type: 'Private',
      location: 'Dehradun, Uttarakhand',
      established: '2003',
      description: 'Specialized university focusing on energy and petroleum studies',
      courses: [
        'Petroleum Engineering',
        'Energy Management',
        'Law',
        'Design',
        'Business'
      ],
      admission: {
        undergraduate: 'UPESMET',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various energy sector professionals']
    },
    {
      id: 17,
      name: 'Parul University',
      category: 'private',
      type: 'Private',
      location: 'Vadodara, Gujarat',
      established: '2015',
      description: 'Private university offering diverse programs across various disciplines',
      courses: [
        'Engineering',
        'Management',
        'Medicine',
        'Pharmacy',
        'Design',
        'Law'
      ],
      admission: {
        undergraduate: 'PU Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 200',
      notableAlumni: ['Various industry professionals']
    },
    {
      id: 18,
      name: 'Nirma University',
      category: 'private',
      type: 'Private',
      location: 'Ahmedabad, Gujarat',
      established: '2003',
      description: 'Private university with focus on professional education and research',
      courses: [
        'Engineering',
        'Management',
        'Pharmacy',
        'Law',
        'Science'
      ],
      admission: {
        undergraduate: 'NU Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various industry professionals']
    },
    {
      id: 19,
      name: 'Dhirubhai Ambani Institute of Information and Communication Technology',
      category: 'private',
      type: 'Private',
      location: 'Gandhinagar, Gujarat',
      established: '2001',
      description: 'Premier institute focused on ICT education and research',
      courses: [
        'B.Tech in ICT',
        'M.Tech in ICT',
        'Ph.D. in ICT'
      ],
      admission: {
        undergraduate: 'JEE Main',
        postgraduate: 'GATE',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 50',
      notableAlumni: ['Various ICT professionals']
    },
    {
      id: 20,
      name: 'Jaypee University of Information Technology',
      category: 'private',
      type: 'Private',
      location: 'Waknaghat, Himachal Pradesh',
      established: '2002',
      description: 'Technical university with focus on IT and related fields',
      courses: [
        'B.Tech in various disciplines',
        'M.Tech programs',
        'Ph.D. programs'
      ],
      admission: {
        undergraduate: 'JEE Main',
        postgraduate: 'GATE',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various IT professionals']
    },
    {
      id: 21,
      name: 'Azim Premji University',
      category: 'private',
      type: 'Private',
      location: 'Bangalore, Karnataka',
      established: '2010',
      description: 'University focused on education and development studies',
      courses: [
        'Education',
        'Development',
        'Public Policy',
        'Law',
        'Economics'
      ],
      admission: {
        undergraduate: 'University Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various education and development professionals']
    },
    {
      id: 22,
      name: 'REVA University',
      category: 'private',
      type: 'Private',
      location: 'Bangalore, Karnataka',
      established: '2013',
      description: 'Private university offering diverse programs across various disciplines',
      courses: [
        'Engineering',
        'Management',
        'Law',
        'Architecture',
        'Science',
        'Arts'
      ],
      admission: {
        undergraduate: 'REVA Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 200',
      notableAlumni: ['Various industry professionals']
    },
    {
      id: 23,
      name: 'BML Munjal University',
      category: 'private',
      type: 'Private',
      location: 'Gurgaon, Haryana',
      established: '2014',
      description: 'Private university with focus on management and technology education',
      courses: [
        'Management',
        'Engineering',
        'Commerce',
        'Law'
      ],
      admission: {
        undergraduate: 'BMU Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 200',
      notableAlumni: ['Various business professionals']
    },
    {
      id: 24,
      name: 'Presidency University',
      category: 'private',
      type: 'Private',
      location: 'Bangalore, Karnataka',
      established: '2013',
      description: 'Private university offering diverse programs across various disciplines',
      courses: [
        'Engineering',
        'Management',
        'Law',
        'Commerce',
        'Arts',
        'Science'
      ],
      admission: {
        undergraduate: 'University Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 200',
      notableAlumni: ['Various industry professionals']
    },
    {
      id: 25,
      name: 'GITAM (Gandhi Institute of Technology and Management)',
      category: 'private',
      type: 'Private',
      location: 'Visakhapatnam, Andhra Pradesh',
      established: '1980',
      description: 'Private university with focus on technical and management education',
      courses: [
        'Engineering',
        'Management',
        'Pharmacy',
        'Science',
        'Law'
      ],
      admission: {
        undergraduate: 'GITAM Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 100',
      notableAlumni: ['Various industry professionals']
    },
    {
      id: 26,
      name: 'SRM University, AP',
      category: 'private',
      type: 'Private',
      location: 'Amaravati, Andhra Pradesh',
      established: '2017',
      description: 'Private university offering diverse programs across various disciplines',
      courses: [
        'Engineering',
        'Management',
        'Science',
        'Arts',
        'Law'
      ],
      admission: {
        undergraduate: 'SRM AP Entrance Test',
        postgraduate: 'University Entrance Test',
        phd: 'Research Proposal + Interview'
      },
      ranking: 'NIRF Ranking: Top 200',
      notableAlumni: ['Various industry professionals']
    }
  ];

  const filteredUniversities = activeTab === 'all' 
    ? universities 
    : universities.filter(uni => uni.category === activeTab);

  const getIcon = (category) => {
    switch (category) {
      case 'iit':
        return <FaUniversity className="text-4xl text-blue-500" />;
      case 'iiit':
        return <FaBuilding className="text-4xl text-green-500" />;
      case 'private':
        return <FaGraduationCap className="text-4xl text-purple-500" />;
      default:
        return <FaSchool className="text-4xl text-orange-500" />;
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
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'all' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            All Universities
          </button>
          <button
            onClick={() => setActiveTab('iit')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'iit' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            IITs
          </button>
          <button
            onClick={() => setActiveTab('iiit')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'iiit' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            IIITs
          </button>
          <button
            onClick={() => setActiveTab('private')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'private' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Private
          </button>
        </div>
      </div>

      {/* University Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Universities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUniversities.map((university) => (
            <motion.div
              key={university.id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6"
            >
              <div className="flex justify-center mb-4">
                {getIcon(university.category)}
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">{university.name}</h3>
              <p className="text-sm text-gray-300 mb-2 text-center">{university.type}</p>
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">{university.description}</p>
              <button
                onClick={() => setSelectedUniversity(university)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* University Details Modal */}
      {selectedUniversity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedUniversity(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-gray-800 rounded-lg max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{selectedUniversity.name}</h2>
              <button
                onClick={() => setSelectedUniversity(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex justify-center mb-6">
              {getIcon(selectedUniversity.category)}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{selectedUniversity.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p><span className="font-semibold">Type:</span> {selectedUniversity.type}</p>
                    <p><span className="font-semibold">Location:</span> {selectedUniversity.location}</p>
                    <p><span className="font-semibold">Established:</span> {selectedUniversity.established}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Ranking:</span> {selectedUniversity.ranking}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Courses Offered</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedUniversity.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Admission Process</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-semibold">Undergraduate:</span> {selectedUniversity.admission.undergraduate}</p>
                  <p><span className="font-semibold">Postgraduate:</span> {selectedUniversity.admission.postgraduate}</p>
                  <p><span className="font-semibold">Ph.D.:</span> {selectedUniversity.admission.phd}</p>
                </div>
              </div>
              {selectedUniversity.notableAlumni && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Notable Alumni</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {selectedUniversity.notableAlumni.map((alumni, index) => (
                      <li key={index}>{alumni}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Universities; 