import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar />
                <main className="flex flex-col flex-1 min-h-screen bg-background">
                    <Header />
                    <div className="flex-1 p-4">{children}</div>
                </main>
            </div>
        </SidebarProvider>
    );
}
