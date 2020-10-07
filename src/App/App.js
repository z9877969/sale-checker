import React from 'react';

// import components
import TopMenu from '../components/general/TopMenu/TopMenu';
import CardsArea from '../components/general/CardsArea/CardsArea';
import BottomBar from '../components/general/BottomBar/BottomBar';

// // import helpers
import './App.module.scss';
import {app} from './App.module.scss';

function App() {
  return (
      <div className={app}>
        <TopMenu />
        <CardsArea />
        <BottomBar />
      </div>
  );
}

export default App;
