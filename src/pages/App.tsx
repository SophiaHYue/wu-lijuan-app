import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-[#020B1A] text-white min-h-screen selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020B1A]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-[#020B1A] font-bold text-xl">W</span>
            </div>
            <span className="text-xl font-bold tracking-wider group-hover:text-orange-400 transition-colors">吳麗娟</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-orange-400 transition-colors font-medium">首頁</a>
            <a href="#about" className="hover:text-orange-400 transition-colors font-medium">關於我</a>
            <a href="#values" className="hover:text-orange-400 transition-colors font-medium">核心價值</a>
            <a href="#milestones" className="hover:text-orange-400 transition-colors font-medium">醫院里程碑</a>
            <div className="flex items-center space-x-3 ml-4">
              <button className="text-gray-400 hover:text-white transition-colors font-medium px-4 py-2">
                Login
              </button>
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-orange-600/30 active:scale-95">
                聯繫合作
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>跨國女性創業者 · 日本寵物醫院 · 台日 AI 合作</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              跨越台日，以 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">AI</span> 守護生命<br />
              <span className="text-3xl md:text-4xl font-light text-gray-400 mt-4 block italic">Serena Wu</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              「連結台日資源，將 AI 智慧導入寵物醫療，創造跨國女性創業的新典範。」
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-[#020B1A] px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all">
                了解更多
              </button>
              <button className="border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-all">
                下載簡歷
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B1A] via-transparent to-transparent z-10" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl group-hover:border-orange-500/30 transition-colors duration-500">
              <img
                src="/hero-profile.png"
                alt="Serena Wu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay graphics to match Image 1/2 style */}
              <div className="absolute top-6 right-6 z-20 space-y-2">
                <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  <div className="text-orange-400 text-xs font-bold uppercase tracking-widest">Market Focus</div>
                  <div className="text-sm">Tokyo × Taipei</div>
                </div>
                <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Tech Stack</div>
                  <div className="text-sm">AI Diagnosis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features Section */}
      <section id="values" className="py-24 bg-white text-[#020B1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">AI × 創業 × 女性力量</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              連結香港創意、台灣技術、日本臨床場景，推動寵物醫療的智慧化革新。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🧠"
              title="AI 技術導入"
              desc="將 AI 影像辨識與大數據分析導入寵物醫療，提升臨床診斷的精準度與效率。"
              accent="orange"
            />
            <ValueCard
              icon="🌏"
              title="台日跨國合作"
              desc="整合日本豐富的臨床數據與台灣頂尖的 AI 技術團隊，連結兩地的優勢資源。"
              accent="blue"
            />
            <ValueCard
              icon="✨"
              title="女性創業典範"
              desc="作為跨國女性創業者，致力於推動職場多元性，激發科技與醫療領域的女性力量。"
              accent="orange"
            />
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-24 bg-[#0A1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">寵物醫院發展里程碑</h2>
              <p className="text-gray-400">從東京小店到台日 AI 醫療合作的進化歷程</p>
            </div>
            <div className="text-5xl font-bold text-white/5 select-none hidden md:block">HOSPITAL MILESTONES</div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <MilestoneCard
              age="2012 年"
              title="東京小店創立"
              desc="於日本東京成立個人寵物診所，專注於高品質的社區醫療服務。"
              img="/milestone-2012.png"
            />
            <MilestoneCard
              age="2016 年"
              title="規模化營運"
              desc="擴展為連鎖寵物美容與醫療中心，引進全套專業臨床設備。"
              img="/milestone-2016.png"
            />
            <MilestoneCard
              age="2020 年"
              title="智慧化轉型"
              desc="建立醫院病歷數字化系統，並開始累積臨床醫療影像數據庫。"
              img="/milestone-2020.png"
            />
            <MilestoneCard
              age="2024 年"
              title="跨國 AI 合作"
              desc="正式啟動台日 AI 專案，致力於寵物疾病早期預測系統的研發。"
              img="/milestone-2024.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#0A1120] to-[#020B1A]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">開啟跨國 AI 合作新篇章</h2>
            <p className="text-gray-400 text-lg">
              如果您對 AI 寵物醫療、跨國資源整合或女性創業有興趣，歡迎隨時與我聯繫。
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <SocialLink href="#" label="LinkedIn" />
            <SocialLink href="#" label="Twitter" />
            <SocialLink href="#" label="Email" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 Serena Wu 吳麗娟 · AI-Pet Tech Solutions</p>
        <p className="mt-2">連結日本臨床 · 台灣技術 · 全球視野</p>
      </footer>
    </div>
  );
}

function ValueCard({ icon, title, desc, accent }: { icon: string, title: string, desc: string, accent: 'orange' | 'blue' }) {
  const accentColor = accent === 'orange' ? 'border-orange-500/20 hover:border-orange-500' : 'border-blue-500/20 hover:border-blue-500';
  const iconBg = accent === 'orange' ? 'bg-orange-50' : 'bg-blue-50';

  return (
    <div className={`p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${accentColor}`}>
      <div className={`w-16 h-16 rounded-xl ${iconBg} flex items-center justify-center text-3xl mb-6 shadow-sm`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function MilestoneCard({ age, title, desc, img }: { age: string, title: string, desc: string, img: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500">
      <div className="aspect-square overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-orange-400 font-bold text-sm mb-1">{age}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{desc}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a
      href={href}
      className="text-white hover:text-orange-400 transition-colors font-medium border-b border-transparent hover:border-orange-400"
    >
      {label}
    </a>
  );
}
