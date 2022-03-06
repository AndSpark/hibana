<template>
<div>
	<input type="text" v-model="loginForm.user.email" />
	<input type="text" v-model="loginForm.user.password" />
	<button @click="login">submit</button>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import {authSetup} from './auth'
export default defineComponent({ 
	name:'Login',
	setup(){
		const auth = authSetup()

		return {
			...auth
		}
	}
})
</script>

<style>

</style>