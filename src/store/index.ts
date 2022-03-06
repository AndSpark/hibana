import { createStore } from 'vuex'

const store = createStore({
	state: {
		user: null,
		darkMode:false
	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},
		setDarkMode(state) {
			state.darkMode = !state.darkMode
		}
	},
	getters: {
		isLogin(state) {
			if (state.user) {
				return true
			}
			return false
		}
	}
})

export default store