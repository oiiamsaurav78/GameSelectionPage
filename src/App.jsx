import React, { useState } from 'react';

// --- Data for the games ---
// NOTE: Place your images in the `public` folder of your Vite project.
const games = [
  {
    id: 1,
    title: 'Escape The Lava',
    image: '/assets/escapeTheLava.jpg',
    type: 'Solo/Team',
    players: '1 to 6',
  },
  {
    id: 2,
    title: 'Find The Color',
    image: '/assets/findTheColor.jpg',
    type: 'Competition',
    players: '1 to 6',
  },
  {
    id: 3,
    title: 'Red Light Green Light',
    image: '/assets/redLightGreenLight.jpg',
    type: 'Competition',
    players: '1 to 4',
  },
  {
    id: 4,
    title: 'Sharp Shooter',
    image: '/assets/sharpShooter.jpg',
    type: 'Competition',
    players: '1 to 4',
  },
];

// --- SVG Icons for Game Details ---
const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

const GamepadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

// --- The Game Card Component ---
const GameCard = ({ game, isSelected, onSelect }) => (
  <div
    onClick={() => onSelect(game.id)}
    className={`relative flex-shrink-0 w-64 md:w-80 h-[28rem] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 group ${isSelected ? 'scale-105 shadow-2xl shadow-cyan-500/40' : 'hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'}`}
  >
    <img src={game.image} alt={game.title} className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className={`absolute inset-0 border-4 rounded-2xl transition-colors duration-300 ${isSelected ? 'border-cyan-400' : 'border-transparent group-hover:border-cyan-400/50'}`}></div>

    <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
      <h3 className="text-2xl font-bold uppercase tracking-wider">{game.title}</h3>
      <div className="mt-4 flex flex-col space-y-2 text-gray-300">
        <div className="flex items-center">
          <GamepadIcon />
          <span>{game.type}</span>
        </div>
        <div className="flex items-center">
          <UserGroupIcon />
          <span>{game.players} Players</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  const [selectedGameId, setSelectedGameId] = useState(games[0].id);
  const selectedGameTitle = games.find(g => g.id === selectedGameId)?.title || '';

  return (
    <div className="bg-[#0D1117] text-white min-h-screen font-['Orbitron'] p-4 sm:p-8 flex items-center justify-center overflow-hidden">
      {/* Background futuristic grid/glow effect */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2E5A8B 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <main className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-cyan-300" style={{ textShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee' }}>
            Select a Game
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Choose your next challenge from the holo-deck</p>
        </header>

        <div className="relative w-full max-w-7xl">
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8 pb-4 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {games.map(game => (
              <GameCard
                key={game.id}
                game={game}
                isSelected={selectedGameId === game.id}
                onSelect={setSelectedGameId}
              />
            ))}
            
            {/* "More Games" indicator card */}
            <div className="flex-shrink-0 w-64 md:w-80 h-[28rem] rounded-2xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-800/20 hover:border-cyan-400/30 transition-all duration-300 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <p className="mt-4 text-lg font-semibold uppercase">More Games</p>
              <p className="text-sm">Coming Soon</p>
            </div>
          </div>
          
          {/* Right-side gradient and arrow to indicate scrollability */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0D1117] to-transparent pointer-events-none md:flex items-center justify-end pr-4 hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <footer className="mt-8 md:mt-12 text-center">
          <button className="bg-cyan-500 text-black font-bold uppercase tracking-wider px-10 py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 hover:shadow-cyan-400/50 transform hover:scale-105 active:scale-100 transition-all duration-300">
            Launch: {selectedGameTitle}
          </button>
        </footer>
      </main>
    </div>
  );
}

