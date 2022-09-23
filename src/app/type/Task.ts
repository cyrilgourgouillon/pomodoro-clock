export type Status = 'standby' | 'ongoing' | 'over' | 'next';

export interface Task {
	name: string,
	status: Status
}

export interface TaskState {
	tasks: Task[]
}
