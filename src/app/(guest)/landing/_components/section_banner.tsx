'use client';

import { IconButton, Radio } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const LandingBanner = () => {
	const [currentSection, setCurrentSection] = useState(1);
	const switchSection = (nextSection: number) => {
		setCurrentSection(nextSection); // Update to the new section
	};
	return (
		<section
			id='banner'
			className='w-screen h-fit flex flex-col md:flex-row justify-between items-center gap-[5vh] px-[5vw] overflow-visible'
		>
			<div
				id='slogan'
				className='w-full md:w-[40%] lg:w-1/2 h-full flex flex-col pt-4 justify-start items-center lg:-translate-y-[50%]'
			>
				<h1 className='text-[1.9rem] md:text-[2rem] lg:text-[2.8vw] sm:text-[2rem] animate-fade-up animate-once'>
					Thời gian hài hòa
				</h1>
				<h1 className='text-[2.2rem] md:text-[2rem] lg:text-[3vw] font-bold text-primary-500 animate-fade-up animate-once animate-delay-500'>
					Tri thức vươn xa
				</h1>
			</div>

			<div
				id='scrollable'
				className='relative w-full md:w-[60%] lg:w-1/2 h-fit min-h-[45vh] flex flex-col gap-10 items-center justify-start overflow-visible'
			>
				<section
					className={`absolute w-[80%] inset-0 transition-all duration-500 ease-in-out transform 
							${currentSection === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
				>
					<h3 className='text-title-small-strong mb-3 animate-fade-up animate-once'>
						Quản lý Thời khóa biểu
					</h3>
					<ul className='list-disc pl-4 text-body-large font-normal opacity-80 flex flex-col gap-1 md:gap-2'>
						<li className='animate-fade-up animate-once animate-delay-500'>
							Khởi tạo TKB nhanh chóng.
						</li>
						<li className='animate-fade-up animate-once animate-delay-700'>
							Đồng bộ dữ liệu trên toàn hệ thống.
						</li>
						<li className='animate-fade-up animate-once animate-delay-1500'>
							Quản lý mọi nơi, dễ dàng, thuận tiện, nhanh gọn.
						</li>
						<li className='animate-fade-up animate-once animate-delay-1000'>
							Thông tin bảo mật đa lớp.
						</li>
					</ul>
					<Link
						href={'#'}
						className='w-[40vw] md:w-[50%] lg:w-[30%] truncate !mt-3 flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
					>
						Khám phá
						<svg
							className='w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-1 rotate-45'
							viewBox='0 0 16 19'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
								className='fill-gray-800 group-hover:fill-gray-800'
							></path>
						</svg>
					</Link>
				</section>
				<section
					className={`absolute w-[80%] inset-0 transition-all duration-500 ease-in-out transform 
							${currentSection === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
				>
					<h3 className='text-title-small-strong mb-3'>Quản lý lớp học</h3>
					<ul className='list-disc pl-4 text-body-large font-normal opacity-80 flex flex-col gap-2'>
						<li>Quản lý các lớp học linh động.</li>
						<li>Đồng bộ dữ liệu học sinh nhanh chóng trên toàn hệ thống.</li>
						<li>Quản lý mọi nơi, dễ dàng, thuận tiện, nhanh gọn.</li>
						<li>Bảo mật thông tin.</li>
					</ul>
					<Link
						href={'#'}
						className='w-[40vw] md:w-[50%] lg:w-[30%] min-w-[12vw] truncate !mt-3 flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
					>
						Khám phá
						<svg
							className='w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-1 rotate-45'
							viewBox='0 0 16 19'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
								className='fill-gray-800 group-hover:fill-gray-800'
							></path>
						</svg>
					</Link>
				</section>
				<section
					className={`absolute w-[80%] inset-0 transition-all duration-500 ease-in-out transform 
							${currentSection === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
				>
					<h3 className='text-title-small-strong mb-3'>Quản lý giáo viên</h3>
					<ul className='list-disc pl-4 text-body-large font-normal opacity-80 flex flex-col gap-2'>
						<li>Tùy biến lịch dạy giáo viên linh hoạt.</li>
						<li>Tối ưu lịch dạy cho giáo viên trong cả tuần.</li>
						<li>Quản lý mọi nơi, dễ dàng, thuận tiện, nhanh gọn.</li>
						<li>Bảo mật thông tin.</li>
					</ul>
					<Link
						href={'#'}
						className='w-[40vw] md:w-[50%] lg:w-[30%] min-w-[12vw] truncate !mt-3 flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
					>
						Khám phá
						<svg
							className='w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-1 rotate-45'
							viewBox='0 0 16 19'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
								className='fill-gray-800 group-hover:fill-gray-800'
							></path>
						</svg>
					</Link>
				</section>

				{/* Switch Section Buttons */}
				<div className='absolute right-0 flex flex-col items-center w-[20%] h-full py-[1%] overflow-visible'>
					{[1, 2, 3].map((item, index) => (
						<div key={'banner' + index} className='w-fit h-[50px] flex justify-center items-center'>
							<IconButton onClick={() => switchSection(item)}>
								<Radio
									sx={{
										'& .MuiSvgIcon-root': {
											fontSize: currentSection == item ? 35 : 20,
										},
									}}
									checked={currentSection == item}
								/>
							</IconButton>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default LandingBanner;
