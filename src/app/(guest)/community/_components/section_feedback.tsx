import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Radio,
	Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const FeedbackSection = () => {
	const [currentSection, setCurrentSection] = useState(1);

	const switchSection = (nextSection: number) => {
		setCurrentSection(nextSection); // Update to the new section
	};

	return (
		<section className='w-full'>
			<div className='container mx-auto px-4 lg:px-8'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 ml-[10%]'>
					<div>
						<h3 className='text-xs font-light text-gray-500 uppercase tracking-[.25em]'>
							Trải Nghiệm
						</h3>
						<h2 className='text-2xl font-normal text-primary-500 leading-[3rem]'>
							Nhận xét của khách hàng
						</h2>
					</div>
					<Link
						href={'#'}
						className='flex justify-center gap-2 items-center border-b-2 border-primary-600 text-lg bg-gray-50 lg:font-normal isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden group'
					>
						Xem tất cả
						<svg
							className='w-5 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-1 rotate-45'
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

				{/* Display All Cards */}
				<div className='flex flex-col justify-start items-center lg:grid lg:grid-cols-3 lg:grid-flow-col gap-10 lg:ml-[10%]'>
					{[1, 2, 3].map((section) => (
						<Card
							key={section}
							className={`${currentSection === section ? 'animate-jump' : ''} transition-all`}
							sx={{
								maxWidth: 350,
								padding: 1,
								backgroundColor: '#EEF4F8',
								opacity: currentSection === section ? 1 : 0.8,
								transform: currentSection === section ? 'scale(1)' : 'scale(0.95)',
								transition: 'opacity 0.5s ease, transform 0.5s ease',
							}}
						>
							<CardHeader
								avatar={<Avatar>{section === 1 ? 'H' : section === 2 ? 'A' : 'N'}</Avatar>}
								title={
									section === 1
										? 'Hà An Huy'
										: section === 2
										? 'Nguyễn Ngọc Gia Ân'
										: 'Đặng Ngô Quang Nhật'
								}
								subheader={
									section === 1
										? 'Hiệu trưởng trường THPT Nguyễn Trãi'
										: section === 2
										? 'Hiệu phó trường THPT Nguyễn Thị Minh Khai'
										: 'Hiệu trưởng trường THPT Nguyễn Gia Trí'
								}
							/>
							<CardContent>
								<Typography variant='body2' sx={{ color: '#15283D', textAlign: 'justify' }}>
									Schedulify là một website rất hữu ích trong việc tạo thời khóa biểu tự động. Tôi
									không cần mất quá nhiều thời gian để tạo thủ công nhưng vẫn đảm bảo được tính tối
									ưu và hiệu quả. Rất cảm ơn đội ngũ phát triển hệ thống đã đem đến cho tôi một giải
									pháp hoàn hảo. Chúc Schedulify một ngày tốt lành!
								</Typography>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Switch Section Buttons */}
				<div className='flex justify-center mt-8'>
					{[1, 2, 3].map((item, index) => (
						<div key={'banner' + index} className='w-fit h-[50px] flex justify-center items-center'>
							<IconButton onClick={() => switchSection(item)}>
								<Radio
									sx={{
										'& .MuiSvgIcon-root': {
											fontSize: currentSection === item ? 35 : 20,
										},
									}}
									checked={currentSection === item}
								/>
							</IconButton>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeedbackSection;
