import { ExternalLink } from 'lucide-react';

const AnchorageChronicleAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://anchoragechronicle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-12 bg-gradient-to-r from-[#1a1a2e] via-[#252545] to-[#1a1a2e]"
        >
          {/* Accent border */}
          <div className="absolute inset-0 rounded-lg border border-slate-500/20 group-hover:border-slate-400/40 transition-colors" />
          
          <div className="relative flex items-center justify-center h-full px-4 gap-3">
            <span className="font-serif text-slate-300 text-sm font-semibold">Anchorage Chronicle</span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-slate-400 text-xs">Alaska's Capital City News</span>
            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default AnchorageChronicleAd;
