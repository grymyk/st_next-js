import React from "react";

export default function InputItem({label, input, value, onChange}) {
    let { htmlFor } = label;
    let { title, min, max, step, readonly, type, name } = input;

    const handleChange = ( event ) => onChange(event.target);

    const label_base_cls = `w-[76px] h-[28px] leading-[28px]
        block p-0 m-0 float-left uppercase font-bold
    `

    const input_cls = `py-0 pl-2 my-0 mx-[5px] w-[40px]
        h-[28px] leading-[28px] float-left text-[16px]
        border-1 border-white border-solid text-right
        color-[#1F1F1F] bg-[rgba(255, 255, 255, 0)]
        out-of-range:bg-transparent
    `

    // const input_lock = {
    //     backgroundColor: 'transparent',
    //     borderColor: 'transparent'
    // }

    // const input_readonly = {
    //     backgroundColor: 'transparent',
    //     borderColor: 'transparent',
    // }

    return (
         <>
            <label
                className = { label_base_cls }
                htmlFor = { htmlFor }
            >
                { htmlFor }
            </label>
            <input
                readOnly = { readonly }
                className = { input_cls }
                id = { name }
                title = { title }
                onChange = { handleChange }
                min = { min }
                max = { max }
                step = { step }
                type = { type }
                name = { name }
                value = { value }
            />
        </>
    )
}
