import Meta from "@/ui/Meta";
import Layout from "@/ui/layout/Layout";
import { NextPage } from "next";
import Image from "next/image";

const MainPage: NextPage = () => {
    return(
        <Meta title="Главная">
            <Layout>
                <div className="banner">
                    <Image
                    src={'/images/banner.png'}
                    alt="banner"
                    width={1180}
                    height={500}>

                    </Image>
                </div>
                {/* <div className="banner" >
                    <img className="adasd" src="/images/fone.png"></img>
                </div> */}

                <div className="map">
                    <div className="map_info">
                        <p>Г. Чита, ул. Чкалова, 149, этаж 1</p>
                        <p>Контакты:<br/>+7 (3022) 24-55-00</p>
                        <p>Время работы:<br/>Пн - вс, с 8:00 до 21:00</p>
                    </div>
                    <div style={{position:'relative', overflow:'hidden', borderRadius: '10px'}}>
                        <a href="https://yandex.ru/maps/org/alisa/1823526249/?utm_medium=mapframe&utm_source=maps" 
                        style={{color:'#eee', fontSize:'12px', position:'absolute',top:'0px'}}>
                            Алиса
                            </a>
                            <a 
                            href="https://yandex.ru/maps/68/chita/category/flower_shop/184108325/?utm_medium=mapframe&utm_source=maps" 
                            style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>
                                Магазин цветов в Чите
                                </a>
                                <a href="https://yandex.ru/maps/68/chita/category/organization_of_events/184108329/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'28px'}}>Организация мероприятий в Чите</a><iframe src="https://yandex.ru/map-widget/v1/?ll=113.492950%2C52.040580&mode=search&oid=1823526249&ol=biz&sctx=ZAAAAAgBEAAaKAoSCRtmaDwRYFxAEZHz%2Fj9OBEpAEhIJ4nMn2H8d9z8RP%2BCBAYSP4D8iBgABAgMEBSgKOABA2JAGSAFqAnJ1nQHNzEw9oAEAqAEAvQE%2Bykl%2BwgEF6ZrD5QaCAgrQsNC70LjRgdCwigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=113.492950%2C52.040580&sspn=0.090294%2C0.032340&text=%D0%B0%D0%BB%D0%B8%D1%81%D0%B0&z=14" width="700" height="400" style={{position:'relative'}}></iframe>
                    </div>
                </div>

            </Layout>
        </Meta>
    )
}

export default MainPage