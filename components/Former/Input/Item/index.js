import React from "react";

import BtnsItem from "./BtnsItem/";
import InputItem from "./InputItem.js";

export default function Item(props) {
    let { onClick, ...other } = props;

    return (
        <li className = "overflow-hidden mb-5 block">
            <InputItem
                {...other}
            />

            <BtnsItem
                onClick = { onClick }
            />
        </li>
    )
}
