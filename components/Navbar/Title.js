import Link from "next/link";

export default function Title() {
    const title_cls = `uppercase text-base
        hover:text-amber-500 h-[42px] leading-[2.8rem] font-bold
        sm:text-2xl sm:leading-loose
        lg:leading-relaxed
    `

    return (
        <Link
            href="/"
            className = { title_cls } >
            scandinavian tree
        </Link>
    )
}