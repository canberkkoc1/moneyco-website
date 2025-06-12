"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChartBarIcon, CurrencyDollarIcon, ChartPieIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Finansal Özgürlüğünüz İçin <span className="text-blue-600">Money Co</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Harcamalarınızı takip edin, bütçenizi yönetin ve finansal hedeflerinize ulaşın.
                Tüm finansal ihtiyaçlarınız için tek uygulama.
              </p>
              <a
                href="https://apps.apple.com/tr/app/money-co/id6746875965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                App Store&apos;dan İndir
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative w-[300px] h-[600px] mx-auto">
                <Image
                  src="/images/Screensot (6.5 inch) 1.png"
                  alt="Money Co Ana Ekran"
                  fill
                  className="rounded-3xl shadow-2xl object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Neden Money Co?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ChartBarIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kolay Takip</h3>
              <p className="text-gray-600">
                Gelir ve giderlerinizi kolayca takip edin, kategorilere ayırın ve detaylı raporlar alın.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CurrencyDollarIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bütçe Yönetimi</h3>
              <p className="text-gray-600">
                Akıllı bütçe önerileri ile tasarruf edin ve finansal hedeflerinize daha hızlı ulaşın.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ChartPieIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detaylı Analizler</h3>
              <p className="text-gray-600">
                Harcama alışkanlıklarınızı analiz edin ve finansal sağlığınızı iyileştirin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Uygulama Ekran Görüntüleri
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-8 px-4 -mx-4">
            {[2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                className="flex-none w-[250px] h-[500px] relative"
              >
                <Image
                  src={`/images/Screensot (6.5 inch) ${num}.png`}
                  alt={`Money Co Ekran Görüntüsü ${num}`}
                  fill
                  className="rounded-2xl shadow-lg object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 Money Co. Tüm hakları saklıdır.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 mx-2">Gizlilik Politikası</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 mx-2">Kullanım Koşulları</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
