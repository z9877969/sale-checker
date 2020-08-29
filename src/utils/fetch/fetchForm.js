import axios from 'axios';

export const fetchFoodsData = () => {
        console.log('object');
        axios('http://localhost:3000/foods')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const postFoodsData = dataObj => {
        console.log('object');
        axios.post('http://localhost:3000/foods', dataObj)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}