interface AppCard {
  icon: string;
  name: string;
  link: string;
  type?: "markdown" | "text"; // Optional type for styling
}

interface Interest {
  emoji: string;
  name: string;
  link: string;
}

interface ProfileSectionProps {
  imageUrl: string;
  apps: AppCard[];
  interests: Interest[];
}

export function ProfileSection({ imageUrl, apps, interests }: ProfileSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Profile Image */}
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" />
      </div>
      
      {/* Projects Section */}
      <div className="bg-gray-50 rounded-3xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Projects I work on</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {apps.map((app, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105
                ${app.type === "markdown" ? "bg-blue-100" : "bg-gray-100"}`}
            >
              <img 
                src={app.icon} 
                alt={app.name} 
                className="w-12 h-12 rounded-lg mb-2 transition-transform hover:scale-110"
              />
              <span className="text-sm font-medium text-gray-800">{app.name}</span>
              <a 
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 px-4 py-1 rounded-full text-sm font-medium transition-colors
                  ${app.type === "markdown" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-800 text-white"}`}
              >
                GET
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="bg-gray-50 rounded-3xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Interests</h2>
        <div className="grid grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <a
              key={index}
              href={interest.link}
              className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-lg">{interest.emoji}</span>
              <span className="text-gray-800 font-medium">{interest.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
