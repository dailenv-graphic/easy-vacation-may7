import { Lock } from 'lucide-react';
import CTAButton from './CTAButton';

interface TeamCollaborationSectionProps {
  onCtaClick: () => void;
}

const TeamCollaborationSection = ({ onCtaClick }: TeamCollaborationSectionProps) => {
  const teamMembers = [
    {
      name: '8 Day / 7 Night Cruise',
      description: 'Premium cruise lines with full ship amenities',
      image: '/images/cruise-ship.png',
      position: { top: '8%', right: '25%' },
      delay: '0s'
    },
    {
      name: 'Vacation Insider Access',
      description: 'Members-only rates not available to the public',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600',
      position: { top: '42%', left: '12%' },
      delay: '0.8s'
    },
    {
      name: 'Airfare Included',
      description: 'Round-trip airfare for two from major US airports',
      image: '/images/airfare.png',
      position: { top: '35%', right: '8%' },
      delay: '1.6s'
    },
    {
      name: 'Fully Shareable',
      description: 'Bring your loved ones — certificate is transferable',
      image: '/images/shareable.png',
      position: { bottom: '20%', right: '25%' },
      delay: '2.4s'
    }
  ];

  return (
    <section id="cruise" className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-white overflow-hidden scroll-mt-24">
      <style>{`
        @keyframes float-wave {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>

      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          <div className="relative space-y-4 md:space-y-6">
            <div className="absolute -inset-8 md:-inset-16 pointer-events-none opacity-30 md:opacity-100">
              <img
                src="/images/map-image.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Your Cruise Vacation Package<span className="text-teal-500">.</span>
              </h2>
              <div className="flex items-center gap-2 md:gap-3 text-gray-400 mt-4 md:mt-6">
                <div className="w-8 md:w-12 h-px bg-gray-300"></div>
                <p className="text-sm md:text-base lg:text-lg">Everything included and handed to you the moment you complete your preview</p>
              </div>
              <div className="pt-3 md:pt-4">
                <CTAButton onClick={onCtaClick}>
                  <span className="hidden sm:inline">CLAIM YOUR CRUISE</span>
                  <span className="sm:hidden">CLAIM CRUISE</span>
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center z-[1]">
              <div className="w-[85%] md:w-[500px] lg:w-[600px] h-[85%] md:h-[500px] lg:h-[600px] rounded-full border-2 border-blue-200"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-[2]">
              <div className="w-[70%] md:w-[380px] lg:w-[460px] h-[70%] md:h-[380px] lg:h-[460px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl">
                <div className="w-[calc(100%-40px)] md:w-[350px] lg:w-[420px] h-[calc(100%-40px)] md:h-[350px] lg:h-[420px] rounded-full bg-white flex items-center justify-center">
                  <div className="relative z-[3]">
                    <div className="w-32 md:w-44 lg:w-56 h-32 md:h-44 lg:h-56 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg">
                      <img
                        src="/images/harbor.png"
                        alt="Cruise harbor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="absolute z-[4]"
                style={{
                  ...member.position,
                  animation: 'float-wave 4s ease-in-out infinite',
                  animationDelay: member.delay
                }}
              >
                <div className="relative group">
                  <div className="w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white transition-transform group-hover:scale-110">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                    <div className="bg-white px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-md text-center">
                      <p className="text-xs md:text-sm text-gray-900 font-bold">{member.name}</p>
                      <p className="hidden md:block text-[10px] md:text-xs text-gray-500">{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute top-[15%] left-[28%] z-[5]">
              <div className="w-14 md:w-16 lg:w-20 h-14 md:h-16 lg:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-45">
                <Lock className="w-6 md:w-7 lg:w-9 h-6 md:h-7 lg:h-9 text-white -rotate-45 drop-shadow-md" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamCollaborationSection;
