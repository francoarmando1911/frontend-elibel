"use client"

import { useGetCategories } from '@/api/getProducts';
import Link from 'next/link'
import { ResponseType } from '@/types/response';
import { CategoryType } from '@/types/category';

const ChooseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories();

    console.log("Datos obtenidos de useGetCategories:", result); 

    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoria</h3>

            <div className='grid gap-5 sm:grid-cols-3'>
                {!loading && result && result.length > 0 ? (
                    result.map((category: CategoryType) => {
                        console.log("Estructura de la categoría:", category); 

                        // Asegurándonos de que category.attributes esté definido y tiene los datos correctos
                        if (category.attributes && category.attributes.slug && category.attributes.categoryName) {
                            return (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.attributes.slug}`}
                                    className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg'
                                >
                                    <img
                                        src={
                                            category.attributes.mainImage?.data
                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.attributes.mainImage.data.attributes.url}`
                                                : "/icono.png"
                                        }
                                        alt={category.attributes.categoryName}
                                        className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                    />
                                </Link>
                            );
                        } else {
                            console.log("Atributos faltantes o incorrectos en:", category); // Atributos faltantes
                            return <p key={category.id}>Categoría sin atributos válidos</p>;
                        }
                    })
                ) : (
                    <p>Cargando categorías...</p>
                )}
            </div>
        </div>
    );
};

export default ChooseCategory;
