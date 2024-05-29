import { Outlet, useLocation } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import logo from "../assets/CW-logo.svg"
import Navbar from "../components/Navbar/Navbar"
import styles  from './Root.module.scss'
function Root() {


    return (
        <>
            {/*<Navbar /> */}
            <div className={styles.outlet}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Root