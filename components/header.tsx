import Link from 'next/link'
import Image from 'next/image'
import logoSmall from '../public/logo-small.png'

type HeaderProps = {
    activePage?: string,
    headerClass?: string
}

export default function Header({ activePage, headerClass }: HeaderProps) {
    return (
        <header className={headerClass}>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link href='/'>
                        <a className="navbar-brand">
                            <Image alt="Searcher for Discogs logo" src={logoSmall} />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className='nav-item'>
                                <Link href="/">
                                    <a className={"nav-link" + (activePage == "home" ? " active" : "")}>Home</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/faq">
                                    <a className={"nav-link" + (activePage == "faq" ? " active" : "")}>FAQ</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}