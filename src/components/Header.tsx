import React from 'react';

interface HeaderProps {
  name: string;
  age: number;
  nationality: string;
  email: string;
  website: string;
}

export function Header({ name, age, nationality, email, website }: HeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
      <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
      <div className="flex items-center gap-8 text-gray-600">
        <span>{age} years old, {nationality}</span>
        <a href={`mailto:${email}`} className="hover:text-blue-500">{email}</a>
        <a href={website} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
          {website.replace('https://', '')}
        </a>
      </div>
    </div>
  );
}