import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
