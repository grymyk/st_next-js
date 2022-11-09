import React from 'react';

import HeadBranch from './HeadBranch.js'
import BodyBranch from './BodyBranch'

function Tree ({ props }) {
    const Z_INDEX = 1

    const { width, height } = props;

    return(
        <div id="tree_holder"
            className = "relative z-0 mt-16 mx-auto">
            
            <ul className = "duration-500 origin-[50%_50%]">
                {<HeadBranch
                    width = { width }
                    height = { height }
                    zIndex = { Z_INDEX }
                />}

                {<BodyBranch
                    { ...props }
                />}
            </ul>
        </div>
    )

}

export default Tree;
