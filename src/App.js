import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSeleceted] =useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSeleceted}  
        resumeSelected={resumeSelected}    
        setResumeSelected={setResumeSelected}

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
       ): (
       <About></About>
       )}
     </main>
    </div>
  );
}

export default App;
