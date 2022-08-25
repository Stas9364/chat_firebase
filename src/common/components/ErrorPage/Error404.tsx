import React from 'react';
import {NavLink} from 'react-router-dom';
import style from '../ErrorPage/Error404.module.css'
import {errorImg} from '../../../assets';

export const Error404 = () => {
    return (
        <div>
            <NavLink
                to={'/'}
                className={style.link}
            >Go HOME.</NavLink>

            <img src={errorImg} alt="errorAC 404" className={style.img}/>
            <h1 className={style.text}>Page not found!</h1>
        </div>
    );
};

