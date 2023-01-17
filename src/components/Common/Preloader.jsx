import preloader from '../../assets/images/Spinner-3.gif';
import React from 'react';
import s from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img className={s.preloader} src={preloader}/>
        </div>
    )
}

export default Preloader