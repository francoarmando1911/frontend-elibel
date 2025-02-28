import { useEffect, useState } from "react";
import { ProductType } from "@/types/product";

export function useGetFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;

    const [result, setResult] = useState<ProductType[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResult(json.data as ProductType[]);
                setLoading(false);
            } catch (error) {
                setError((error as Error).message || "Error al obtener los productos");
                setLoading(false);
            }
        })();
    }, [url]);

    return { loading, result, error };
}
