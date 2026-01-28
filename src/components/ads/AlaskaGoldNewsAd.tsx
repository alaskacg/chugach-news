import { ExternalLink } from 'lucide-react';
import goldLogo from '@/assets/logos/alaska-gold-news-logo.jpg';

const AlaskaGoldNewsAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://alaskagoldnews.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-20"
        >
          {/* Deep navy background matching the logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2233] via-[#252d40] to-[#1a2233]" />
          
          {/* Gold accent border */}
          <div className="absolute inset-0 rounded-lg border border-[#c9a227]/30 group-hover:border-[#c9a227]/50 transition-colors" />
          
          {/* Subtle gold shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a227]/5 to-transparent group-hover:via-[#c9a227]/10 transition-all" />
          
          <div className="relative flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex-shrink-0 overflow-hidden rounded bg-[#1a2233]">
                <img 
                  src={goldLogo} 
                  alt="Alaska Gold News" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[#c9a227] font-bold text-base tracking-wide">Alaska Gold News</p>
                  <span className="px-2 py-0.5 bg-[#c9a227]/20 text-[#c9a227] text-[10px] font-bold rounded uppercase">Premium</span>
                </div>
                <p className="text-[#8a9ab8] text-xs mt-0.5">Mining Updates • Precious Metals Market • Industry Analysis</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#c9a227] to-[#dab842] hover:from-[#dab842] hover:to-[#ebc852] text-[#1a2233] text-xs font-bold rounded transition-all shadow-lg shadow-[#c9a227]/20">
              Explore
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AlaskaGoldNewsAd;
