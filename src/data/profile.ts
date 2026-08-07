import { calculateAge } from '../utils/date';

const DATE_OF_BIRTH = '1993-10-31';

export const profileData = {
  header: {
    name: "Sreeju KS",
    age: calculateAge(DATE_OF_BIRTH),
    nationality: "Indian",
    email: "mail@sreesreejuks.com",
    website: "sreesreejuks.com"
  },
  profile: {
    imageUrl: "https://sreesreejuks.com/sreeju_ks.webp?auto=format&fit=crop&q=80&w=400&h=400",
    
    apps: [
      {
        icon: "/common.svg",
        name: "MarkdownExplorer",
        link: "https://markdown.sreesreejuks.com/"
      },
      
      {
        icon: "/common1.svg",
        name: "TypeHere",
        link: "https://typeit.sreesreejuks.com"
      },

      {
        icon: "/common2.svg",
        name: "MarkdownEditor",
        link: "https://editor.sreesreejuks.com"
      }
    ],
    interests: [
      { emoji: "👨‍💻", name: "Coding", link: "https://github.com/sreesreejuks" },
      { emoji: "🚴", name: "Cycling", link: "https://www.strava.com/sreesreejuks" },
      { emoji: "📸", name: "Photography", link: "https://instagram.com/sreesreejuks" },
      { emoji: "🎨", name: "Art", link: "https://behance.net/sreesreejuks" }
    ]
  }
};
