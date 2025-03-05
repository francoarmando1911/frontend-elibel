"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeletonScheme";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
    const { loading, result }: ResponseType<ProductType[]> = useGetFeaturedProducts();
    const router = useRouter();
    console.log(result)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonSchema grid={3} />}

                    {result?.length ? (
                        result.map((product: ProductType) => {
                            const { attributes, id } = product;
                            const { slug, images, productName } = attributes || {};

                            console.log("Producto:", product);
                            console.log("Imagen:", images);

                            const imageUrl = images?.data?.[0]?.attributes?.url
                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`
                                : "/icono.png";

                            console.log("Image URL:", imageUrl);

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2 group">
                                                <Image
                                                    src={imageUrl}
                                                    alt={productName || "Producto"}
                                                    width={300}
                                                    height={300}
                                                    className="object-cover"
                                                />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton
                                                            onClick={() => slug && router.push(`/product/${slug}`)}
                                                            icon={<Expand size={20} />}
                                                            className="text-gray-600"
                                                            aria-label="Ver producto"
                                                        />
                                                        <IconButton
                                                            onClick={() => console.log('Agregado al carrito')}
                                                            icon={<ShoppingCart size={20} />}
                                                            className="text-gray-600"
                                                            aria-label="Agregar al carrito"
                                                        />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            {/* Nombre del producto */}
                                            <div className="flex justify-between gap-4 px-8 mt-2">
                                                <h3 className="text-lg font-bold">{productName || "Producto sin nombre"}</h3>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })
                    ) : (
                        !loading && <p className="px-6 py-4">No hay productos destacados.</p>
                    )}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
