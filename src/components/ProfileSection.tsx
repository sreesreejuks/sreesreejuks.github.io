
interface AppCard {
  icon: string;
  name: string;
  link: string;
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
        <h2 className="text-xl font-semibold mb-4">Projects I work on</h2>
        <div className="flex flex-wrap gap-4">
          {apps.map((app, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={app.icon} alt={app.name} className="w-12 h-12 rounded-xl mb-2" />
              <span className="text-sm">{app.name}</span>
              <a 
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
              >
                GET
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-4">Interests</h2>
        <div className="grid grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <a
              key={index}
              href={interest.link}
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
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