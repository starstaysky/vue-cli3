<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

export default {
  name: 'home',
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
