<template>
  <div class="inputs">
    <div class="container">
      <div class="title rounded bg-white p-4 text-primary h1">Vue2 Inputs</div>
    </div>
    <ContainerSidebar class="mt-4">
      <template slot="main">
        <div class="">
          <div class="col-3 mt-3">
            <p>- 基本輸入框 Input</p>
            <FormInput
              v-model="inputVal_1"
              :clearable="inputVal_1.length > 0"
              @clear="inputVal_1 = ''"
            />
          </div>
          <div class="col-3 mt-3">
            <p>- Radio</p>
          </div>
          <div class="col-3 mt-3">
            <p>- CheckBox</p>
          </div>
          <div class="col-3 mt-3">
            <p>- 下拉選單</p>
          </div>
          <div class="col-3 mt-3">
            <p>- Tag</p>
          </div>
          <div class="col-3 mt-3">
            <p>- AutoComplete 輸入框</p>
          </div>
        </div>
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
import { FormInput } from "vue2-common";
export default {
  name: 'Inputs',
  components: {
    ContainerSidebar,
    FormInput
  },
  data() {
    return {
      inputVal_1: ""
    }
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