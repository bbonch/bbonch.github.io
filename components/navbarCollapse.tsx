'use client'

import Link from 'next/link'
import { useRef } from 'react'

type Props = { activePage?: string }

export default function NavbarCollapse({ activePage }: Props) {
    const collapseRef = useRef<HTMLDivElement>(null)

    const toggleCollapse = async () => {
        if (!collapseRef.current)
            return

        const collapse = (await import('bootstrap/js/dist/collapse')).default
        const collapseElement = collapse.getOrCreateInstance(collapseRef.current)
        collapseElement.toggle()
    }

    return (
        <>
            <button onClick={toggleCollapse} className="navbar-toggler collapsed" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div ref={collapseRef} className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                        <Link href="/" className={"nav-link" + (activePage == "home" ? " active" : "")}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="/faq" className={"nav-link" + (activePage == "faq" ? " active" : "")}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}