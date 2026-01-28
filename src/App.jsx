import React from 'react'
import Header from './Component/Header'
import Home from './Component/Home';
import Footer from './Component/Footer';
import './Component/Style.css';

function App() {
  return (
    <>
    <Header                                                                   
      appName="React Day1"                                                    
      menuItems={['Home', 'About', 'Contact']}
    />
    {/*Header component called here
    props passed to Header component(appName and menuItems)*/}
    


    <Home                                                    
      heading="Welcome to the Home Page"                     
      content="This is the main content of the home page."
    />
    {/*Home component called here
      props passed to Home component(heading and content)*/}

    <Footer name="kanika" year={2024} />             {/*Footer component called here*/}

                    
</>  );
}
  

export default App
