<template>
  <div class="app">
    <Header />
    <SearchPhoto 
      v-if="photos.length > 0"
      v-bind:photos="photos"
      v-bind:reformattedSearchStr="reformattedSearchStr" 
    />
  </div>
</template>


<script>
import Header from './components/layout/Header';
// import SearchForm from './components/SearchForm';
import SearchPhoto from './components/SearchPhoto';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';

export default {
  name: 'app',
  components: {
    Header,
    // SearchForm,
    SearchPhoto
  },
  data() {
    return {
      photos: [],
      reformattedSearchStr: "",
      api: {
        baseUrl: 'https://api.unsplash.com/photos/?client_id=b6e17d4411cecc6bbf91fe4a65ab56fb233f079cd93525f3548876a3b12237fc',
        type: 'photo',
        first_name: '',
        last_name: '',
        location: '',
        maxResults: 8
      }
    }
  },
  methods: {
    search(searchParams) {
      this.reformattedSearchStr = searchParams.join(' ');
      this.api.first_name.last_name.location = searchParams.join('+');
      const { baseUrl, type, first_name, last_name, location } = this.api;
      const apiUrl = `${baseUrl}type=${type}&first_name=${first_name}&last_name=${last_name}&location=${location}&maxResults=${maxResults}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
        this.photos = res.data.items
      }).catch(error => console.log(error))
    }
  }
};
</script>

