export class ManagerError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "[ManagerError]";
	}
}

export class PlayerError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "[PlayerError]";
	}
}
