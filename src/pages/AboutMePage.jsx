
import Layout from '../components/Layout/Layout';
import { personalInfo } from '../data/portfolioData';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Music, Film, Code, Heart } from 'lucide-react';

const AboutMePage = () => {
  const navigate = useNavigate();

  const interests = [
    { name: "Artificial Intelligence", icon: <Code size={20} /> },
    { name: "Web Development", icon: <Code size={20} /> },
    { name: "Data Science", icon: <Code size={20} /> },
    { name: "Game Development", icon: <Code size={20} /> }
  ];

  const hobbies = [
    { name: "Playing Guitar", icon: <Music size={20} /> },
    { name: "Reading Sci-Fi Novels", icon: <Heart size={20} /> },
    { name: "Hiking", icon: <Heart size={20} /> },
    { name: "Chess", icon: <Heart size={20} /> }
  ];

  const favoriteMusic = [
    "Rock & Alternative",
    "Electronic Music",
    "Classical",
    "Jazz"
  ];

  const favoriteShows = [
    "Mr. Robot",
    "Silicon Valley",
    "Black Mirror",
    "The Expanse"
  ];

  const journey = [
    {
      year: 2020,
      title: "Started Computer Science Degree",
      description: "Began my academic journey at Boston University"
    },
    {
      year: 2021,
      title: "First Programming Internship",
      description: "Worked as a junior developer at TechStart Inc."
    },
    {
      year: 2022,
      title: "Started Research in Machine Learning",
      description: "Joined the AI research lab focusing on neural networks"
    },
    {
      year: 2023,
      title: "Summer Coding Bootcamp",
      description: "Completed an intensive web development bootcamp"
    }
  ];

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="retro-container">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 font-vt323 text-lg mb-6 hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
          
          <h1 className="retro-header text-center">
            <span className="text-primary">&lt;</span>
            About Me
            <span className="text-primary">/&gt;</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="retro-terminal md:col-span-1">
              <div className="aspect-square overflow-hidden mb-4">
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover pixel-corners"
                />
              </div>
              <h2 className="font-press-start text-xl mb-2">{personalInfo.name}</h2>
              <p className="font-vt323 text-xl">{personalInfo.title}</p>
              <div className="mt-4 space-y-2">
                <p className="font-mono text-sm"><strong>Location:</strong> {personalInfo.location}</p>
                <p className="font-mono text-sm"><strong>Email:</strong> {personalInfo.email}</p>
              </div>
            </div>
            
            <div className="retro-terminal md:col-span-2">
              <h2 className="font-vt323 text-2xl mb-4">
                <span className="text-retro-teal">$</span> cat my_story.txt
              </h2>
              <div className="space-y-4 font-mono">
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                <p>Beyond my academic pursuits, I'm passionate about using technology to create meaningful solutions that help people and make our world better. I believe in continuous learning and pushing myself to explore new technologies and approaches.</p>
              </div>
            </div>
          </div>

          <div className="retro-terminal mt-8">
            <h2 className="font-vt323 text-2xl mb-6">
              <span className="text-retro-teal">$</span> cat my_journey.json
            </h2>
            <div className="relative border-l-2 border-retro-teal ml-4 pl-8 space-y-8">
              {journey.map((event, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] w-6 h-6 bg-retro-purple rounded-full flex items-center justify-center">
                    <span className="font-mono text-xs">{event.year}</span>
                  </div>
                  <h3 className="font-press-start text-lg">{event.title}</h3>
                  <p className="font-mono mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="retro-terminal">
              <h2 className="font-vt323 text-2xl mb-4 flex items-center gap-2">
                <User size={24} className="text-retro-teal" />
                <span>Interests</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-mono">
                    {interest.icon}
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-vt323 text-2xl mb-4 mt-8 flex items-center gap-2">
                <Heart size={24} className="text-retro-teal" />
                <span>Hobbies</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-mono">
                    {hobby.icon}
                    <span>{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="retro-terminal">
              <h2 className="font-vt323 text-2xl mb-4 flex items-center gap-2">
                <Music size={24} className="text-retro-teal" />
                <span>Music I Enjoy</span>
              </h2>
              <ul className="list-disc list-inside font-mono space-y-2">
                {favoriteMusic.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 className="font-vt323 text-2xl mb-4 mt-8 flex items-center gap-2">
                <Film size={24} className="text-retro-teal" />
                <span>Shows & Movies</span>
              </h2>
              <ul className="list-disc list-inside font-mono space-y-2">
                {favoriteShows.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMePage;
