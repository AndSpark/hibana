import { reactive, toRefs } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { postLoginForm, postRegisterForm } from "../../api"
import { LoginForm, RegisterForm } from "../../api/api"

type State = {
	loginForm: LoginForm
	registerForm:RegisterForm
}

const authSetup = () => {
	const store = useStore()
	const router = useRouter()
	const state = reactive<State>({
		loginForm: {
			user: {
				email: '',
				password:''
			}
		},
		registerForm: {
			user: {
				username: '',
				password: '',
				email: '',
			}
		},
	})

	const actions = {
		login() {
			postLoginForm(state.loginForm)
				.then(res => {
					store.commit('login', res)
					router.push({name:'index'})
				})
				.catch(res => {
					console.log(res);
				})
		},
		register() {
			postRegisterForm(state.registerForm)
				.then(res => {
					store.commit('login', res)
					router.push({name:'index'})
				})
				.catch(res => {
					console.log(res);
				})
		}
	}


	return {
		...toRefs(state),
		...actions
	}


}

export {
	authSetup
}