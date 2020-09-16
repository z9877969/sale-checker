import React from 'react';
import shortid from 'shortid';
import Button from '../../utils/Button/Button';

const styles = {
    list: {
        display: "flex",
    },
};

const BtnsColection = props => {
    const {dataRender} = props;
    
    return (
        <ul style={styles.list}>
            {
                dataRender.map(data => <li key={shortid.generate()}><Button title={data.title} type={data.type}/></li>)
            }
        </ul>
        
    )
}

export default BtnsColection;