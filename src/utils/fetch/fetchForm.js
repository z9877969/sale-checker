import axios from 'axios';

export const fetchFoodsData = () => {
        axios('http://localhost:3000/foods')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const postFoodsData = dataObj => {
        axios.post('http://localhost:3000/foods', dataObj)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}