// import {getElPropsByEvent} from './helpers';

// export const handlerActiveStateEl = ({target}) => {
//     const {action, actionId} = target.dataset;    
//     const activeId = action && getElPropsByEvent(target, activeStateEls)["id"];    
      
//     action === "open" && !isActiveEl(activeStateEls, actionId) && setActiveElProp(actionId);      
//     action === "close" && activeId === actionId && setActiveElProp(actionId);
    
//     if(action === "turn"){
//       const title = target.closest('ul').previousElementSibling.textContent;
//       setCardTitle(title);
//       setActiveElProp(actionId);
//     }

//     setActiveElAction(action);
//   }