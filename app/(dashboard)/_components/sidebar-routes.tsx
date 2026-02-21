"use client";

import { Compass, Icon, icons, Layout, Sidebar } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
];


// This component is responsible for rendering the sidebar routes based on the user's authentication status.
// For now, it only renders the guest routes, but in the future, you can add logic to render different routes for authenticated users.
// You can also add more routes to the guestRoutes array as needed.
// The SidebarItem component is a simple component that takes in an icon, label, and href and renders a sidebar item. You can customize this component to fit your design needs.
// The SidebarRoutes component maps over the routes array and renders a SidebarItem for each route. It uses the route's href as the key, and passes the icon, label, and href to the SidebarItem component.
// In the future, you can also add logic to handle active routes, so that the currently active route is highlighted in the sidebar. You can use the useRouter hook from Next.js to get the current route and compare it with the route's href to determine if it's active or not.
// Overall, this component serves as a central place to manage the sidebar routes and can be easily extended in the future to accommodate different user roles and authentication states.
// You can also add more routes to the guestRoutes array as needed, and you can create separate arrays for authenticated users or different user roles if necessary. The key is to keep the logic for rendering the sidebar routes centralized in this component, so that it's easy to manage and update as your application evolves.

export const SidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
}