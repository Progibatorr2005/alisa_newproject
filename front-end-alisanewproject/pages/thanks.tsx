import Meta from "@/ui/Meta"
import Layout from "@/ui/layout/Layout"
import { NextPage } from "next"

const ThanksPage: NextPage = () => {
    return (
        <Meta title="Спасибо за заказ)">
            <Layout>
                <div className="header1">Спасибо за заказ!</div>
                <a href="/">
                    <button style={{marginLeft: '50px', justifyContent: 'center'}} className="button2">Вернуться на главную</button>
                </a>
            </Layout>
        </Meta>
    )
}

export default ThanksPage