import { useState, useEffect } from "react";
import {
  Cloud,
  Sun,
  CloudRain,
  Snowflake,
  Wind,
  Droplets,
  Thermometer,
  MapPin,
  Clock,
  ChevronRight,
  ExternalLink,
  Quote,
  Newspaper,
  Phone,
  Mail,
  Anchor,
  Ship,
  Mountain,
  Fuel,
  Waves,
  Building2,
  Users,
  TreePine,
  Compass,
} from "lucide-react";

const breakingHeadlines = [
  "Trans-Alaska Pipeline flow rates return to normal after maintenance shutdown",
  "Valdez container port expansion project receives federal approval",
  "Prince William Sound oil spill response drill tests new containment technology",
  "Whittier tunnel extended hours begin for summer travel season",
];

const articles = [
  { title: "Trans-Alaska Pipeline System Celebrates 48 Years of Continuous Operation", cat: "Energy", color: "orange", desc: "The Trans-Alaska Pipeline System marked a historic milestone this week as operators and state officials celebrated 48 years of uninterrupted crude oil transport from Prudhoe Bay to Valdez." },
  { title: "Valdez Marine Terminal Upgrades Boost Tanker Loading Capacity", cat: "Industry", color: "blue", desc: "Major upgrades at the Valdez Marine Terminal have increased tanker loading capacity by 15%, allowing faster turnaround times for vessels transiting Prince William Sound." },
  { title: "Columbia Glacier Retreat Opens New Navigable Waters in Prince William Sound", cat: "Environment", color: "green", desc: "Continued retreat of Columbia Glacier has revealed new waterways in northern Prince William Sound, prompting updated NOAA nautical charts for the region." },
  { title: "Cordova Copper River Red Salmon Season Opens to Strong Returns", cat: "Fishing", color: "indigo", desc: "Cordova's iconic Copper River red salmon season kicked off with the strongest early returns in a decade, bringing optimism to the commercial fishing fleet." },
  { title: "Whittier-Portage Tunnel Safety Upgrades Near Completion", cat: "Infrastructure", color: "slate", desc: "The Anton Anderson Memorial Tunnel connecting Whittier to the Seward Highway is nearing completion of a $45 million safety and ventilation upgrade project." },
  { title: "Seward Alaska SeaLife Center Rehabilitates Record Number of Seabirds", cat: "Wildlife", color: "teal", desc: "The Alaska SeaLife Center in Seward has rehabilitated a record 340 seabirds this season, primarily common murres and kittiwakes affected by changing ocean conditions." },
  { title: "Chugach Electric Cooperative Expands Renewable Energy Portfolio", cat: "Energy", color: "amber", desc: "Chugach Electric announced plans to add 25 MW of renewable capacity through new wind and hydroelectric projects serving the Railbelt grid." },
  { title: "Winter Backcountry Skiing Draws Record Visitors to Thompson Pass", cat: "Outdoors", color: "cyan", desc: "Thompson Pass near Valdez saw record backcountry skiing visits this winter, with heli-ski operators reporting full bookings through April." },
];

const catBg: Record<string, string> = {
  orange: "bg-orange-500/20 text-orange-400",
  blue: "bg-blue-500/20 text-blue-400",
  green: "bg-green-500/20 text-green-400",
  indigo: "bg-indigo-500/20 text-indigo-400",
  slate: "bg-slate-500/20 text-slate-300",
  teal: "bg-teal-500/20 text-teal-400",
  amber: "bg-amber-500/20 text-amber-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
};

const quotes = [
  { text: "I went to Alaska and I fell in love with the state.", author: "Jewel" },
  { text: "Alaska is what happens when Willy Wonka designs a state.", author: "Robin Williams" },
  { text: "In Alaska, you measure distance in time, not miles.", author: "Local saying" },
  { text: "The bears of Alaska inspire respect and awe — they are the true rulers of this land.", author: "Timothy Treadwell" },
  { text: "Alaska isn't just a place. It's a feeling.", author: "Local saying" },
];

const adNetwork = [
  { name: "Alaska Consulting Group", url: "https://alaskaconsultinggroup.com", desc: "Expert consulting for Alaska businesses and development projects" },
  { name: "Alaska Metals Exchange", url: "https://alaskametalsexchange.com", desc: "Precious metals trading and Alaska gold investments" },
  { name: "Kenai Borough Realty", url: "https://kenaiboroughrealty.com", desc: "Premium real estate on the Kenai Peninsula" },
  { name: "Alaska Drone Survey", url: "https://alaskadronesurvey.com", desc: "Aerial surveys, mapping and inspections across Alaska" },
  { name: "Alaska Minerals Exploration", url: "https://akmineralexploration.com", desc: "Mineral exploration and mining development in Alaska" },
  { name: "Alaska Listings", url: "https://aklistings.com", desc: "Alaska's premier classified listings marketplace" },
  { name: "Alaska Guide Listings", url: "https://alaskaguidelistings.com", desc: "Find Alaska's best fishing, hunting and tour guides" },
  { name: "Alaska Domains", url: "https://alaskadomains.com", desc: "Premium Alaska-themed domain names for sale" },
];

const forecast = [
  { day: "Mon", hi: 44, lo: 36, icon: "cloud" },
  { day: "Tue", hi: 47, lo: 38, icon: "rain" },
  { day: "Wed", hi: 42, lo: 35, icon: "cloud" },
  { day: "Thu", hi: 45, lo: 37, icon: "sun" },
  { day: "Fri", hi: 48, lo: 39, icon: "sun" },
  { day: "Sat", hi: 43, lo: 36, icon: "rain" },
  { day: "Sun", hi: 40, lo: 35, icon: "snow" },
];

const sisterSites = [
  { name: "Anchorage Chronicle", url: "https://anchoragechronicle.com" },
  { name: "Kenai News", url: "https://kenainews.com" },
  { name: "Tongass News", url: "https://tongassnews.com" },
  { name: "Alcan News", url: "https://alcannews.com" },
  { name: "Alaska Gold News", url: "https://alaskagoldnews.com" },
];

const ForecastIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "sun": return <Sun className="w-6 h-6 text-yellow-400" />;
    case "rain": return <CloudRain className="w-6 h-6 text-blue-400" />;
    case "snow": return <Snowflake className="w-6 h-6 text-blue-300" />;
    default: return <Cloud className="w-6 h-6 text-slate-400" />;
  }
};

const Index = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [tickerOffset, setTickerOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setQuoteIdx((i) => (i + 1) % quotes.length), 8000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTickerOffset((i) => (i + 1) % breakingHeadlines.length), 5000);
    return () => clearInterval(id);
  }, []);

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* HEADER */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              <span className="text-cyan-400">Chugach</span> News
            </h1>
            <p className="text-slate-400 text-sm mt-1">Your Source for Southcentral Alaska News — Valdez · Cordova · Seward · Whittier</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{dateStr}</span>
          </div>
        </div>
      </header>

      {/* 1. BREAKING NEWS TICKER */}
      <div className="bg-slate-900/80 border-b border-amber-500/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
          <span className="shrink-0 bg-amber-500 text-black text-[11px] font-bold px-2 py-0.5 rounded animate-pulse">BREAKING</span>
          <div className="overflow-hidden whitespace-nowrap flex-1">
            <p className="text-sm text-amber-200/90 truncate">{breakingHeadlines[tickerOffset]}</p>
          </div>
        </div>
      </div>

      <main>
        {/* 2. HERO SECTION */}
        <section className="bg-gradient-to-r from-cyan-950 via-slate-950 to-blue-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded mb-4">
              <Newspaper className="w-3.5 h-3.5" /> FEATURED STORY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
              Prince William Sound Glacier Monitoring Program Reveals Dramatic Changes in Columbia Glacier Retreat
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl text-lg">
              New satellite imagery and field measurements from researchers at the Prince William Sound Science Center show Columbia Glacier has retreated more than expected, reshaping regional maritime navigation and ecosystems.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
              Read Full Story <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 3. WEATHER SECTION */}
        <section className="bg-gradient-to-br from-slate-900 to-cyan-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Thermometer className="w-5 h-5 text-cyan-400" /> Chugach Region Weather
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* current conditions */}
              <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                  <MapPin className="w-4 h-4" /> Valdez, AK
                </div>
                <div className="flex items-center gap-4">
                  <Cloud className="w-14 h-14 text-slate-400" />
                  <div>
                    <p className="text-5xl font-bold">42<span className="text-2xl text-slate-400">°F</span></p>
                    <p className="text-slate-400">Overcast</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                  <div className="flex items-center gap-2 text-slate-400"><Wind className="w-4 h-4" /> N 15 mph</div>
                  <div className="flex items-center gap-2 text-slate-400"><Droplets className="w-4 h-4" /> 75% Humidity</div>
                </div>
              </div>

              {/* 7-day forecast */}
              <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                <p className="text-sm font-semibold text-slate-300 mb-4">7-Day Forecast</p>
                <div className="space-y-2">
                  {forecast.map((d) => (
                    <div key={d.day} className="flex items-center justify-between text-sm">
                      <span className="w-10 font-medium text-slate-300">{d.day}</span>
                      <ForecastIcon type={d.icon} />
                      <span className="text-slate-300 w-20 text-right">{d.hi}° / {d.lo}°</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* windy iframe */}
              <div className="bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700/50">
                <iframe
                  title="Windy Map"
                  src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=°F&metricWind=mph&zoom=7&overlay=wind&product=ecmwf&level=surface&lat=61.10&lon=-146.35"
                  className="w-full h-full min-h-[260px]"
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. NEWS GRID */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
            <Newspaper className="w-5 h-5 text-cyan-400" /> Latest News
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.map((a, i) => (
              <article key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-700/50 transition-colors group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <Mountain className="w-10 h-10 text-slate-700 group-hover:text-cyan-800 transition-colors" />
                </div>
                <div className="p-4">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${catBg[a.color]}`}>{a.cat}</span>
                  <h4 className="text-sm font-semibold mt-2 leading-snug group-hover:text-cyan-400 transition-colors line-clamp-3">{a.title}</h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. ALASKA QUOTES */}
        <section className="bg-slate-900/60 border-y border-slate-800">
          <div className="max-w-3xl mx-auto px-4 py-14 text-center">
            <Quote className="w-8 h-8 text-cyan-500/40 mx-auto mb-4" />
            <p className="text-xl md:text-2xl italic text-slate-300 leading-relaxed">"{quotes[quoteIdx].text}"</p>
            <p className="mt-4 text-sm text-cyan-400 font-medium">— {quotes[quoteIdx].author}</p>
            <div className="flex justify-center gap-1.5 mt-5">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setQuoteIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === quoteIdx ? "bg-cyan-400" : "bg-slate-700"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. AD NETWORK */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-6 text-slate-400">
            <Compass className="w-5 h-5" /> From Our Network
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adNetwork.map((ad) => (
              <a
                key={ad.name}
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-700/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">{ad.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-500 transition-colors" />
                </div>
                <p className="text-xs text-slate-500">{ad.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* 7. REGIONAL INFO */}
        <section className="bg-gradient-to-br from-slate-900 to-cyan-950/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
              <MapPin className="w-5 h-5 text-cyan-400" /> Chugach Region at a Glance
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/40">
                <TreePine className="w-6 h-6 text-green-400 mb-3" />
                <h4 className="font-semibold text-sm">Chugach National Forest</h4>
                <p className="text-xs text-slate-400 mt-1">5.4 million acres — 2nd largest U.S. national forest. Spanning from Prince William Sound to the Kenai Peninsula.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/40">
                <Users className="w-6 h-6 text-blue-400 mb-3" />
                <h4 className="font-semibold text-sm">Communities</h4>
                <p className="text-xs text-slate-400 mt-1">Valdez (~3,900) · Cordova (~2,200) · Seward (~2,700) · Whittier (~220)</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/40">
                <Fuel className="w-6 h-6 text-orange-400 mb-3" />
                <h4 className="font-semibold text-sm">Trans-Alaska Pipeline</h4>
                <p className="text-xs text-slate-400 mt-1">800 miles from Prudhoe Bay to Valdez. Carries approximately 500,000 barrels per day.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/40">
                <Waves className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="font-semibold text-sm">Prince William Sound</h4>
                <p className="text-xs text-slate-400 mt-1">15,000 sq mi of protected waters with over 150 tidewater and alpine glaciers.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/40">
                <Building2 className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-semibold text-sm">Key Industries</h4>
                <p className="text-xs text-slate-400 mt-1">Oil &amp; Gas, Commercial Fishing, Tourism, Maritime Transportation</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/40">
                <Mountain className="w-6 h-6 text-indigo-400 mb-3" />
                <h4 className="font-semibold text-sm">Activities</h4>
                <p className="text-xs text-slate-400 mt-1">Glacier viewing, sea kayaking, heli-skiing at Thompson Pass, sport fishing</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/40 sm:col-span-2 lg:col-span-1">
                <Phone className="w-6 h-6 text-red-400 mb-3" />
                <h4 className="font-semibold text-sm">Emergency</h4>
                <p className="text-xs text-slate-400 mt-1">911 · Valdez Police: (907) 835-4560 · Coast Guard Sector Anchorage VHF Ch 16</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold"><span className="text-cyan-400">Chugach</span> News</h4>
              <p className="text-xs text-slate-500 mt-2">Covering Valdez, Cordova, Seward, Whittier and the greater Chugach region of Southcentral Alaska.</p>
              <p className="text-xs text-slate-600 mt-3">Part of <span className="text-slate-400">Alaska News Corporation</span></p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-400 mb-3">Sister Sites</h5>
              <ul className="space-y-1.5">
                {sisterSites.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" /> {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-400 mb-3">Contact</h5>
              <div className="space-y-2 text-xs text-slate-500">
                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> news@chugachnews.com</p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> (907) 555-0300</p>
                <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Valdez, Alaska 99686</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Chugach News. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
