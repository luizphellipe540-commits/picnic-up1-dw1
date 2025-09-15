import { useState } from 'react';
import ReactPlayer from 'react-player';
import { ArrowRight, CheckCircle } from 'lucide-react';

function App(): JSX.Element {
  const [play, setPlay] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#00825c]">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#ab0101] to-[#5b0202] text-amber-50 py-4 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ab0101]/80 to-[#5b0202]/80 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 translate-x-[-100%] animate-shimmer"></div>
        </div>
        <div className="relative z-10">
          <span className="font-extrabold text-lg md:text-xl">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent font-extrabold">
              AGUARDE:
            </span>{' '}
            SUA COMPRA AINDA NÃO FOI FINALIZADA
          </span>
        </div>
      </div>

      <main className="bg-[#00825c] min-h-screen flex flex-col items-center px-4 py-16 relative">
        {/* Background Pattern (opcional) */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl space-y-8">
          {/* Video Section */}
          <div className="text-center space-y-12">
            <h1 className="text-2xl md:text-3xl font-extrabold text-amber-50">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent font-extrabold">
                ASSISTA
              </span>{' '}
              O VÍDEO ABAIXO:
            </h1>

            {/* Video Container */}
            <div className="relative group mt-16">
              <div className="relative bg-black rounded-xl overflow-hidden shadow-[0_0_60px_16px_rgba(0,130,92,0.35)] transition-shadow duration-300">

                <div className="relative aspect-video">
                  {play ? (
                    <ReactPlayer
                      src="https://www.youtube.com/watch?v=XHOmBV4js_E"
                      playing
                      controls={false}
                      width="100%"
                      height="100%"
                      config={{
                        youtube: {
                          rel: 0,
                          disablekb: 1,
                          iv_load_policy: 3,
                        } as any
                      }}
                    />

                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlay(true)}
                      className="absolute inset-0 w-full h-full cursor-pointer group"
                      aria-label="Reproduzir vídeo"
                    >
                      {/* Thumbnail */}
                      <img
                        src="https://img.youtube.com/vi/XHOmBV4js_E/maxresdefault.jpg"
                        alt="Capa do vídeo"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Overlay escuro leve */}
                      <div className="absolute inset-0 bg-black/30" />
                      {/* Ícone Play central */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition-transform"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Offer Section */}
          <div className="transform transition-all duration-1000 opacity-100 translate-y-0 scale-100">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#ab0101] to-[#5b0202] border-4 border-red-800 rounded-2xl p-8 space-y-6 shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 rounded-2xl">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
                      backgroundSize: '30px 30px',
                    }}
                  />
                </div>

                <div className="relative z-10 text-center">
                  {/* Price Section */}
                  <div className="space-y-8">
                    <p className="text-amber-100 text-lg font-regular">
                      De <del className="text-red-600">R$4.497</del> por apenas 12x de
                    </p>

                    <div className="flex items-baseline justify-center space-x-1 mt-6">
                      <span className="text-amber-100 text-lg font-normal transform -translate-y-1">R$</span>
                      <span className="flex items-baseline leading-none">
                        <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent text-[6rem] md:text-[10rem] font-extrabold tracking-tight">
                          10
                        </span>
                        <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent text-4xl md:text-6xl font-extrabold ml-2">
                          ,50
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* CTA Image */}
                  <div className="relative z-10 -mt-2 md:-mt-4">
                    <img
                      src="https://lipezapp.com/wp-content/uploads/2025/08/Acesso-imediato-1.png"
                      alt="Acesso Imediato"
                      className="w-full max-w-md md:max-w-xs mx-auto h-auto rounded-lg"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                    <button className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-amber-50 font-extrabold py-4 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-500/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="relative flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>QUERO TEMPLATE MILIONÁRIO</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>

                    <button className="group text-red-700/80 hover:text-red-600/90 font-normal py-4 px-8 rounded-xl transition-all duration-300 hover:bg-red-900/30">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Eu decidi perder essa oportunidade!</span>
                      </div>
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-6 text-amber-100/80 text-sm mt-8 md:mt-14">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="font-extrabold">Acesso Imediato</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="font-extrabold">Garantia 7 Dias</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="font-extrabold">Suporte 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
