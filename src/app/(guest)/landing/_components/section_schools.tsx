'use client';

import { IconButton, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ISchool } from '../../_utils/constants';
import useCallAPI from './../_hooks/useCallAPI';

const LandingSchools = () => {
	const { data, isLoading, error } = useCallAPI();
	const [schoolData, setSchoolData] = useState<ISchool[]>([]);

	useEffect(() => {
		setSchoolData(data?.result?.items);
	}, [data]);
	return (
		<section className='w-screen h-[420px] relative '>
			<Image
				className='w-[12%] absolute bottom-0 left-[2vw] object-contain'
				src='/images/landing-decorator-4.png'
				alt='dec'
				width={250}
				height={250}
				loading='lazy'
			/>
			<div className='mx-[10vw] h-full md:py-[3vh] flex flex-col md:flex-row justify-between items-center'>
				<div className='w-full md:w-[30%] h-full py-[5vh] flex flex-col justify-start items-start'>
					<h4 className='text-[2rem] md:text-title-small font-semibold opacity-70 mb-[1vh] md:mb-[5vh]'>
						Đối tác của chúng tôi
					</h4>
					<h1 className='text-[1.7rem] md:text-title-1.5xl'>Những trường học</h1>
					<h1 className='text-[1.7rem] md:text-title-1.5xl'>Đang sử dụng</h1>
				</div>
				<div className='w-full md:w-[70%] h-full flex flex-row justify-start items-start'>
					<div className='w-[95%] h-full flex flex-row justify-start items-start gap-5 overflow-hidden'>
						{schoolData?.length ? (
							<>
								{schoolData.map((item, index) => (
									<div key={index} className='w-[30%] h-full bg-primary-50'>
										{isLoading ? (
											<Skeleton
												className='!w-full h-[60%]'
												variant='rectangular'
												animation='wave'
												width={1000}
												height={400}
											/>
										) : (
											<Image
												className='w-full h-[75%] object-cover object-center'
												src='/images/school-example-demo.jpg'
												alt='hero'
												width={1000}
												height={400}
												loading='eager'
											/>
										)}
										<div className='w-full h-[25%] px-[5%] flex flex-col justify-center'>
											<h4 className='text-body-medium-strong font-semibold opacity-80'>
												{`${new Date(item['update-date']).getFullYear()}`}
											</h4>
											<h1 className='text-title-small-strong'>{item.name}</h1>
										</div>
									</div>
								))}
							</>
						) : (
							<>
								<div className='w-[30%] h-full bg-primary-50'>
									{isLoading ? (
										<Skeleton
											className='!w-full h-[75%]'
											variant='rectangular'
											animation='wave'
											width={1000}
											height={400}
										/>
									) : (
										<Image
											className='w-full h-[75%] object-cover object-center'
											src='/images/school-example-1.jpg'
											alt='hero'
											width={1000}
											height={400}
											loading='eager'
										/>
									)}
									<div className='w-full h-[25%] px-[5%] flex flex-col justify-center'>
										<h4 className='text-body-medium-strong font-semibold opacity-80'>2020</h4>
										<h1 className='text-title-small-strong'>Trường THPT chuyên Hà Nội-Amsterdam</h1>
									</div>
								</div>
								<div className='w-[30%] h-full bg-primary-50'>
									{isLoading ? (
										<Skeleton
											className='!w-full h-[75%]'
											variant='rectangular'
											animation='wave'
											width={1000}
											height={400}
										/>
									) : (
										<Image
											className='w-full h-[75%] object-cover object-center'
											src='/images/school-example-2.webp'
											alt='hero'
											unoptimized={true}
											width={1000}
											height={400}
											loading='eager'
										/>
									)}
									<div className='w-full h-[25%] px-[5%] flex flex-col justify-center'>
										<h4 className='text-body-medium-strong font-semibold opacity-80'>2010</h4>
										<h1 className='text-title-small-strong'>Trường THPT Chuyên Lê Hồng Phong</h1>
									</div>
								</div>
								<div className='w-[30%] h-full bg-primary-50'>
									{isLoading ? (
										<Skeleton
											className='!w-full h-[75%]'
											variant='rectangular'
											animation='wave'
											width={1000}
											height={400}
										/>
									) : (
										<Image
											className='w-full h-[75%] object-cover object-center'
											src='/images/school-example-3.jpg'
											alt='hero'
											unoptimized={true}
											width={1000}
											height={400}
											loading='eager'
										/>
									)}
									<div className='w-full h-[25%] px-[5%] flex flex-col justify-center'>
										<h4 className='text-body-medium-strong font-semibold opacity-80'>2010</h4>
										<h1 className='text-title-small-strong'>Trường THPT Chuyên Nguyễn Du</h1>
									</div>
								</div>
							</>
						)}
					</div>
					<div className='w-[5%] h-full flex flex-col justify-between items-center'>
						<h3 className='text-vertical rotate-180 text-title-small'>
							TẤT CẢ ĐỐI TÁC CỦA CHÚNG TÔI
						</h3>
						<div className='w-fit h-fit overflow-visible rounded-[50%] border-1 border-primary-900'>
							<IconButton>
								<Image
									className='aspect-square object-contain'
									src={'/images/icons/right-up.png'}
									alt='arrow'
									width={15}
									height={15}
								/>
							</IconButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingSchools;
