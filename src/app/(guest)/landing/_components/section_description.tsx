import Image from 'next/image';
import Link from 'next/link';

const LandingDescription = () => {
	return (
		<section className='relative md:min-h-[500px] flex flex-row justify-end px-[10vw]'>
			<div className='w-fit h-fit bg-primary-400 absolute top-[5%] left-[10%] text-white px-[5vw] py-[2vh] md:py-[5vh] flex flex-col justify-start items-end'>
				<h1 className='text-[1.2rem] lg:text-[2.2vw] animate-fade-right animate-once'>
					Hệ thống sắp xếp
				</h1>
				<h1 className='text-[1.2rem] lg:text-[2.2vw] animate-fade-right animate-once animate-delay-[500ms]'>
					Thời khóa biểu tự động
				</h1>
			</div>
			<div className='hidden md:block absolute bottom-0 left-[15%] overflow-hidden w-[200px] h-[250px]'>
				<Image
					className='w-full h-full object-right-top aspect-auto -scale-x-100'
					src='/images/landing-schedule-decorator1.jpg'
					alt='dec'
					unoptimized={true}
					width={1000}
					height={500}
					loading='lazy'
				/>
			</div>
			<div className='hidden md:block absolute bottom-[10%] left-[30%] z-[-1] overflow-hidden w-[300px] h-[350px]'>
				<Image
					className='w-full h-full object-none object-right-top'
					src='/images/landing-schedule-decorator2.png'
					alt='dec'
					unoptimized={true}
					width={500}
					height={600}
					loading='lazy'
				/>
			</div>
			<div className='w-full md:w-[35vw] h-full md:min-h-[500px] pb-[5%] flex flex-col justify-between items-end gap-10'>
				<Image
					className='w-[40%] md:w-[60%] h-fit object-contain -z-10'
					src='/images/landing-decorator-1.png'
					alt='dec'
					width={500}
					height={200}
					loading='lazy'
				/>
				<div className='w-full h-fit md:pr-[20%] flex flex-col justify-between items-start gap-4'>
					<p className='text-body-large font-normal text-justify opacity-80'>
						Với tôn chỉ <span className='font-semibold'>“làm mới để làm khác”</span>, Schedulify tự
						tin sẽ mang tới những trải nghiệm đặc tốt nhất và duy nhất dành cho những Trường học sử
						dụng hệ thống của chúng tôi.
					</p>
					<Link
						href={'#'}
						className='flex justify-center gap-2 items-center border-b-2 border-primary-600 text-md bg-gray-50 lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
					>
						Tìm hiểu thêm
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
		</section>
	);
};

export default LandingDescription;
