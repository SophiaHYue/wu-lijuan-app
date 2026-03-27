export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Banner */}
      <header
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/your-image.png')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 text-center rounded-lg">
          <h1 className="text-5xl font-bold mb-4">吳麗娟</h1>
          <p className="text-xl mb-6">
            跨國女性創業者 · 日本寵物醫院 · 台日 AI 合作
          </p>
          <nav>
            <ul className="flex justify-center space-x-6">
              <li><a href="#about" className="hover:text-yellow-400">關於我</a></li>
              <li><a href="#clinic" className="hover:text-yellow-400">寵物醫院</a></li>
              <li><a href="#ai" className="hover:text-yellow-400">AI 合作</a></li>
              <li><a href="#vision" className="hover:text-yellow-400">願景</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">聯繫</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 主要內容 */}
      <main className="max-w-4xl mx-auto p-8 space-y-10">
        <section id="about" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">關於我</h2>
          <p>我是一位跨國女性創業者，從東京開始我的寵物醫療事業，並逐步拓展到台灣的 AI 合作領域。</p>
        </section>

        <section id="clinic" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">日本寵物醫院</h2>
          <p>在東京成立並經營一家頂尖寵物醫院，累積了大量臨床數據與專業經驗。</p>
        </section>

        <section id="ai" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">台灣 AI 合作</h2>
          <p>目前正與台灣的 AI 公司合作，將人工智慧技術導入寵物醫療影像與疾病預測。</p>
        </section>

        <section id="vision" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">願景</h2>
          <p>透過跨國合作，結合日本的臨床場景與台灣的 AI 技術，推動寵物醫療的智慧化發展。</p>
        </section>

        <section id="contact" className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">聯繫方式</h2>
          <p>Email: example@email.com</p>
          <p>LinkedIn: <a href="#" className="text-blue-600">linkedin.com/in/wulijuan</a></p>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>AI × 創業 × 女性力量 —— 吳麗娟的跨國新篇章</p>
      </footer>
    </div>
  );
}
