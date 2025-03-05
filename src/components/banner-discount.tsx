import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return ( 
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Consegui hasta -25%</h2>
            <h3 className="mt-3 font-semibold">-20% con tu compra mayor a $50.000 o -25% con tu compra mayor a $80.000</h3>
            
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>Mas informacion</Link>

            </div>
        </div>
     );
}
 
export default BannerDiscount;