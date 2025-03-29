import Link from "next/link";

const links = [
    { href: "/proyectos", label: "Proyectos" },
    { href: "/materiales", label: "Materiales" }, // para más adelante
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-full bg-gray-100 border-r p-4">
            <nav className="space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="block p-2 rounded hover:bg-gray-200"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
