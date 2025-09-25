import Link from 'next/link'
import React from 'react'
import Logo from "@/app/components/logo";

const routes = [
    {
    name: "Home",
    path: "/",
    },
    {
        name: "All Events",
        path: "/events/all",
    },
];

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b border-white/70 h-14 px-3 sm:px-9">
            <Logo />
            <nav>
                <ul className="flex gap-6 text-sm">
                    {
                        routes.map(route => (
                            <li key={route.path} className="text-white/50 hover:text-white transition">
                                <Link href={route.path}>
                                        {route.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
