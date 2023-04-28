<template>
  <div class="inputs">
    <div class="container">
      <div class="title rounded bg-white p-4 text-primary h1">Vue2 Inputs</div>
    </div>
    <ContainerSidebar class="mt-4">
      <template slot="main">
        <div></div>
      </template>
      <template slot="sidebar">
        <div class="forms-menu bg-white rounded">
        </div>
      </template>
    </ContainerSidebar>
  </div>
</template>

<script>
import ContainerSidebar from "components/shared/ContainerSidebar";

export default {
  name: 'Inputs',
  components: {
    ContainerSidebar
  },
  mounted: function () {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.inputs {
  .main {
    min-height: 20px;
  }
  .forms-menu {
    min-height: 100px;
  }
}
</style>