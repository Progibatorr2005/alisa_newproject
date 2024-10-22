import { useMutation } from "@tanstack/react-query";
import { UserService } from "@/services/user.sevice";

const useToggleFavorite = (productId: number | string) => {
    const { mutate, isError, data, error } = useMutation({
        mutationFn: () => UserService.toggleFavorite(productId),
        mutationKey: ['toggle favorite'],
    });

    return { mutate, isError, data, error };
};

export default useToggleFavorite;