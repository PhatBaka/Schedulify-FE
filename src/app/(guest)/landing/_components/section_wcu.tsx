import Image from 'next/image';

const LandingWCU = () => {
	return (
		<section className='w-screen h-fit md:h-[600px] bg-primary-600 py-[5vh] px-[10vw]'>
			<h1 className='w-full h-[15%] text-center text-[1.5rem] md:text-[2.5vw] pb-[2vh] text-white font-semibold tracking-wider'>
				Lý do chọn Schedulify
			</h1>
			<div className='w-full h-[85%] flex flex-col md:flex-wrap justify-between items-center gap-[2vh] md:gap-0'>
				<div className='w-full md:w-[27%] h-[35%] flex flex-col justify-start items-center gap-5'>
					<div className='w-[65px] h-[65px] bg-primary-300 rounded-md flex justify-center items-center'>
						<Image
							src={'/images/icons/landing-schedule.png'}
							alt='book-stack'
							unoptimized={true}
							width={40}
							height={40}
						/>
					</div>
					<p className='text-center text-white text-body-large'>
						Chương trình học thiết kế toàn diện cho cả học sinh, giáo viên và nhà trường
					</p>
				</div>
				<div className='w-full md:w-[27%] h-[35%] flex flex-col justify-start items-center gap-5'>
					<div className='w-[65px] h-[65px] bg-primary-300 rounded-md flex justify-center items-center'>
						<Image
							src={'/images/icons/hand-in-hand.png'}
							alt='book-stack'
							width={41}
							unoptimized={true}
							height={41}
						/>
					</div>
					<p className='text-center text-white text-body-large'>
						Trải nghiệm mượt mà và hệ thống hiện đại cùng giao diện thân thiện với mọi độ tuổi
					</p>
				</div>
				<div className='w-full md:w-[27%] h-[35%] flex flex-col justify-start items-center gap-5'>
					<div className='w-[65px] h-[65px] bg-primary-300 rounded-md flex justify-center items-center'>
						<Image
							src={'/images/icons/transformation.png'}
							alt='book-stack'
							width={45}
							unoptimized={true}
							height={45}
						/>
					</div>
					<p className='text-center text-white text-body-large'>
						Cung cấp kết quả nhanh chóng và toàn diện nhờ vào công nghệ học tập thông minh
					</p>
				</div>
				<div className='w-full md:w-[27%] h-[35%] flex flex-col justify-start items-center gap-5'>
					<div className='w-[65px] h-[65px] bg-primary-300 rounded-md flex justify-center items-center'>
						<Image
							src={'/images/icons/balance.png'}
							alt='book-stack'
							width={40}
							unoptimized={true}
							height={40}
						/>
					</div>
					<p className='text-center text-white text-body-large'>
						Giảm bớt gánh nặng quản lý, tự động sắp xếp lịch phù hợp với nhu cầu của từng trường
					</p>
				</div>
				<div className='w-full md:w-[27%] h-[35%] flex flex-col justify-start items-center gap-5'>
					<div className='w-[65px] h-[65px] bg-primary-300 rounded-md flex justify-center items-center'>
						<Image
							src={'/images/icons/landing-setting.png'}
							alt='book-stack'
							width={45}
							unoptimized={true}
							height={45}
						/>
					</div>
					<p className='text-center text-white text-body-large'>
						Đảm bảo sự phân bố công bằng và hợp lý giữa giáo viên, tiết kiệm công sức và thời gian
					</p>
				</div>
				<div className='w-full md:w-[27%] h-[35%] flex flex-col justify-start items-center gap-5'>
					<div className='w-[65px] h-[65px] bg-primary-300 rounded-md flex justify-center items-center'>
						<Image
							src={'/images/icons/combine.png'}
							alt='book-stack'
							width={40}
							unoptimized={true}
							height={40}
						/>
					</div>
					<p className='text-center text-white text-body-large'>
						Tích hợp với các hệ thống hiện có và điều chỉnh theo yêu cầu cụ thể của từng trường
					</p>
				</div>
			</div>
		</section>
	);
};

export default LandingWCU;
