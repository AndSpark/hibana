import { Store } from 'vuex'

interface User {
	username: string;
	realname: string;
	status: string;
}



declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
		user: User | null
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}