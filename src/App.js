import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [navSelected, setNavSelected] = useState('AboutMe')

  return (
    <div className='containing-div'>
      <Header setNavSelected={setNavSelected}></Header>
      <main>
        {navSelected === 'AboutMe' && (
          <AboutMe></AboutMe>
        )}
        {navSelected === 'Portfolio' && (
          <Portfolio></Portfolio>
        )}
        {navSelected === 'Contact' && (
          <ContactForm></ContactForm>
        )}
        {navSelected === 'Resume' && (
          <Resume></Resume>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
