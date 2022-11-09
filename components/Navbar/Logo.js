import Link from "next/link";
import Image from 'next/image'

export default function Logo() {
    const link_cls = `
        flex justify-center content-center h-[42px]
    `

    return (
        <Link href="/" className = { link_cls }>
            <Image
                className = "mr-4"
                src = "/img/scandinavian_tree_logo.png"
                alt = "scandinavian tree"
                width = { 33 }
                height= { 42 }
            />
        </Link>
    );
}

