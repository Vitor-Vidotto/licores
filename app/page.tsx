import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-200 selection:bg-amber-900 selection:text-white pb-20">

      {/* Elegante Hero Section */}
      <header className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo (Borrada/Escurecida) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/1000162094.jpg"
            alt="Reserva Vidotto Background"
            fill
            className="object-cover opacity-30 scale-105 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        </div>

        {/* Conteúdo do Hero */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-wide text-amber-50 drop-shadow-lg mb-4">
            Reserva Vidotto
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-amber-200/80 tracking-widest uppercase">
            A Essência do Sabor Artesanal
          </p>
        </div>
      </header>

      {/* Main Content / Cardápio */}
      <main className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">

        <div className="space-y-16">

          {/* Sessão: Clássicos */}
          <section className="bg-stone-900/80 backdrop-blur-md border border-stone-800 rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-amber-900/10 hover:border-stone-700 group">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <Image src="/1000162089.jpg" alt="Licores Clássicos" fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-900/40 md:to-stone-900/90" />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6 border-b border-stone-800/50 pb-4">
                  <h2 className="font-serif text-3xl text-amber-50 mb-1">Clássicos</h2>
                  <p className="text-stone-400 text-sm italic tracking-wide mb-3">A tradição em cada gota.</p>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    <span className="font-medium text-amber-200/80">Sabores:</span> Raízes, Maracujá, Morango, Maçã, Laranja com Canela, Figo, Cereja.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center"><span className="text-stone-300">50ml</span><span className="font-semibold text-amber-100">R$ 15</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">160ml</span><span className="font-semibold text-amber-100">R$ 25</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">500ml</span><span className="font-semibold text-amber-100">R$ 55</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">750ml</span><span className="font-semibold text-amber-100">R$ 75</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sessão: Trufados */}
          <section className="bg-stone-900/80 backdrop-blur-md border border-stone-800 rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-amber-900/10 hover:border-stone-700 group">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <Image src="/1000162090.jpg" alt="Licores Trufados" fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-stone-900/40 md:to-stone-900/90" />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6 border-b border-stone-800/50 pb-4">
                  <h2 className="font-serif text-3xl text-amber-50 mb-1">Trufados</h2>
                  <p className="text-stone-400 text-sm italic tracking-wide mb-3">Textura aveludada, sabor inesquecível.</p>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    <span className="font-medium text-amber-200/80">Sabores:</span> Morango com Ninho, Chocolate Belga, Doce de Leite.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center"><span className="text-stone-300">50ml</span><span className="font-semibold text-amber-100">R$ 15</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">160ml</span><span className="font-semibold text-amber-100">R$ 35</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">500ml</span><span className="font-semibold text-amber-100">R$ 65</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">750ml</span><span className="font-semibold text-amber-100">R$ 95</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sessão: Especiais */}
          <section className="bg-stone-900/80 backdrop-blur-md border border-stone-800 rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-amber-900/10 hover:border-stone-700 group">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <Image src="/1000162091.jpg" alt="Licores Especiais" fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-900/40 md:to-stone-900/90" />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6 border-b border-stone-800/50 pb-4">
                  <h2 className="font-serif text-3xl text-amber-50 mb-1">Especiais</h2>
                  <p className="text-stone-400 text-sm italic tracking-wide mb-3">A experiência premium.</p>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    <span className="font-medium text-amber-200/80">Sabores:</span> Café com Jack Daniel's, Café com Cachaça Amadeirada, Coco ao Rum, Mel com Baunilha e Rum.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between items-center"><span className="text-stone-300">50ml</span><span className="font-semibold text-amber-100">R$ 25</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">160ml</span><span className="font-semibold text-amber-100">R$ 45</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">375ml</span><span className="font-semibold text-amber-100">R$ 75</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">500ml</span><span className="font-semibold text-amber-100">R$ 85</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">750ml</span><span className="font-semibold text-amber-100">R$ 120</span></li>
                </ul>
                <div className="bg-amber-900/20 border border-amber-900/50 rounded-lg p-4 text-center">
                  <span className="block text-amber-200/90 font-medium text-sm">🎁 Todos os Especiais incluem copinho 🎁</span>
                </div>
              </div>
            </div>
          </section>

          {/* Sessão: Geleias */}
          <section className="bg-stone-900/80 backdrop-blur-md border border-stone-800 rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-amber-900/10 hover:border-stone-700 group">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <Image src="/geleias2.png" alt="Geleias Artesanais" fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-stone-900/40 md:to-stone-900/90" />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6 border-b border-stone-800/50 pb-4">
                  <h2 className="font-serif text-3xl text-amber-50 mb-1">Geleias</h2>
                  <p className="text-stone-400 text-sm italic tracking-wide">Artesanais (300g)</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-stone-800/30 pb-2"><span className="text-stone-300">Abacaxi com Pimenta</span><span className="font-semibold text-amber-100">R$ 35</span></li>
                  <li className="flex justify-between items-center border-b border-stone-800/30 pb-2"><span className="text-stone-300">Morango, Uva e Vinho</span><span className="font-semibold text-amber-100">R$ 35</span></li>
                  <li className="flex justify-between items-center border-b border-stone-800/30 pb-2"><span className="text-stone-300">Abacaxi com Maracujá</span><span className="font-semibold text-amber-100">R$ 35</span></li>
                  <li className="flex justify-between items-center"><span className="text-stone-300">Maracujá com Manga</span><span className="font-semibold text-amber-100">R$ 35</span></li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="mt-24 pt-10 border-t border-stone-900 text-center px-4">
        <h3 className="font-serif text-2xl text-stone-400 mb-6">Faça seu pedido conosco</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a
            href="https://www.instagram.com/reserva_vidotto/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-700/50 transition-all duration-300"
          >
            <span className="text-stone-400 group-hover:text-amber-400 transition-colors">@reserva_vidotto</span>
          </a>
          <a
            href="https://wa.me/5515998109786"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-amber-700/10 border border-amber-700/30 hover:bg-amber-700/20 hover:border-amber-600 transition-all duration-300"
          >
            <span className="text-amber-200/90 font-medium">+15 99810-9786</span>
          </a>
        </div>
        <p className="mt-16 text-xs text-stone-600">© {new Date().getFullYear()} Reserva Vidotto. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
