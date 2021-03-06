import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  const [contactSelected, setContactSeleceted] =useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  function closeAll(){
    setContactSeleceted(false);
    setResumeSelected(false);
    setPortfolioSelected(false);
  }
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSeleceted}  
        resumeSelected={resumeSelected}    
        setResumeSelected={setResumeSelected}
        setPortfolioSelected={setPortfolioSelected}
        closeAll={closeAll}

      ></Nav>
     <main>
       {contactSelected ? (
         <>
          <ContactForm></ContactForm>
         </>
       ): resumeSelected ? (
         <>
        <Resume></Resume>
        </>
       ): portfolioSelected ? (
        <Portfolio></Portfolio>
       ) : (
       <About></About>
       )}
     </main>
    </div>
  );
}

export default App;
