import React, { useState } from 'react';

interface Certification {
  logo: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  skills: string[];
}

interface Training {
  logo: string;
  name: string;
  provider: string;
  instructor?: string;
  status: string;
  link: string;
}

interface CertificationSectionProps {
  certifications: Certification[];
  training: Training[];
}

export function CertificationSection({ certifications, training }: CertificationSectionProps) {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (name: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Certifications & Training</h2>
      
      {/* Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-50 rounded-3xl p-6 h-full flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              <img src={cert.logo} alt={cert.issuer} className="w-12 h-12" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{cert.name}</h3>
                  <span className="text-blue-500 px-3 py-1 bg-blue-50 rounded-full text-sm">
                    {cert.date}
                  </span>
                </div>
                <p className="text-gray-600">{cert.issuer}</p>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Credential ID: {cert.credentialId}
                </a>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => toggleExpand(cert.name)}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                {expandedItems[cert.name] ? 'Show less' : 'Show more'}
              </button>
              {expandedItems[cert.name] && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Training */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {training.map((course, index) => (
          <div key={index} className="bg-gray-50 rounded-3xl p-6 h-full flex flex-col">
            <div className="flex items-start gap-4">
              <img src={course.logo} alt={course.provider} className="w-12 h-12" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                  <span className="text-green-500 px-3 py-1 bg-green-50 rounded-full text-sm">
                    {course.status}
                  </span>
                </div>
                <p className="text-gray-600">{course.provider}</p>
                {course.instructor && (
                  <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                )}
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  View Course
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}