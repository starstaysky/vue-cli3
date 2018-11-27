<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    this.$http.get('/horizon/dawn/api/yt/getCaseType').then(res => {
      let data = res.data
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
