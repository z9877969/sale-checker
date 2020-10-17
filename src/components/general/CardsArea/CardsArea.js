import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {actionOpenEl, actionCloseEl} from '../../../redux/activeStateElements/actionActiveStateElements';

// import components
import PageCardFood from '../../../pages/pageCardFood/pageCardFood';
import PageCardCustomer from '../../../pages/pageCardCustomer/pageCardCustomer';

// import helpers
import {getElPropsByEvent, getDispatchData} from '../../../utils/helpers/helpers';
import './CardsArea.module.scss';

// helpers
const isActiveEl = (activeEls, id) => activeEls.find(el => el && el.id === id);
// const getDispatchData = (id, action) => {  
//   const payload = {id};
//   payload[action] = true;
//   return payload;
// };

const CardsArea = () => {
  const dispatch = useDispatch();
  
  // State
  const activeStateEls = useSelector(state => state.activeStateEls);
  
  // state
  const [activeElProp, setActiveElProp] = useState("");
  const [activeElAction, setActiveElAction] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  
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
    // const currentAction = activeElAction;
  
    if(activeElProp) {
      const payload = getDispatchData(activeElProp, activeElAction);
      dispatch(actionOpenEl(payload));
    } 
  
    if(activeElProp && activeElAction === "close"){
      dispatch(actionCloseEl(activeElProp));
    }

    if(activeElAction === "turn" && cardTitle){    
      const payload = getDispatchData(activeElProp, activeElAction);
      payload.title = cardTitle;

      dispatch(actionOpenEl(payload));
      setCardTitle("");
    }

  }, [activeElProp, activeElAction === "turn"]);

  return (
      <div onClick={handlerActiveStateEl} >
        {activeStateEls.length > 0 && isActiveEl(activeStateEls, "card-food") && activeElAction !== "turn" && <PageCardFood />}
        {isActiveEl(activeStateEls, "card-customer") && <PageCardCustomer />}
      </div>
  );
}

export default CardsArea;
