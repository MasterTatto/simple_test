import React from 'react';
import s from './styles.module.css'

const InfoItem = ({label, value}) => {
    return (
        <div className={s.box}>
            <p className={s.label}>{label}</p>
            <p className={s.value}>{value}</p>
        </div>
    );
};

export default InfoItem;