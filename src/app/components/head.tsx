"use client";
import img from "@/app/img/coh.jpeg";
import pru from "@/app/img/villain 3.jpg";
import Image from "next/image";
import shrey from "@/app/img/image.png";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo() {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="text-[2rem] md:text-[3rem] mt-20 flex space-x-2">
        Our <div className="text-blue-700">Leads</div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {/* Card 1 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              HEAD
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Sheryash Patil
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={shrey}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                LinkedIn →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 2 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
             CO-HEAD
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Mahesh Patil
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={img}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                LinkedIn →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 3 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              DEPT-CO (CSE)
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              MAITHILI GHATGE
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={pru}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                LinkedIn →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 4 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            DEPT-CO (DS)
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              SIMEEN PATHAN
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={pru}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                LinkedIn →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 5 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            DEPT-CO (AIML)
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
             SHUBHAM BABANVAR
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={pru}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                LinkedIn →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
