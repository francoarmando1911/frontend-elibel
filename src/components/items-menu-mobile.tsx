import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/nacimientos" className="block">Nacimientos</Link>
                <Link href="/categories/ninos" className="block">Niños</Link>
                <Link href="/categories/ninas" className="block">Niñas</Link>
                <Link href="/categories/accesorios" className="block">Accesorios</Link>
                <Link href="/categories/calzado" className="block">Calzados</Link>
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;