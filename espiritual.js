import React, { useState } from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, ReferenceLine, Label 
} from 'recharts';
import { 
  Mountain, Info, ChevronRight, ChevronLeft, Navigation, 
  Ship, Share2, MapPin, Footprints, Bed, Award 
} from 'lucide-react';

const App = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [copied, setCopied] = useState(false);

  const shareUrl = "www.caminandojuntos.com.mx/perfil-elevacion-camino-portugues-espiritual";

  const handleShare = () => {
    const el = document.createElement('textarea');
    el.value = shareUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Datos de elevación basados en la geografía real del Camino Portugués + Variante Espiritual
  const data = [
    { km: 0, alt: 35, name: 'Tui', stage: 'E1' },
    { km: 9, alt: 25, name: 'Río Louro', stage: 'E1' },
    { km: 18, alt: 40, name: 'O Porriño', stage: 'E1' },
    { km: 26, alt: 150, name: 'Alto de Enseada', stage: 'E2' },
    { km: 34, alt: 15, name: 'Redondela', stage: 'E2' },
    { km: 44, alt: 140, name: 'Alto de San Amaro', stage: 'E3' },
    { km: 53.6, alt: 20, name: 'Pontevedra', stage: 'E3' },
    { km: 64, alt: 10, name: 'Poio', stage: 'E4' },
    { km: 75.6, alt: 280, name: 'Armenteira', stage: 'E4' },
    { km: 85, alt: 150, name: 'Ruta da Pedra', stage: 'E5' },
    { km: 102.6, alt: 5, name: 'Vilanova', stage: 'E5' },
    { km: 115, alt: 0, name: 'Traslatio (Ría)', stage: 'E6' },
    { km: 129.6, alt: 10, name: 'Padrón', stage: 'E6' },
    { km: 140, alt: 120, name: 'Iria Flavia', stage: 'E7' },
    { km: 150, alt: 240, name: 'Milladoiro', stage: 'E7' },
    { km: 154.1, alt: 260, name: 'Santiago', stage: 'E7' },
  ];

  const stages = [
    { 
      id: 1, 
      title: "Etapa 1: Tui - O Porriño", 
      expertDesc: "Un inicio suave para despertar los sentidos. Cruzamos el puente internacional dejando atrás Portugal. El trazado es amable, con bosques de ribera que nos regalan la sombra del río Louro antes de entrar en la zona industrial.",
      difficulty: "Fácil",
      tips: ["Toma la variante del Río Louro para evitar 8km de asfalto industrial.", "Calienta bien los tobillos; aunque es llana, el terreno de tierra compacta puede ser traicionero."],
      kmTotal: 18
    },
    { 
      id: 2, 
      title: "Etapa 2: O Porriño - Redondela", 
      expertDesc: "Aquí el Camino empieza a mostrar su carácter. El ascenso al Monte Lombo da Maceira ofrece vistas impresionantes de la Ría de Vigo. Es una etapa corta pero intensa que culmina en la ciudad de los viaductos.",
      difficulty: "Media",
      tips: ["Dosifica en la subida a Enseada, es corta pero la pendiente es del 8%.", "En Redondela, busca los viaductos; son la firma arquitectónica de la ciudad."],
      kmTotal: 16
    },
    { 
      id: 3, 
      title: "Etapa 3: Redondela - Pontevedra", 
      expertDesc: "Cruzamos el histórico Puente Sampaio, donde se libró la batalla contra Napoleón. El ascenso por las 'corredoiras' antiguas es puro misticismo gallego antes de descender a la señorial Pontevedra.",
      difficulty: "Media",
      tips: ["Prueba las ostras en Arcade, es casi una obligación del peregrino.", "Disfruta el casco antiguo de Pontevedra, es uno de los mejores conservados de España."],
      kmTotal: 19.6
    },
    { 
      id: 4, 
      title: "Etapa 4: Pontevedra - Armenteira", 
      expertDesc: "El inicio de la Variante Espiritual. Dejamos el ruido para entrar en el silencio absoluto del Monasterio de Armenteira. La subida es un rito de paso exigente pero profundamente gratificante.",
      difficulty: "Difícil",
      tips: ["Es el ascenso más duro de tu ruta (270m en pocos KM). Haz paradas frecuentes.", "Llena el cantimplora en Poio; no habrá muchas fuentes en el corazón del monte."],
      kmTotal: 22
    },
    { 
      id: 5, 
      title: "Etapa 5: Armenteira - Vilanova", 
      expertDesc: "La 'Ruta da Pedra e da Auga'. Caminamos junto a 33 molinos antiguos y pequeñas cascadas. Es un descenso mágico envuelto en musgo y helechos que nos lleva directamente al mar de Arousa.",
      difficulty: "Media-Fácil",
      tips: ["Los bastones son vitales para el descenso sobre piedras húmedas.", "Al llegar a Vilanova, disfruta de la playa; tus pies te lo agradecerán."],
      kmTotal: 27
    },
    { 
      id: 6, 
      title: "Etapa 6: Vilanova - Padrón", 
      expertDesc: "La Traslatio. Remontamos el río Ulla siguiendo la barca que llevó los restos del Apóstol. Es un momento de reflexión profunda navegando entre cruceiros marítimos únicos en el mundo.",
      difficulty: "Muy Fácil",
      tips: ["Reserva la barca con antelación, los horarios cambian cada día por la marea.", "Lleva una chaqueta ligera, incluso en septiembre el viento en el río es frío."],
      kmTotal: 27
    },
    { 
      id: 7, 
      title: "Etapa 7: Padrón - Santiago", 
      expertDesc: "La culminación del esfuerzo. El ascenso a Milladoiro es el último obstáculo. Entrar en la Plaza del Obradoiro con el sonido de las gaitas de fondo es una experiencia que cambia la vida.",
      difficulty: "Media",
      tips: ["Sal temprano de Padrón para llegar a la Misa del Peregrino a las 12:00.", "Tómate tu tiempo en el Monte do Gozo; es la primera vez que verás las torres."],
      kmTotal: 24.5
    },
  ];

  const currentStageInfo = stages[activeStage];

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header con Logo y Botón Compartir */}
        <header className="mb-10 flex flex-col items-center text-center gap-6 border-b border-amber-100 pb-8">
          <div className="relative group">
            <div className="bg-amber-400 p-4 rounded-full shadow-lg mb-2">
              <Navigation className="w-12 h-12 text-white fill-current" />
            </div>
            <h1 className="text-4xl font-serif font-black text-blue-900 tracking-tight">CAMINANDO JUNTOS</h1>
          </div>
          
          <div className="flex flex-col gap-4 items-center">
            <p className="text-stone-500 italic max-w-lg">
              "Expertos en el Camino de Santiago, guiando tus pasos con la sabiduría de la tradición."
            </p>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-md active:scale-95"
            >
              <Share2 className="w-4 h-4" />
              {copied ? '¡Copiado!' : 'Compartir Perfil'}
            </button>
          </div>
        </header>

        {/* Resumen de Distancia */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-3">
            <MapPin className="text-amber-600 w-5 h-5" />
            <div>
              <p className="text-[10px] uppercase font-bold text-stone-400">Distancia Total</p>
              <p className="text-xl font-black text-stone-800">154.1 KM</p>
            </div>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-3">
            <Footprints className="text-blue-600 w-5 h-5" />
            <div>
              <p className="text-[10px] uppercase font-bold text-stone-400">Solo Caminar</p>
              <p className="text-xl font-black text-stone-800">~127.1 KM</p>
            </div>
          </div>
        </div>

        {/* Gráfico de Altitud */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 mb-10 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Mountain className="text-amber-600 w-6 h-6" />
              <h2 className="text-xl font-bold text-stone-700">Orografía del Camino Portugués Espiritual</h2>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorAlt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d97706" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="km" tick={{fontSize: 10}} />
                <YAxis tick={{fontSize: 10}} unit="m" />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Area 
                  type="monotone" 
                  dataKey="alt" 
                  stroke="#d97706" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorAlt)" 
                />
                
                {/* Stage Labels */}
                <ReferenceLine x={0} stroke="#e5e7eb" strokeWidth={2}>
                  <Label value="E1" position="top" fill="#9ca3af" fontSize={10} />
                </ReferenceLine>
                <ReferenceLine x={18} stroke="#e5e7eb" strokeWidth={2}>
                  <Label value="E2" position="top" fill="#9ca3af" fontSize={10} />
                </ReferenceLine>
                <ReferenceLine x={34} stroke="#e5e7eb" strokeWidth={2}>
                  <Label value="E3" position="top" fill="#9ca3af" fontSize={10} />
                </ReferenceLine>
                <ReferenceLine x={53.6} stroke="#f59e0b" strokeWidth={2} strokeDasharray="3 3">
                  <Label value="Espiritual" position="top" fill="#d97706" fontSize={10} fontWeight="bold" />
                </ReferenceLine>
                <ReferenceLine x={75.6} stroke="#e5e7eb" strokeWidth={2}>
                  <Label value="E5" position="top" fill="#9ca3af" fontSize={10} />
                </ReferenceLine>
                <ReferenceLine x={102.6} stroke="#2563eb" strokeWidth={2}>
                  <Label value="Traslatio" position="top" fill="#2563eb" fontSize={10} />
                </ReferenceLine>
                <ReferenceLine x={129.6} stroke="#e5e7eb" strokeWidth={2}>
                  <Label value="E7" position="top" fill="#9ca3af" fontSize={10} />
                </ReferenceLine>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detalle de Etapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Menu Lateral */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-black text-blue-900 uppercase tracking-[0.2em] mb-4 pl-2">Ruta de Etapas</h3>
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${
                  activeStage === index 
                    ? 'bg-blue-900 text-white shadow-lg -translate-y-1' 
                    : 'bg-white border border-stone-200 text-stone-600 hover:border-amber-400 hover:bg-amber-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStage === index ? 'bg-amber-400 text-blue-900' : 'bg-stone-100 group-hover:bg-amber-200'
                  }`}>
                    {stage.id}
                  </span>
                  <span className="text-sm font-bold tracking-tight">{stage.title.split(': ')[1]}</span>
                </div>
                <ChevronRight className={`w-4 h-4 ${activeStage === index ? 'text-amber-400' : 'text-stone-300'}`} />
              </button>
            ))}
          </div>

          {/* Info Principal */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                <h3 className="text-3xl font-serif font-bold">{currentStageInfo.title}</h3>
                <span className={`w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  currentStageInfo.difficulty === 'Difícil' ? 'bg-red-500' :
                  currentStageInfo.difficulty === 'Media' ? 'bg-amber-500' :
                  'bg-emerald-500'
                }`}>
                  Nivel: {currentStageInfo.difficulty}
                </span>
              </div>
              <p className="text-blue-100/90 leading-relaxed font-light text-lg italic">
                "{currentStageInfo.expertDesc}"
              </p>
            </div>
            
            <div className="p-8">
              <h4 className="flex items-center gap-3 font-black text-blue-900 uppercase tracking-widest text-xs mb-6">
                <Info className="w-5 h-5 text-amber-500" />
                Consejo del Peregrino Experto
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  {currentStageInfo.tips.map((tip, i) => (
                    <li key={i} className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                      <span className="text-amber-500 font-bold">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 self-start">
                  <p className="text-xs font-bold text-amber-800 uppercase mb-2">Preparación Física</p>
                  <p className="text-sm text-amber-900/70">
                    {activeStage === 3 ? "Asegúrate de haber descansado bien. Esta etapa requiere una cadencia constante en la subida." : 
                     activeStage === 6 ? "Usa este día para realizar estiramientos activos durante la navegación." :
                     "Etapa de mantenimiento. Mantén tu ritmo habitual."}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-between items-center px-8">
              <button 
                onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                disabled={activeStage === 0}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-blue-900 disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              <button 
                onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                disabled={activeStage === stages.length - 1}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-blue-900 disabled:opacity-30"
              >
                Siguiente <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sección Logística (Hospedajes y Credencial) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex gap-6 items-start">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <Bed className="text-blue-600 w-8 h-8" />
            </div>
            <div>
              <h4 className="text-blue-900 font-black uppercase tracking-widest text-sm mb-2">Gestión de Hospedajes</h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                Septiembre es un mes de gran afluencia. Te recomendamos reservar tus **hospedajes** con al menos 2 semanas de antelación, especialmente en Armenteira y Vilanova, donde la oferta es reducida pero con mucho encanto.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex gap-6 items-start">
            <div className="bg-amber-50 p-4 rounded-2xl">
              <Award className="text-amber-600 w-8 h-8" />
            </div>
            <div>
              <h4 className="text-amber-900 font-black uppercase tracking-widest text-sm mb-2">Sello y Credencial</h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                Sella tu credencial al menos dos veces al día en los últimos 100km. En la Variante Espiritual, no olvides pedir el sello especial de la Traslatio a bordo de la barca; es fundamental para tu Compostela.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 py-10 text-center border-t border-stone-200">
          <p className="text-2xl font-serif font-bold text-blue-900 italic">
            "Vayamos Caminando Juntos a Santiago de Compostela, Buen Camino"
          </p>
          <p className="text-stone-400 text-sm mt-4 tracking-widest uppercase">
            © 2026 CAMINANDO JUNTOS
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;
