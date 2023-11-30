<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<header>
		<h1>SCORE: 24,030</h1>

		<!-- <div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div> -->

		<RouterView />
		<h1>TETRIS</h1>
	</header>
</template>

<style scoped>
h1 {
	text-align: center;
}
</style>
