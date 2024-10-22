import { UserService } from "@/services/user.sevice";
import { IFullUser } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
    const { data } = useQuery({
        queryKey: ['get profile'],
        queryFn: () => UserService.getProfile(),
        select: ({ data }) => data,  // Опция select теперь внутри объекта опций
    });

    return { profile: data || ({} as IFullUser) };
};
