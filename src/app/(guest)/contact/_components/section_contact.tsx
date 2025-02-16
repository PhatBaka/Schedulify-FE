import { Button, Checkbox, FormControlLabel, TextField, Typography, Box } from '@mui/material';

const ContactSection = () => {
	return (
		<section className='w-full py-12'>
			<Box className='container mx-auto' sx={{ maxWidth: '1000px' }}>
				<Box
					display='flex'
					flexDirection={{ xs: 'column', md: 'row' }}
					justifyContent='space-evenly'
					gap={4}
					px={2}
				>
					{/* Left Form */}
					<Box sx={{ flex: 1, maxWidth: '580px' }}>
						<Typography variant='h4' sx={{ marginBottom: '1.5rem', fontWeight: 600 }}>
							Để lại thông tin liên hệ
						</Typography>

						<form className='space-y-6'>
							<Box display='flex' gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
								<TextField id='full-name' label='Họ và tên' fullWidth variant='standard' />
								<TextField id='phone-number' label='Số điện thoại' fullWidth variant='standard' />
							</Box>

							<TextField id='email' label='Địa chỉ email' fullWidth variant='standard' />

							<TextField
								id='message'
								label='Tin nhắn của bạn'
								fullWidth
								multiline
								rows={4}
								variant='standard'
							/>

							<Box display='flex' justifyContent='space-between' alignItems='center'>
								<FormControlLabel
									control={<Checkbox color='primary' />}
									label='Đăng ký nhận thông tin từ chúng tôi'
								/>
								<Button
									className='bg-primary-300 text-white hover:bg-primary-700'
									type='submit'
									variant='contained'
									sx={{ padding: '10px 24px' }}
								>
									Gửi thông tin
								</Button>
							</Box>
						</form>
					</Box>

					{/* Right Information */}
					<Box sx={{ flex: 1, maxWidth: '480px' }}>
						<Box
							sx={{
								padding: '1rem',
								backgroundColor: '#EEF4F8',
								borderRadius: '5px',
								boxShadow: 1,
							}}
						>
							<Typography variant='h6' sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
								Thông tin liên hệ
							</Typography>
							<Typography
								className='leading-loose'
								variant='body2'
								color='textSecondary'
								sx={{ marginBottom: '0.5rem' }}
							>
								Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ Chí Minh 700000
							</Typography>
							<Typography variant='body2' color='textSecondary' sx={{ marginBottom: '0.5rem' }}>
								schedulify@gmail.com
							</Typography>
							<Typography variant='body2' color='textSecondary' sx={{ marginBottom: '0.5rem' }}>
								028 7300 5588
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default ContactSection;
