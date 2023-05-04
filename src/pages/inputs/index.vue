<template>
  <div class="inputs">
    <div class="container">
      <div class="title rounded bg-white p-4 text-primary h1">Vue2 Inputs</div>
    </div>
    <ContainerSidebar class="mt-4">
      <template slot="main">
        <div class="main-content">
          <div class="col-3 mt-8">
            <p>Input Text</p>
            <FormInput
              v-model="inputVal_1"
              :clearable="inputVal_1.length > 0"
              @clear="inputVal_1 = ''"
            />
          </div>
          <div class="col-12 mt-8">
            <p>Input Radio</p>
            <div class="d-flex ml-4">
              <FormRadio class="mr-4" v-model="value_radio" :value="1"> 選項一 </FormRadio>
              <FormRadio class="mr-4" v-model="value_radio" :value="2"> 選項二 </FormRadio>
              <FormRadio class="mr-4" v-model="value_radio" :value="3"> 選項三 </FormRadio>
              <FormRadio class="mr-4" v-model="value_radio" :value="4"> 選項四 </FormRadio>
            </div>
          </div>
          <div class="col-12 mt-8">
            <p>Input CheckBox (多選)</p>
            <div>
              <FormCheckbox  :localValue="value_checkbox" :value="1">漢堡</FormCheckbox>
              <FormCheckbox  :localValue="value_checkbox" :value="2">薯條</FormCheckbox>
              <FormCheckbox  :localValue="value_checkbox" :value="3">沙拉</FormCheckbox>
              <FormCheckbox  :localValue="value_checkbox" :value="4">可樂</FormCheckbox>
            </div>
          </div>
          <div class="col-3 mt-8">
            <p>下拉選單</p>
            <Select
              :select-options="selectOptions"
              v-model="selectValue"
              select-placeholder="點擊輸入框"
              class="position-relative ml-2"
              @change="selectPureChange"
            />
          </div>
          <div class="col-6 mt-8">
            <p>下拉選單(多選)</p>
            <SelectMultiple
              :select-options="selectOptions"
              v-model="multiValue"
              class="position-relative"
              :max="3"
              max-tip-text="已達上限"
              select-placeholder="點擊選取"
            />
          </div>
          <div class="col-3 mt-8">
            <p>Tag</p>
            <div class="d-flex">
              <Tag
                v-for="(tag, index) in demoTags"
                :key="index"
                :data="tag"
                class="col-auto"
                @deleteTag="deleteTag"
                @click.prevent
              />
            </div>
          </div>
          <div class="col-3 mt-8">
            <p>AutoComplete 輸入框</p>
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
import { FormInput,
  FormRadio,
  FormCheckbox,
  Select,
  SelectMultiple,
  Tag
} from "vue2-common";

export default {
  name: 'Inputs',
  components: {
    ContainerSidebar,
    FormInput,
    FormRadio,
    FormCheckbox,
    Select,
    SelectMultiple,
    Tag
  },
  data() {
    return {
      inputVal_1: "",
      value_radio: 1,
      value_checkbox: [],
      multiValue: [],
      selectValue: [],
      selectOptions: [
        { text: "藝術", value: 1 },
        { text: "文學", value: 2 },
        { text: "科學", value: 3 },
        { text: "哲學", value: 4 },
        { text: "商業", value: 5 }
      ],
      demoTags: [
        { text: "軟體工程師", value: 2276 },
        { text: "DevOps工程師", value: 1422 },
      ]
    }
  },
  mounted: function () {
  },
  methods: {
    selectPureChange(modal) {
      this.selectValue = [modal];
    },
    deleteTag(tagObj) {
      this.demoTags = this.demoTags.filter(x => x !== tagObj);
    }
    
  }
}
</script>

<style lang="scss" scoped>
.inputs {
  .main-content {
    min-height: 1000px;
  }
  .forms-menu {
    min-height: 100px;
  }
}
</style>