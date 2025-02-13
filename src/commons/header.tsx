'use client';
import { NAV_LINKS } from '@/app/(guest)/_utils/constants';
import { INavigation } from '@/utils/constants';
import MenuIcon from '@mui/icons-material/Menu';
import {
	Box,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	SwipeableDrawer,
} from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import './styles/header.css';

const Header = () => {
	const headerLinks: INavigation[] = NAV_LINKS;
	const router = useRouter();
	const currentPath = usePathname();
	const [state, setState] = useState<boolean>(false);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setState(open);
	};

	return (
		<div className='w-screen h-fit'>
			{/* Desktop header */}
			<nav className='hidden md:flex justify-between items-center w-screen h-fit px-10 gap-8'>
				<div className='logo my-8 sm:my-2 md:my-4'>
					<Link href={headerLinks[0].url} className='w-fit'>
						<h2 className='text-primary-500 text-title-xl-strong font-bold w-fit md:text-[2.5vw] lg:text-[2vw]'>
							Schedulify
						</h2>
					</Link>
				</div>

				<div className='flex justify-between items-center gap-12'>
					<div className='h-full group flex justify-end items-center gap-10 w-fit'>
						{headerLinks.map((item, index) => (
							<Link href={item.url} key={`${item.name}${index}`} className='py-1 h-9 opacity-80'>
								<h3
									className={`text-title-small-strong md:text-[1.5vw] lg:text-[1.1vw] tracking-wide ${
										currentPath === item.url ? 'border-b-3 border-primary-600' : ''
									}`}
								>
									{item.name}
								</h3>
							</Link>
						))}
					</div>

					<button
						className='login-btn text-center font-semibold text-body-medium md:text-[1.3vw] lg:text-[1vw]'
						onClick={() => router.push('/login')}
					>
						ĐĂNG NHẬP
					</button>
				</div>
			</nav>

			{/* Mobile header */}
			<div className='top-0 left-0 right-0 w-full h-[5vw] md:hidden p-4'>
				<div className='logo'>
					<Link href={headerLinks[0].url} className='w-fit'>
						<h2 className='text-primary-500 text-title-lg-strong font-bold w-fit md:text-[2.5vw] lg:text-[2vw]'>
							Schedulify
						</h2>
					</Link>
				</div>
				<IconButton
					onClick={toggleDrawer(true)}
					sx={{ position: 'absolute', right: 0, top: 0, zIndex: 10, margin: '0.5rem' }}
				>
					<MenuIcon />
				</IconButton>
			</div>
			<SwipeableDrawer
				anchor='right'
				open={state}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				sx={{ zIndex: 10 }}
			>
				<Box
					sx={{ width: 250 }}
					role='presentation'
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<div className='logo my-[.7rem] flex justify-center items-center'>
						<Link href={headerLinks[0].url} className='w-fit'>
							<h2 className='text-primary-500 text-title-xl-strong font-bold w-fit'>Schedulify</h2>
						</Link>
					</div>
					<Divider />
					<List>
						{headerLinks.map((url, index) => (
							<ListItem key={index} onClick={() => router.push(url.url)}>
								<ListItemButton>
									<ListItemText primary={url.name} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</SwipeableDrawer>
		</div>
	);
};

export default Header;
