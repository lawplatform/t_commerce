import {
	FaCoffee,
	FaGithub, FaInstagram
} from "react-icons/fa";
const Footer = () => {
	return (<div className="bg-black text-[#949494] py-20 font-titleFont">Footer
		<div className="max-w-screen-xl mx-auto grid grid-cols-4">
			<div className="flex flex-col gap-7">
				<img src="/vite.svg" alt="logoLight" className="w-5" />
				<p className="text-white text-sm tracking-wide">arst@emai.com</p>
				<img src="/temp/persorn" className="w-10" alt="payment logo" />
				<div className="flex gap-5 text-lg text-gray-400">
					<FaGithub className="hover:text-white duration-300 cursor-pointer" />
					<FaInstagram className="hover:text-white duration-300 cursor-pointer" />
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-semibold text-white mb-4">find us</h2>
				<div className="text-base flex flex-col gap-2">
					<p>south korea</p>
					<p>illsan</p>
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-semibold text-white mb-4"> accounts</h2>
				<div className="flex flex-col gap-2 text-base">


					<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span className="text-lg"><FaCoffee /></span>account</p>
					<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span className="text-lg"><FaCoffee /></span>checkout</p>
					<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span className="text-lg"><FaCoffee /></span>order</p>
					<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span className="text-lg"><FaCoffee /></span>Q&A</p>
				</div>
			</div>

			<div className="flex flex-col justify-center">
				<input type="text" placeholder="email" className="bg-transparent border px-4 py-2 text-sm" />
				<button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black"> subscribe</button>
			</div>

		</div>
	</div>)

}

export default Footer;
