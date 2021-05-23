import { App, computed, inject, ref, unref } from "vue";

function makeObserveable(o: any) {
	const proto = Reflect.getPrototypeOf(o)!;

	for (const key of Reflect.ownKeys(o)) {
		const internalValue = ref(Reflect.get(o, key));
		const descriptor = Reflect.getOwnPropertyDescriptor(o, key);

		Reflect.defineProperty(o, key, {
			enumerable: descriptor?.enumerable,
			configurable: descriptor?.configurable,
			get() {
				return unref(internalValue);
			},
			set(value: any) {
				internalValue.value = unref(value);
			},
		});
	}

	for (const key of Reflect.ownKeys(proto)) {
		if (key === "constructor") continue;

		const descriptor = Reflect.getOwnPropertyDescriptor(proto, key);

		if (descriptor?.get) {
			let internalValue = descriptor.set
				? computed({
						get: descriptor.get.bind(o),
						set: descriptor.set.bind(o),
				  })
				: computed(descriptor.get.bind(o));

			Reflect.defineProperty(proto, key, {
				enumerable: false,
				configurable: true,
				get() {
					return unref(internalValue);
				},
				set(value: any) {
					internalValue.value = unref(value);
				},
			});
		}
	}
}

export default function defineStore<T>(key: string, store: T) {
	const _key = Symbol(key);

	makeObserveable(store);

	function useStore() {
		return inject(_key) as T;
	}

	useStore.install = function (app: App) {
		console.log(5645646);

		app.provide(_key, store);
	};

	return useStore;
}
