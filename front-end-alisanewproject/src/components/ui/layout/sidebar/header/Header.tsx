import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import HeaderCart from "./cart/HeartCart"
import HeaderProfile from "./HeaderProfile"
import { profile } from "console"
import { logout } from "@/store/user/user.actions"
import Search from "../../Search"
import SquareButton from "@/ui/button/SquareButton"






const Header: FC = () => {
    return (
        <header>
            <Link href={'/main'}>
                <Image className="footer_logo"
                    src={'/images/favicon.svg'}
                    alt="alisa"
                    width={150}
                    height={72}
                />
            </Link>
            <div className="navigation_bar">
                <a href="/main"><div>Главная</div></a>
                <a href="/"><div>Каталог</div></a>
                <a href="/about_us"><div>О нас</div></a>
            </div>
            <Search/>
            <div className="header_container">
                <Link href="/cart">
                <button className="cart_button">
                    <img src="/images/cart.svg" width={30}></img>
                </button>
                </Link>
                <Link href={'/my_orders'}>
                    <button className="cart_button">
                        <img src="/images/user.png" width={30}></img>
                    </button>
                </Link>
                
                
                {/* <SquareButton></SquareButton> */}
                {/* <button onClick={() => logout()}>
                    <FiLogOut />
                    <span>Logout</span>
                </button> */}
                {/* <HeaderProfile profile={}/> */}
            </div>

        </header>
    )
}

export default Header