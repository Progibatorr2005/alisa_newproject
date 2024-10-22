import { IUser } from "@/types/user.interface";
import { FC } from "react";
import Image from "next/image";

interface HeaderProfileProps {
    profile: IUser;
}

const HeaderProfile: FC<HeaderProfileProps> = ({ profile}) => {
    return(
        <div>
            {profile?.avatarPath && (
                <Image 
                    src={profile?.avatarPath} 
                    alt='profile' 
                    width={43}
                    height={43}  
                />
            )}
        </div>
    )
}

export default HeaderProfile;