

import React from 'react';

import Kitchen from '../../../../assets/Kitchen.svg'
import Bedroom from '../../../../assets/bedroom-icon.svg'
import LivR from '../../../../assets/livingroom-icon.svg'
import Close from '../../../../assets/closet-icon.svg'
import Office from '../../../../assets/office-icon.svg'
import Child from '../../../../assets/childrensroom-icon.svg'
import tree from '../../../../assets/3t.svg'

const HeaderBot = () => {
    return (
        <nav className='header__bot'>
            <a href="#" className="header__bot-link">
                <span>
                    <img src={Kitchen} alt=""/>
                </span>
                Кухни
            </a>
            <a href="#" className="header__bot-link">
                <span>
                    <img src={Bedroom} alt=""/>
                </span>
                Спальни
            </a>
            <a href="#" className="header__bot-link">
                <span>
                    <img src={LivR} alt=""/>
                </span>
                Гостинные
            </a>
            <a href="#" className="header__bot-link">
                <span>
                    <img src={Close} alt=""/>
                </span>
                Прихожие
            </a>
            <a href="#" className="header__bot-link">
                <span>
                    <img src={Office} alt=""/>
                </span>
                Офисная мебель
            </a>
            <a href="#" className="header__bot-link">
                <span>
                    <img src={Child} alt=""/>
                </span>
                Детская
            </a>

            <a href="#" className='header__bot-link2'>
                Акция
            </a>
            <a href="#">
                <img src={tree} alt=""/>
            </a>
        </nav>
    );
};

export default HeaderBot;