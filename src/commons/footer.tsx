import { INavList, NAV_LINKS } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = (): JSX.Element => {
	const footerLinks: INavList[] = NAV_LINKS;

	return (
		<nav className='w-screen h-fit px-[8vw] pt-20 pb-5 bg-primary-800 text-white flex flex-col gap-5'>
			{/* Information container */}
			<div className='flex h-fit justify-between items-baseline'>
				{/* Logo container */}
				<div className='flex h-fit flex-col justify-start items-center w-96 gap-10'>
					{/* Logo container */}
					<div className='flex flex-col justify-between items-start h-fit gap-4'>
						<Link href={'/'} className='w-fit text-title-xl-strong'>
							Schedulify
						</Link>
						<p className='text-justify w-full h-fit text-title-`small opacity-80'>
							Đơn giản hóa quá trình tạo lập thời khóa biểu cho trường học
							cấp THPT toàn quốc
						</p>
					</div>

					{/* Decorator container */}
					<div className='decorator-container w-full h-fit bg-primary-30 '>
						<Image
							src={'/images/footer-decorator.png'}
							alt='Decorator'
							width={300}
							height={150}
						/>
					</div>
				</div>

				{/* Link container */}
				<div className='h-full w-fit min-w-[12%] flex flex-col justify-start items-start gap-3 mb-3'>
					<h1 className='text-title-small mb-2'>Đường dẫn</h1>
					{footerLinks.map((item, index) => (
						<Link
							href={item.url}
							key={`${item.name}${index}`}
							className='text-body-small opacity-80 w-full hover:font-semibold'
						>
							{item.name}
						</Link>
					))}
				</div>

				{/* Program container */}
				<div className='h-full w-fit min-w-[12%] flex flex-col justify-start items-start gap-3 mb-3'>
					<h1 className='text-title-small mb-2'>Đường dẫn</h1>

					<Link
						href={'#'}
						className='text-body-small opacity-80 w-full hover:font-semibold'
					>
						Những ràng buộc
					</Link>
					<Link
						href={'#'}
						className='text-body-small opacity-80 w-full hover:font-semibold'
					>
						Đối tác của chúng tôi
					</Link>
					<Link
						href={'#'}
						className='text-body-small opacity-80 w-full hover:font-semibold'
					>
						Danh sách trường
					</Link>
					<Link
						href={'#'}
						className='text-body-small opacity-80 w-full hover:font-semibold'
					>
						Khu vực
					</Link>
					<Link
						href={'#'}
						className='text-body-small opacity-80 w-full hover:font-semibold'
					>
						Ngôn ngữ
					</Link>
					<Link
						href={'#'}
						className='text-body-small opacity-80 w-full hover:font-semibold'
					>
						Hướng dẫn
					</Link>
				</div>

				{/* Contact container */}
				<div className='h-full max-w-[20%] w-fit flex flex-col justify-start items-start gap-3 mb-3'>
					<h1 className='text-title-small mb-2'>Địa chỉ</h1>

					<p className='text-body-small opacity-80 w-full'>
						Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ
						Chí Minh 700000, Việt Nam
					</p>
					<p className='text-body-small opacity-80 w-full'>
						(+84) 977 54 54 50
					</p>
					<p className='text-body-small opacity-80 w-full'>
						schedulifyse078@gmail.com
					</p>
				</div>
			</div>

			{/* Copyright container */}
			<div className='h-5 w-full flex flex-row justify-between items-center'>
				<p className='text-body-small opacity-50'>
					Copyright © Schedulìy 2024. All rights reserved.
				</p>
				<div className='flex flex-row w-fit h-full min-w-[40%] justify-end items-center gap-3'>
					<Link
						href={'#'}
						className='text-body-small text-end opacity-50 w-full'
					>
						Chính sách bảo mật
					</Link>
					<Link
						href={'#'}
						className='text-body-small text-end w-full opacity-50'
					>
						Điều khoản và quy định người dùng
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
