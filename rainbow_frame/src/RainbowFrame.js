import React, { useState, useEffect } from 'react';
import './index.css';

function RainbowFrame(props) {
    /*
    const [openings_number, setOpeningsNumber] = useState(["", 1]);             // эррей с номерами отверстий. Для удобства нумерация начинается с 1. Отверстие 1 - позиция 1. Позиция 0 символизирует что у нас нет отверстия под номером 0
    const [input_openings, setOpenings] = useState({                                  //объект с характеристиками отверстий
                                                a: [0, ""],                         //Размер вдоль оси Х. Позиция 0 забита нулями т.к. у нас нет отверстия номер 0. Сделано для упрощения понимания.
                                                b: [0, ""],                         //Размер вдоль оси Y
                                                X: [0, ""],                         //Привязка вдоль оси Х
                                                Y: [0, ""]                          //Привязка вдоль оси Y
                                                     });

    useEffect(() => {                                       //каждый раз, когда характеристики отверстий меняются мы отправляем характеристики отверстий в глобальный стейт
        props.onOpeningIsNearChange({input_openings: input_openings});
    }, [input_openings]); 
    */

    console.log(props);
    return (
        <div>
            {props.colors}
        </div>
    );

   

}

export default RainbowFrame;