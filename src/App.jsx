import Footer from './components/footer/Footer';
import Header from './components/header/Header'; 
import About from './components/About/About';
import HeaderMe from './components/HeaderMe/HeaderMe';
import Services from './components/service/Services';
import JavaScript from './components/JavaScript/translations'; 
function App() {
  return (
    <>
    <JavaScript/>
      <Header />
      <HeaderMe/>
      <About/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;