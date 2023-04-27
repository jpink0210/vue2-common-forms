<template>
  <div id="app" class="bg-mt1">
    <div class="white-bar w-100 bg-white py-1 px-6 d-flex align-items-center t3">
      <div class="mr-8">Paul Blog</div>
      <div class="mr-8">Vue3</div>
      <div class="mr-8">React/ts</div>
      <div class="mr-8">Hook</div>
      <div class="mr-8">Algorithm</div>
    </div>
    <div class="container">
      <div class="breadcrumbs d-flex align-items-center my-4 position-relative">
        <router-link class="router-link t3" to="/">forms</router-link>
        <router-link class="router-link t3" to="/demo">component</router-link>
        <router-link class="router-link t3" to="/mobile">smooth slide</router-link>
      </div>
    <router-view/>

    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>

#app {
  height: 100%;

  .router-link {
    position: relative;
    display: flex;
    margin-right: 24px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 14px;
      width: 1px;
      background-color: black;
      right: -12px;
      top: 8px;
    }
  }

  .white-bar {
    height: 30px;
  }
}
</style>
