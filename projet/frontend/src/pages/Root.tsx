import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
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