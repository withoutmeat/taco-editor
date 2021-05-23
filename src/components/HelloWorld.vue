<template>
	<div>hellowword</div>
	<div>name: {{ user.name }}</div>
	<div>full: {{ user.fullName }}</div>
	<div>hah: {{ user.hah }}</div>
</template>

<script lang="ts">
import { ref, defineComponent, inject } from "vue";
import { useAccount } from "../store";
export default defineComponent({
	name: "HelloWorld",
	props: {
		msg: {
			type: String,
			required: true,
		},
	},
	setup: () => {
		const user = useAccount();

		return { user };
	},
});
</script>
