import { NextPageAuth } from "@/providers/auth-providers/auth-page.types";
import Home from "@/screens/home/Home";
import { ProductService } from "@/services/product/product.sevice";
import { IProduct, TypePaginationProducts } from "@/types/product.interface";
import { GetStaticProps, NextPage } from "next";


const HomePage: NextPage<TypePaginationProducts> = ({lenght, products}) => {
  return <Home products={products} lenght={lenght}/>
}

export const getStaticProps: GetStaticProps<TypePaginationProducts> = async () => {
  const data = await ProductService.getAll({
    page: 1,
    perPage: 100000
  })

  return {
    props: data
  }
}

export default HomePage