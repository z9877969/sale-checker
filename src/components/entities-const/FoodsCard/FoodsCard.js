import React, {useState, useEffect} from 'react';
import scss from './FoodsCard.module.scss';


const FoodsCard = () => {

    const [dataName, setDataName] = useState('');
    const [dataValue, setDataValue] = useState('');
    const [foodsSpec, setFoodsSpec] = useState([]);

    // helpers
    const getDataValueRight = name => foodsSpec.length > 0 && foodsSpec.find(spec => spec.dataName === name) && foodsSpec.find(spec => spec.dataName === name).dataValue || dataName === name && dataValue ||  ""
    

    // handlers

    const onFocus = ({target}) => {
        const {name} = target;
        setDataName(name);
    }

    const onBlur = e => {
        setFoodsSpec([...foodsSpec, {dataName, dataValue}]);
        
    }

    const getInputData = e => {
        const {name, value} = e.target;
        
        if(name === dataName) {setDataValue(value);}
    }

    const formSubmit = e => {
        e.preventDefault();

    }

    // effects
    useEffect(() => {
        setDataName('');
        setDataValue('');
    }, [foodsSpec]);


    return (
        <form className={scss.foodsCard}  onChange={getInputData} onFocus={onFocus} onBlur={onBlur}>
            <label>
                Название товара:
                <input type="text" name="nameIn" value={getDataValueRight("nameIn")}/>
            </label>
            <label>
                Цена:
                <input type="text" name="prise" value={getDataValueRight("prise")}/>
            </label>
            <label>
                Единицы:
                <input type="text" name="units" value={getDataValueRight("units")}/>
            </label>
            <label>
                Валюта:
                <input type="text" name="currency" value={getDataValueRight("currency")}/>
            </label>
            <button type="submit">ОК</button>
        </form>
    )
}

export default FoodsCard;