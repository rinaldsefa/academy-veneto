import Course, { CourseProps } from "@/components/ui/course";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";

const Courses = () => {
	const textAnimation = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const balloonAnimation = {
		hidden: { opacity: 0, y: 80 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const courses: CourseProps[] = [
		{
			title: "moda",
			icon: "/assets/courses/14.png",
			href: "/corsi/moda",
			classes: "bg-purple-200",
		},
		{
			title: "turismo",
			icon: "/assets/courses/15.png",
			href: "/corsi/turismo",
			classes: "bg-cyan-300",
		},
		{
			title: "agroalimentare",
			icon: "/assets/courses/16.png",
			href: "/corsi/agroalimentare",
			classes: "bg-teal-800",
		},
		{
			title: "mobilità sostenibile",
			icon: "/assets/courses/17.png",
			href: "/corsi/mobilita-sostenibile",
			classes: "bg-sky-500",
		},
		{
			title: "efficienza energetica",
			icon: "/assets/courses/18.png",
			href: "/corsi/efficienza-energetica",
			classes: "bg-teal-400",
		},
		{
			title: "design e arredo",
			icon: "/assets/courses/19.png",
			href: "/corsi/design-e-arredo",
			classes: "bg-violet-500",
		},
		{
			title: "meccanica e meccatronica",
			icon: "/assets/courses/20.png",
			href: "/corsi/meccanica-e-meccatronica",
			classes: "bg-yellow-400",
		},
		{
			title: "servizi alle imprese",
			icon: "/assets/courses/21.png",
			href: "/corsi/servizi-alle-imprese",
			classes: "bg-orange-300",
		},
		{
			title: "information technologies",
			icon: "/assets/courses/22.png",
			href: "/corsi/information-technologies",
			classes: "bg-red-600",
		},
	];

	return (
		<>
			<motion.div variants={textAnimation}>
				<Text classes="md:text-2xl" text="Ma veniamo al succo" />
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text classes="md:text-2xl" text="Ecco le nostre specializzazioni!" />
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-primary font-black text-lg md:text-3xl"
					text="Seleziona la tua preferita"
				/>
			</motion.div>

			<div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center my-8 gap-12 md:gap-8 ">
				{courses.map((course, index) => (
					<motion.div variants={balloonAnimation} key={course.title}>
						<Course {...course} delay={index * 0.4} />
					</motion.div>
				))}
			</div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-indigo-500 font-black text-lg md:text-xl uppercase"
					text="novità"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="md:text-xl font-black "
					text="Non sai quale scegliere? Fai il nostro quiz! L'intelligenza
					Artificiale ti aiuterà in questa importante decisione."
				/>
			</motion.div>
		</>
	);
};

export default Courses;
