import React from "react";
import { voter, btn } from './BtnsItem.module.scss'

export default function BtnsItem({ onClick }) {
    const handleClick = (event) => onClick(event.target);

    const minus_btn_cls = btn;
    const plus_btn_cls = btn;

    // if ( min ) {
    //     minus_btn_cls += lock
    // }

    // if ( max ) {
    //     plus_btn_cls += lock
    // }

    return (
        <div onClick = { handleClick }
            className = { voter }
        >
            <span
                data-sign="minus"
                className = { minus_btn_cls } >−
            </span>
            <span
                data-sign="plus"
                className = { plus_btn_cls } >+
            </span>
        </div>
    )
}
