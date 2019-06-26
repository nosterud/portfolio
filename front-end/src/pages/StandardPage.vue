<template>
  <div class="bannerImg">
    <img v-if="pages[0].banner.asset._ref" :src="imageUrlFor(pages[0].banner.asset._ref).ignoreImageParams()"/>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

var query = `
  *[_type == "standardPage"]{
    _id,
    title,
    banner
  }[0...50]`


export default {
  name: 'StandardPage',
  data() {
    return {
      pages: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    }, 

    fetchData(){
      this.error = this.page = null;
      sanity.fetch(query).then(
        pages => {
          this.pages = pages;
          this.title = pages[0].title;
          console.log('success', pages, 'bannerimg', pages[0].banner.asset._ref);
          console.log(this.title)
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
  .bannerImg {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    align-items: center;
    justify-content: center;
  }

  .title {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 6.5em;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
