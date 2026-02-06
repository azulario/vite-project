import Header from "./header/Header";
import Footer from "./footer/Footer";


export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout