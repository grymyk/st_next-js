import Link from "next/link";

export default function NavItem( { current_url, active_url, title } ) {
    const mobile = `mt-10 text-gray-500 hover:text-amber-600
        font-bold text-2xl block
    `
    const dekstop = `lg:mx-3 lg:my-0`
    const active_item_cls = ' text-amber-500';

    let nav_item = mobile.concat(dekstop);
    
    if ( active_url === current_url ) {
        nav_item += active_item_cls;
    }

    return (
        <>
            <Link href = { current_url }
                className = { nav_item }
            >
                { title }
            </Link>
        </>
    );
}
