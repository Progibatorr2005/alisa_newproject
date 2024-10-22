import { CategoryService } from "@/services/category.sevice";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const Category: FC = () => {
    const { data } = useQuery({
        queryKey: ['get categories'],
        queryFn: () => CategoryService.getAll(),
        select: ({ data }) => data
    });

    return (
        <div></div>
        // здесь добавь JSX, если нужно отображать что-то на странице
    );
}

export default Category;
