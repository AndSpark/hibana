// auth 
export type RegisterForm = {
	user: {
		email: string
		password: string
		username: string
	}
}

export type LoginForm = {
	user: {
		email: string
		password: string
	}
}

export interface UserResponse {
  user: {
    email: string;
    username?: string;
    bio: string;
    avatar: string | null;
    followersCount: number;
    followeeCount: number;
    articlesCount: number;
  }
}

export interface AuthResponse extends UserResponse {
  token: {
    token: string;
    expires: number;
  }
}