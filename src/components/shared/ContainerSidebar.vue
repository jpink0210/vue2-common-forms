<template>
  <div class="container">
    <div class="row">
      <div
        class="col main"
        :class="[{ 'order-last': side === 'left' }]"
      >
        <slot name="main" />
      </div>
      <div
        class="col col-auto sidebar"
        :class="[{ 'order-first': side === 'left' }]"
      >
        <slot name="sidebar" />
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from "vue-types";

export default {
    name: "ContainerSidebar",
    props: {
      side: VueTypes.oneOf(["left", "right"]).def("left"),
    }
}
</script>

<style lang="scss" scoped>
@import "~scss/utility/variables.scss";

.container {

  .sidebar {
    width: $app-sidebar-width;
  }

  .col.main {
    max-width: $app-main-width;
    @include media-breakpoint-up(lg) {
      max-width: $app-main-width-lg;
    }
    @include media-breakpoint-up(xl) {
      max-width: $app-main-width-xl;
    }
  }
}
</style>