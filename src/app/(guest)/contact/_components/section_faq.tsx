import { Box, Typography, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const FAQSection = () => {
	return (
		<section className='w-full h-fit py-12 ml-[10%]'>
			<Box className='container mx-auto flex flex-col md:flex-row gap-10 px-4'>
				<Box className='flex-1'>
					<Typography variant='h6' className='text-gray-500 uppercase tracking-[.25em] mb-4'>
						FAQ
					</Typography>
					<Typography variant='h4' className='font-semibold mb-6'>
						Câu hỏi thường gặp
					</Typography>
					<Box className='space-y-4'>
						<Box className='flex justify-between items-center border-b pb-4'>
							<Typography className='text-lg font-semibold'>
								How can I schedule a campus tour?
							</Typography>
							<ArrowForwardIosIcon fontSize='small' />
						</Box>
						<Box className='border-b pb-4'>
							<Box className='flex justify-between items-center'>
								<Typography className='text-lg font-semibold'>
									How can I contact teachers directly?
								</Typography>
								<ArrowForwardIosIcon fontSize='small' />
							</Box>
							<Typography className='text-gray-500 mt-2'>
								You can reach out to teachers via email or through the school's website
								communication portal. If you meet any challenge, feel free to contact our CS.
							</Typography>
						</Box>
						<Box className='flex justify-between items-center border-b pb-4'>
							<Typography className='text-lg font-semibold'>
								Is there a school dress code?
							</Typography>
							<ArrowForwardIosIcon fontSize='small' />
						</Box>
						<Box className='flex justify-between items-center border-b pb-4'>
							<Typography className='text-lg font-semibold'>
								What is the enrollment process?
							</Typography>
							<ArrowForwardIosIcon fontSize='small' />
						</Box>
						<Box className='flex justify-between items-center border-b pb-4'>
							<Typography className='text-lg font-semibold'>
								What extracurricular activities are available?
							</Typography>
							<ArrowForwardIosIcon fontSize='small' />
						</Box>
					</Box>
				</Box>

				<Box className='flex-1 relative hidden md:block'>
					<Image
						src='/images/school-example-demo.jpg' // Replace with the actual image path
						alt='FAQ Image'
						layout='fill'
						objectFit='cover'
						className='rounded-lg shadow-lg'
					/>
				</Box>
			</Box>
		</section>
	);
};

export default FAQSection;
