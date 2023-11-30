<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import BlocksPreview from '@/components/BlocksPreview.vue'
import BlockHoldview from '@/components/BlockHoldview.vue'
</script>

<template>
	<main class="wrap_layout_container">
		<div class="layout_container">
			<block-holdview></block-holdview>
			<game-board></game-board>
			<blocks-preview></blocks-preview>
		</div>
	</main>
</template>

<style scoped>
.wrap_layout_container {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 4px;
}
</style>
