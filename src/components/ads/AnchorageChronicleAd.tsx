import { ExternalLink } from 'lucide-react';
import chronicleBg from '@/assets/ads/chronicle-background.jpg';

const AnchorageChronicleAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://anchoragechronicle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-24"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={chronicleBg} 
              alt="" 
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a3228]/95 via-[#5a4238]/85 to-[#4a3228]/95" />
          </div>
          
          {/* Brick/teal accent border */}
          <div className="absolute inset-0 rounded-lg border border-[#5d8a8a]/30 group-hover:border-[#5d8a8a]/50 transition-colors" />
          
          <div className="relative flex items-center justify-between h-full px-4 md:px-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-[#e8d8c8] text-base md:text-lg font-bold tracking-wide">The Anchorage Chronicle</span>
                <span className="hidden md:inline-block text-[#5d8a8a] text-xs">•</span>
                <span className="hidden md:inline-block text-[#a89888] text-xs">Alaska's Capital City News</span>
              </div>
              <p className="text-[#c8b8a8]/80 text-xs md:text-sm italic max-w-2xl leading-relaxed">
                "In a world of national headlines and distant concerns, we chose to focus on what matters most: the stories of our neighbors, our communities, and our home."
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#5d8a8a] hover:bg-[#6d9a9a] text-[#1a1a1a] text-xs font-bold rounded transition-colors ml-4 flex-shrink-0">
              Read
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AnchorageChronicleAd;
