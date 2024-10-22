import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import Image from "next/image";
import AddToCartButton from "./AddToCartButtom";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { convertPrice } from "@/utils/convertPrice";

const ProductItem: FC<{product: IProduct}> = ({product}) => {
    return <div className="card">
            <Link className="category_link" href={`/product/${product.slug}`}>
                <Image className=".card_image" width={280} height={280} src={product.images[0]} alt={product.name}  property="" />
            </Link>
            <Link className="category_link" href={`/product/${product.slug}`}>
                <h3>{product.name}</h3>
            </Link>
            <Link className="category_link" href={`/category/${product.category.slug}`}>{product.category.name}</Link>
            <div>{convertPrice(product.price)}</div>
            {/* <FavoriteButton productId={product.id}></FavoriteButton> */}
            <AddToCartButton product={product}></AddToCartButton>
            
            
        </div>
}

export default ProductItem