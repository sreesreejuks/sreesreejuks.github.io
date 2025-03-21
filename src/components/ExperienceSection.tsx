import React, { useState } from 'react';

interface Experience {
  logo: string;
  company: string;
  companyUrl: string;
  period: string;
  role: string;
  details: string[];
  skills: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (company: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  const getVisibleDetails = (details: string[], isExpanded: boolean) => {
    return isExpanded ? details : details.slice(0, 3);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold">Experience</h2>
        <span className="text-gray-600">8 years</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-50 rounded-3xl p-6 h-full flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              <img src={exp.logo} alt={exp.company} className="w-12 h-12" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <a 
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-blue-500 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-blue-500 px-3 py-1 bg-blue-50 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600">{exp.role}</p>
              </div>
            </div>
            <ul className="space-y-2 flex-grow">
              {getVisibleDetails(exp.details, expandedItems[exp.company]).map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              {exp.details.length > 4 && (
                <button
                  onClick={() => toggleExpand(exp.company)}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium mb-3"
                >
                  {expandedItems[exp.company] ? 'Show less' : 'Show more'}
                </button>
              )}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}