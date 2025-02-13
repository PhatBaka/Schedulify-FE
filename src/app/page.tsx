'use client';
import LoadingComponent from '@/commons/loading';
import { useAppContext } from '@/context/app_provider';
import {
	adminPaths,
	schoolManagerPaths,
	teacherDepartmentHeadPaths,
	teacherPaths,
} from '@/utils/constants';
import { redirect } from 'next/navigation';
import { useMemo } from 'react';

export default function Home() {
	const { userRole } = useAppContext();

	useMemo(() => {
		if (userRole.length > 0) {
			switch (userRole?.toLowerCase()) {
				case 'schoolmanager':
					redirect(schoolManagerPaths[0]);
				case 'admin':
					redirect(adminPaths[0]);
				case 'teacher':
					redirect(teacherPaths[0]);
				case 'teacherdepartmenthead':
					redirect(teacherDepartmentHeadPaths[0]);
				default:
					redirect('/landing');
			}
		}
		redirect('/landing');
	}, [userRole]);

	return <LoadingComponent loadingStatus={false} />;
}
