interface IComponent {
	id: string;
	type: string;
	props: {
		[k: string]: any;
	};
}

export default class Editor {
	/**
	 * 当前画布上所有的组件
	 */
	components: IComponent[] = [];

	/**
	 * 当前正在编辑的组件
	 */
	currentComponent: IComponent | null = null;
}
