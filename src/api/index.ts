import { AuthResponse, LoginForm, RegisterForm } from './api'
import axios from './axios'

// auth api

export function postRegisterForm(data:RegisterForm):Promise<AuthResponse> {
	return axios({method:'post',url:'/auth/register',data})
}

export function postLoginForm(data: LoginForm):Promise<AuthResponse> {
	return axios({method:'post',url:'/auth/login',data})
}



