import { AppSidebar } from "./AppSidebar";
import {SidebarProvider} from "@/components/ui/sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <Header />
                {children}
            </main>
        </SidebarProvider>
    );
}
