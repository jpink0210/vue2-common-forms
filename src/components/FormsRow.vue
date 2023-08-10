<template>
    <div class="forms-row my-5 row">
      <div class="col col-2">
        <div class="font-weight-bold text-nowrap d-flex align-items-center h-100">
          <slot name="title"></slot>
        </div>
      </div>
      <slot></slot>
    </div>
</template>


<script>
  export default {
    name: "FormsRow"
  }
</script>


<style lang="scss" scoped>
  .forms-row {
  }

</style>