<script setup lang="ts">
let blocks: string[] = ['block_1', 'block_2', 'block_3', 'block_4', 'block_5']
</script>
<template>
	<div class="main_game_board">
		<div class="game_height_box">
			<img src="/images/tetris-01.png" alt="tetris-block" class="blocks" :class="blocks[0]" /><img
				src="/images/tetris-02.png"
				alt="tetris-block"
				class="blocks"
				:class="blocks[1]"
			/><img src="/images/tetris-03.png" alt="tetris-block" class="blocks" :class="blocks[2]" /><img
				src="/images/tetris-04.png"
				alt="tetris-block"
				class="blocks"
				:class="blocks[3]"
			/>
		</div>
	</div>
</template>

<style scoped>
.main_game_board {
	position: relative;
}

.block_1 {
	width: 40px;
	height: 41px;
}

.block_2 {
	width: 60px;
	height: 41px;
}

.block_3 {
	width: 20px;
	height: 82px;
}

.block_4 {
	width: 74px;
	height: auto;
	transform: rotate(90deg);
	position: absolute;
	top: -6px;
	left: 7px;
}

.game_height_box {
	position: absolute;
	bottom: -9px;
	left: 0;
}
</style>
