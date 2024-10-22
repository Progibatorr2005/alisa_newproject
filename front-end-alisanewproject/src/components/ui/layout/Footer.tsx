import { FC } from "react";
import Image from "next/image"

const Footer: FC = () => {
    return(
        <div className="footer">
            <div className="footer_container">
            <div>
            <Image 
                alt="logo" 
                src={'/images/logo.png'}
                width={180}
                height={86}>
            </Image>
            <div className="footer_social_network_panel">
                <Image
                alt="vk"
                src={'/images/vk.svg'}
                width={35}
                height={35}>
                </Image>
                <Image
                alt="telegram"
                src={'/images/telegram.svg'}
                width={35}
                height={35}>
                </Image>
                <Image
                alt="whatsapp"
                src={'/images/whatsapp.svg'}
                width={35}
                height={35}>
                </Image>
            </div>
            </div>

            <div className="footer_info">
                <p>Чкалова ул., 149, Чита</p>
                <p>Работаем с 8:00 до 21:00</p>
            </div>
            <div className="footer_contacts">
                <p style={{fontSize: '20px'}}>Контакты:</p>
                <p>+7 (914) 360-55-00</p>
                <p>+7 (968) 160-55-00</p>
            </div>
            </div>
            <div style={{
                margin: '40px 0 40px',
                width: '100%',
                height: '1px',
                backgroundColor: '#CCCCCC'
            }}></div>
            <div style={{
                color: '#A9A9A9'
            }}>АЛИСА | СТУДИЯ ЦВЕТОВ И ДЕКОРА</div>
        </div>
           
    )

}

export default Footer