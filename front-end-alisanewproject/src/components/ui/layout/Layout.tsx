import { FC, PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./sidebar/header/Header";
import Footer from "./Footer";

const Layout: FC <PropsWithChildren<unknown>> = ({children}) => {
    return <div>
        <Header />
        <div style={{
            gridTemplateColumns: '1fr 4fr'
        }}>
            <Sidebar/>
            <main>{children}</main>
        </div>
        <Footer /> 
    </div>
}

export default Layout