import Head from "next/head";
import Steps from "@/components/steps";
import Header from "@/components/ui/header";
import StepNavigation from "@/components/steps/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Courses() {
	return (
		<>
			<Head>
				<title>Accademy Veneto - Corsi professionali</title>
				<meta
					name="description"
					content="Scopri tutti i corsi professionali, specializzati dopo il Diplma e trova subito il lavoro dei tuoi sogni"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/common/4.png" />
			</Head>

			<div
				className={`bg-white overflow-hidden flex flex-col h-screen justify-end ${inter.className}`}
			>
				<Header />

				<main className="flex flex-col flex-1 overflow-y-scroll">
					<Steps />
				</main>

				<StepNavigation />
			</div>
		</>
	);
}