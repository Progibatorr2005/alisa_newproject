import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import ProductItem from "./product-item/ProductItem";
import Loader from "../Loader";
import SortDropdown from "./SortDropdown";


interface ICatalog {
    products:  IProduct[],
    isPagination?: boolean
}



const Catalog: FC<ICatalog> = ({products, isPagination = false}) => {
    return (
        <section >
            <div className="header1">Каталог</div>
            {products.length ? (
                <>
                <div className="catalog">
                    {products.map(product => (
                            <ProductItem key={product.id} product={product} />  
                        
                    ))}
                </div>
                </>       
                
            ) : (
                <div>There are no products</div>
            )}
        </section>
    )
}

export default Catalog