export type ProductType = {
    id: number, 
    attributes: {
        productName: string;
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        price: number;
        image: {
            data: {
                id: number
                attributes: {
                    url: string
                }
            }[]
        }
        category:{
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                }
            }
        };
    };
};