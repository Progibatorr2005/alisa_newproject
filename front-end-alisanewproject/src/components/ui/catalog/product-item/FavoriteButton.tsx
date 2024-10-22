import useToggleFavorite from "@/hooks/useMutant";
import { IFullUser } from "@/types/user.interface";
import { useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const FavoriteButton: FC <{productId: number}> = ({productId}, profile: IFullUser) => {
    const { mutate, isError, data, error } = useToggleFavorite(productId);
    // const {profile} = useProfile()

    const {invalidateQueries} = useQueryClient()


    const handleToggleFavorite  = () => {mutate(),
        {

        }
    };

    if (!profile) return null

    const isExists = profile.favorites.some(
        favorite => favorite.id === productId
    )

    return (
        <div>
            <button
                onClick={() => 
                    handleToggleFavorite()
                }
            
        >
            {isExists ? <AiFillHeart />: <AiOutlineHeart/>}
        </button>
        </div>
        
    )
}


export default FavoriteButton

function mutate() {
    throw new Error("Function not implemented.");
}
