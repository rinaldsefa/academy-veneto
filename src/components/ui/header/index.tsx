import Image from "next/image";
import Link from "next/link";
import Socials from "../socials";

const Header = ({ hideLogo = false }) => {
	return (
		<div className="flex flex-col justify-center item px-4 py-4 md:py-8 md:px-16 shadow-sm">
			<nav className="flex w-full flex-row-reverse justify-between items-center">
				<div className="flex md:flex-col">
					<ul className="hidden md:flex text-gray-500 uppercase font-semibold text-xs">
						<li className="border-r-2 px-2 border-gray-500">
							<Link href="/">Chi siamo</Link>
						</li>

						<li className="px-2">
							<Link href="/">I corsi</Link>
						</li>
					</ul>

					<Socials />
				</div>
				<Image
					alt="logo"
					width={140}
					height={40}
					className="hidden md:block"
					src="/assets/common/logo.png"
				/>
				<Image
					alt="logo"
					width={120}
					height={40}
					className="block md:hidden"
					src="/assets/common/1-mobile.png"
				/>
			</nav>

			<ul className="md:hidden flex justify-center gap-2 items-center text-gray-500 uppercase font-semibold text-xs mt-2 tracking-widest">
				<li className="">
					<Link href="/">Chi siamo</Link>
				</li>

				<li className="px-2">
					<Link href="/">I corsi</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
