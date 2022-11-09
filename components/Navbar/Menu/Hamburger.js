
export default function HamburgerMenu({ handleToggle, isOpen }) {
    const bar_cls = `bg-amber-500 dark:bg-gray-300
        my-1 mx-auto w-8 h-1 ease-in-out
        duration-300 transition-all hover:bg-amber-600
    `
    const hamburger = `block cursor-pointer lg:hidden`

    let first_bar = bar_cls
    let second_bar = bar_cls
    let third_bar = bar_cls

    const openBars = [
        `translate-y-2 rotate-45`,
        `opacity-0`,
        `-translate-y-2 -rotate-45`
    ]
 
    if ( isOpen ) {
        first_bar = bar_cls + openBars[0]
        second_bar = bar_cls + openBars[1]
        third_bar = bar_cls + openBars[2]
    }

    return (
        <div className = { hamburger }
            onClick = { handleToggle }
        >
            <div className = { first_bar }></div>
            <div className = { second_bar }></div>
            <div className = { third_bar }></div>
        </div>       
    )
}