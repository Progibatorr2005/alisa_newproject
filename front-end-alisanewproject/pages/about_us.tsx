import Meta from "@/ui/Meta";
import Layout from "@/ui/layout/Layout";
import { NextPage } from "next";

const aboutPage: NextPage = () => {
    return (
        <Meta title="О нас">
            <Layout>
                <div className="header1">О нас</div>
                <div className="about_container">
                    <p style={{textAlign: "center", fontSize: "30px", margin: "200px 0 "}}>Добро пожаловать на наш сайт! Мы — студия цветов и декора, создающая красоту в каждом уголке вашего пространства. Наша страсть к цветам и дизайну помогает нам воплощать самые смелые идеи, делая каждый момент вашей жизни особенным.</p>

                    <div className="team">
                        <h3 style={{fontSize: "25px", marginBottom: "40px"}}>Наша команда</h3>
                        <div className="team_container">
                            <div className="team_container_img"></div>
                            <p>[Имя Флориста] — Главный флорист, эксперт по составлению уникальных цветочных композиций.</p>
                        </div>
                        <div className="team_container">
                            <p>[Имя Декоратора] — Декоратор, который знает, как превратить любое пространство в произведение искусства.</p>
                            <div className="team_container_img"></div>
                        </div>
                        <div className="team_container">
                            <div className="team_container_img"></div>
                            <p>[Имя Ландшафтного Дизайнера] — Специалист по созданию внешнего декора и садовых композиций.</p>
                        </div>
                        <div className="team_container">
                            <p>[Имя Администратора] — Ваш помощник в организации событий и координатор всех процессов.</p>
                            <div className="team_container_img"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Meta>
    )
}

export default aboutPage