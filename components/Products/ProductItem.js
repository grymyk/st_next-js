import Image from "next/image";

const product_item_cls = `mt-6`
const product_title = `mt-4`
const product_item_params = `mt-2 leading-6 text-center`

const img_cls = `w-60 h-auto sm:w-auto lg:mx-12`

export default function ProductsItem({ product }) {
    const { img, title, params } = product;

    const { src, 
        title: img_title,
        alt,
        width,
        height
    } = img

    const { 
        height: tree_height,
        branch
    } = params

    return (
            <li className = { product_item_cls } >
                <Image className = { img_cls }
                    src = { src }
                    title = { img_title }
                    alt = { alt }
                    width = { width }
                    height = { height }
                />
                <h3 className = { product_title} >{ title }</h3>

                <ul>
                    <li className = { product_item_params }>
                        <span>{ tree_height }</span>

                    </li>
                    <li className = { product_item_params }>
                        <span>{ branch }</span>
                    </li>
                </ul>
            </li>
    )
}