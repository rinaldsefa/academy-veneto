import Map from "@/components/map";
import Courses from "@/components/steps/content/courses";
import Cta from "@/components/ui/cta";
import Header from "@/components/ui/header";

import localFont from "next/font/local";
import Head from "next/head";

export const aileron = localFont({
  src: [
    {
      path: "../../styles/fonts/Aileron-UltraLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function Corsi() {
  return (
    <>
      <Head>
        <title>ITS Academy veneto - Alta formazione Post Diploma</title>
        <meta
          name="description"
          content="Scopri tutti i corsi professionali, specializzati dopo il Diplma e trova subito il lavoro dei tuoi sogni"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/common/4.png" />
      </Head>

      <div
        className={`bg-white overflow-hidden flex flex-col h-screen justify-end ${aileron.className}`}
      >
        <Header />

        <main className="flex flex-col flex-1 overflow-y-scroll justify-center items-center p-8">
          <Courses />
          <Cta
            text={"Fai il quiz"}
            classes="mt-8 bg-sky-500 max-w-xl"
            href="/test"
          />
        </main>
      </div>
    </>
  );
}
