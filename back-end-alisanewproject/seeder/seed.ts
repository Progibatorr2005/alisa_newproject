import { faker } from '@faker-js/faker';
import { PrismaClient, Product } from '@prisma/client';
import * as dotenv from 'dotenv';
import { generateSlug } from '../src/utils/generate-slug';
import { getRandomNumber } from '../src/utils/random-number';

dotenv.config();
const prisma = new PrismaClient();

const createProduct = async (quantity: number) => {
    const products: Product[] = [];

    for (let i = 0; i < quantity; i++) {
        const productName = faker.commerce.productName();
        const categoryName = faker.commerce.department();

        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: generateSlug(productName),
                description: faker.commerce.productDescription(),
                price: parseInt(faker.commerce.price({ min: 100, max: 10000 }), 10), // Используем новый синтаксис price
                images: Array.from({ length: getRandomNumber(2, 6) }, () => faker.image.url()), // Правильное использование Array.from
                category: {
                    create: {
                        name: categoryName,
                        slug: generateSlug(categoryName).toLowerCase()
                    }
                },
                reviews: {
                    create: [
                        {
                            rating: faker.number.int({ min: 1, max: 5 }), // Используем новый метод number.int
                            text: faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                        {
                            rating: faker.number.int({ min: 1, max: 5 }), // Используем новый метод number.int
                            text: faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        }
                    ]
                }
            }
        });
        products.push(product);
    }

    console.log(`Создано ${products.length} продуктов`);
};

async function main() {
    console.log('start seeding ...')
    await createProduct(10)
}

main()
.catch(e => console.error(e))
.finally(async () => {
    await prisma.$disconnect()
})