import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Trophy, Users, Calendar, ArrowRight, Zap } from "lucide-react";

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function FutbolEuropeo() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      
      {/* 1. NEWS TICKER (Marquesina) */}
      <div className="bg-blue-600 py-2 overflow-hidden whitespace-nowrap border-b border-white/10">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[
            "🚨 OFICIAL: Antoine Semenyo ficha por el Manchester City por 72M€",
            "⚽ Lamine Yamal alcanza un valor de mercado de 200M€",
            "🔥 RUMOR: El Real Madrid sigue de cerca a Trent Alexander-Arnold",
            "🇮🇹 Inter lidera la Serie A con 3 puntos de ventaja",
            "🇫🇷 Sorpresa: El RC Lens se mantiene líder sobre el PSG",
            "🇩🇪 Harry Kane llega a los 22 goles en Bundesliga"
          ].map((noticia, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3 h-3 fill-current" /> {noticia}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 px-6 text-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"
      >
        <Badge variant="outline" className="mb-6 border-blue-500/50 text-blue-400 px-4 py-1">Temporada 2025/26</Badge>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          FÚTBOL EUROPEO
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          El epicentro del fútbol mundial: crónicas de las grandes ligas, análisis de clubes históricos y los momentos que definen eras.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-black hover:bg-slate-200 rounded-full px-8 h-12 font-bold">Explorar Ligas</Button>
          <Button variant="outline" className="rounded-full px-8 h-12 border-slate-700 hover:bg-slate-900">Histórico</Button>
        </div>
      </motion.section>

      {/* 3. LAS 5 GRANDES LIGAS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { liga: "Premier League", lider: "Arsenal", estrella: "Haaland", color: "from-purple-600" },
            { liga: "LaLiga", lider: "Barcelona", estrella: "Lamine Yamal", color: "from-yellow-500" },
            { liga: "Serie A", lider: "Inter Milán", estrella: "Lautaro", color: "from-blue-600" },
            { liga: "Bundesliga", lider: "Bayern", estrella: "Harry Kane", color: "from-red-600" },
            { liga: "Ligue 1", lider: "RC Lens", estrella: "Kvaratskhelia", color: "from-cyan-500" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color} to-transparent`} />
              <h3 className="text-[10px] font-mono text-slate-500 uppercase mb-4">{item.liga}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-tighter">Líder</p>
              <p className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.lider}</p>
              <Separator className="bg-slate-800 mb-4" />
              <p className="text-[10px] text-slate-500 uppercase">Figura</p>
              <p className="text-sm font-semibold">{item.estrella}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. GOLEADORES Y PRÓXIMOS PARTIDOS */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Estadísticas de Goleadores */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-yellow-500" /> Bota de Oro
          </h2>
          <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl space-y-6">
            {[
              { n: "Harry Kane", l: "Bundesliga", g: 22, c: "bg-red-500" },
              { n: "Erling Haaland", l: "Premier League", g: 19, c: "bg-cyan-500" },
              { n: "Lamine Yamal", l: "LaLiga", g: 15, c: "bg-blue-500" },
              { n: "Lautaro Martínez", l: "Serie A", g: 14, c: "bg-blue-700" },
            ].map((j, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2 uppercase font-bold tracking-tighter">
                  <span>{j.n} <span className="text-slate-500 font-normal ml-2">{j.l}</span></span>
                  <span>{j.g} Goles</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: `${(j.g / 25) * 100}%` }} 
                    className={`h-full ${j.c}`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Próximos Partidos */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="text-blue-500" /> Cartelera Semanal
          </h2>
          <div className="space-y-3">
            {[
              { t1: "Real Madrid", t2: "Man. City", liga: "UCL", hora: "21:00" },
              { t1: "Arsenal", t2: "Liverpool", liga: "PREM", hora: "17:30" },
              { t1: "Inter", t2: "Milan", liga: "SERIE A", hora: "20:45" },
            ].map((p, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex items-center justify-between hover:bg-slate-800/50 transition-colors cursor-pointer">
                <Badge variant="outline" className="text-[10px] border-slate-700">{p.liga}</Badge>
                <div className="flex-1 flex justify-center gap-4 font-bold text-sm uppercase">
                  <span>{p.t1}</span>
                  <span className="text-blue-500">VS</span>
                  <span>{p.t2}</span>
                </div>
                <span className="font-mono text-sm text-slate-400">{p.hora}</span>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-slate-500 hover:text-white mt-4">Ver calendario completo →</Button>
          </div>
        </div>
      </section>

      {/* 5. GALERÍA DE MOMENTOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-tighter underline decoration-blue-500 underline-offset-8">Momentos Eternos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "La Novena", y: "2002", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400" },
            { t: "El Sextete", y: "2009", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
            { t: "Estambul", y: "2005", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400" },
            { t: "Invictos", y: "2004", img: "https://images.unsplash.com/photo-1518091043644-c1d445bb5120?w=400" },
          ].map((m, i) => (
            <motion.div key={i} whileHover={{ scale: 0.98 }} className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer border border-slate-800">
              <img src={m.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500" alt={m.t} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-blue-400 font-mono text-xs">{m.y}</p>
                <h3 className="text-xl font-bold uppercase tracking-tighter">{m.t}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <Trophy className="w-5 h-5 text-slate-700" />
          <Users className="w-5 h-5 text-slate-700" />
          <Calendar className="w-5 h-5 text-slate-700" />
        </div>
        <p className="text-slate-500 text-xs tracking-widest uppercase">© 2026 Fútbol Europeo Archive · Pasión por el Deporte Rey</p>
      </footer>
    </div>
  );
}
