import Image from 'next/image';

const LandingHero = () => {
	return (
		<section className='w-screen h-fit flex flex-col justify-center items-center'>
			<Image
				className='w-screen h-[300px] lg:h-[400px] object-cover object-center animate-fade animate-once'
				src='/images/landing-banner.webp'
				alt='hero'
				unoptimized={true}
				width={1000}
				height={350}
				loading='eager'
			/>
			{/* <div className='w-full h-[300px] bg-tertiary-normal py-[3vh] px-[10vw] flex flex-row justify-between items-center'>
				<div className='w-[30%]'></div>
			</div> */}
		</section>
	);
};

export default LandingHero;
