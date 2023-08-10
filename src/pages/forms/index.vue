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
                  <template slot="error">必填, 字數不得超過 20 字</template>
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
                  <template slot="error">必填, 字數不得超過 40 字</template>
                </FormInput>
              </div>
            </template>
          </FormsRow>

          <FormsRow>
            <template slot="title">性別</template>
            <template>
              <div class="col col-10">
                <FormRadio class="mr-4" v-model="sex" value="1"> 男 </FormRadio>
                <FormRadio class="mr-4" v-model="sex" value="2"> 女 </FormRadio>
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

          <FormsRow>
            <template slot="title">駕駛執照</template>
            <template>
              <div class="col col-10">
                <SelectMultiple
                  :select-options="options.drivingLicense"
                  class="position-relative"
                  :max="3"
                  max-tip-text="已達上限"
                  select-placeholder="點擊選取"
                  v-model="$v.drivingLicense.$model"
                  :error="$v.drivingLicense.$error"
                  @blur="$v.drivingLicense.$touch"
                >
                  <template slot="error">必填</template>
                </SelectMultiple>
              </div>
            </template>
          </FormsRow>

          <FormsRow>
            <template slot="title">交通工具</template>
            <template>
              <div class="col col-10">
                <SelectMultiple
                  :select-options="options.transport"
                  class="position-relative"
                  :max="2"
                  max-tip-text="已達上限"
                  select-placeholder="點擊選取"
                  v-model="$v.transport.$model"
                  :error="$v.transport.$error"
                  @blur="$v.transport.$touch"
                >
                  <template slot="error">必填</template>
                </SelectMultiple>
              </div>
            </template>
          </FormsRow>

          <FormsRow>
            <template slot="title">工作用具</template>
            <template>
              <div class="col col-10">
                <FormCheckbox  :localValue="tools" :value="1">平板</FormCheckbox>
                <FormCheckbox  :localValue="tools" :value="2">雙螢幕</FormCheckbox>
                <FormCheckbox  :localValue="tools" :value="3">繪圖板</FormCheckbox>
                <FormCheckbox  :localValue="tools" :value="4">機械鍵盤</FormCheckbox>
              </div>
            </template>
          </FormsRow>
          
          <FormsRow>
            <template slot="title">工作資歷</template>
           
          </FormsRow>

          <FormsRow>
            <template slot="title">任職期間</template>
            <template>
              <div class="col">
                <div class="row">
                  <div class="col col-3">
                      <FormInput
                        class="main-content__form-control"
                        v-model="$v.duration.startYear.$model"
                        :error="$v.duration.startYear.$error || !$v.duration.yymmDurationValid"
                        placeholder="開始年份"
                      >
                        <template slot="error">
                          <p v-if="!$v.duration.yymmDurationValid">結束時間要大於開始時間</p>
                          <p v-else>數字介於 1960 ~ 2023</p>
                        </template>
                      </FormInput>
                  </div>
                  
                  <div class="col col-3">
                    <Select
                      :select-options="options.month"
                      v-model="$v.duration.startMonth.$model"
                      :selectValue="[]"
                      select-placeholder=""
                      class="position-relative"
                      @change="selectStartMonth"
                    />
                  </div>
                  <div class="col col-3">
                      <FormInput
                        class="main-content__form-control"
                        v-model="$v.duration.endYear.$model"
                        :error="$v.duration.endYear.$error"
                        placeholder="結束年份"
                      >
                        <template slot="error">
                          <p>數字介於 1960 ~ 2023</p>
                        </template>
                      </FormInput>

                  </div>
                  <div class="col col-3">
                    <Select
                      :select-options="options.month"
                      v-model="$v.duration.endMonth.$model"
                      :selectValue="[]"
                      select-placeholder=""
                      class="position-relative"
                      @change="selectEndMonth"
                    />
                  </div>
                </div>
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
  FormRadio,
  FormCheckbox,
  Select,
  SelectMultiple,
  // Tag
} from "vue2-common";

import FormsRow from "components/FormsRow";

export default {
  name: 'Forms',
  components: {
    ContainerSidebar,
    FormsRow,
    FormRadio,
    Select,
    FormInput,
    FormCheckbox,
    SelectMultiple
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
      drivingLicense: [{ text: "職業小型車駕照", value: 8 }, { text: "職業大貨車駕照", value: 9 }],
      transport: [{ "text": "普通小型車", "value": 4 }, { "text": "大型重型機車", "value": 3 } ],
      tools: [],
      sex: "1",
      duration: {
        startYear: null,
        startMonth: [{ text: "1", value: "1" }],
        endYear: null,
        endMonth: [{ text: "1", value: "1" }],
      },
      stillWork: false,
      options: {
        drivingLicense: [
          { text: "輕型機車駕照", value: 1 },
          { text: "普通重型機車駕照", value: 2 },
          { text: "大型重型機車駕照", value: 3 },
          { text: "普通小型車駕照", value: 4 },
          { text: "普通大貨車駕照", value: 5 },
          { text: "普通大客車駕照", value: 6 },
          { text: "普通聯結車駕照", value: 7 },
          { text: "職業小型車駕照", value: 8 },
          { text: "職業大貨車駕照", value: 9 },
          { text: "職業大客車駕照", value: 10 },
          { text: "職業聯結車駕照", value: 11 },
        ],
        transport: [
          { text: "輕型機車", value: 1 },
          { text: "普通重型機車", value: 2 },
          { text: "大型重型機車", value: 3 },
          { text: "普通小型車", value: 4 },
          { text: "普通大貨車", value: 5 },
          { text: "普通大客車", value: 6 },
          { text: "普通聯結車", value: 7 },
          { text: "職業小型車", value: 8 },
          { text: "職業大貨車", value: 9 },
          { text: "職業大客車", value: 10 },
          { text: "職業聯結車", value: 11 },
        ],
        tools: [
          { text: "平板", value: "1" },
          { text: "雙螢幕", value: "2" },
          { text: "繪圖板", value: "3" },
          { text: "機械鍵盤", value: "4" },
        ],
        month: [
          { text: "1", value: "1" },
          { text: "2", value: "2" },
          { text: "3", value: "3" },
          { text: "4", value: "4" },
          { text: "5", value: "5" },
          { text: "6", value: "6" },
          { text: "7", value: "7" },
          { text: "8", value: "8" },
          { text: "9", value: "9" },
          { text: "10", value: "10" },
          { text: "11", value: "11" },
          { text: "12", value: "12" },
        ],
      } 

    }
  },
  mounted: function () {
  },
  methods: {
    selectStartMonth(modal) {
      this.duration.startMonth = [modal];
    },
    selectEndMonth(modal) {
      this.duration.endMonth = [modal];
    },
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

          &.form-input::placeholder {
            color: $gray-600;

          }
        }
      }
    }
  }
  .forms-menu {
    min-height: 100px;
  }
}
</style>