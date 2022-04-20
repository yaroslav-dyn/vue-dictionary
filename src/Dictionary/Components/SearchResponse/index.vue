<template>
  <div class="search_result__page" v-if="searchResponse && searchResponse.list">
    <md-card v-for="(res, index) in searchResponse.list" v-bind:key="index">
      <md-card-header>
        <small class="public_date">
          {{ res.written_on | formatDate('YYYY-MM-DD') }}
        </small>
        <div class="md-title">
          <div class="definition">
            {{ res.definition }}
          </div>
        </div>
      </md-card-header>
      <md-card-content>
        <div class="example">
          {{ res.example }}
        </div>
        <div v-for="(ad, index) in res.sound_urls" :key="index">
          <figure v-if="ad">
            <figcaption>Sound:</figcaption>
            <audio anonymous controls :src="ad"></audio>
          </figure>
        </div>
      </md-card-content>
      <md-card-actions>
        <a :href="res.permalink" target="_blank"> {{ res.permalink }} </a>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";
//@ts-ignore

import SearchResponseType = SearchResponseApi.SearchResponseType;

@Component
export default class SearchResponse extends Vue {
  @Prop() private searchResponse!: SearchResponseType
}
</script>

<style lang="scss" scoped>
.search_result__page {
  .public_date {
    opacity: 0.6;
  }
  .definition {
    font-size: 18px;
  }
}
</style>
