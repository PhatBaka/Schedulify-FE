import {
	CONFIGURATION_FIRESTORE_NAME,
	GENERATED_SCHEDULE_FIRESTORE_NAME,
	IConfigurationStoreObject,
	IScheduleResponse,
	ITimetableStoreObject,
	TIMETABLE_FIRESTORE_NAME,
} from '@/utils/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITimetableGenerationState {
	timetableId: string;
	dataFirestoreName: string;
	timetableFirestoreName: string;
	generatedScheduleFirestorename: string;
	isTimetableGenerating: boolean;
	dataStored: IConfigurationStoreObject;
	timetableStored: ITimetableStoreObject;
	generatedScheduleStored: IScheduleResponse;
}

interface IUpdateDataStored {
	target: keyof IConfigurationStoreObject;
	value: any;
}

interface IUpdateTimetableStored {
	target: keyof ITimetableStoreObject;
	value: any;
}

const initialState: ITimetableGenerationState = {
	timetableId: '',
	dataFirestoreName: CONFIGURATION_FIRESTORE_NAME,
	timetableFirestoreName: TIMETABLE_FIRESTORE_NAME,
	generatedScheduleFirestorename: GENERATED_SCHEDULE_FIRESTORE_NAME,
	isTimetableGenerating: false,
	dataStored: {} as IConfigurationStoreObject,
	timetableStored: {} as ITimetableStoreObject,
	generatedScheduleStored: {} as IScheduleResponse,
};

export const timetableGenerationSlice = createSlice({
	name: 'schoolManager',
	initialState,
	reducers: {
		setDataStored: (state, action: PayloadAction<IConfigurationStoreObject>) => {
			state.dataStored = action.payload;
		},
		setTimetableStored: (state, action: PayloadAction<ITimetableStoreObject>) => {
			state.timetableStored = action.payload;
		},
		setGeneratedScheduleStored: (state, action: PayloadAction<IScheduleResponse>) => {
			state.generatedScheduleStored = action.payload;
		},
		setGeneratingStatus: (state, action: PayloadAction<boolean>) => {
			state.isTimetableGenerating = action.payload;
		},
		updateDataStored: (state, action: PayloadAction<IUpdateDataStored>) => {
			(state.dataStored as any)[action.payload.target] = action.payload.value;
		},
		updateTimetableStored: (state, action: PayloadAction<IUpdateTimetableStored>) => {
			(state.dataStored as any)[action.payload.target] = action.payload.value;
		},
		setTimetableId: (state, action: PayloadAction<string>) => {
			state.timetableId = action.payload;
		},
	},
});

export const {
	// Data initialization
	setDataStored,
	setTimetableStored,
	setGeneratingStatus,
	setGeneratedScheduleStored,

	// Action with payload
	updateDataStored,
	updateTimetableStored,
	setTimetableId,
} = timetableGenerationSlice.actions;
export default timetableGenerationSlice.reducer;
