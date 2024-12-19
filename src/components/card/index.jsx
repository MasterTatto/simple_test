import React from 'react';
import s from './styles.module.css'
import InfoItem from "./info_item/index.jsx";
import Description from "./description/index.jsx";
import settingsSvg from '../../assets/setings.svg';
import {formatDate, formatDuration, replaceDot} from "../../utils.js";
import {colored, titleByStatus} from "../../constant/constant.js";

const Card = ({
                  number_app, create_date, date_control,
                  date_completed, system, construction, note,
                  status, is_technology
              }) => {
    return (
        <div className={s.card}>
            <div className={s.card_top}>
                <div className={s.number_app} style={{background: colored[status] || '#5D5D5D'}}>
                    <p>{`№ ${replaceDot(number_app)}`}</p>
                </div>

                <p className={s.status}>{titleByStatus[status] || 'Неопределено'}</p>

                {is_technology && <div className={s.is_technology_icon}>
                    <img src={settingsSvg} alt="icon"/>
                </div>}
            </div>

            <div className={s.card_center}>
                <InfoItem label={'Создана:'}
                          value={create_date?.duration ? `${formatDate(create_date?.date)} (${formatDuration(create_date?.duration)})` : formatDate(create_date?.date)}/>
                <InfoItem label={date_control ? 'Контроль:' : 'Выполнена:'}
                          value={formatDate(date_control || date_completed)}/>
                <InfoItem label={'Система:'} value={`${system?.code} | ${system?.name}`}/>
                <InfoItem label={'Объект:'}
                          value={`${construction?.name}, ${construction?.city}, ${construction?.street}`}/>
            </div>

            <div className={s.line}/>

            <Description note={note}/>
        </div>
    );
};

export default Card;