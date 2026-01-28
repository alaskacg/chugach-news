import { ExternalLink } from 'lucide-react';
import goldLogo from '@/assets/logos/alaska-gold-news.jpg';
import goldBg from '@/assets/ads/gold-background.jpg';

const AlaskaGoldNewsAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://alaskagoldnews.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-14"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={goldBg} 
              alt="" 
              className="w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1505]/95 via-[#2a2010]/80 to-[#1a1505]/95" />
          </div>
          
          {/* Gold accent border */}
          <div className="absolute inset-0 rounded-lg border border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
          
          <div className="relative flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={goldLogo} 
                  alt="Alaska Gold News" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-amber-200 font-semibold text-sm">Alaska Gold News</p>
                <p className="text-amber-300/60 text-xs">Mining Updates & Precious Metals Market</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-[#1a1505] text-xs font-bold rounded transition-colors">
              Read
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AlaskaGoldNewsAd;
