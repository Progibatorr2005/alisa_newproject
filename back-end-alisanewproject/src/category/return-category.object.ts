import { tr } from "@faker-js/faker";
import { Prisma } from "@prisma/client";

export const returnCategoryObject:Prisma.CategorySelect = {
    id: true,
    name: true,
    slug: true
}