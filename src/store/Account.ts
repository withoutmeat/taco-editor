export default class User {
	name = "lijian";

	get fullName() {
		return this.name + "666";
	}

	set fullName(v: string) {
		this.name = v;
	}

	get hah() {
		return this.fullName + this.name;
	}

	setName(name: string) {
		this.name = name;
	}

	async fetchName() {
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 500);
		});

		this.name = "async nanme";
	}
}
