const StaffSection = () => {
	return (
		<section className='w-screen'>
			<div className='mb-5 md:mb-12 ml-[10%]'>
				<h3 className='text-xs font-light text-gray-500 uppercase tracking-[.25em]'>Nhân viên</h3>
				<h2 className='text-2xl font-normal text-primary-500 leading-[3rem]'>
					Đội ngũ của chúng tôi
				</h2>
			</div>

			<div className='container'>
				<div className='!w-screen flex flex-wrap md:flex-row gap-[2vh] md:gap-0 justify-evenly px-[1vw]'>
					{/* Staff 1 */}
					<div className='text-center'>
						<div className='w-40 h-40 rounded-full bg-gray-300 mb-4 mx-auto'></div>
						<h4 className='text-lg font-semibold text-gray-900'>Lương Hoàng Anh</h4>
						<p className='text-sm text-gray-500'>Front-End Developer</p>
					</div>

					{/* Staff 2 */}
					<div className='text-center'>
						<div className='w-40 h-40 rounded-full bg-gray-300 mb-4 mx-auto'></div>
						<h4 className='text-lg font-semibold text-gray-900'>Nguyễn Hà Thanh Mai</h4>
						<p className='text-sm text-gray-500'>Front-End Developer</p>
					</div>

					{/* Staff 3 */}
					<div className='text-center'>
						<div className='w-40 h-40 rounded-full bg-gray-300 mb-4 mx-auto'></div>
						<h4 className='text-lg font-semibold text-gray-900'>Nguyễn Chiến Thắng</h4>
						<p className='text-sm text-gray-500'>Back-End Developer</p>
					</div>

					{/* Staff 4 */}
					<div className='text-center'>
						<div className='w-40 h-40 rounded-full bg-gray-300 mb-4 mx-auto'></div>
						<h4 className='text-lg font-semibold text-gray-900'>Nguyễn Thành Long</h4>
						<p className='text-sm text-gray-500'>Back-End Developer</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StaffSection;
