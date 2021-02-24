<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">

      <md-app-toolbar class="md-primary">
       <span class="md-title">Result</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">

        <md-toolbar class="md-transparent" md-elevation="0">

          <!-- Include component  -->
          <TranslateForm @onSearchWord="onSearchWord"></TranslateForm>

        </md-toolbar>

        <md-card>

        </md-card>
      </md-app-drawer>

      <md-app-content>

        <!-- Include component  -->
        <SearchResponse :searchResponse="searchResponse"></SearchResponse>

      </md-app-content>
    </md-app>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getTranslate} from "@/Services/api.service"

import TranslateForm from "@/Dictionary/Components/TranslateForm/index.vue";
import SearchResponse from "@/Dictionary/Components/SearchResponse/index.vue";


//@ts-ignore
import SearchResponseType = SearchResponseApi.SearchResponseType;

@Component({
  components: {
    TranslateForm,
    SearchResponse
  }
})
export default class DictionaryIndex extends Vue {


  public searchResponse: SearchResponseType = {list:[]};

  async onSearchWord(word: string) {
    word.length > 1 && (this.searchResponse = await getTranslate(word));
  }

}//
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 99vh;
  height: 99vh;
  border: 1px solid rgba(#000, .12);
}
</style>
