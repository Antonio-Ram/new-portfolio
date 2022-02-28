import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';



function App() {
  const [contactSelected, setContactSeleceted] =useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSeleceted}      
      ></Nav>
     <main>
       {!contactSelected ? (
         <>
          <About></About>
         </>
       ): (
         <ContactForm></ContactForm>
       )}
     </main>
    </div>
  );
}

export default App;
