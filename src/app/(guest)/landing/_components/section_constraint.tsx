import { IconButton, Radio } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LandingConstraints = () => {
	const [constraintSection, setConstraintSection] = useState(1);

	const switchConstraintSection = (nextSection: number) => {
		setConstraintSection(nextSection); // Update to the new section
	};

	return (
		<section className='hidden md:block relative w-screen h-fit min-h-[500px] my-[3vh] overflow-visible'>
			{/* Decorator */}
			<Image
				className='w-[10%] absolute bottom-0 left-0 h-fit object-contain'
				src='/images/landing-decorator-2.png'
				alt='dec'
				width={500}
				height={200}
				loading='lazy'
			/>

			{/* Section 1 - Teacher */}
			<section
				className={`absolute w-screen min-h-[500px] flex flex-row justify-end px-[10vw] inset-0 transition-all duration-500 ease-in-out transform 
							${constraintSection === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
			>
				{/* Title */}
				<div className='absolute w-fit h-full top-0 left-[15%] flex flex-col justify-start items-end'>
					<h1 className='text-[2.3vw] w-full text-left'>Ràng buộc cho</h1>
					<h1 className='text-[2.3vw] font-semibold text-primary-600'>
						<span className='text-tertiary-normal'>Giáo viên</span> trong trường học{' '}
					</h1>
					<ul className='text-title-small-strong text-left flex flex-col gap-3 my-7'>
						<li>Thời gian nghỉ (bận) của giáo viên</li>
						<li>Số tiết chờ dạy (tiết trống) tối đa</li>
						<li>Số tiết nghỉ giữa hai buổi sáng chiều</li>
						<li>Số ngày dạy</li>
						<li className='text-center'>. . .</li>
					</ul>
					<div className='w-fit h-fit flex flex-row justify-start gap-1 border-b-2 border-primary-500'>
						<Link
							href={'#'}
							className='flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
						>
							Xem tất cả
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
					</div>
				</div>

				{/* Image */}
				<div className='overflow-hidden w-[300px] h-[375px] absolute top-0 right-[25%] z-[-1]'>
					<Image
						className='w-full h-full object-cover object-right'
						src='/images/landing-teacher.png'
						alt='dec'
						width={800}
						height={600}
						loading='lazy'
					/>
				</div>

				{/* Description */}
				<div className='w-fit h-fit max-w-[20%] bg-primary-400 absolute bottom-0 right-[10%] text-white px-[3vw] py-[4vh] flex flex-col justify-start items-end'>
					<p className='text-body-large font-normal text-justify opacity-90'>
						Giáo viên là một trong những nhân tố quan trọng nhất ảnh hưởng đến chất lượng giảng dạy.
						Vậy nên chúng tôi đặc biệt quan tâm
					</p>
				</div>

				{/* Switch Section Buttons */}
			</section>

			{/* Section 2 - Subject */}
			<section
				className={`absolute w-screen min-h-[500px] flex flex-row justify-end px-[10vw] inset-0 transition-all duration-500 ease-in-out transform 
							${constraintSection === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
			>
				{/* Title */}
				<div className='absolute w-fit h-full top-0 left-[15%] flex flex-col justify-start items-end'>
					<h1 className='text-[2.3vw] w-full text-left'>Ràng buộc cho</h1>
					<h1 className='text-[2.3vw] font-semibold text-primary-600'>
						<span className='text-tertiary-normal'>Môn học</span> trong trường học{' '}
					</h1>
					<ul className='text-title-small-strong text-left flex flex-col gap-3 my-7'>
						<li>Thời gian nghỉ (bận) của giáo viên</li>
						<li>Số tiết chờ dạy (tiết trống) tối đa</li>
						<li>Số tiết nghỉ giữa hai buổi sáng chiều</li>
						<li>Số ngày dạy</li>
						<li className='text-center'>. . .</li>
					</ul>
					<div className='w-fit h-fit flex flex-row justify-start gap-1 border-b-2 border-primary-500'>
						<Link
							href={'#'}
							className='flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
						>
							Xem tất cả
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
					</div>
				</div>

				{/* Image */}
				<div className='overflow-hidden w-[300px] h-[375px] absolute top-0 right-[25%] z-[-1]'>
					<Image
						className='w-full h-full object-cover object-right'
						src='/images/landing-teacher.png'
						alt='dec'
						width={800}
						height={600}
						loading='lazy'
					/>
				</div>

				{/* Description */}
				<div className='w-fit h-fit max-w-[20%] bg-primary-400 absolute bottom-0 right-[10%] text-white px-[3vw] py-[4vh] flex flex-col justify-start items-end'>
					<p className='text-body-large font-normal text-justify opacity-90'>
						Giáo viên là một trong những nhân tố quan trọng nhất ảnh hưởng đến chất lượng giảng dạy.
						Vậy nên chúng tôi đặc biệt quan tâm
					</p>
				</div>

				{/* Switch Section Buttons */}
			</section>

			{/* Section 3 - Room */}
			<section
				className={`absolute w-screen min-h-[500px] flex flex-row justify-end px-[10vw] inset-0 transition-all duration-500 ease-in-out transform 
							${constraintSection === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
			>
				{/* Title */}
				<div className='absolute w-fit h-full top-0 left-[15%] flex flex-col justify-start items-end'>
					<h1 className='text-[2.3vw] w-full text-left'>Ràng buộc cho</h1>
					<h1 className='text-[2.3vw] font-semibold text-primary-600'>
						<span className='text-tertiary-normal'>Phòng học</span> trong trường học{' '}
					</h1>
					<ul className='text-title-small-strong text-left flex flex-col gap-3 my-7'>
						<li>Thời gian nghỉ (bận) của giáo viên</li>
						<li>Số tiết chờ dạy (tiết trống) tối đa</li>
						<li>Số tiết nghỉ giữa hai buổi sáng chiều</li>
						<li>Số ngày dạy</li>
						<li className='text-center'>. . .</li>
					</ul>
					<div className='w-fit h-fit flex flex-row justify-start gap-1 border-b-2 border-primary-500'>
						<Link
							href={'#'}
							className='flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
						>
							Xem tất cả
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
					</div>
				</div>

				{/* Image */}
				<div className='overflow-hidden w-[300px] h-[375px] absolute top-0 right-[25%] z-[-1]'>
					<Image
						className='w-full h-full object-cover object-right'
						src='/images/landing-teacher.png'
						alt='dec'
						unoptimized={true}
						width={800}
						height={600}
						loading='lazy'
					/>
				</div>

				{/* Description */}
				<div className='w-fit h-fit max-w-[20%] bg-primary-400 absolute bottom-0 right-[10%] text-white px-[3vw] py-[4vh] flex flex-col justify-start items-end'>
					<p className='text-body-large font-normal text-justify opacity-90'>
						Giáo viên là một trong những nhân tố quan trọng nhất ảnh hưởng đến chất lượng giảng dạy.
						Vậy nên chúng tôi đặc biệt quan tâm
					</p>
				</div>

				{/* Switch Section Buttons */}
			</section>

			{/* Section 4 - Curriculumn */}
			<section
				className={`absolute w-screen min-h-[500px] flex flex-row justify-end px-[10vw] inset-0 transition-all duration-500 ease-in-out transform 
							${constraintSection === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
			>
				{/* Title */}
				<div className='absolute w-fit h-full top-0 left-[15%] flex flex-col justify-start items-end'>
					<h1 className='text-[2.3vw] w-full text-left'>Ràng buộc cho</h1>
					<h1 className='text-[2.3vw] font-semibold text-primary-600'>
						<span className='text-tertiary-normal'>Khung chương trình</span> BGD
					</h1>
					<ul className='text-title-small-strong text-left flex flex-col gap-3 my-7'>
						<li>Thời gian nghỉ (bận) của giáo viên</li>
						<li>Số tiết chờ dạy (tiết trống) tối đa</li>
						<li>Số tiết nghỉ giữa hai buổi sáng chiều</li>
						<li>Số ngày dạy</li>
						<li className='text-center'>. . .</li>
					</ul>
					<div className='w-fit h-fit flex flex-row justify-start gap-1 border-b-2 border-primary-500'>
						<Link
							href={'#'}
							className='flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
						>
							Xem tất cả
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
					</div>
				</div>

				{/* Image */}
				<div className='overflow-hidden w-[300px] h-[375px] absolute top-0 right-[25%] z-[-1]'>
					<Image
						className='w-full h-full object-cover object-right'
						src='/images/landing-teacher.png'
						alt='dec'
						unoptimized={true}
						width={800}
						height={600}
						loading='lazy'
					/>
				</div>

				{/* Description */}
				<div className='w-fit h-fit max-w-[20%] bg-primary-400 absolute bottom-0 right-[10%] text-white px-[3vw] py-[4vh] flex flex-col justify-start items-end'>
					<p className='text-body-large font-normal text-justify opacity-90'>
						Giáo viên là một trong những nhân tố quan trọng nhất ảnh hưởng đến chất lượng giảng dạy.
						Vậy nên chúng tôi đặc biệt quan tâm
					</p>
				</div>

				{/* Switch Section Buttons */}
			</section>

			{/* Section 5 - Timetable */}
			<section
				className={`absolute w-screen min-h-[500px] flex flex-row justify-end px-[10vw] inset-0 transition-all duration-500 ease-in-out transform 
							${constraintSection === 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 z-[-1]'}`}
			>
				{/* Title */}
				<div className='absolute w-fit h-full top-0 left-[15%] flex flex-col justify-start items-end'>
					<h1 className='text-[2.3vw] w-full text-left'>Ràng buộc cho</h1>
					<h1 className='text-[2.3vw] font-semibold text-primary-600'>
						<span className='text-tertiary-normal'>Thời khóa biểu</span> trường học{' '}
					</h1>
					<ul className='text-title-small-strong text-left flex flex-col gap-3 my-7'>
						<li>Thời gian nghỉ (bận) của giáo viên</li>
						<li>Số tiết chờ dạy (tiết trống) tối đa</li>
						<li>Số tiết nghỉ giữa hai buổi sáng chiều</li>
						<li>Số ngày dạy</li>
						<li className='text-center'>. . .</li>
					</ul>
					<div className='w-fit h-fit flex flex-row justify-start gap-1 border-b-2 border-primary-500'>
						<Link
							href={'#'}
							className='flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
						>
							Xem tất cả
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
					</div>
				</div>

				{/* Image */}
				<div className='overflow-hidden w-[300px] h-[375px] absolute top-0 right-[25%] z-[-1]'>
					<Image
						className='w-full h-full object-cover object-right'
						src='/images/landing-teacher.png'
						alt='dec'
						width={800}
						height={600}
						loading='lazy'
					/>
				</div>

				{/* Description */}
				<div className='w-fit h-fit max-w-[20%] bg-primary-400 absolute bottom-0 right-[10%] text-white px-[3vw] py-[4vh] flex flex-col justify-start items-end'>
					<p className='text-body-large font-normal text-justify opacity-90'>
						Giáo viên là một trong những nhân tố quan trọng nhất ảnh hưởng đến chất lượng giảng dạy.
						Vậy nên chúng tôi đặc biệt quan tâm
					</p>
				</div>

				{/* Switch Section Buttons */}
			</section>

			{/* Section switcher */}
			<div className='absolute right-0 top-0 -translate-y-5 flex flex-col items-center w-[20%] h-full py-[1%] overflow-visible'>
				{[1, 2, 3, 4, 5].map((item, index) => (
					<div key={index} className='w-fit h-[30px] flex justify-center items-center'>
						<IconButton onClick={() => switchConstraintSection(item)}>
							<Radio
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: constraintSection == item ? 25 : 15,
									},
								}}
								checked={constraintSection == item}
							/>
						</IconButton>
					</div>
				))}
			</div>
		</section>
	);
};

export default LandingConstraints;
