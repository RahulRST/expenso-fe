import Navbar from "./navbar"

const Layout = (props: any) => {
    return(
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}

export default Layout;