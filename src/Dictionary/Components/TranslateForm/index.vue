<template>
  <form novalidate class="search_word-form md-layout" @submit.prevent="onSearchWord">
    <md-card-header>
      <div class="md-title">Search word:</div>
    </md-card-header>

    <md-card-content>

      <md-field>
        <label></label>
        <md-input v-model="searchWord"></md-input>
      </md-field>

    </md-card-content>

    <md-card-actions>
      <md-button :disabled="searchWord < 1" @click="onSearchWord" class="md-raised md-primary" > Go </md-button>
    </md-card-actions>

  </form>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class TranslateForm extends Vue {

  public searchWord = '';

  async onSearchWord() {
    this.$emit('onSearchWord', this.searchWord);
  }


}

</script>

<style scoped>

</style>
