import React from 'react';
import { Header } from '../components/Header';
import { ProfileSection } from '../components/ProfileSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { SkillsSection } from '../components/SkillsSection';
import { EducationSection } from '../components/EducationSection';
import { CertificationSection } from '../components/CertificationSection';
import { AchievementSection } from '../components/AchievementSection';
import { Footer } from '../components/Footer';

import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { skillsData } from '../data/skills';
import { certificationsData } from '../data/certifications';
import { educationData } from '../data/education';
import { achievementsData } from '../data/achievements';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Header {...profileData.header} />
        <ProfileSection {...profileData.profile} />
        <ExperienceSection experiences={experienceData} />
        <SkillsSection categories={skillsData} />
        <CertificationSection 
          certifications={certificationsData.certifications}
          training={certificationsData.training}
        />
        <AchievementSection achievements={achievementsData} />
        <EducationSection education={educationData} />
        <Footer />
      </div>
    </div>
  );
}