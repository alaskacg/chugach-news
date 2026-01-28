import { ExternalLink } from 'lucide-react';
import firesLogo from '@/assets/logos/alaska-fires.jpg';
import firesBg from '@/assets/ads/fires-background.jpg';

const AlaskaFiresAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://alaskafires.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-14"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={firesBg} 
              alt="" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a0a]/95 via-[#2a1010]/80 to-[#1a0a0a]/95" />
          </div>
          
          {/* Fire accent border */}
          <div className="absolute inset-0 rounded-lg border border-orange-500/20 group-hover:border-orange-500/40 transition-colors" />
          
          <div className="relative flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={firesLogo} 
                  alt="Alaska Fires" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-orange-200 font-semibold text-sm">Alaska Fires</p>
                <p className="text-orange-300/60 text-xs">Real-Time Wildfire Monitoring & Alerts</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 hover:bg-orange-400 text-[#1a0a0a] text-xs font-bold rounded transition-colors">
              Monitor
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AlaskaFiresAd;
