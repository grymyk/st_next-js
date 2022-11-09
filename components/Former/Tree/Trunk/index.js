import React from 'react'

import Face from "./Face.js";
import boardHelper from "./boardHelper";

const faces = ["front", "back", "right", "left", "top", "bottom"];

const prism_holder_style = {
    height: '20px',
    position: 'relative',
    perspective: '700px',
    perspectiveOrigin: '-142% -400%',
}

const prism_style = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transformStyle: 'preserve-3d'
}

function Board(props) {
    let cssText = props;
    let { zIndex } = props;

    let options = boardHelper.getBoardTemplate(props);

    const faceList = faces.map( (face, index) => {
        let key = zIndex + index.toString();

        return <Face key = { key }
                     face = { face }
                     options = { options }
        />
    });

    return (
        <li className="relative my-0 mx-auto will-change-transform"
            key = { zIndex }
            style = { cssText }
        >    
            <div style = { prism_holder_style }>
                <ul style = { prism_style }
                    className="prism"
                >{ faceList }</ul>
            </div>
        </li>
    )
}

export default Board;
