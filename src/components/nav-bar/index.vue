<template>
  <div
    class="
      shadow-xl
      z-10
      fixed
      top-0
      left-0
      w-full
      bg-fixed bg-gray-50
      dark:bg-gray-800
      duration-500
    "
    :style="{ backgroundImage: `url(${indexImg})` }"
  >
    <div class="container px-4 flex duration-500 items-center h-24 py-6">
      <img class="h-full" src="../../assets/images/logo.png" />
      <div class="flex-1"></div>

      <div
        class="
          flex flex-col
          md:flex md:flex-row
          duration-500
          absolute
          md:relative
          top-0
          right-0
          pt-6
          md:pt-0
          w-2/4
          md:w-auto
          h-screen
          md:h-auto
        "
        :class="
          showMenu
            ? `
					dark:bg-gray-900 bg-white
					`
            : '-right-2/4 md:right-0'
        "
      >
        <div class="py-4 mx-6 md:hidden" @click="showMenu = false">
          <img :src="closeSvg" />
        </div>
        <router-link :to="{ name: 'Index' }">
          <span
            class="
              inline-block
              py-4
              ml-8
              md:ml-16
              font-bold
              hover:text-gray-600
              dark:text-white dark:hover:text-gray-600
              duration-500
            "
            >主页</span
          >
        </router-link>
        <a
          v-for="route in routes"
          :key="route.title"
          :href="route.link"
          class="
            py-4
            ml-8
            md:ml-16
            font-bold
            hover:text-gray-600
            dark:text-white dark:hover:text-gray-600
            duration-500
          "
          target="_blank"
          >{{ route.title }}</a
        >
        <router-link :to="{ name: 'Covid19' }">
          <span
            class="
              inline-block
              py-4
              ml-8
              md:ml-16
              font-bold
              hover:text-gray-600
              dark:text-white dark:hover:text-gray-600
              duration-500
            "
            >Covid19</span
          >
        </router-link>
        <div @click="setDarkMode" class="py-4 mx-6 cursor-pointer">
          <div
            v-show="!store.state.darkMode"
            class="flex hover:text-gray-600 duration-500"
          >
            <img :src="moonSvg" alt="moon" />
            黑夜
          </div>
          <div
            v-show="store.state.darkMode"
            class="flex text-white hover:text-gray-600 duration-500"
          >
            <img :src="sunSvg" alt="moon" />
            白天
          </div>
        </div>
      </div>

      <img :src="menuSvg" class="md:hidden" @click="showMenu = true" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
  watch,
} from 'vue'
import { useStore } from 'vuex'
import darkBg from '../../assets/images/2.jpg'
import moonSvg from './svg/moon.svg'
import sunSvg from './svg/sun.svg'
import menuSvg from './svg/menu.svg'
import closeSvg from './svg/close.svg'
export default defineComponent({
  name: 'NavBar',
  setup() {
    const state = reactive({
      routes: [
        {
          title: '音乐',
          link: 'https://music.hibana.xyz',
        },
        {
          title: 'CV',
          link: 'https://cv.hibana.xyz',
        },
      ],
      showMenu: false,
    })
    const store = useStore()

    const actions = {
      setDarkMode() {
        if (store.state.darkMode) {
          document.documentElement.classList.remove('dark')
        } else {
          document.documentElement.classList.add('dark')
        }
        store.commit('setDarkMode')
      },
    }
    const indexImg = computed(() => {
      if (store.state.darkMode) {
        return darkBg
      }
    })

    return {
      ...toRefs(state),
      ...actions,
      store,
      indexImg,
      moonSvg,
      sunSvg,
      menuSvg,
      closeSvg,
    }
  },
})
</script>

<style></style>
