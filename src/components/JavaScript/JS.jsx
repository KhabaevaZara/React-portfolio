import './translations.js';

const [currentLang, setCurrentLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Обработчик смены языка
  const handleLanguageChange = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setCurrentLang(newLang);
    document.documentElement.lang = newLang;
  };

  // Обработчик скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Плавная прокрутка для якорных ссылок
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };