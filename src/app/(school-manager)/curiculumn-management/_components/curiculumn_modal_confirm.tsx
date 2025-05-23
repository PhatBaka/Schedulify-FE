import ContainedButton from '@/commons/button-contained';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import { IVulnerableClass } from '../_libs/constants';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
	position: 'absolute',
	top: '40%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '30vw',
	height: 'fit-content',
	bgcolor: 'background.paper',
};

interface ICurriculumConfirmModalProps {
	vulnerableClasses: IVulnerableClass[];
	handleConfirm: () => void;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	newCurriculum: string;
}

const ApllyConfirmationModal = (props: ICurriculumConfirmModalProps) => {
	const { vulnerableClasses, handleConfirm, setOpen, open, newCurriculum } = props;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='keep-mounted-modal-title'
			aria-describedby='keep-mounted-modal-description'
			disableEnforceFocus
			disableAutoFocus
			disableRestoreFocus
		>
			<Box sx={style}>
				<div
					id='modal-header'
					className='w-full h-fit flex flex-row justify-between items-center bg-basic-gray-hover p-3 py-1'
				>
					<Typography
						variant='h6'
						component='h2'
						className='text-title-medium-strong font-normal opacity-60'
					>
						Xác nhận thay đổi
					</Typography>
					<IconButton onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</div>
				<div className='w-full h-fit px-5 py-[3vh]'>
					<h2 className='text-title-small font-normal w-full text-left'>
						Xác nhận lưu những thay đổi
					</h2>
					{vulnerableClasses.length > 0 && (
						<div className='py-1'>
							<h2 className='text-body-medium-strong font-normal text-tertiary-normal'>
								Những lớp học sau sẽ được cập nhật Khung chương trình môn
							</h2>
							<ul className='!list-disc pl-2'>
								{vulnerableClasses.map((item, index) => (
									<li
										key={index}
										className='flex flex-row py-1 justify-start items-center gap-2'
									>
										<FiberManualRecordIcon sx={{ fontSize: '10px' }} />
										<p className='text-body-small font-normal'>
											{item.className}:
										</p>
										<p className='text-body-small font-normal text-basic-negative'>
											{item.existingGroupName}
										</p>
										<ArrowRightAltIcon />
										<p className='text-body-small font-normal text-primary-500'>
											{newCurriculum}
										</p>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<div
					id='modal-footer'
					className='w-full flex flex-row justify-end items-center gap-2 bg-basic-gray-hover px-3 py-2'
				>
					<ContainedButton
						title='Huỷ'
						onClick={handleClose}
						disableRipple
						styles='!bg-basic-gray-active !text-basic-gray !py-1 px-3'
					/>
					<ContainedButton
						title='xác nhận'
						disableRipple
						type='button'
						styles='bg-primary-300 text-white !py-1 px-3'
						onClick={handleConfirm}
					/>
				</div>
			</Box>
		</Modal>
	);
};

export default ApllyConfirmationModal;
