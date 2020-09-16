import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {actionIsCardFoodsOpen} from '../redux/cardFoods/modalWindow/modalWindowAction';

// import components
import PageFoodCard from '../pages/pageFoodCard/PageFoodCard';
import MenuList from '../components/utils/MenuList/MenuList';

import * as renderMenuData from '../utils/renderData/renderMenu.json';

import {getIdByEvent} from '../utils/helpers/helpers';
import './App.module.scss';

function App() {
  const dispatch = useDispatch();
  // State
  const isCardOpen = useSelector(state => state.cardFoods.modalWindow.isCardOpen);
  const isCardClose = useSelector(state => state.cardFoods.modalWindow.isCardClose);

  const [elDisplaying, setElDisplaying] = useState({});
  const idArr = ["food-card"];
  
  // handlers
  const handlerCloseModal = e => {
    const r = getIdByEvent(e, idArr);
    console.log('r.id :>> ', r.id);
    if(r.id === "food-card") {dispatch(actionIsCardFoodsOpen(false))}
  } 

  return (
      <div onClick={handlerCloseModal}>
        <MenuList renderData={renderMenuData.cards}/>
        {isCardOpen && <PageFoodCard />}
      </div>
  );
}

export default App;
