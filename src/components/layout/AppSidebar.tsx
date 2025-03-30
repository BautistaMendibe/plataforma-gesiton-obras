import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import {ActivitySquareIcon, LayoutGridIcon, PersonStandingIcon, TruckIcon} from "lucide-react";

// This is sample data.
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Trabajo",
            url: "#",
            items: [
                {
                    icon: LayoutGridIcon,
                    title: "Proyectos",
                    url: "projects",
                },
                {
                    icon: ActivitySquareIcon,
                    title: "Obras",
                    url: "#",
                },
            ],
        },
        {
            title: "Gestión",
            url: "#",
            items: [
                {
                    icon: TruckIcon,
                    title: "Proveedores",
                    url: "#",
                },
                {
                    icon: PersonStandingIcon,
                    title: "Clientes",
                    url: "#",
                    isActive: false,
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>

            <SidebarHeader>
                {/*
                <VersionSwitcher
                    versions={data.versions}
                    defaultVersion={data.versions[0]}
                />
                */}
                <div className="p-4">
                    <h1 className="text-xl font-bold">MyObrasApp</h1>
                </div>
            </SidebarHeader>

            <SidebarContent>
                {/* We create a SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={item.isActive}>
                                            <a href={item.url} className="flex items-center gap-2">
                                                <item.icon className="h-4 w-4" />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
