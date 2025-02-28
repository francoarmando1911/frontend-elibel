"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./skeletonScheme";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const FeaturedProducts = () => {
    const { loading, result }: ResponseType<ProductType[]> = useGetFeaturedProducts();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonSchema grid={3} />}

                    {result?.length ? (
                        result.map((product) => {
                            const { attributes, id } = product;
                            const imageUrl = attributes?.image?.data?.[0]?.attributes?.url
                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${attributes.image.data[0].attributes.url}`
                                : "/icono.png";

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <Image
                                                    src={imageUrl}
                                                    alt={attributes?.productName || "Producto"}
                                                    width={300} 
                                                    height={300} 
                                                    objectFit="cover"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })
                    ) : (
                        !loading && <p className="px-6 py-4">No hay productos destacados.</p>
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
