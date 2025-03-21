import React, { useState } from 'react';

interface Achievement {
  logo: string;
  title: string;
  organization: string;
  date: string;
  description: string[];
  impact: string[];
}

interface AchievementSectionProps {
  achievements: Achievement[];
}

export function AchievementSection({ achievements }: AchievementSectionProps) {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-50 rounded-3xl p-6 h-full flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              <img src={achievement.logo} alt={achievement.organization} className="w-12 h-12" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <span className="text-blue-500 px-3 py-1 bg-blue-50 rounded-full text-sm">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-gray-600">{achievement.organization}</p>
              </div>
            </div>
            <ul className="space-y-2 flex-grow">
              {achievement.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => toggleExpand(achievement.title)}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                {expandedItems[achievement.title] ? 'Show less' : 'Show more'}
              </button>
              {expandedItems[achievement.title] && (
                <div className="mt-3">
                  <h4 className="font-medium mb-2">Impact:</h4>
                  <ul className="space-y-2">
                    {achievement.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}