'use client';

import { Button, Typography } from '@mui/material';

export default function Home() {
	return (
		<div className='w-full h-fit bg-white flex flex-col items-center'>
			{/* Hero Section */}
			<section
				className='w-full h-[30vh] flex flex-col justify-center items-center bg-cover bg-center'
				style={{ backgroundImage: "url('/path-to-image.jpg')" }}
			>
				<h2 className='text-[8vw] md:text-[2vw] font-bold text-primary-400'>
					Thời khóa biểu linh hoạt
				</h2>
				<p className='text-[5vw] md:text-xl text-gray-600 mt-2'>
					Học tập hiệu quả - Quản lý dễ dàng
				</p>
				<Button
					sx={{
						width: { xs: '80vw', sm: 'fit-content' },
						bgcolor: '#004e89',
						color: 'white',
						borderRadius: 0,
						mt: 3,
						py: { md: 1 },
						px: { md: 5 },
					}}
				>
					<Typography sx={{ fontSize: { ':default': '5vw', md: 20 } }}>Khám phá ngay</Typography>
				</Button>
			</section>

			{/* Features */}
			<section className='w-full px-[5vw] py-12 bg-gray-100'>
				<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='h-full flex flex-col justify-center items-start pb-6'>
						<h3 className='text-title-1.5xl font-semibold mb-4 text-primary-300'>
							Tính năng nổi bật
						</h3>
						<ul className='list-disc list-inside text-gray-700 text-title-medium md:text-title-large'>
							<li className='py-1'>Tạo thời khóa biểu tự động và nhanh chóng</li>
							<li className='py-1'>Dễ dàng tùy chỉnh và quản lý</li>
							<li className='py-1'>Đồng bộ hóa dữ liệu đa nền tảng</li>
							<li className='py-1'>Bảo mật và đáng tin cậy</li>
						</ul>
					</div>
					<div>
						<img
							src='/images/schedulify-demo.png'
							alt='Feature Illustration'
							className='w-full h-auto rounded shadow-md'
						/>
					</div>
				</div>
			</section>

			<section className='w-full px-[5vw] py-12 bg-secondary-light'>
				<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<img
							src='/images/adjust-schedule.png'
							alt='Feature Illustration'
							className='w-full h-auto rounded shadow-md'
						/>
					</div>
					<div className='h-full flex flex-col justify-start md:justify-center items-start md:items-end pb-6'>
						<h3 className='text-title-1.5xl font-semibold mb-4 text-primary-300 md:text-right'>
							Cấu hình linh hoạt
						</h3>
						<ul
							dir='md:rtl'
							className='list-disc list-inside text-gray-700 text-title-medium md:text-title-large md:text-right'
						>
							<li className='py-1'>Tùy chỉnh Thời khóa biểu</li>
							<li className='py-1'>Cấu hình ràng buộc</li>
							<li className='py-1'>Xử lý linh hoạt</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Steps */}
			<section className='w-full h-fit px-[5vw] py-12'>
				<div className='container h-fit mx-auto text-center'>
					<h3 className='text-2xl font-semibold mb-6'>Các bước tạo thời khóa biểu</h3>
					<div className='h-fit flex flex-col justify-start items-center md:grid md:grid-cols-3 gap-8 h-[30vh]'>
						<div className='h-full'>
							<img
								src='/images/constraint-config.png'
								alt='Step 1'
								className='w-full h-[70%] rounded shadow-md'
							/>
							<p className='mt-4'>Cấu hình ràng buộc</p>
						</div>
						<div className='h-full'>
							<img
								src='/images/teacher-assignment.png'
								alt='Step 1'
								className='w-full h-[70%] rounded shadow-md'
							/>
							<p className='mt-4'>Thêm các môn học và lịch học</p>
						</div>
						<div className='h-full'>
							<img
								src='/images/schedulify-demo.png'
								alt='Step 3'
								className='w-full h-[70%] rounded shadow-md'
							/>
							<p className='mt-4'>Xem kết quả thời khóa biểu ngay lập tức</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='w-full py-12 bg-primary-50 text-center'>
				<h3 className='text-[5vw] md:text-3xl font-bold text-primary-300'>
					Bắt đầu quản lý thời khóa biểu của bạn ngay hôm nay!
				</h3>
				<div className='mt-6 flex flex-col md:flex-row gap-2 justify-center items-center'>
					<Button
						sx={{
							bgcolor: '#004e89',
							border: '2px solid #004e89',
							color: 'white',
							borderRadius: 0,
							mt: 3,
							py: 1,
							px: 5,
						}}
					>
						<Typography>Đăng ký dùng thử</Typography>
					</Button>
					<Button
						variant='outlined'
						sx={{
							border: '2px solid rgba(0, 0, 0, .6)',
							borderColor: 'rgba(0, 0, 0, .6)',
							color: 'rgba(0, 0, 0, .6)',
							borderRadius: 0,
							mt: 3,
							py: 1,
							px: 5,
						}}
					>
						<Typography>Xem hướng dẫn</Typography>
					</Button>
				</div>
			</section>
		</div>
	);
}
