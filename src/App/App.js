import React from 'react';

// import components
import TopMenu from '../components/general/TopMenu/TopMenu';
import CardsArea from '../components/general/CardsArea/CardsArea';

// // import helpers
import './App.module.scss';

function App() {
  return (
      <div>
        <TopMenu />
        <CardsArea />
      </div>
  );
}

export default App;
