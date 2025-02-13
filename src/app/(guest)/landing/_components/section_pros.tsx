import Image from 'next/image';

const LandingPros = () => {
	return (
		<section className='w-screen h-fit min-h-[50vh] bg-primary-50 px-[10vw] py-[5vh] flex flex-col md:flex-row justify-between items-start gap-[2vh]'>
			<div className='w-full md:w-[20%] h-full flex flex-col justify-start items-center md:items-start gap-2'>
				<div className='w-fit h-fit p-3 mb-3 bg-white rounded-[50%] border-1 border-secondary-darker'>
					<Image
						src={'/images/icons/book-stack.png'}
						alt='book-stack'
						width={30}
						unoptimized={true}
						height={30}
					/>
				</div>
				<h2 className='w-full text-center md:text-left text-title-small-strong'>
					Tùy chỉnh chuyên sâu
				</h2>
				<p className='text-justify opacity-70'>
					Hỗ trợ đến hơn 30 ràng buộc của các đối tượng trong trường như giáo viên, phòng học, lớp
					học,...
				</p>
			</div>
			<div className='w-full md:w-[20%] h-full flex flex-col justify-start items-center md:items-start gap-2'>
				<div className='w-fit h-fit p-3 mb-3 bg-white rounded-[50%] border-1 border-secondary-darker overflow-hidden'>
					<Image
						className='-translate-y-[2px]'
						src={'/images/icons/school-landing.png'}
						alt='book-stack'
						width={30}
						unoptimized={true}
						height={30}
					/>
				</div>
				<h2 className='w-full text-center md:text-left text-title-small-strong'>
					Phản hồi nhanh chóng
				</h2>
				<p className='text-justify opacity-70'>
					Hệ thống tối ưu cùng những trải nghiệm mượt mà và thời gian xây dựng thời khỏa biểu được
					rút ngắn nhờ những thuật toán hiện đại.
				</p>
			</div>
			<div className='w-full md:w-[20%] h-full flex flex-col justify-start items-center md:items-start gap-2'>
				<div className='w-fit h-fit p-3 mb-3 bg-white rounded-[50%] border-1 border-secondary-darker'>
					<Image
						className='translate-y-[2px]'
						src={'/images/icons/handshake.png'}
						alt='book-stack'
						width={30}
						unoptimized={true}
						height={30}
					/>
				</div>
				<h2 className='w-full text-center md:text-left text-title-small-strong'>
					Giao diện thân thiện
				</h2>
				<p className='text-justify opacity-70'>
					Được thiết kế theo hướng hiện đại tối giản và phù hợp với nhiều nhóm người dùng khác nhau.
					Schedulify hứa hẹn sẽ mang đến trải nghiệm tốt nhất cho đối tác của mình.
				</p>
			</div>
			<div className='w-full md:w-[20%] h-full flex flex-col justify-start items-center md:items-start gap-2'>
				<div className='w-fit h-fit p-3 mb-3 bg-white rounded-[50%] border-1 border-secondary-darker'>
					<Image
						className='-translate-y-[2px]'
						src={'/images/icons/support.png'}
						alt='book-stack'
						width={30}
						unoptimized={true}
						height={30}
					/>
				</div>
				<h2 className='w-full text-center md:text-left text-title-small-strong'>Hỗ trợ tích cực</h2>
				<p className='text-justify opacity-70'>
					Đội ngũ phát triển Schedulify luôn sẵn lòng hỗ trợ, giải đáp thắc mắc, tích cực ghi nhận
					góp ý từ người dùng và xử lý yêu cầu nhanh chóng.
				</p>
			</div>
		</section>
	);
};

export default LandingPros;
