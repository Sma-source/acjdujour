import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LogIn from "@/components/navbar/LogIn";
import { FeaturesSectionDemo } from "@/components/ui/features-section";
import { HeartCrack } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import AvatarCircles from "@/components/ui/AvatarCircles";

const avatarUrls = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

export default function Homeland() {
  return (
    <div className="mx-auto flex-1">
      <section className="my-16 md:my-24  mx-auto max-w-screen-xl h-full  md:h-[65vh] 2xl:h-[50vh] md:pt-4 pb-4 px-4 sm:px-8">
        <div className="text-center space-y-5">
          <h1 className="font-bold text-3xl md:text-6xl">
            Explorez, Apprenez, Partagez...
            <br></br>
            <span className="text-primary"> Apprendre Chaque Jour</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            Rejoignez ACJ pour enrichir votre savoir et inspirer les autres avec
            des connaissances fascinantes.
          </p>
        </div>

        <div className="flex flex-col  justify-center mt-10 mb-10 items-center gap-x-4 text-yellow-500 text-sm">
          <div className="flex flex-col sm:flex-row mb-2 lg:justify-start justify-center items-center">
            <div className="flex flex-row items-center mb-4 sm:mb-0">
              <AvatarCircles numPeople={200} avatarUrls={avatarUrls} />
            </div>
            <div className="flex justify-center ml-4">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
            </div>
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-sm ml-8 relative z-40 lg:text-left text-center">
            <span className="text-primary">5.0</span> par 200 utilisateurs
          </p>
        </div>
        <div className="flex items-center gap-4 justify-center my-10 relative z-10">
          <LogIn
            className="bg-primary text-md text-white text-center rounded-md shadow-md  sm:w-auto"
            title="Commencez à apprendre gratuitement"
          />
        </div>
      </section>

      <FeaturesSectionDemo />

      <Testimonials />
      <section
        className="py-28"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(234, 88, 12, 0.2) 4.54%, rgba(234, 88, 12, 0.17) 34.2%, rgba(234, 88, 12, 0.1) 77.55%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl space-y-3 mx-auto">
            <h3 className="text-primary font-semibold">
              <HeartCrack className="text-center h-24 w-24 mx-auto" />
            </h3>
            <p className="text-gray-800 dark:text-gray-100 text-3xl font-semibold sm:text-4xl">
              Arrêtez de Perdre Votre Temps!
            </p>
            <p className="text-gray-600 dark:text-gray-200">
              Profitez de chaque moment pour découvrir quelque chose de nouveau.
            </p>
          </div>
          <div className="mt-4">
            <a
              href="/"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 dark:bg-primary duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              Apprenez maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
