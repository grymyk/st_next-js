import React, { useState } from 'react';

import Input from "./Input/";
import Tree from "./Tree/";

import helper from "./Input/helper";

function Former() {
    const [ width, setWidth ] = useState(20);
    const [ height, setHeight ] = useState(10);
    const [ long, setLong ] = useState(1000);
    const [ twig, setTwig ] = useState(1);
    const [ trunk, setTrunk ] = useState(1);
    const [ branch, setBranch ] = useState(12);
    const [ spread, setSpread ] = useState(36);

    const [ isReset, setIsReset ] = useState(false);

    const setMeasure = {
        width: (width) => setWidth(width),
        height: (height) => setHeight(height),
        long: (long) => setLong(long),
        twig: (twig) => setTwig(twig),
        trunk: (trunk) => setTrunk(trunk),
        branch: (branch) => setBranch(branch),
        spread: (spread) => setSpread(spread),
        isReset: (isReset) => setIsReset(isReset)
    }

    const measure = {
        width,
        height,
        long,
        twig,
        trunk,
        branch,
        spread,
        isReset
    }

    const handleBtnClick = ( btn ) => {
        const delta = helper.getDelta(btn);

        if ( delta ) {
            const btnName = helper.getName(btn);
            const currentMeasure = Number( measure[btnName] )
            const next = currentMeasure + delta; 
            const handler = setMeasure[btnName]

            handler(next)
            setIsReset(true);
        }
    };

    const handleInputChange = ({ value, name }) => {
        value = Number(value);

        if ( value ) {
            const handler = setMeasure[name]

            handler(value)
        }

        return 0
    };

    const handleResetBtnClick = () => {
        const default_data = {
            height: 10,
            width: 20,
            long: 1000,
            twig: 1,
            trunk: 1,
            branch: 12,
            spread: 36,
            isReset: false
        };        

        for ( const param in measure ) {
            const handler = setMeasure[param]
            const value = default_data[param]

            handler(value)
        } 
    };

    return (
        <>
            <h2>Former</h2>
            <div className = "relative pt-10">
                <Input
                    params = { measure }
            
                    onBntClick = { handleBtnClick }
                    onInputChange = { handleInputChange }
                    onResetBnt = { handleResetBtnClick }
                />
                
                <Tree props = { measure } />
            </div>
        </>
    );
}

export default Former;
