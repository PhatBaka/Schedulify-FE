import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

const BlogsSection = () => {
	return (
		<section className='w-full py-10 bg-primary-400'>
			<div className='text-center mb-5'>
				<h3 className='text-sm font-light text-gray-200 uppercase tracking-[.54em]'>Blogs</h3>
				<h3 className='text-2xl font-normal text-white leading-loose tracking-widest'>
					Khám phá bài viết
				</h3>
			</div>
			<div className='flex flex-wrap justify-center items-center lg:grid lg:grid-cols-3 lg:grid-rows-2 grid-flow-col md:justify-evenly gap-10 px-[1vw] md:ml-[6%]'>
				<Card sx={{ width: 345 }}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='140'
							image='/images/school-example-demo.jpg'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' sx={{ color: 'text.secondary' }}>
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging across all continents except Antarctica.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Xem chi tiết
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 345 }}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='140'
							image='/images/school-example-demo.jpg'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' sx={{ color: 'text.secondary' }}>
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging across all continents except Antarctica.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Xem chi tiết
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 345 }}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='140'
							image='/images/school-example-demo.jpg'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' sx={{ color: 'text.secondary' }}>
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging across all continents except Antarctica.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Xem chi tiết
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 345 }}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='140'
							image='/images/school-example-demo.jpg'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' sx={{ color: 'text.secondary' }}>
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging across all continents except Antarctica.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Xem chi tiết
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 345 }}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='140'
							image='/images/school-example-demo.jpg'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' sx={{ color: 'text.secondary' }}>
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging across all continents except Antarctica.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Xem chi tiết
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 345 }}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='140'
							image='/images/school-example-demo.jpg'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' sx={{ color: 'text.secondary' }}>
								Lizards are a widespread group of squamate reptiles, with over 6,000 species,
								ranging across all continents except Antarctica.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Xem chi tiết
						</Button>
					</CardActions>
				</Card>
			</div>
		</section>
	);
};

export default BlogsSection;
