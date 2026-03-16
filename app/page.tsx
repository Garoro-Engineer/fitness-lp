"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    { q: "初心者でも通えますか？", a: "はい、もちろんです。経験豊富なトレーナーが一人ひとりのレベルに合わせてサポートします。初回無料体験もご用意しています。" },
    { q: "見学だけでもできますか？", a: "いつでも見学・体験を受け付けています。お気軽にお問い合わせください。" },
    { q: "営業時間はいつですか？", a: "平日 6:00〜23:00、土日祝 8:00〜21:00です。年中無休で営業しています。" },
    { q: "入会金はかかりますか？", a: "現在、入会金無料キャンペーン実施中です。お早めにお申し込みください。" },
    { q: "駐車場はありますか？", a: "無料駐車場を20台完備しています。お車でのご来店も安心です。" },
  ];

  const plans = [
    {
      name: "ライト",
      price: "6,980",
      period: "月額",
      features: ["施設利用（平日のみ）", "グループレッスン月4回", "ロッカー利用"],
      highlight: false,
    },
    {
      name: "スタンダード",
      price: "9,980",
      period: "月額",
      features: ["施設利用（全日）", "グループレッスン無制限", "パーソナル月1回", "栄養サポート"],
      highlight: true,
    },
    {
      name: "プレミアム",
      price: "19,800",
      period: "月額",
      features: ["施設利用（全日）", "グループレッスン無制限", "パーソナル月4回", "栄養サポート", "専用ロッカー"],
      highlight: false,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="font-sans text-gray-800">

      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-white font-black text-xl tracking-widest">
            <span className="text-orange-500">IRON</span> BODY
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-orange-400 transition">特徴</a>
            <a href="#plans" className="hover:text-orange-400 transition">料金</a>
            <a href="#faq" className="hover:text-orange-400 transition">FAQ</a>
            <a href="#contact" className="hover:text-orange-400 transition">お問い合わせ</a>
          </div>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-full transition"
          >
            無料体験
          </a>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-black to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(249,115,22,0.1) 40px,
              rgba(249,115,22,0.1) 41px
            )`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-orange-400 text-sm font-bold tracking-[0.3em] mb-4 uppercase">
            Premium Fitness Gym
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            限界を、<br />
            <span className="text-orange-500">超えていけ。</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            最新設備と一流トレーナーが、あなたの理想の身体づくりを徹底サポート。
            初心者から上級者まで、すべての方に最適なプログラムを提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-10 py-4 rounded-full transition transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              無料体験を予約する
            </a>
            <a
              href="#features"
              className="border-2 border-white/30 hover:border-orange-500 text-white font-bold text-lg px-10 py-4 rounded-full transition"
            >
              詳しく見る
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-white">
            {[["500+", "会員数"], ["15+", "専属トレーナー"], ["100+", "設備数"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black text-orange-400">{num}</div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-orange-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section id="features" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Features</p>
            <h2 className="text-4xl font-black text-white">選ばれる<span className="text-orange-500">3つ</span>の理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏋️",
                title: "最新鋭の設備",
                desc: "最新のトレーニングマシン100台以上を完備。快適な空間で効率よくトレーニングできます。",
              },
              {
                icon: "👨‍💼",
                title: "プロトレーナー在籍",
                desc: "全員が国家資格保有のプロフェッショナル。あなたの目標に合わせた最適なプログラムを作成します。",
              },
              {
                icon: "📊",
                title: "科学的アプローチ",
                desc: "体組成測定・栄養管理・トレーニング記録を一元管理。データに基づいた確実な結果を提供します。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 transition group"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-orange-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section id="plans" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Plans</p>
            <h2 className="text-4xl font-black text-white">料金プラン</h2>
            <p className="text-gray-400 mt-4">すべてのプランに初月無料体験が含まれます</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border transition ${
                  plan.highlight
                    ? "bg-orange-500 border-orange-400 scale-105 shadow-2xl shadow-orange-500/30"
                    : "bg-gray-900 border-gray-800 hover:border-gray-600"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-orange-500 text-xs font-black px-3 py-1 rounded-full">
                      人気No.1
                    </span>
                  </div>
                )}
                <h3
                  className={`text-xl font-black mb-4 ${
                    plan.highlight ? "text-white" : "text-gray-200"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6 text-white">
                  <span className="text-4xl font-black">¥{plan.price}</span>
                  <span className="text-sm opacity-70 ml-1">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2 text-sm ${
                        plan.highlight ? "text-orange-100" : "text-gray-400"
                      }`}
                    >
                      <span className={plan.highlight ? "text-white" : "text-orange-500"}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-bold py-3 rounded-full transition ${
                    plan.highlight
                      ? "bg-white text-orange-500 hover:bg-orange-50"
                      : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  このプランで始める
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section id="faq" className="py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-4xl font-black text-white">よくある質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-white font-bold hover:text-orange-400 transition"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className={`text-orange-500 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-4xl font-black text-white">無料体験を予約する</h2>
            <p className="text-gray-400 mt-4">まずは気軽にご連絡ください。24時間以内にご返信します。</p>
          </div>
          {submitted ? (
            <div className="text-center bg-gray-900 border border-orange-500/50 rounded-2xl p-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-white mb-2">送信完了！</h3>
              <p className="text-gray-400">ありがとうございます。24時間以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">お名前</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="山田 太郎"
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">メールアドレス</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">ご質問・ご要望（任意）</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="気になることがあればお気軽にどうぞ"
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition placeholder-gray-600 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-full transition transform hover:scale-[1.02] shadow-lg shadow-orange-500/30"
              >
                無料体験を予約する →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-950 border-t border-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-white font-black text-lg tracking-widest">
            <span className="text-orange-500">IRON</span> BODY
          </span>
          <p className="text-gray-600 text-sm mt-3">© 2024 IRON BODY FITNESS. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
