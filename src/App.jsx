import Footer from './components/footer/Footer';
import Header from './components/header/Header'; 
import About from './components/About/About';
import HeaderMe from './components/HeaderMe/HeaderMe'
function App() {
  return (
    <>
      <Header />
      <h1>React portfolio</h1>
      <HeaderMe/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;