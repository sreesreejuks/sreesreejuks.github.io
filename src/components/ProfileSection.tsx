interface AppCard {
  icon: string;
  name: string;
  link: string;
  type?: "markdown" | "text";
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Profile Image */}
      <div className="rounded-3xl overflow-hidden">
        <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Projects Section */}
      <div className="bg-gray-50 rounded-3xl p-5">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Projects I work on</h2>
        <div className="flex gap-3 justify-center">
          {apps.map((app, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center w-24 p-3 rounded-lg shadow h-32 
                ${app.type === "markdown" ? "bg-blue-100" : "bg-gray-200"}`}
            >
              <img src={app.icon} alt={app.name} className="w-10 h-10 mb-2" />
              <span className="text-xs text-gray-800 text-center">{app.name}</span>
              <a 
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto px-3 py-1 text-white rounded text-xs hover:opacity-80 transition
                  ${app.type === "markdown" ? "bg-blue-500" : "bg-gray-700"}`}
              >
                GET
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="bg-gray-50 rounded-3xl p-5">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Interests</h2>
        <div className="grid grid-cols-2 gap-3">
          {interests.map((interest, index) => (
            <a
              key={index}
              href={interest.link}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition"
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
