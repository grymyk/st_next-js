import Image from "next/image";
import about_bg from '../../public/img/about_bg.jpg'

export default function Home() {
  const heading = `NATURAL AND FUNCTIONAL
    STYLE OF NORDIC COUNTRIES CANDECORATE
    YOUR HOME OR BE AN ELEGANT GIFT.
    ALL TREES AREHANDMADE IN UKRAINE
    FROM ENVIRONMENTAL-FRIENDLY WOOD
  `

  const heading_cls = `h-72 overflow-hidden
      w-[60%] mt-[32px] mx-auto mb-[64px] leading-[48px]
      md:w-[40%] absolute top-[25%] left-[25%]
      text-gray-600 font-medium
    `

  const img_cls = `w-full h-full`

  return (
    <section>
        <Image
            className = { img_cls }
            src = { about_bg }
            alt = 'Scandinavian Tree Background'
        />
        <h2 className = { heading_cls } >
            { heading }
        </h2>
    </section>
  );
}
