"use client";

import Image from "next/image";
import React from "react";

const posts = () => {
  const icons = [
    {
      path: "/image/icons-img/fb.png",
    },
    {
      path: "/image/icons-img/insta.png",
    },
    {
      path: "/image/icons-img/x.png",
    },
    {
      path: "/image/icons-img/li.png",
    },
  ];
  return (
    <main className="flex w-screen justify-center items-center p-1 my-[5vh]">
      <div className="flex flex-col items-center ml-[5vh] ">
        <p className="text-gray-300">Share</p>
        <div className="flex flex-col space-y-6 my-3">
          {icons.map((items) => (
            <Image
              src={items.path}
              className="cursor-pointer hover:scale-110 border border-blue-800 bg-blue-900 p-3 rounded-[1vh]"
              width={50}
              height={70}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[80%] p-2 h-auto items-center space-y-10 ">
        <div className="flex flex-row items-center w-[80%] justify-between space-y-1 px-10">
          <div className="flex items-center space-x-2">
            <Image
              src="/image/user-img/person_1.jpg.webp"
              width={70}
              height={70}
              className="rounded-[50%]"
            />
            <h1 className="text-gray-300 text-[2vh]">James Clear</h1>
          </div>
          <h1 className="text-gray-300 text-[2vh]">July 2, 2020</h1>
        </div>
        <div className="flex text-white flex-col items-center text-center w-[55%] space-y-10">
          <h1 className="text-[5vh] font-bold">
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <p className="text-[3vh] text-gray-300">
            Far far away, behind the word mountains, far from the countries ,
            there live the blind texts.
          </p>
        </div>
        <Image
          src="/image/blog-img/blog1.png"
          alt="Image"
          width={1000}
          height={300}
        />

        <div className="flex flex-col space-y-10 w-[80%] text-gray-400 text-[2vh]">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            voluptatum minus dolore harum cupiditate voluptatibus facere,
            sapiente explicabo nobis iusto commodi sunt ea voluptas nisi cum
            illo, nihil at nemo ad. Dolorum eius explicabo vero dolor nemo
            accusantium sunt, assumenda alias sint voluptas quae, esse quo
            voluptatum commodi velit eum voluptatibus illo harum. Optio quaerat
            possimus cupiditate expedita ab eius excepturi velit, eos porro.
            Molestias, dolor. Blanditiis officia vel, corrupti odit,
            praesentium, minus veritatis quos maiores est pariatur voluptas
            deleniti accusamus? Eos repellendus fuga, nesciunt magnam
            voluptatibus soluta tenetur optio nam modi, porro sint eum
            consequuntur? Recusandae, facere fugiat nemo quaerat magnam corrupti
            veniam illum! Enim possimus ipsa voluptates similique veniam
            inventore eius deleniti suscipit incidunt, consequatur quidem eaque
            accusamus natus quos corporis, est ea esse excepturi laboriosam.
            Mollitia quidem ea explicabo soluta vel, assumenda et ad! Eveniet
            omnis obcaecati ex illo aperiam voluptate sit maxime architecto,
            voluptatem corporis hic alias, laudantium aliquam. Neque, blanditiis
            nam voluptates porro quaerat reiciendis, dignissimos similique
            cupiditate dolor quod asperiores, fugiat nobis assumenda fuga
            necessitatibus accusantium. Sed illum recusandae doloribus iste.
          </p>

          <p>
            Nulla adipisci nam debitis, explicabo dolore deleniti nemo ut non
            omnis dolor voluptatibus repudiandae vero! Placeat repellat ullam
            quam! Culpa esse, aperiam nesciunt veniam impedit molestias
            voluptatibus ipsam hic ducimus, omnis temporibus reprehenderit.
            Fugiat asperiores consectetur recusandae pariatur minima odit, autem
            rem repellat eum impedit molestiae, officia quisquam sapiente
            aperiam consequatur, magnam praesentium itaque quas perspiciatis!
            Atque iusto iste suscipit harum esse. Asperiores commodi nihil
            culpa, minima laboriosam eius dolore veniam. Quae quidem asperiores
            magni corrupti doloribus distinctio at! Dolor assumenda numquam
            molestiae, ad iste nisi qui facilis aperiam quam, nostrum possimus
            impedit fugiat vitae ratione pariatur consequatur at atque similique
            exercitationem nesciunt voluptates. Reiciendis illo dolor et nihil
            quidem, voluptatum recusandae, laborum voluptate eos quaerat quae
            pariatur dolorum inventore officiis consectetur, ipsam praesentium
            asperiores perferendis tenetur veritatis tempore iusto aliquid
            error! Mollitia eos quo quibusdam quae repellat culpa laudantium
            ipsa accusantium amet beatae magnam tempore nemo voluptatum
            molestiae veritatis autem officia natus expedita, harum modi quis,
            provident eius, cumque hic. Minima natus ut magnam nam praesentium
            eos dolores, consequatur distinctio est, rerum similique beatae
            ducimus accusantium iure sint unde omnis corporis iusto quaerat,
            deserunt facilis. Necessitatibus pariatur facere culpa maxime
            officia eius distinctio quasi atque deleniti quas autem natus magni
            vel quisquam molestias ullam alias quaerat nostrum laudantium,
            voluptates quibusdam. Beatae ipsum atque accusantium aliquid libero
            cum reiciendis tempore quo quisquam minima!
          </p>

          <hr className="bg-gray-500 w-[95%] m-auto h-1 border-none" />
        </div>
      </div>
    </main>
  );
};

export default posts;
