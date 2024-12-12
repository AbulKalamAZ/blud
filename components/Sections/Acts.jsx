import Image from "next/image";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Tiktok from "../Icons/Tiktok";
import Twitter from "../Icons/Twitter";

const artists = [
  {
    name: "Lil Yachty",
    facebook: "https://www.facebook.com/lilyachtysailingteam",
    instagram: "https://www.instagram.com/lilyachty",
    twitter: "https://twitter.com/lilyachty",
    tiktok: "https://www.tiktok.com/@lilyachty",
    image: "/artists/yatchtey.jpeg",
  },
  {
    name: "Soft Play",
    facebook: "https://www.facebook.com/softplayband",
    instagram: "https://www.instagram.com/softplayplaysoft",
    twitter: "https://twitter.com/softplayband",
    tiktok: "https://www.tiktok.com/@softplayband",
    image: "/artists/softplay.jpg",
  },
  {
    name: "Nessa Barrett",
    facebook: "https://www.facebook.com/nessabarrettofficial",
    instagram: "https://www.instagram.com/nessabarrett",
    twitter: "https://twitter.com/nessabarrett",
    tiktok: "https://www.tiktok.com/@nessabarrett",
    image: "/artists/nessa.png",
  },
  {
    name: "The Damned",
    facebook: "https://www.facebook.com/OfficialDamned",
    instagram: "https://www.instagram.com/thedamnedofficial",
    twitter: "https://twitter.com/thedamned",
    image: "/artists/damned.png",
  },
  {
    name: "Lola Young",
    facebook: "https://www.facebook.com/lolayoungmusic",
    instagram: "https://www.instagram.com/lolayounggg",
    twitter: "https://twitter.com/lolayounggg",
    tiktok: "https://www.tiktok.com/@lolayounggg",
    image: "/artists/lola.jpeg",
  },
  {
    name: "Jazmin Bean",
    facebook: "https://www.facebook.com/jazminbeanworld",
    instagram: "https://www.instagram.com/jazminbean",
    twitter: "https://twitter.com/abortjazminbean",
    tiktok: "https://www.tiktok.com/@jazminbean",
    image: "/artists/jazmin.jpeg",
  },
];

const Acts = () => {
  return (
    <div>
      <h2 className="text-xl md:text-4xl font-ExtraBoldCond mb-4">The Acts</h2>
      <p className="text-md md:text-xl font-Med w-[700px] max-w-full mx-auto normal-case leading-tight mb-2">
        Get ready to dive into a sonic whirlwind at BLUDFEST! We've curated a
        lineup that defies boundaries and celebrates individuality.
      </p>
      <p className="text-md md:text-xl font-Med w-[700px] max-w-full mx-auto normal-case leading-tight mb-8">
        From rising stars to seasoned icons, our stage is a melting pot of raw
        talent and unapologetic expression.
      </p>

      <div className="grid md:grid-cols-3 gap-6 font-ExtraBoldCond text-black text-2xl">
        {artists.map(
          ({ name, instagram, image, facebook, twitter, tiktok }) => (
            <div className="flex flex-col">
              <div className="flex flex-col overflow-hidden aspect-square rounded-xl">
                <Image
                  width="500"
                  height="500"
                  quality="100"
                  src={image}
                  className="object-cover h-full w-full hover:scale-125 transition ease-in-out duration-300"
                  alt={name}
                />
              </div>
              <div className="flex justify-between items-center mt-[5px] mb-[20px]">
                <a href={instagram} target="_blank">
                  <p className="my-[5px] text-[20px] font-Normal uppercase text-left">
                    {name}
                  </p>
                </a>
                <div className="flex space-x-4">
                  {facebook && (
                    <a href={facebook}>
                      <Facebook />
                    </a>
                  )}

                  {instagram && (
                    <a href={instagram}>
                      <Instagram />
                    </a>
                  )}

                  {twitter && (
                    <a href={twitter}>
                      <Twitter />
                    </a>
                  )}

                  {tiktok && (
                    <a href={tiktok}>
                      <Tiktok />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Acts;
