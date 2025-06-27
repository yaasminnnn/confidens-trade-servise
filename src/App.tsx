import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Shield, 
  Award, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin,
  Building2,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronUp
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-orange-500 mr-3" />
              <span className="text-xl font-bold text-gray-900">Confidens Trade Servise</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('advantages')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Достижения
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Контакты
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium w-full text-left"
                >
                  О компании
                </button>
                <button 
                  onClick={() => scrollToSection('advantages')}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium w-full text-left"
                >
                  Преимущества
                </button>
                <button 
                  onClick={() => scrollToSection('achievements')}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium w-full text-left"
                >
                  Достижения
                </button>
                <button 
                  onClick={() => scrollToSection('contacts')}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium w-full text-left"
                >
                  Контакты
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-orange-500">CONFIDENS</span>
              <br />
              TRADE SERVISE
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              18+ лет надежного партнерства в оптовой торговле
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <Award className="h-5 w-5 text-orange-500 mr-2" />
                <span className="text-gray-700 font-medium">Более 18 лет на рынке</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700 font-medium">32+ успешных договора</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              О компании
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ТОО "Confidens Trade Servise" - надежный партнер в сфере оптовой торговли с многолетним опытом работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Опыт работы</h3>
              <p className="text-gray-600">
                18 лет и 5 месяцев успешной работы на рынке оптовой торговли
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Деятельность</h3>
              <p className="text-gray-600">
                Оптовая торговля широким ассортиментом товаров без конкретизации
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Надежность</h3>
              <p className="text-gray-600">
                Средняя степень риска налогоплательщика, отсутствие задолженностей
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Руководство компании</h3>
                <p className="text-orange-100 mb-2">Директор:</p>
                <p className="text-xl font-semibold">Чукенова Ботакоз Кадралиевна</p>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full">
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наши конкурентные преимущества делают нас надежным партнером для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Стабильный рост</h3>
              <p className="text-gray-600">
                Постоянное развитие и расширение сферы деятельности
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Надежность</h3>
              <p className="text-gray-600">
                Отсутствие задолженностей и прозрачная финансовая отчетность
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Опыт</h3>
              <p className="text-gray-600">
                Более 18 лет успешной работы в сфере оптовой торговли
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Партнерство</h3>
              <p className="text-gray-600">
                Индивидуальный подход к каждому клиенту и долгосрочные отношения
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши достижения
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Цифры, которые говорят о нашем профессионализме и надежности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 mb-6">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">18+</div>
                <div className="text-gray-600 font-medium">лет на рынке</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Многолетний опыт</h3>
              <p className="text-gray-600">
                Более 18 лет успешной работы в сфере оптовой торговли
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 mb-6">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">32</div>
                <div className="text-gray-600 font-medium">успешных договора</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Проверенное качество</h3>
              <p className="text-gray-600">
                32 договора как поставщик за последние 6 лет
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 mb-6">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">0</div>
                <div className="text-gray-600 font-medium">задолженностей</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Финансовая стабильность</h3>
              <p className="text-gray-600">
                Отсутствие задолженностей и прозрачная отчетность
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <Star className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы к долгосрочному сотрудничеству
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Наш опыт и надежность - гарантия успешного партнерства для вашего бизнеса
            </p>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения сотрудничества
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
                    <p className="text-gray-600">
                      010000, г. Астана<br />
                      ул. Габидена Мустафина, Д. 21/6<br />
                      Офис 285
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
                    <a 
                      href="tel:87054147011" 
                      className="text-orange-500 hover:text-orange-600 transition-colors text-lg font-semibold"
                    >
                      +7 (705) 414-70-11
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a 
                      href="mailto:tau.ks@mail.ru" 
                      className="text-orange-500 hover:text-orange-600 transition-colors text-lg font-semibold"
                    >
                      tau.ks@mail.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Написать нам</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-orange-500 mr-3" />
              <span className="text-2xl font-bold">Confidens Trade Servise</span>
            </div>
            <p className="text-gray-400">
              © 2025 ТОО "Confidens Trade Servise". Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-110 z-40"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;