'use client';

import ContainedButton from '@/commons/button-contained';
import { TextField } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import './_styles/landing_styles.scss';

const LandingHero = dynamic(() => import('./_components/secion_hero'));
const LandingConstraints = dynamic(() => import('./_components/section_constraint'));
const LandingDescription = dynamic(() => import('./_components/section_description'));
const LandingPros = dynamic(() => import('./_components/section_pros'));
const LandingSchools = dynamic(() => import('./_components/section_schools'));
const LandingWCU = dynamic(() => import('./_components/section_wcu'));
const LandingBanner = dynamic(() => import('./_components/section_banner'));

export default function Home(): JSX.Element {
	const handleGotoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className='h-fit w-screen flex flex-col gap-5 pt-[5vh]'>
			{/* Banner section */}
			<LandingBanner />

			{/* Hero image */}
			<LandingHero />

			{/* Description section */}
			<LandingDescription />

			{/* Pros section */}
			<LandingPros />

			{/* Constraint section */}
			<LandingConstraints />

			{/* why-choose-us section */}
			<LandingWCU />

			{/* Schools section */}
			<LandingSchools />

			{/* Register section */}
			<section className='w-[80vw] h-fit max-h-[450px] bg-primary-400 mx-[10vw] mt-[3vh] flex flex-row justify-between items-center px-[4vw] py-[5vh]'>
				<div className='w-[50%] flex flex-col justify-start items-start gap-8'>
					<h1 className='text-title-xl text-white'>
						Quý thầy cô muốn sử dụng nền tảng của chúng tôi?
					</h1>
					<h4 className='text-white text-title-small font-light opacity-80'>
						Hãy đăng ký ngay để nhận những ưu đãi bất ngờ từ{' '}
						<strong className='font-semibold'>Schedulify</strong>
					</h4>
					<Link className='register-btn' href='/register'>
						<span className='top-key'></span>
						<span className='text'>ĐĂNG KÝ</span>
						<span className='bottom-key-1'></span>
						<span className='bottom-key-2'></span>
					</Link>
				</div>
				<Image
					className='w-[45%] h-full object-contain'
					src='/images/landing-decorator-3.png'
					alt='dec'
					width={350}
					height={300}
					loading='lazy'
				/>
			</section>

			<section className='w-screen h-fit flex justify-end items-baseline px-[10vw]'>
				<button className='btt-btn' onClick={handleGotoTop}>
					<div className='text'>
						<span>Về</span>
						<span>đầu</span>
						<span>trang</span>
					</div>
					<div className='clone'>
						<span>Về</span>
						<span>đầu</span>
						<span>trang</span>
					</div>
					<svg
						stroke-width='2'
						stroke='currentColor'
						viewBox='0 0 24 24'
						fill='none'
						className='h-6 w-6'
						xmlns='http://www.w3.org/2000/svg'
						width='20px'
					>
						<path
							d='M14 5l7 7m0 0l-7 7m7-7H3'
							stroke-linejoin='round'
							stroke-linecap='round'
						></path>
					</svg>
				</button>
			</section>

			{/* Contact infor section */}
			<section className='w-screen h-fit bg-primary-50 px-[10vw] py-[4vh] flex flex-row justify-between items-center'>
				<div className='w-1/3 h-full flex flex-col justify-between items-start'>
					<h1 className='text-title-medium-strong'>Đăng ký để nhận</h1>
					<h1 className='text-title-medium-strong'>Những thông tin mới nhất</h1>
				</div>
				<div className='w-full h-full flex flex-row justify-start items-center gap-2'>
					<TextField
						className='w-[100%]'
						label='Nhập email của thầy cô'
						variant='filled'
						color='success'
						sx={{ backgroundColor: 'white !important' }}
					/>
					<ContainedButton
						title='Đăng ký'
						disableRipple
						styles='w-[15%] py-[12px] bg-primary-400 text-white'
						textStyles='text-title-small font-normal tracking-wider normal-case'
					/>
				</div>
			</section>
		</div>
	);
}
