<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useAccount } from "./store";

const user = useAccount();

user.fetchName();
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<div>name: {{ user.name }}</div>
	<div>full: {{ user.fullName }}</div>
	<div>hah: {{ user.hah }}</div>
	<hello-world msg="Hello Vue 3 + TypeScript + Vite" />
</template>
