<template>
	<div class="pt-24 h-full bg-fixed bg-cover bg-center duration-1000 overflow-auto" :style="{backgroundImage:`url(${indexImg})`}">
		<nav-bar/>
		<main >
			<router-view></router-view>
		</main>
		<Player/>
		<a href="https://beian.miit.gov.cn/" class=" absolute bottom-1 left-1/2 transform -translate-x-1/2 text-gray-200 " target="_blank">浙ICP备2021018226号</a>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Player from './components/player/index.vue'
import navBar from './components/nav-bar/index.vue'
import {getIndexImg} from './composables/indexImg'
import addPointer from './utils/pointer'
export default defineComponent({
	name: 'App',
	components: {
		Player,
		navBar,
	},
	setup(){
		const {indexImg} = getIndexImg()

		onMounted(() => {
			addPointer()
		})

		return {
			indexImg
		}
	}
})
</script>
<style >
html, body,#app {
	height: 100%;
}

	::-webkit-scrollbar {
	/*滚动条整体样式*/
	width: 4px;
	/*高宽分别对应横竖滚动条的尺寸*/
	height: 1px;
}

::-webkit-scrollbar-thumb {
	/*滚动条里面小方块*/
	border-radius: 5px;
	background-image: linear-gradient(120deg, #72a5f7 0%, #66dfdf 100%);
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
	/*滚动条里面轨道*/
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	/* border-radius: 10px; */
	background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf08c 100%);
}

::selection {
	color: #a1c4fd;
}

</style>

