import Meta from "@/ui/Meta";
import { FC } from "react";
import Catalog from '@/ui/catalog/Catalog'
import { TypePaginationProducts } from "@/types/product.interface";
import Layout from "@/ui/layout/Layout";

const Home: FC<TypePaginationProducts> = ({products, lenght}) => {
    return (
        <Meta title="Каталог">
            <Layout>
                <Catalog products={products || []}
                isPagination/>
            </Layout>

            
        </Meta>
        
)
}

export default Home

