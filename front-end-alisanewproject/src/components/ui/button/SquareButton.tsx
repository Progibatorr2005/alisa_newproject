import { FC } from "react";
import { IconType } from "react-icons";

interface ISquareButton {
    Icon: IconType
    onClick?: () => void
    number?: number
}

const SquareButton: FC<ISquareButton> = ({Icon, onClick, number}) => {
    return(
        <button className="square_button">
            {!! number && (
                <span className="square_button_span">{number}</span>
            )}
            <Icon size={21}/>
        </button>
    )
}

export default SquareButton