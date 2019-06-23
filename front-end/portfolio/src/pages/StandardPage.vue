<template>
  <div class="hello">
  </div>
</template>

<script>
import sanity from "../sanity";
// import BannerImg from "../components/BannerImg";

var query = `
*[_type=='standardPage']{title,poster{asset->{path,url}}}*[_type=='movie']{title,poster{asset->{path,url}}}`


export default {
  name: 'StandardPage',
  data() {
    return {
      pages: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(){
      this.error = this.page = null;
      sanity.fetch(query).then(
        pages => {
          this.pages = pages;
          console.log('success', pages);
        },
        error => {
          this.error = error;
          console.log('error');
        }
      );
  }
}
}
</script>
<style scoped>
</style>
