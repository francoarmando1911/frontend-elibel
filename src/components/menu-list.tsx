"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Elibel
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Elibel es una tienda de ropa, calzado, juguetes y accesorios para chicos y chicas de 0 a +12 años.
                                            Elibel es color, es juego, es risa y diversion.
                                        </p>
                                    </Link> 

                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Tienda">
                                Accede a toda tu informacion, pedidos y mucho mas.
                            </ListItem>
                            <ListItem href="/offers" title="Ofertas">
                                Seccion dedicada a promociones y descuentos especiales
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Accesorios
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default MenuList

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Nacimientos",
        href: "/categories/nacimientos",
        description:
            "De 0 a 18 meses - De 1 a 4 años",
    },
    {
        title: "Niños",
        href: "/categories/ninas",
        description:
            "De 4 a +12 años",
    },
    {
        title: "Niñas",
        href: "/categories/ninos",
        description:
            "De 4 a +12 años",
    },
    {
        title: "Accesorios",
        href: "/categories/accesorios",
        description: "Los mejores accesorios para complementar el outfit perfecto.",
    },
    {
        title: "Calzado",
        href: "/categories/calzado",
        description:
            "El mejor calzado para los mas peques",
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
        </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


