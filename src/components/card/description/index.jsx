import React, {useEffect, useRef, useState} from 'react';
import s from './styles.module.css'
import classNames from "classnames";

const Description = ({note}) => {
    const ref = useRef(null)

    const [collapse, setCollapse] = useState(false)
    // 60 это высота трех строк line-height = 20
    const [clientHeight, setClientHeight] = useState(60);

    useEffect(() => {
        if (ref.current) {
            setClientHeight(ref.current.clientHeight);
        }
    }, [note]);

    return (
        <div className={s.box}>
            <div className={classNames(s.collaps, (clientHeight > 60 && !collapse) && s.last_line_colored)} style={{
                maxHeight: clientHeight > 60 ? (!collapse ? 60 : clientHeight) : clientHeight
            }}>
                <p ref={ref} className={s.note}>{note}</p>
            </div>

            {clientHeight > 60 ? <div className={s.btn}>
                <p onClick={() => setCollapse(!collapse)}>{!collapse ? 'Читать далее' : 'Свернуть'}</p>
            </div> : null}
        </div>
    );
};

export default Description;