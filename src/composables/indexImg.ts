import { computed } from 'vue'
import { useStore } from 'vuex'
import darkBg from '../assets/images/2.jpg'
import whiteBg from '../assets/images/1.jpg'

export function getIndexImg() {
	const store = useStore()
	const indexImg = computed(()=> {
			if(store.state.darkMode){
				return darkBg
			}
			return whiteBg
	})

	return {
		store,
		indexImg
	}
}