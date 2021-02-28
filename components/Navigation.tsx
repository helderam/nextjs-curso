import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import Link from 'next/link'

import styles from './Navigation.module.css'

const Links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },

]
type NavAncor = {
    path: string;
    children: ReactNode;
}

function NavAncor({ path, children }: NavAncor) {
    return (
        <Link href={path}>
            <a className={styles.NavAnchor}>{children}</a>
        </Link>
    )
}
export default function Navigation() {

    const { pathname } = useRouter();

    return (
        <nav>
            <ul className={styles.list}>
                {Links.map(({ name, path }) => (
                    <li key={path}>
                        {path === pathname
                            ? <span>{name}</span>
                            : <NavAncor path={path}> {name}</NavAncor>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
}