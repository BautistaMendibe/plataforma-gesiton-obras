import { AppSidebar } from "./AppSidebar";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
