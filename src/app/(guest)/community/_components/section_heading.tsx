import Image from 'next/image';

const LandingSection = () => {
	return (
		<section className='w-screen h-[200px] flex items-center bg-primary-50 relative'>
			<div className='relative z-10 w-[80vw] sm:w-[40%] lg:w-[20%] bg-primary-600 text-white px-6 py-4 ml-[10%] mt-[200px] '>
				<p className='text-sm tracking-wider'>Kết nối</p>
				<h2 className='text-2xl font-semibold leading-loose'>Cộng đồng Schedulify</h2>
			</div>
		</section>
	);
};
export default LandingSection;
