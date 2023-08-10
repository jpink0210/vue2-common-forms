<template>
  <div class="forms">
    <div class="container">
      <div class="title rounded bg-white p-4 text-primary h1">Vue2 Forms</div>
    </div>
    <ContainerSidebar class="mt-4">
      <template slot="main">
        <div class="main-content">

          <FormsRow>
            <template slot="title">中文姓名</template>
            <template>
              <div class="col col-10">
                <FormInput
                  class="main-content__form-control"
                  v-model="$v.chiName.$model"
                  :clearable="$v.chiName.$model.length > 0"
                  @clear="$v.chiName.$model = ''"
                  :error="$v.chiName.$error"
                >
                  <template slot="error">必填, 字數不得超過  字</template>
                </FormInput>
              </div>
            </template>
          </FormsRow>
          
          <FormsRow>
            <template slot="title">英文姓名</template>
            <template>
              <div class="col col-10">
                <FormInput
                  class="main-content__form-control"
                  v-model="$v.engName.$model"
                  :clearable="$v.engName.$model.length > 0"
                  @clear="$v.engName.$model = ''"
                  :error="$v.engName.$error"
                >
                  <template slot="error">必填, 字數不得超過  字</template>
                </FormInput>
              </div>
            </template>
          </FormsRow>

          <FormsRow>
            <template slot="title">手機號碼</template>
            <template>
              <div class="col col-10">
                <FormInput
                  class="main-content__form-control"
                  v-model="$v.cellphone.$model"
                  :clearable="$v.cellphone.$model.length > 0"
                  @clear="$v.cellphone.$model = ''"
                  :error="$v.cellphone.$error"
                >
                  <template slot="error">必填, 字數不得超過 10 字</template>
                </FormInput>
              </div>
            </template>
          </FormsRow>

          <FormsRow>
            <template slot="title">市內電話</template>
            <template>
              <div class="col col-3">
                <FormInput
                  class="main-content__form-control"
                  v-model="$v.phone.first.$model"
                  :clearable="$v.phone.first.$model.length > 0"
                  @clear="$v.phone.first.$model = ''"
                  :error="$v.phone.first.$error"
                  @blur="$v.phone.first.$touch"

                >
                  <template slot="error">必填</template>
                </FormInput>
              </div>
              <div class="col col-7">
                <FormInput
                  class="main-content__form-control"
                  v-model="$v.phone.last.$model"
                  :clearable="$v.phone.last.$model.length > 0"
                  @clear="$v.phone.last.$model = ''"
                  :error="$v.phone.last.$error"
                >
                  <template slot="error">必填</template>
                </FormInput>
              </div>
            </template>
          </FormsRow>
       
     
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
import { validations } from "./validations";

import ContainerSidebar from "components/shared/ContainerSidebar";
import {
  FormInput,
  // FormRadio,
  // FormCheckbox,
  // Select,
  // SelectMultiple,
  // Tag
} from "vue2-common";

import FormsRow from "components/FormsRow";

export default {
  name: 'Forms',
  components: {
    ContainerSidebar,
    FormInput,
    FormsRow
  },
  validations,
  data () {
    return {
      chiName: "陳大明",
      engName: "Ming Chen",
      cellphone: "0987654321",
      phone: {
        first: "",
        last: "23456789"
      },
    }
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
    .main-content {
      min-height: 1000px;
      padding: 30px 0 30px 40px;
      margin-bottom: 50px;

      &__form-control {
        /deep/ .form-control {
          height: 50px;
          font-size: 18px;
          border-width: 2px;

        }
      }
    }
  }
  .forms-menu {
    min-height: 100px;
  }
}
</style>