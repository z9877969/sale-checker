import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// imp components
import MarkCard from '../../patterns/MarkCard/MarkCard';

// imp actions
import {actionCloseCard} from '../../../redux/cards/actionOpenCard';

// imp helpers
import {getDispatchData, getElPropsByEvent, isActiveEl} from '../../../utils/helpers/helpers';

// imp handlers
import {handlerActiveStateEl} from '../../../utils/helpers/handlers';

// styles
import scss from './StatusBar.module.scss';

// const updateActionActiveEl = actionOpenEl;

const BottomBar = () => {
    const dispatch = useDispatch();

    // State
    const openCards = useSelector(state => state.activeStateEls.openCards);
    const marks = openCards.filter(el => el && el.turn);

    // state
    const [activeElAction, setActiveElAction] = useState([]);
    const [activeElId, setActiveElId] = useState([]);
    const [cardTitle, setCardTitle] = useState("");

    // handlers
    const handlerActiveStateEl = ({target}) => {
      const {action, actionId} = target.dataset;
      const activeId = action && getElPropsByEvent(target, openCards)["id"];

    //   action === "close" && setActiveElId(actionId);
    console.log('action :>> ', action);
      action === "close" && dispatch(actionCloseCard(activeId));

      if(action === "turn"){
        const title = target.closest('ul').previousElementSibling.textContent;
        setCardTitle(title);
        setActiveElId(actionId);
      }

      setActiveElAction(action);
    }


    // effects
    // useEffect(() => {
    // //     const payload = getDispatchData(marks.id, activeElAction);
    //     console.log('marks_effects_BottomBar :>> ', marks);
    // //     dispatch(actionOpenEl(payload));
    // }, [marks])

    return (
        <footer className={scss.footer} onClick={handlerActiveStateEl}>
            {
                marks.length > 0 && 
                <ul className={scss.list}>
                    {
                        marks.map(({title, id}) => <li>{<MarkCard props={{title, id}}/>}</li>)
                    }
                </ul>
            }
            <p>&copy; Produced by Apleuha</p>
        </footer>
    ) 
}

export default BottomBar;