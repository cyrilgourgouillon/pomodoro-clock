export type Status = 'standby' | 'ongoing' | 'over';

export class Task {
	name: string;
	status: Status;

	constructor(name: string, status: Status) {
		this.name = name;
		this.status = status;
	}
}