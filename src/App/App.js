import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {actionIsCardFoodOpen} from '../redux/cardFoods/actionCardFood';
import {actionIsCardUserOpen} from '../redux/cardUser/actionCardUser';

// import components
import TopMenu from '../components/general/TopMenu/TopMenu';
import PageCardFood from '../pages/pageCardFood/pageCardFood';
import PageCardUser from '../pages/pageCardUser/pageCardUser';

// import helpers
import {getIdByEvent} from '../utils/helpers/helpers';
import './App.module.scss';

function App() {
  const dispatch = useDispatch();

  // State
  const isCardsOpen = useSelector(state => state.isCardsOpen);

  // state
  const [openId, setOpenId] = useState([]);

  // handlers
  const handlerCloseModal = e => {
    const {action, actionId} = e.target.dataset;    
    const handleCard = action && getIdByEvent(e, openId);

    console.log('actionId_handle :>> ', actionId);
    
    if(action === "open") {
      !openId.includes(actionId) && setOpenId([...openId, actionId]);      
    }
    if(action === "close" && handleCard.id === actionId) {
      openId.includes(actionId) && setOpenId([...openId].filter(id => id !== actionId));
    }
  } 

  // effects
  useEffect(() => {
    openId.includes('card-food') && dispatch(actionIsCardFoodOpen(true));
    !openId.includes('card-food') && dispatch(actionIsCardFoodOpen(false));
    
    
    openId.includes('card-user') && dispatch(actionIsCardUserOpen(true));
    console.log('openId_eff :>> ', openId);
    !openId.includes('card-user') && dispatch(actionIsCardUserOpen(false));
    // console.log('openId_eff :>> ', openId);
  }, [openId])

  return (
      <div onClick={handlerCloseModal}>
        <TopMenu />
        {isCardsOpen.food && <PageCardFood />}
        {isCardsOpen.user && <PageCardUser />}
      </div>
  );
}

export default App;
