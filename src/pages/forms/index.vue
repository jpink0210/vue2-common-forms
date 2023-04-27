<template>
  <div class="forms">
    <div class="container">
      <div class="title rounded bg-white p-4 text-primary h1">Vue2 Forms</div>
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
  name: 'Forms',
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
.forms {
  .main {
    min-height: 20px;
  }
  .forms-menu {
    min-height: 100px;
  }
}
</style>