import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// imp components
import MarkCard from '../../patterns/MarkCard/MarkCard';

// imp actions
import {actionOpenEl} from '../../../redux/activeStateElements/actionActiveStateElements';

// imp helpers
import {getDispatchData, getElPropsByEvent, isActiveEl} from '../../../utils/helpers/helpers';

// imp handlers
import {handlerActiveStateEl} from '../../../utils/helpers/handlers';


// styles
import scss from './BottomBar.module.scss';

const updateActionActiveEl = actionOpenEl;

const BottomBar = () => {
    const dispatch = useDispatch();

    // State
    const activeStateEls = useSelector(state => state.activeStateEls);
    // const marks = activeStateEls.length > 0 && activeStateEls.filter(el => el && el.turn);
    const marks = [];
    console.log('marks :>> ', marks);

    // state
    const [activeElAction, setActiveElAction] = useState([]);
    const [activeElId, setActiveElId] = useState([]);

    // handlers
    const handlerActiveStateEl = ({target}) => {
      const {action, actionId} = target.dataset;    
      const activeId = action && getElPropsByEvent(target, activeStateEls)["id"];    

      action === "open" && !isActiveEl(activeStateEls, actionId) && setActiveElId(actionId);      
      action === "close" && activeId === actionId && setActiveElId(actionId);

    //   if(action === "turn"){
    //     const title = target.closest('ul').previousElementSibling.textContent;
    //     setCardTitle(title);
    //     setActiveElId(actionId);
    //   }

      setActiveElAction(action);
    }


    // effects
    useEffect(() => {
        const payload = getDispatchData(marks.id, activeElAction);
        
        dispatch(actionOpenEl(payload));
    }, [marks])

    return (
        <footer className={scss.footer} onClick={handlerActiveStateEl}>
            {
                marks.length > 0 && 
                <ul className={scss.list}>
                    {
                        marks.map(({title}) => <li>{ <MarkCard props={{title}}/>}</li>)
                    }
                </ul>
            }
            <p>&copy; Produced by Apleuha</p>
        </footer>
    ) 
}

export default BottomBar;