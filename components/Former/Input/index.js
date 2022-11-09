import { input_params } from './Input.module.scss'

import React, { useState } from 'react'
import Item from "./Item";
import ResetBtn from "./ResetBtn.js";

import config from './config'

export default function Input({
    params,
    onBntClick,
    onInputChange,
    onResetBnt
}) {

    const [isOpen, setIsOpen] = useState(true);
    
    const handleHeadClick = () => {
        setIsOpen( !isOpen );
    };

    const list = config.map( ({ label, input }) => {
        const { name } = input;
        const value = params[name]

        return <Item
            value = { value }
            label = { label }
            input = { input }
            key = { name }

            onClick = { onBntClick }
            onChange = { onInputChange }
        />
    });

    const ul_cls = isOpen ? 'block': 'hidden'
    const h4_cls = isOpen ? 'after:content-["▾"]' : 'after:content-["◂"]'

    return (
        <div id="input_params" className = { input_params }>
            <h4 className = { h4_cls }
                onClick = { handleHeadClick }
            >
                Parameters
            </h4>

            <ul className = { ul_cls } >
                { list } 
                <ResetBtn
                    onClick = { onResetBnt }
                    isReset = { params.isReset }
                />
            </ul>
        </div>
    )    
}
