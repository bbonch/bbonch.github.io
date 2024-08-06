import Link from 'next/link'
import Image from 'next/image'
import logoSmall from '../public/logo-small.png'
import NavbarCollapse from './navbarCollapse'

type HeaderProps = {
    activePage?: string,
    headerClass?: string
}

export default function Header({ activePage, headerClass }: HeaderProps) {
    return (
        <header className={headerClass}>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link href='/' className="navbar-brand">
                        <Image alt="Searcher for Discogs logo" src={logoSmall} />
                    </Link>
                    <NavbarCollapse activePage={activePage} />
                </div>
            </nav>
        </header >
    )
}