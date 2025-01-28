import React from 'react';
import { Scissors, Bean as Beard, SprayCan as Spray, Gift, Coffee, ShoppingBag, Phone, Instagram, Mail, MessageCircle, MapPin } from 'lucide-react';

const ServiceCard = ({ title, price, description, icon: Icon }) => (
  <div className="bg-stone-800 p-6 rounded-lg transition-transform hover:scale-105">
    <Icon className="w-8 h-8 text-amber-600 mb-4" />
    <h3 className="text-xl font-serif text-amber-100 mb-2">{title}</h3>
    <p className="text-stone-400 mb-3">{description}</p>
    <p className="text-amber-500 font-bold">R$ {price},00</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-200">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="text-center">
          <h1 className="font-serif text-6xl mb-4 text-amber-500">Barbearia O Búlgaro</h1>
          <p className="text-2xl italic text-stone-300">"Cortes que contam histórias"</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-amber-500">Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Scissors}
              title="Corte Clássico Militar"
              description="Corte preciso e limpo, inspirado no estilo militar."
              price={40}
            />
            <ServiceCard
              icon={Scissors}
              title="Undercut Moderno"
              description="Estilo ousado com as laterais raspadas e topo volumoso."
              price={50}
            />
            <ServiceCard
              icon={Beard}
              title="Barba Completa"
              description="Corte, modelagem e cuidados com a barba."
              price={40}
            />
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 px-4 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-amber-500">Pacotes Especiais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-800 p-8 rounded-lg border-2 border-amber-600">
              <Gift className="w-12 h-12 text-amber-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-serif text-center text-amber-100 mb-4">Completo Clássico</h3>
              <ul className="space-y-2 text-stone-400 mb-6">
                <li>• Corte</li>
                <li>• Barba</li>
                <li>• Hidratação capilar</li>
                <li>• Massagem relaxante</li>
              </ul>
              <p className="text-center text-2xl text-amber-500 font-bold">R$ 120,00</p>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-lg border-2 border-amber-600">
              <Gift className="w-12 h-12 text-amber-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-serif text-center text-amber-100 mb-4">Dia do Noivo</h3>
              <ul className="space-y-2 text-stone-400 mb-6">
                <li>• Corte premium</li>
                <li>• Barba</li>
                <li>• Hidratação</li>
                <li>• Tratamento facial</li>
              </ul>
              <p className="text-center text-2xl text-amber-500 font-bold">R$ 150,00</p>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-lg border-2 border-amber-600">
              <Gift className="w-12 h-12 text-amber-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-serif text-center text-amber-100 mb-4">Pai e Filho</h3>
              <ul className="space-y-2 text-stone-400 mb-6">
                <li>• Corte para os dois</li>
                <li>• Foto especial</li>
                <li>• Bebidas inclusas</li>
                <li>• Momento único</li>
              </ul>
              <p className="text-center text-2xl text-amber-500 font-bold">R$ 90,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Beverages */}
      <section className="py-20 px-4 bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Products */}
            <div>
              <h2 className="text-4xl font-serif mb-8 text-amber-500 flex items-center gap-3">
                <ShoppingBag className="w-8 h-8" />
                Produtos
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-stone-700 pb-4">
                  <div>
                    <h3 className="text-xl text-amber-100">Pomada Modeladora</h3>
                    <p className="text-stone-400">Para um visual impecável</p>
                  </div>
                  <p className="text-amber-500 font-bold">R$ 30,00</p>
                </div>
                <div className="flex justify-between items-center border-b border-stone-700 pb-4">
                  <div>
                    <h3 className="text-xl text-amber-100">Óleo para Barba</h3>
                    <p className="text-stone-400">Hidratação profunda</p>
                  </div>
                  <p className="text-amber-500 font-bold">R$ 25,00</p>
                </div>
                <div className="flex justify-between items-center border-b border-stone-700 pb-4">
                  <div>
                    <h3 className="text-xl text-amber-100">Kit Completo</h3>
                    <p className="text-stone-400">Pomada + Óleo + Shampoo</p>
                  </div>
                  <p className="text-amber-500 font-bold">R$ 80,00</p>
                </div>
              </div>
            </div>

            {/* Beverages */}
            <div>
              <h2 className="text-4xl font-serif mb-8 text-amber-500 flex items-center gap-3">
                <Coffee className="w-8 h-8" />
                Cortesia
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-stone-300">
                  <span className="text-xl">🍺</span>
                  <p>Cerveja artesanal</p>
                </div>
                <div className="flex items-center gap-4 text-stone-300">
                  <span className="text-xl">🥃</span>
                  <p>Whisky (dose)</p>
                </div>
                <div className="flex items-center gap-4 text-stone-300">
                  <span className="text-xl">☕</span>
                  <p>Café expresso</p>
                </div>
                <div className="flex items-center gap-4 text-stone-300">
                  <span className="text-xl">💧</span>
                  <p>Água mineral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-8 text-amber-500 flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8" />
            Nossa Localização
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xl text-amber-100">R. Eng. Francisco Xavier Driesel, 50</p>
              <p className="text-stone-400">Cachoeira, Curitiba - PR</p>
              <p className="text-stone-400">CEP: 82710-370</p>
              <a 
                href="https://maps.google.com/?q=R. Eng. Francisco Xavier Driesel, 50 - Cachoeira, Curitiba - PR, 82710-370"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-amber-600 text-stone-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors"
              >
                Como Chegar
              </a>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://www.openstreetmap.org/export/embed.html?bbox=-49.278389,-25.388577,-49.273368,-25.386577&layer=mapnik"
                alt="Localização da Barbearia O Búlgaro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-serif text-amber-500 mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <a href="tel:+5511999999999" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>(41) 99871-3815</span>
                </a>
                <a href="https://wa.me/5541998658136" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a href="https://instagram.com/barbeariaobulgaro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>@barbeariaobulgaro</span>
                </a>
                <a href="mailto:contato@barbeariaobulgaro.com.br" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contato@barbeariaobulgaro.com.br</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-serif text-amber-500 mb-6">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <p>Segunda a Sexta: 9h às 20h</p>
                <p>Sábado: 9h às 18h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-stone-800">
            <p>© 2024 Barbearia O Búlgaro - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;