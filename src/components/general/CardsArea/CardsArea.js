import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// import actions
// import {actionOpenCard, actionCloseCard} from '../../../redux/activeStateElements/actionActiveStateElements';
import {actionOpenCard, actionCloseCard} from '../../../redux/cards/actionOpenCard';

// import components
import PageCardFood from '../../../pages/pageCardFood/pageCardFood';
import PageCardCustomer from '../../../pages/pageCardCustomer/pageCardCustomer';

// import helpers
import {getElPropsByEvent, getDispatchData, isActiveEl} from '../../../utils/helpers/helpers';
import './CardsArea.module.scss';

// helpers
// const isActiveEl = (activeEls, id) => activeEls.find(el => el && el.id === id);

const CardsArea = () => {
  const dispatch = useDispatch();
  
  // State
  const activeStateEls = useSelector(state => state.activeStateEls.openCards);
  const activeTopMenuList = useSelector(state => state.activeStateEls.openTopMenu);
  
  // state
  const [activeElProp, setActiveElProp] = useState("");
  const [activeElAction, setActiveElAction] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [styles, setStyles] = useState({});
  
  // handlers
  const handlerActiveStateEl = ({target}) => {
    const {action, actionId} = target.dataset;    
    const activeId = action && getElPropsByEvent(target, activeStateEls)["id"];    
      
    action === "open" && !isActiveEl(activeStateEls, actionId) && setActiveElProp(actionId);      
    action === "close" && activeId === actionId && setActiveElProp(actionId);
    
    if(action === "turn"){
      const title = target.closest('ul').previousElementSibling.textContent;
      setCardTitle(title);
      setActiveElProp(actionId);
    }

    setActiveElAction(action);
  }

  // effects
  useEffect(() => {  
    // if(activeElProp) {
    //   const payload = getDispatchData(activeElProp, activeElAction);
    //   // dispatch(actionOpenCard(payload));
    // } 
  
    if(activeElProp && activeElAction === "close"){
      dispatch(actionCloseCard(activeElProp));
    }

    if(activeElAction === "turn" && cardTitle){    
      const payload = getDispatchData(activeElProp, activeElAction);
        payload.title = cardTitle;

      dispatch(actionOpenCard(payload));
      setCardTitle("");
    }
  }, [activeElProp, activeElAction === "turn"]);

  return (
      <div onClick={handlerActiveStateEl} >
        {isActiveEl(activeStateEls, "card-food") && activeElAction !== "turn" && <PageCardFood />}
        {isActiveEl(activeStateEls, "card-customer") && activeElAction !== "turn" && <PageCardCustomer />}
      </div>
  );
}

export default CardsArea;
