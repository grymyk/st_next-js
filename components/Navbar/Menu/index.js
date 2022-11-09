import { useState } from "react"
import NanItem from './NavItem';
import HamburgerMenu from './Hamburger'
import { useRouter } from 'next/router'

export default function Menu() {
    const mobile = `text-center duration-300
        flex-col top-20 w-full -left-full absolute z-10
        h-full overflow-hidden bg-white 
    `
    const dekstop = `lg:flex lg:flex-wrap lg:items-center
        lg:justify-between lg:static lg:w-auto
        lg:bg-transparent lg:flex-row lg:bg-transparent
    `

    const open = `left-0`

    const [ isOpen, setOpen ] = useState(false);

    const handleToggle = () => {
        setOpen( !isOpen );
    };

    let menu_cls = mobile.concat(dekstop);

    if ( isOpen ) {
        menu_cls += open;
    }

    const links = [{
	    url: '/',
            id: 1,
            title: 'Home',
            active_cls: ''
        }, {
            url: '/former',
            id: 2,
            title: 'Former',
            active_cls: '',
        }, {
            url: '/products',
            id: 3,
            title: 'Products',   
             active_cls: ''
        }, {
            url: '/contact',
            id: 4,
            title: 'Contact',
            active_cls: ''
    }]

    const router = useRouter()
    const active_url = router.pathname;
   
    const nav_list = links.map( (link) => {
        return <NanItem
            key = { link.id }
            title = { link.title }
            current_url = { link.url }
            active_url = { active_url }
        />
    }) 

    return (
        <>
            <div className = { menu_cls }>
                { nav_list }
            </div>

            <HamburgerMenu
                handleToggle = { handleToggle }
                isOpen = { isOpen }
            />
        </>
        

    )
}
