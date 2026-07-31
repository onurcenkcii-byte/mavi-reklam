"use client";

import { useEffect, useState } from "react";

const phone = "905387110208";

type Category = "Tüm Ürünler" | "Ledbox Tabela" | "Dijital Baskı" | "Promosyon Ürünler" | "Ofis Ürünler";

type Product = {
  title: string;
  category: Exclude<Category, "Tüm Ürünler">;
  icon: string;
};

const products: Product[] = [
  { title: "Makam Bayrağı", category: "Ledbox Tabela", icon: "🏛️" },
  { title: "Yelken Bayrak", category: "Ledbox Tabela", icon: "⛵" },
  { title: "Masa Bayrakları", category: "Ledbox Tabela", icon: "🚩" },
  { title: "Kırlangıç Bayrak", category: "Ledbox Tabela", icon: "📐" },
  { title: "Ledbox Tabela", category: "Ledbox Tabela", icon: "💡" },
  { title: "Branda - Vinil", category: "Dijital Baskı", icon: "🖼️" },
  { title: "Folyo - Etiket", category: "Dijital Baskı", icon: "🎨" },
  { title: "One Way Vizyon", category: "Dijital Baskı", icon: "🪟" },
  { title: "Kartvizit", category: "Dijital Baskı", icon: "🪪" },
  { title: "Broşür", category: "Dijital Baskı", icon: "📄" },
  { title: "Kalem", category: "Promosyon Ürünler", icon: "🖊️" },
  { title: "Çakmak", category: "Promosyon Ürünler", icon: "🔥" },
  { title: "Kupa Bardak", category: "Promosyon Ürünler", icon: "☕" },
  { title: "17'li Ahşap Kaide", category: "Ofis Ürünler", icon: "🏆" },
];

const heroSlides = [
  { title: "Rollup", icon: "📜" },
  { title: "Yelken Bayrak", icon: "⛵" },
  { title: "Makam Bayrağı", icon: "🏛️" },
  { title: "Masa Bayrağı", icon: "🚩" },
  { title: "Kartvizit", icon: "🪪" },
  { title: "Ledbox Tabela", icon: "💡" },
  { title: "Branda - Vinil", icon: "🖼️" },
  { title: "Folyo - Etiket", icon: "🎨" },
  { title: "Kupa Bardak", icon: "☕" },
  { title: "Kalem", icon: "🖊️" },
];

const faqs = [
  { q: "Sipariş süreci nasıl işliyor?", a: "WhatsApp butonumuzdan ürün detayını ileterek anında teklif alabilirsiniz." },
  { q: "Üretim süresi ne kadar sürüyor?", a: "Ürün çeşidine göre ortalama 2-4 iş günüdür." },
  { q: "Kargo ücreti var mı?", a: "Bölge ve ürün adedine göre değişir, sipariş öncesi bilgi verilir." },
  { q: "Ödeme nasıl yapılıyor?", a: "Havale/EFT, kapıda ödeme veya WhatsApp üzerinden paylaşılan ödeme linki ile yapılabilir." },
];

// ---- İKONLAR (çizim tarzı, SVG) ----
function Icon({ path, size = 20 }: { path: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

const catIcons: Record<Category, string> = {
  "Tüm Ürünler": "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  "Ledbox Tabela": "M4 5h16M5 5v13a1 1 0 001 1h4l2 2 2-2h4a1 1 0 001-1V5",
  "Dijital Baskı": "M6 9V3h12v6M6 18H4.5A1.5 1.5 0 013 16.5v-5A1.5 1.5 0 014.5 10h15a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-1.5 1.5H18M6 14h12v7H6z",
  "Promosyon Ürünler": "M20 8H4v12a1 1 0 001 1h14a1 1 0 001-1V8Z M2 8h20v3H2z",
  "Ofis Ürünler": "M4 8h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8Zm3 0V6a2 2 0 012-2h6a2 2 0 012 2v2",
};

const categories: Category[] = ["Tüm Ürünler", "Ledbox Tabela", "Dijital Baskı", "Promosyon Ürünler", "Ofis Ürünler"];

function HomeIcon() {
  return <Icon path="M4 11 12 4l8 7v8a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1v-8Z" />;
}
function FaqIcon() {
  return <Icon path="M9.1 8.5a3 3 0 1 1 3.9 2.9c-.9.3-1.5 1-1.5 2M12 17h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />;
}
function SearchIcon() {
  return <Icon path="M20 20l-4-4M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />;
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.9c1.8 1 3.9 1.5 6.1 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3Zm0 21.8c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.6 1.2 1.2-4.5-.3-.4A9.7 9.7 0 0 1 5.3 15c0-5.9 4.8-10.7 10.7-10.7S26.7 9.1 26.7 15 21.9 24.8 16 24.8Zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1c-.2.2-.3.2-.6 0-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.6h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

// PDF'deki logo işareti (gerçek logo dosyası gelince <img> ile değiştirilebilir)
function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34">
      <circle cx="24" cy="24" r="22" fill="none" stroke="#22d3ee" strokeWidth="2" />
      <path d="M16 30V18l8 8 8-8v12" fill="none" stroke="#22d3ee" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>("Tüm Ürünler");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [faqOpen, setFaqOpen] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
  const [openProductImage, setOpenProductImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const toggleCart = (title: string) => {
    setCart((prev) => (prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title]));
  };

  const sendWhatsApp = () => {
    if (cart.length === 0) {
      alert("Lütfen fiyat almak istediğiniz ürünleri sepete ekleyin.");
      return;
    }
    const message = `Merhaba,\n\nFiyat almak istiyorum bu ürünlere:\n${cart
      .map((item) => "- " + item)
      .join("\n")}\n\nTeşekkürler.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const visibleProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "Tüm Ürünler" || p.category === activeCategory;
    const matchesSearch = p.title.toLocaleLowerCase("tr").includes(searchTerm.toLocaleLowerCase("tr"));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* HEADER */}
      <header className="text-center px-5 py-6 border-b border-white/10">
        <div className="flex items-center justify-center gap-2">
          <img

  src="/logo.svg"
  alt="Mavi Reklam"
  width={200}
  height={64}
  className="w-44 h-auto object-contain"
/>
         
        </div>
        
      </header>

      {/* KAYAN GÖRSEL ALANI — dikdörtgen, 2:1 oran */}
      <section className="px-5 pt-5">
        <div
          className="relative w-full rounded-3xl overflow-hidden border border-cyan-400/20 bg-[#0d0d0d]"
          style={{ aspectRatio: "2 / 1" }}
        >
          <div
            className="flex h-full"
            style={{
              width: `${heroSlides.length * 100}%`,
              transform: `translateX(-${heroIndex * (100 / heroSlides.length)}%)`,
              transition: "transform 700ms cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            }}
          >
            {heroSlides.map((slide) => (
              <div
                key={slide.title}
                className="h-full flex flex-col items-center justify-center gap-2"
                style={{ width: `${100 / heroSlides.length}%` }}
              >
                <span className="text-5xl">{slide.icon}</span>
                <span className="text-gray-300 text-sm font-medium">{slide.title}</span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5">
            {heroSlides.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition ${i === heroIndex ? "bg-cyan-400" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* KATEGORİ FİLTRESİ — tek satırda, kaydırmasız, ikon+yazı kutucuk */}
      <section className="px-4 pt-6 pb-2">
        <div className="grid grid-cols-5 gap-1.5">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl border py-2 px-0.5 ${
                  active ? "border-cyan-400 bg-cyan-400/10 text-cyan-400" : "border-white/10 bg-[#0d0d0d] text-gray-400"
                }`}
              >
                <Icon path={catIcons[cat]} size={16} />
                <span className="text-[7.5px] leading-tight text-center font-semibold">{cat}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ARAMA KUTUSU */}
      {searchOpen && (
        <section className="px-5 pb-2">
          <input
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ürün ara..."
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/50"
          />
        </section>
      )}

      {/* ÜRÜNLER */}
      <section className="px-5 pt-4">
        <div className="grid grid-cols-2 gap-4">
          {visibleProducts.map((product) => {
            const inCart = cart.includes(product.title);
            return (
              <div key={product.title} className="rounded-2xl bg-[#111] border border-white/10 p-3">
                <button
                  onClick={() => setOpenProductImage(product.title)}
                  className="aspect-square w-full rounded-xl bg-black flex items-center justify-center text-4xl"
                >
                  {product.icon}
                </button>

                <h4 className="mt-3 font-semibold text-sm text-center">{product.title}</h4>

                <button
                  onClick={() => toggleCart(product.title)}
                  className={`mt-3 w-full rounded-lg border py-2 text-xs font-semibold transition ${
                    inCart ? "border-cyan-400 bg-cyan-400/10 text-cyan-400" : "border-cyan-400/40 text-cyan-400"
                  }`}
                >
                  {inCart ? "Sepette ✓" : "Fiyat için sepete ekle"}
                </button>
              </div>
            );
          })}
        </div>

        {visibleProducts.length === 0 && (
          <p className="text-center text-gray-500 text-sm py-10">Aramanızla eşleşen ürün bulunamadı.</p>
        )}
      </section>

      {/* ÜRÜN GÖRSELİ BÜYÜTME (LIGHTBOX) */}
      {openProductImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-10"
          onClick={() => setOpenProductImage(null)}
        >
          <div
            className="relative w-full max-w-xs aspect-square rounded-2xl bg-[#111] border border-cyan-400/40 flex flex-col items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-7xl">{products.find((p) => p.title === openProductImage)?.icon}</span>
            <span className="text-gray-300 text-sm">{openProductImage}</span>
            <button
              onClick={() => setOpenProductImage(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* SIK SORULANLAR MODAL */}
      {faqOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-end justify-center" onClick={() => setFaqOpen(false)}>
          <div
            className="w-full max-w-md bg-[#111] border-t border-white/10 rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Sık Sorulan Sorular</h3>
              <button onClick={() => setFaqOpen(false)} className="text-gray-400 text-xl">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="pb-3 border-b border-white/5 last:border-0">
                  <p className="font-semibold text-sm">{faq.q}</p>
                  <p className="mt-1 text-sm text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-14 border-t border-white/10 px-5 py-8 text-center">
        <p className="font-semibold text-sm">Mavi Reklam</p>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed">
          2. Matbaacılar Sk. İstanbul - Topkapı · 0538 711 02 08 · mavireklammerkez@gmail.com
        </p>
        <p className="mt-3 text-xs text-gray-600">© 2026 Mavi Reklam. Tüm hakları saklıdır.</p>
      </footer>

      {/* ALT SABİT GEZİNME — her zaman ekranda sabit (fixed) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a] border-t border-white/10 px-2 py-3">
        <div className="grid grid-cols-3">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col items-center gap-1 text-gray-400">
            <HomeIcon />
            <span className="text-[10px]">Anasayfa</span>
          </button>
          <button onClick={() => setFaqOpen(true)} className="flex flex-col items-center gap-1 text-gray-400">
            <FaqIcon />
            <span className="text-[10px]">Sık Sorulanlar</span>
          </button>
          <button onClick={() => setSearchOpen((s) => !s)} className="flex flex-col items-center gap-1 text-gray-400">
            <SearchIcon />
            <span className="text-[10px]">Ara</span>
          </button>
        </div>
      </nav>

      {/* SABİT WHATSAPP BUTONU — her zaman ekranın sağ altında (fixed) */}
      <button
        onClick={sendWhatsApp}
        className="whatsapp-shake fixed bottom-20 right-5 z-50 bg-green-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.5)] flex items-center gap-2"
      >
        <WhatsAppGlyph />
        <span className="text-sm font-semibold whitespace-nowrap">
          WhatsApp'tan Fiyat Alın{cart.length > 0 ? ` (${cart.length})` : ""}
        </span>
      </button>
    </main>
  );
}