import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {actionOpenEl, actionCloseEl} from '../../../redux/activeStateElements/actionActiveStateElements';

// import components
import PageCardFood from '../../../pages/pageCardFood/pageCardFood';
import PageCardUser from '../../../pages/pageCardUser/pageCardUser';

// import helpers
import {getIdByEvent} from '../../../utils/helpers/helpers';
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
  const [activeElId, setActiveElId] = useState("");
  const [activeElAction, setActiveElAction] = useState("");
  
  // handlers
  const handlerActiveStateEl = ({target}) => {
    const {action, actionId} = target.dataset;    
    const activeElId = action && getIdByEvent(target, activeStateEls);
  
    if(action === "open") {
      !isActiveEl(activeStateEls, actionId) && setActiveElId(actionId);      
    };
    if(action === "close" && activeElId.id === actionId) {
      isActiveEl(activeStateEls, actionId) && setActiveElId("");
    };
    setActiveElAction(action);
  }

  // effects
  useEffect(() => {
    let currentAction = activeStateEls.length > 0 && Object.keys([...activeStateEls].pop())[0];
  
    if(activeElId) {
      const payload = getDispatchData(activeElId, currentAction);
      // const payload = getDispatchData(activeElId, activeElAction);
      dispatch(actionOpenEl(payload));
    } 
    !activeElId && dispatch(actionCloseEl(activeElId));
    // !activeElId && dispatch(actionCloseEl(activeElId));
  }, [activeElId]);

  return (
      <div onClick={handlerActiveStateEl} >
        {isActiveEl(activeStateEls, "card-food") && <PageCardFood />}
        {isActiveEl(activeStateEls, "card-user") && <PageCardUser />}
      </div>
  );
}

export default CardsArea;
