import Logo from './Logo'
import Title  from './Title'
import Menu from './Menu/'

export default function Navbar() {
    const header_cls = `body-font border-b-2 border-gray-100`
  
    const nav_cls = `flex flex-wrap items-center
        justify-between mx-4 h-16
    `

    return (
        <header className = { header_cls }>
            <nav className = { nav_cls } >
                <Logo />
                <Title />
                <Menu />
            </nav>
        </header>
    );
}
