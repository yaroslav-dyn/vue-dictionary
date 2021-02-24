declare namespace SearchResponseApi {

   interface List {
    author: string;
    current_vote: string;
    defid: number;
    definition: string;
    example: string;
    permalink: string;
    sound_urls: any[];
    thumbs_down: number;
    thumbs_up: number;
    word: string;
    written_on: Date;
  }

  export interface SearchResponseType {
    list: List[] | null;
  }
}
