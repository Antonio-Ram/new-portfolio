import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';



function App() {
  const [contactSelected, setContactSelceted] =useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelceted={setContactSelceted}      
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
