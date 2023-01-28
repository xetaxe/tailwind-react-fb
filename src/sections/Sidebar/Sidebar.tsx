const Sidebar = () => {
	return(
		<div className="text-center bg-fb-white w-[3.75rem] h-screen sticky -z-10 shadow-sm pt-4 pb-2">
			<div className="flex flex-col justify-start items-center min-h-full">
				<div>sjs</div>
				<div className="flex justify-center relative flex-grow-0 shrink-0">
					<img src="/src/assets/img-small/person.jpg" alt="Person's profile" className="rounded-full w-6 aspect-square"/>
				</div>
				<hr className="" />
				<div className="bg-fbLinks h-6 bg-bottom aspect-square bg-no-repeat"></div>
				<div className="bg-fbLinks h-6 bg-[center_-3.2rem] aspect-square bg-no-repeat"></div>
				<div className="bg-fbLinks h-6 aspect-square bg-no-repeat"></div>
			</div>
			
		</div>
	)
}

export default Sidebar;