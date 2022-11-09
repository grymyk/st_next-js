import React from "react";

const planeStyles = {
    front:  ({ width, height, translateZ }) => {
        let { zAxis } = translateZ;

        return {
            width,
            height,
            transform: `rotateY(0deg) translateZ( ${zAxis} )`
        }
    },

    back: ({ width, height, translateZ }) => {
        let { zAxis } = translateZ;

        return {
            width,
            height,
            transform: `rotateX(180deg) translateZ( ${zAxis} )`
        };
    },

    right: ({ height, left, deep, translateZ }) => {
        let { xzAxis } = translateZ;

        return {
            width: deep,
            height,
            transform: `rotateY(90deg) translateZ( ${xzAxis} )`,
            left
        };
    },

    left: ({ height, left, deep, translateZ }) => {
        let { xzAxis } = translateZ;

        return {
            width: deep,
            height,
            transform: `rotateY(-90deg) translateZ( ${xzAxis} )`,
            left
        };
    },

    top: ({ width, top, deep, translateZ }) => {
        let { yAxis } = translateZ;

        return {
            width,
            height: deep,
            transform: `rotateX(90deg) translateZ( ${yAxis} )`,
            top
        };
    },

    bottom: ({ width, top, deep, translateZ }) => {
        let { yAxis } = translateZ;

        return {
            width,
            height: deep,
            transform: `rotateX(-90deg) translateZ( ${yAxis} )`,
            top
        };
    },
};

function Face({ face, options }) {
    const branch = ` border-x-1 border-t-1
        border-solid border-[rgba(0, 0, 0, 0.42)] border-b-0
        visibility-hidden
    `

    const side_view = ` absolute`;

    const faceTypesBg = {
        front: `bg-[#dbb969]`,
        back: `bg-[#c457361]`,
        right: `bg-[#f6bf4f]`,
        left: `bg-[#7d5c30]`,
        top: `bg-[#b7a05c]`,
        bottom: `bg-[#f6bf4f]`    
    }

    const faceBg = faceTypesBg[face]

    const faceCls = ( face ) => face.concat(branch, side_view)

    return (
        <li className = { faceCls(faceBg) }
             style = { planeStyles[face](options) } >
        </li>
    )
}

export default Face;
