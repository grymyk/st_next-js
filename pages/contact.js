import Layout from "../components/Layout";
import Link from 'next/link'
import Formspree from "../components/Formspree";

export default function Contact() {
  
    const email_holder_style = `flex flex-col justify-center items-start mt-6 mx-4 font-bold
        sm:flex-row
    `;
 
    return (
        <Layout>
        <section>
            <div className="flex flex-col justify-center flex-wrap items-center">
                <h2>contacts</h2>
                
                <div className="mt-6 mx-4 sm:mx-20 sm:w-96 sm:text-center">
                    You can order or make some custom scandinaviantree to contacts us below
                </div>

                <div className = { email_holder_style } >
                    <h4 className="text-left pr-2">email:</h4>
                    <Link
                        href = "mailto:team@scandinaviantree.com?subject=Scandinavian Tree"
                        className = "text-[#85c47e] hover:text-green-300 cursor-pointer"
                    >
                        team@scandinaviantree.com
                    </Link>
                </div>
                
                <Formspree />
            </div>
        </section>
        </Layout>
  );
}