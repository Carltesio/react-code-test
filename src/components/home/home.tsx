import React from 'react';
import logo from '/home/carlos/gitHub_repos/ombori/react-code-test/src/omboriLogo.png';
import './home.css';

import { useIonViewWillEnter } from '@ionic/react';

const Home: React.FC = () => {

    useIonViewWillEnter( () => {
         console.log("hello");
      });
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    
    </div>
  );
}

export default Home;