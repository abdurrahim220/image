import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImage } from "@/lib/actions/image.actions";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImage({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Ai Image Filter
        </h1>

        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              href={link.route}
              key={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-col flex-center gap-2 w-fit rounded-full bg-white p-4">
                <Image src={link.icon} height={24} width={24} alt="" />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <div className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </div>
    </>
  );
};

export default Home;
