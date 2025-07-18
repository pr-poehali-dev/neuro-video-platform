import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredVideos = [
    {
      id: 1,
      title: "Нейросеть создаёт будущее",
      description: "Потрясающий AI-фильм о технологиях завтрашнего дня",
      duration: "12:34",
      premium: true,
      thumbnail: "/img/ad28f301-c980-463a-84b7-d1042c0e8179.jpg",
      genre: "Научная фантастика"
    },
    {
      id: 2,
      title: "Цифровые мечты",
      description: "Киберпанк-история о любви в виртуальном мире",
      duration: "8:45",
      premium: true,
      thumbnail: "/img/a96eb693-6c7b-4b1f-b7bb-30fd08070678.jpg",
      genre: "Драма"
    },
    {
      id: 3,
      title: "Потоки данных",
      description: "Абстрактное путешествие через нейронную сеть",
      duration: "6:21",
      premium: false,
      thumbnail: "/img/fff2b810-432f-46a1-918c-904b59f462cd.jpg",
      genre: "Абстракция"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-white">Future Stories</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Каталог</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">О проекте</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Поддержка</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:block border-indigo hover:bg-indigo/10">
                Войти
              </Button>
              <Button className="bg-indigo hover:bg-indigo-dark">
                Подписка
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo/20 to-purple-600/20 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/img/ad28f301-c980-463a-84b7-d1042c0e8179.jpg" 
            alt="Future Stories Hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Будущее видео
            <br />
            уже здесь
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Эксклюзивные ролики, созданные нейросетью. 
            Истории, которые невозможно снять в реальности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo hover:bg-indigo-dark text-lg px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Популярные истории</h3>
            <p className="text-gray-400 text-lg">Откройте для себя самые захватывающие AI-ролики</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="bg-gray-800 border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Button size="icon" className="bg-indigo hover:bg-indigo-dark opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    {video.premium ? (
                      <Badge className="bg-indigo text-white">Premium</Badge>
                    ) : (
                      <Badge variant="secondary">Бесплатно</Badge>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {video.genre}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{video.title}</h4>
                  <p className="text-gray-400 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Выберите подписку</h3>
            <p className="text-gray-400 text-lg">Получите доступ к эксклюзивному контенту</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-2">Бесплатно</h4>
                <p className="text-3xl font-bold mb-4">₽0<span className="text-lg text-gray-400">/мес</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-500" />
                    3 ролика в месяц
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-500" />
                    720p качество
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Icon name="X" size={16} className="mr-2 text-red-500" />
                    Реклама
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Начать</Button>
              </CardContent>
            </Card>

            <Card className="bg-indigo border-indigo-light p-6 relative scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-indigo text-white">Популярно</Badge>
              </div>
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-2 text-white">Премиум</h4>
                <p className="text-3xl font-bold mb-4 text-white">₽499<span className="text-lg text-gray-300">/мес</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-white">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    Безлимитный просмотр
                  </li>
                  <li className="flex items-center text-white">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    4K качество
                  </li>
                  <li className="flex items-center text-white">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    Без рекламы
                  </li>
                  <li className="flex items-center text-white">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    Эксклюзивный контент
                  </li>
                </ul>
                <Button className="w-full bg-white text-indigo hover:bg-gray-100">Подписаться</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-2">Профи</h4>
                <p className="text-3xl font-bold mb-4">₽999<span className="text-lg text-gray-400">/мес</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-500" />
                    Всё из Премиум
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-500" />
                    Создание роликов по запросу
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-500" />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Персональные рекомендации</h3>
            <p className="text-gray-400 text-lg">ИИ изучает ваши предпочтения и предлагает идеальный контент</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={32} className="text-indigo" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Умные алгоритмы</h4>
              <p className="text-gray-400">Анализируем ваши просмотры и предпочтения для точных рекомендаций</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-indigo" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Мгновенный доступ</h4>
              <p className="text-gray-400">Новые ролики появляются каждый день, созданные передовыми нейросетями</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-indigo" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Сообщество</h4>
              <p className="text-gray-400">Обсуждайте ролики с единомышленниками и делитесь впечатлениями</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-8">Найдите свою историю</h3>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input 
                placeholder="Поиск по жанрам, темам, настроению..."
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 text-lg py-6 pl-12 pr-4"
              />
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Future Stories</h4>
              <p className="text-gray-400">Революционная платформа AI-видео контента для вашего вдохновения.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Платформа</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Подписка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Профиль</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Следите за нами</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Future Stories. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;