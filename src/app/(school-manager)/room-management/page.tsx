'use client';

import SMHeader from '@/commons/school_manager/header';
import { useAppContext } from '@/context/app_provider';
import useNotify from '@/hooks/useNotify';
import { ROOM_TYPE_TRANSLATOR } from '@/utils/constants';
import { TRANSLATOR } from '@/utils/dictionary';
import * as React from 'react';
import { useSelector } from 'react-redux';
import RoomTable from './_components/room_table';
import RoomTableSkeleton from './_components/table_skeleton';
import useRoomData from './_hooks/useRoomData';
import { fetchBuildingName } from './_libs/apiRoom';
import { IRoom, IRoomTableData } from './_libs/constants';

export default function SMRoom() {
	const isMenuOpen: boolean = useSelector((state: any) => state.schoolManager.isMenuOpen);

	const [page, setPage] = React.useState<number>(0);
	const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
	const { schoolId, sessionToken, selectedSchoolYearId } = useAppContext();
	const [isErrorShown, setIsErrorShown] = React.useState<boolean>(false);
	const [buildingMap, setBuildingMap] = React.useState<Map<number, string>>(new Map());

	const { data, error, isValidating, mutate } = useRoomData({
		sessionToken,
		schoolId,
		pageSize: rowsPerPage,
		pageIndex: page + 1,
	});

	const [totalRows, setTotalRows] = React.useState<number | undefined>(undefined);
	const [roomTableData, setRoomTableData] = React.useState<IRoomTableData[]>([]);
	const [isBuildingLoading, setIsBuildingLoading] = React.useState(true);
  

	const getMaxPage = () => {
		if (totalRows === 0) return 1;
		return totalRows ? Math.ceil(totalRows / rowsPerPage) : 1;
	};

	React.useEffect(() => {
		mutate({ schoolYearId: selectedSchoolYearId });
	}, [selectedSchoolYearId]);

	// Fetch building data
	React.useEffect(() => {
		// setIsBuildingLoading(true);
		const getBuildingData = async () => {
			try {
				const buildingData = await fetchBuildingName(sessionToken, schoolId);

				if (buildingData?.status === 200) {
					const buildings = buildingData.result.items;
					const newBuildingMap = new Map();
					buildings.forEach((building: any) => {
						newBuildingMap.set(building.id, building.name);
					});
					setBuildingMap(newBuildingMap);
				}
			} catch (error) {
				console.error('Error fetching building data:', error);
			}
			setIsBuildingLoading(false);
		};
		getBuildingData();
	}, [sessionToken, schoolId]);

	React.useEffect(() => {
		if (data?.status === 200) {
			setTotalRows(data.result['total-item-count']);
			const roomData: IRoomTableData[] = data.result.items.map((item: IRoom) => ({
				id: item.id,
				roomName: item.name,
				buildingName: buildingMap.get(item['building-id']),
				availableSubjects:
					item.subjects?.map((subject) => subject['subject-name']).join(', ') || '-',
				roomType: ROOM_TYPE_TRANSLATOR[item['room-type']],
				status: item['availabilitye-status'] === 'Available' ? 'Hoạt động' : 'Bảo trì',
			}));
			console.log(roomData);
			setRoomTableData(roomData);
		}
	}, [data, buildingMap]);

	React.useEffect(() => {
		setPage((prev) => Math.min(prev, getMaxPage() - 1));
		if (page <= getMaxPage()) {
			mutate({
				pageSize: rowsPerPage,
				pageIndex: page,
			});
		}
	}, [page, rowsPerPage]);

	React.useEffect(() => {
		if (error && !isErrorShown) {
			setIsErrorShown(true);
			useNotify({
				message: TRANSLATOR[error?.message] ?? 'Phòng học chưa có dữ liệu.',
				type: 'error',
			});
		}
	}, [isValidating]);

	if (isValidating || isBuildingLoading) {
		return (
			<div
				className={`w-[${
					!isMenuOpen ? '84' : '100'
				}%] h-screen flex flex-col justify-start items-start overflow-y-scroll no-scrollbar`}
			>
				<SMHeader>
					<div>
						<h3 className='text-title-small text-white font-semibold tracking-wider'>
							Phòng học
						</h3>
					</div>
				</SMHeader>
				<RoomTableSkeleton />
			</div>
		);
	}

	// if (error) {
	// 	useNotify({
	// 		type: 'error',
	// 		message: error.message ?? 'Có lỗi xảy ra',
	// 	});
	// }

	return (
		<div
			className={`w-[${
				!isMenuOpen ? '84' : '100'
			}%] h-screen flex flex-col justify-start items-start overflow-y-scroll no-scrollbar`}
		>
			<SMHeader>
				<div>
					<h3 className='text-title-small text-white font-semibold tracking-wider'>
						Phòng học
					</h3>
				</div>
			</SMHeader>
			<RoomTable
				roomTableData={roomTableData}
				page={page}
				setPage={setPage}
				rowsPerPage={rowsPerPage}
				setRowsPerPage={setRowsPerPage}
				totalRows={totalRows}
				mutate={mutate}
			/>
		</div>
	);
}
