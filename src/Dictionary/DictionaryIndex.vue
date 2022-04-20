<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">

      <md-app-toolbar class="md-primary">
        <span class="md-title">Results: </span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">

        <md-toolbar class="md-transparent" md-elevation="0">

          <div>
            <md-badge :class="{'md-primary': checkApiStatus()}" :md-content="checkApiStatus() ? '+' : '-'" md-dense>
              <md-button class="md-icon-button">
                <span>API</span>
              </md-button>
            </md-badge>
          </div>

          <!-- Include component  -->
          <TranslateForm @onSearchWord="onSearchWord"></TranslateForm>

        </md-toolbar>

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
import SearchResponseType = SearchResponseApi.SearchResponseType;


@Component({
  components: {
    TranslateForm,
    SearchResponse
  }
})
export default class DictionaryIndex extends Vue {

  public searchResponse: SearchResponseType = {list: []};

  async onSearchWord(word: string) {
    word.length > 1 && (this.searchResponse = await getTranslate(word));

    let carr = JSON.parse(<string>localStorage.getItem("wordsArray")) ? JSON.parse(<string>localStorage.getItem("wordsArray")) : [];
    if (!carr.includes(word)) {
      carr.push(word);
      localStorage.setItem("wordsArray", JSON.stringify(carr));
    }
  }

  async checkApiStatus() {
    return await getTranslate('status');
  }

}
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 99vh;
  height: 99vh;
  border: 1px solid rgba(#000, .12);
}
</style>
