import Head from "next/head";
import Navbar from "./Navbar/";
import Footer from "./Footer";

export default function Layout({ children }) {
    
    return (
        <>
            <Head>
                <title>Scandinavian Tree</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            
            <main className ="relative">
                { children }
            </main>

            <Footer />
        </>
    );
}