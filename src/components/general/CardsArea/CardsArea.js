import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {actionOpenEl, actionCloseEl} from '../../../redux/activeStateElements/actionActiveStateElements';

// import components
import PageCardFood from '../../../pages/pageCardFood/pageCardFood';
import PageCardCustomer from '../../../pages/pageCardCustomer/pageCardCustomer';

// import helpers
import {getElPropsByEvent} from '../../../utils/helpers/helpers';
import './CardsArea.module.scss';

// helpers
const isActiveEl = (activeEls, id) => activeEls.find(el => el.id === id);
const getDispatchData = (id, action) => {  
  const payload = {id};
  payload[action] = true;
  return payload;
};

const CardsArea = () => {
  const dispatch = useDispatch();
  
  // State
  const activeStateEls = useSelector(state => state.activeStateEls);
  

  // state
  const [activeElProp, setActiveElProp] = useState("");
  const [activeElAction, setActiveElAction] = useState("");
  
  // handlers
  const handlerActiveStateEl = ({target}) => {
    const {action, actionId} = target.dataset;    
    const activeElId = action && getElPropsByEvent(target, activeStateEls).id;
  
    if(action === "open") {
      !isActiveEl(activeStateEls, actionId) && setActiveElProp(actionId);      
    };
    if(action === "close" && activeElId === actionId) {
      console.log('activeElId.id :>> ', activeElId);
    };
    setActiveElAction(action);
  }

  // effects
  useEffect(() => {
    let currentAction = activeStateEls.length > 0 && Object.keys(activeStateEls.slice(-1))[0];
  
    if(activeElProp) {
      const payload = getDispatchData(activeElProp, currentAction);
      dispatch(actionOpenEl(payload));
    } 
    activeElProp && activeElAction === "close" && dispatch(actionCloseEl(activeElProp));
  }, [activeElProp]);

  return (
      <div onClick={handlerActiveStateEl} >
        {isActiveEl(activeStateEls, "card-food") && <PageCardFood />}
        {isActiveEl(activeStateEls, "card-customer") && <PageCardCustomer />}
      </div>
  );
}

export default CardsArea;
