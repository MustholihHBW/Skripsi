"use client";

import { Compass, Icon, icons, Layout, Sidebar } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        Icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        Icon: Compass,
        label: "Browse",
        href: "/search",
    },
];



export const SidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.Icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
}