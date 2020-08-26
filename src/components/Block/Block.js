import React from "react";
import css from './Block.module.scss';


const Block = () => {
    return (
        <div className={css.wrapper}>
            <h1 className={css.title}>Hello world!</h1>
        </div>
    )
}

export default  Block;