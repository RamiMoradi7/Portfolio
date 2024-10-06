import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Copyrights from "../Copyrights/Copyrights";
import Header from "../Header/Header";
import Container from "./Container";
import AccessibilityMenu from "../../HomeArea/Home/AccessibilityMenu";
import ScrollToTop from "../../ScrollToTop";
import Routing from "../Routing/Routing";


function Layout(): JSX.Element {
    useEffect(() => {
        AOS.init({
            delay: 0,
            duration: 600,
            once: false,

        });
    }, [])
    return (
        <div className="bg-zinc-100 text-zinc-900 dark:bg-dark-main dark:text-white  min-h-screen">
            <Header />
            <Container>
                <div className="mt-20 lg:mt-10 dark:bg-dark-second">
                    <Toaster position="top-right" />
                    <AccessibilityMenu />
                    <ScrollToTop />
                    <Routing />
                    <Copyrights />
                </div>
            </Container>
        </div>
    );
}

export default Layout;
