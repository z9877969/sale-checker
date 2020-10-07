import React from 'react';
import scss from './BottomBar.module.scss';

const BottomBar = () => {
    return (
        <footer className={scss.footer}>
            <p>&copy; Production by Apleuha</p>
        </footer>
    ) 
}

export default BottomBar;