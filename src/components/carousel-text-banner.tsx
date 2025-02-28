"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const dataCarrouselTop = [
    {
        id: 1,
        title: "Envío en 24/48 horas",
        description: "Envíos a todo el país. Obtén más información comunicándote con nosotros.",
        link:"#"
    },
    {
        id: 2,
        title: "Devoluciones fáciles",
        description: "Si no estás satisfecho con tu compra, puedes devolverla en un plazo de 10 días.",
        link: "#"
    },
    {
        id: 3,
        title: "Descuentos exclusivos",
        description: "Regístrate y accede a descuentos especiales en productos seleccionados.",
        link: "#"
    },
    {
        id: 4,
        title: "Atención personalizada",
        description: "Estamos disponibles para ayudarte con cualquier consulta.",
        link: "#"
    }
];


const CarrouselTextBanner = () => {

    const router = useRouter()

    return ( 
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay: 3000, 
                }),
            ]}
            >
                <CarouselItem>
                    <CarouselContent>
                    {dataCarrouselTop.map(({id, title, link, description}) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 text-center items-center">
                                        <p className="sm:text-lg text-wrap dar:text-secondary">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </CarouselItem>

            </Carousel>
        </div>
     );
}
 
export default CarrouselTextBanner;