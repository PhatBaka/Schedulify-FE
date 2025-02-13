import '@/commons/styles/globals.css';
import AppProvider from '@/context/app_provider';
import { inter } from '@/utils/fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { jwtDecode } from 'jwt-decode';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IJWTTokenPayload } from './(auth)/_utils/constants';
import { NotificationProvider } from './(school-manager)/notification/_contexts/notificationContext';

export const metadata: Metadata = {
	icons: ['/images/logo.png'],
	title: {
		template: 'Schedulify | %s',
		default: 'Schedulify',
	},
	description: 'Hệ thống xây dựng Thời khóa biểu online',
	metadataBase: new URL('https://schedulify.id.vn'),
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = cookies();
	const sessionToken = cookieStore.get('sessionToken');
	const refreshToken = cookieStore.get('refreshToken');
	const userRole = cookieStore.get('userRole');
	const selectedSchoolYearId = cookieStore.get('selectedSchoolYearId');

	let userData: IJWTTokenPayload = {} as IJWTTokenPayload;
	if (sessionToken) {
		userData = jwtDecode(sessionToken?.value);
	}

	return (
		<html lang='vi' style={{ overflow: 'hidden' }}>
			<body
				className={`${inter.className} antialiased relative w-screen h-screen overflow-x-hidden scroll-smooth`}
			>
				<NotificationProvider
					sessionToken={sessionToken?.value ?? ''}
					accountId={Number(userData.accountId) ?? 0}
				>
					<AppProvider
						inititalSessionToken={sessionToken?.value ?? ''}
						inititalRefreshToken={refreshToken?.value ?? ''}
						initUserRole={userRole?.value ?? ''}
						initSchoolId={userData.schoolId ?? ''}
						initSchoolName={userData.schoolName ?? ''}
						initSelectedSchoolYearId={Number(selectedSchoolYearId?.value) ?? 0}
					>
						{children}
					</AppProvider>
				</NotificationProvider>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable
					limit={2}
					pauseOnHover
					theme='light'
					transition={Bounce}
					pauseOnFocusLoss={false}
				/>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
