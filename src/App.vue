<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isHide = ref(true)
const startGameBtn = () => {
	isHide.value = !isHide.value
}
</script>

<template>
	<div>
		<div class="wrap_start_btn_show" v-if="isHide">
			<button @click="startGameBtn" class="btn_start">START</button>
		</div>
		<RouterView />
	</div>
</template>

<style scoped>
.wrap_start_btn_show {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.8);
	z-index: 90;
}

.wrap_start_btn_hide {
	display: none;
}

.btn_start {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 120px;
	height: 40px;
	font-size: 1.6rem;
	background-color: #fff;
	border: 1px solid #333;
	line-height: 40px;
}
</style>
