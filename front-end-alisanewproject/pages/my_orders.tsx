import { OrderService } from "@/services/order.sevice";
import Meta from "@/ui/Meta";
import Layout from "@/ui/layout/Layout";
import { convertPrice } from "@/utils/convertPrice";
import { useQuery } from "@tanstack/react-query";

const MyOrdersPage = () => {
    const { data: orders, isLoading, error } = useQuery({
        queryKey: ['my orders'],
        queryFn: () => {
            return OrderService.getAll().then((response) => {
                return response.data.map((order) => ({
                    id: order.id,
                    name: order.name,
                    status: order.status,
                    data: order.createdAt,
                    total: order.total
                }));
            });
        },
    });

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    return (
        <Meta title="Личный кабинет">
            <Layout>
                <div className="header1">Мои заказы</div>
                <ul>
                    {orders && orders.length > 0 ? (
                        orders.map((order) => (
                            <div key={order.id} className="card_orders">
                                <span>ID: {order.id}</span>
                                <span>Статус: {order.status}</span>
                                <span>Дата заказа: {order.data}</span>
                                <span>Итоговая цена: {convertPrice(order.total)}</span>
                            </div>
                        ))
                    ) : (
                        <div>Заказы не найдены.</div>
                    )}
                </ul>
            </Layout>
        </Meta>
    );
};

export default MyOrdersPage;
