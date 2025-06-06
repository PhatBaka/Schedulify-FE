import { IDropdownOption } from '../../_utils/contants';

export interface IDepartmentTableData {
	id: number;
	departmentName: string;
	departmentCode: string;
	description: string;
	departmentKey: number;
	meetingDay: number;
	departmentHeadName: string;
	departmentHeadId: number;
}

export interface IDepartmentResponse {
	id: number;
	name: string;
	description: string | null;
	'department-code': string;
	'create-date': string;
	'update-date': string | null;
	'is-deleted': boolean;
	'meeting-day': string | null;
	'teacher-department-head-id': number | null;
	'teacher-department-first-name': string | null;
	'teacher-department-last-name': string | null;
	'teacher-department-abbreviation': string | null;
}

export interface ICreateDepartmentRequest {
	name: string;
	description: string;
	'department-code': string;
	'meeting-day'?: number;
}

export interface IUpdateDepartmentRequest {
	name: string;
	description: string;
	'department-code': string;
	'meeting-day'?: number;
}

export interface IErrorDepartmentResonse {
	name: string;
	description: string;
	'department-code': string;
	'meeting-day'?: number;
}
export interface ISubjectResponse {
	id: number;
	'school-year-id': number;
	'school-year-code': string;
	'subject-name': string;
	abbreviation: string;
	'is-required': boolean;
	description: string;
	'total-slot-in-year': number;
	'slot-specialized': number;
	'create-date': string;
	'update-date': string | null;
	'is-deleted': boolean;
	'subject-group-type': string;
}

export interface ITeacherResponse {
	id: number;
	'first-name': string;
	'last-name': string;
	abbreviation: string;
	email: string;
	gender: string;
	'is-home-room-teacher': boolean;
	'student-class-id': number;
	'home-room-teacher-of-class': string;
	'department-id': number;
	'department-name': string;
	'date-of-birth': string;
	'teacher-role': string;
	status: number;
	'is-deleted': boolean;
	phone: string;
	'period-count': number;
	'teachable-subjects': ITeachableSubject[];
}

export interface ITeachableSubject {
	id: number;
	'subject-id': number;
	'subject-name': string;
	abbreviation: string;
	'list-appropriate-level-by-grades': {
		'appropriate-level': string;
		grade: string;
	}[];
	'is-main': boolean;
}

export const MEETING_DAY_OPTIONS: IDropdownOption<number>[] = [
	{ label: 'Thứ 2', value: 0 },
	{ label: 'Thứ 3', value: 1 },
	{ label: 'Thứ 4', value: 2 },
	{ label: 'Thứ 5', value: 3 },
	{ label: 'Thứ 6', value: 4 },
	{ label: 'Thứ 7', value: 5 },
];

export interface IDepartmentHeadAssignmentRequest {
	'department-id': number;
	'teacher-id': number;
}
