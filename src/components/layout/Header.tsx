import {Bell, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image"
import {SidebarTrigger} from "@/components/ui/sidebar";

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b px-6 py-4">
            <SidebarTrigger />
            <div className="w-96 ml-4">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Search files..." className="pl-9" />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                </Button>
                <div className="h-8 w-8 overflow-hidden rounded-full">
                    <Image
                        src="/icono-mensurarq.png"
                        alt="Avatar"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
