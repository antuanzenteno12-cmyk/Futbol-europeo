import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Calendar, Zap, Star } from "lucide-react";

export default function FutbolEuropeo() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* 1. NEWS TICKER */}
      <div className="bg-blue-600 py-2 overflow-hidden whitespace-nowrap border-b border-white/10">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {["🚨 OFICIAL: Semenyo ficha por el City", "⚽ Lamine Yamal valorado en 200M€", "🔥 Real Madrid sigue a Alexander-Arnold"].map((n, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3 h-3 fill-current text-yellow-300" /> {n}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. HERO */}
      <section className="relative py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          FÚTBOL EUROPEO
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">Análisis de las grandes ligas y momentos históricos.</p>
        <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-slate-200 transition-all">
          Explorar Ligas
        </button>
      </section>

      {/* 3. LIGAS */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 py-10">
        {[
          { l: "LaLiga", t: "Barcelona", color: "bg-yellow-500" },
          { l: "Premier", t: "Arsenal", color: "bg-purple-600" },
          { l: "Serie A", t: "Inter", color: "bg-blue-600" },
          { l: "Bundesliga", t: "Bayern", color: "bg-red-600" },
          { l: "Ligue 1", t: "RC Lens", color: "bg-cyan-500" }
        ].map((item, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${item.color}`} />
            <p className="text-[10px] text-slate-500 uppercase font-mono">{item.l}</p>
            <p className="text-lg font-bold mt-2">{item.t}</p>
          </div>
        ))}
      </section>

      {/* 4. GOLEADORES */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Trophy className="text-yellow-500"/> Bota de Oro</h2>
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-4">
          {[{n: "Harry Kane", g: 22, w: "90%"}, {n: "Haaland", g: 19, w: "75%"}, {n: "Lamine Yamal", g: 15, w: "60%"}].map((j, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs font-bold mb-1"><span>{j.n}</span><span>{j.g} Goles</span></div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: j.w }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="py-10 text-center text-slate-600 text-[10px] uppercase tracking-widest">
        © 2026 Fútbol Europeo Archive
      </footer>
    </div>
  );
}
