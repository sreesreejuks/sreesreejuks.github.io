interface AppCard {
  icon: string;
  name: string;
  link: string;
  type?: "markdown" | "text"; // Optional type for color coding
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <div className="rounded-3xl overflow-hidden">
        <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" />
      </div>
      
      <div className="bg-gray-50 rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Projects I work on</h2>
        <div className="flex flex-wrap gap-4">
          {apps.map((app, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-4 rounded-xl
                ${app.type === "markdown" ? "bg-blue-100" : "bg-gray-100"}`}
            >
              <img src={app.icon} alt={app.name} className="w-12 h-12 rounded-xl mb-2" />
              <span className="text-sm text-gray-800 font-medium">{app.name}</span>
              <a 
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 px-4 py-1 text-white rounded-full text-sm
                  ${app.type === "markdown" ? "bg-blue-500" : "bg-gray-700"}`}
              >
                GET
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Interests</h2>
        <div className="grid grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <a
              key={index}
              href={interest.link}
              className="flex items-center gap-2 text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{interest.emoji}</span>
              <span>{interest.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
