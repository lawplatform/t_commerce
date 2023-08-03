export const Header = () => {
	return (
		<div className="w-full h-20 border-b-[1px] border-b-gray-800 font-titleFont">
			<div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
				<div>
					<img className="w-10" src="/vite.svg" />
				</div>
				<div className='flex flex-row justify-between'>
					<ul className="flex items-center gap-8">
						<li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cusor-pointer duration-300">home</li>
						<li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cusor-pointer duration-300">shop</li>
					</ul>
					{/* react comment */}
					<div className='relative ml-5'>
						<img className='w-6' src="/icon/cart.png" alt="cartImg" />
						<span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
							0
						</span>
					</div>
					<div className='avatar ml-5'>
						<div className='w-10 rounded-full'>
							<img src="/temp/person.jpg" alt="user" />
						</div></div>
				</div>
			</div>
		</div>
	)
}

export default Header;
