import React, {useState, useEffect} from 'react';
import shortid from 'shortid';
import Input from '../../utils/Input/Input';
import scss from './FoodsCard.module.scss';
import { fetchFoodsData, postFoodsData } from '../../../utils/fetch/fetchForm';
// import { getDataValueRight } from '../../../utils/helpers/helpers';

const getObj = (name, value) => {
    const obj = {};
    obj[name] = value;
    return obj;
}

const inputsSetArr = [
    {
        label: "Название товара",
        inputName: "nameIn"
    },
    {
        label: "Цена",
        inputName: "prise"
    },
    {
        label: "Единицы",
        inputName: "units"
    },
    {
        label: "Валюта",
        inputName: "currency"
    },
]

const FoodsCard = () => {

    // state
    const [dataName, setDataName] = useState('');
    const [dataValue, setDataValue] = useState('');
    const [data, setData] = useState({});
    
    // handlers
    const handleGetInputData = e => {
        const {name, value} = e.target;

        const obj = {};
        obj[name] = value;
        setData({...data, ...obj});
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        
        const id = shortid.generate();
        
        postFoodsData({id, ...data});

    }

    return (
        <form className={scss.foodsCard}
            onChange={handleGetInputData}
            onSubmit={handleFormSubmit}>
            {
                inputsSetArr.map(
                    el => <Input 
                    props={
                        {
                            label: el.label,
                            inputName: el.nameIn
                        }
                }
                />
                )
            }

            <button type="submit" >ОК</button>
        </form>
    )
}

export default FoodsCard;