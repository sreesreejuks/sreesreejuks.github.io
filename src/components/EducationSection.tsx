import React from 'react';

interface Education {
  logo: string;
  degree: string;
  institution: string;
  period: string;
}

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-50 rounded-3xl p-6 flex items-center gap-6">
            <img src={edu.logo} alt={edu.institution} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
            </div>
            <span className="text-gray-600">{edu.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}