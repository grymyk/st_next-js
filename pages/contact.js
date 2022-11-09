import Layout from "../components/Layout";
import Link from 'next/link'

export default function Contact() {
  
    const inputs = [{
            id: 1,
            type: 'text',
            name: 'name',
            placeholder: 'Alica'
        }, {
            id: 2,
            type: 'email',
            name: 'email',
            placeholder: 'alica.olsson@gmail.com'
    }]

    const label_style = `font-bold mt-4 block text-left w-64
        sm:w-96
    `;

    const input_style = `block border-2 border-solid border-gray-300 p-2 w-64
    focus:outline-none  sm:w-96
    `;

    const input_holder_style = `flex flex-col justify-center items-center`
    const custom_green = `#85c47e`

    const input_list = inputs.map( ({ id, name, placeholder, type}) => {
        return (
            <li className = { input_holder_style }
                key = { id }>
                <label className = { label_style }
                    htmlFor = { name } >
                    { name }
                </label>
                <input className = { input_style }
                    type = { type }
                    id = { name }
                    name = { name }
                    placeholder = { placeholder }
                    autoComplete = { name }
                    required = ""
                />
            </li>
        )
    });

    const email_holder_style = `flex flex-col justify-center items-start mt-6 mx-4 font-bold
        sm:flex-row
    `;

    const btn_style = `block mt-6 bg-[#85c47e] text-white h-12 px-8
        font-bold inline-block text-center hover:bg-green-300 cursor-pointer
    `
  
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
                
                <div className="flex flex-col justify-center items-center w-full">
                    <h3 className="mt-12">Make an order</h3>

                    <form className="w-full"
                        id="ajax-contact" method="post" action="mailer.php">
                        <ul className="">
                            { input_list }
                        </ul>

                        <div className = { input_holder_style } >
                            <label className = { label_style }
                                htmlFor="message">message
                            </label>
                            
                            <textarea className = { input_style }
                                id="message"
                                name="message"
                                placeholder="Hi Scandinavian Tree,"
                                rows="6" required="required"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <input className = { btn_style }
                                type="submit" value="Order a tree"
                            />
                        </div>
                        
                    </form>
                </div>

                <div className="htmlForm-messages-holder">
                    <div id="htmlForm-messages"><span></span></div>
                </div>
            </div>
        </section>
        </Layout>
  );
}