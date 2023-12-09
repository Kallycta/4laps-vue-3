<script >
export default {
  name: 'PageArticles',
  props: {

  },
  data () {
    return {
      state: {
        element: []
      }
    }
  },
  created() {
    const id = this.$route.params.id
    this.getEducationSection(id)
  },
  methods: {
    async getEducationSection(id) {
      try {
        const response = await fetch(`https://corp-st-dev.4lapy.ru/services/community/?action=getEducationItem&element_id=${id}`);
        //     const response = await fetch(` https://corp-st-dev.4lapy.ru/services/community/?action=getEducationItem&element_id=351596226`);
        const data = await response.json();
        console.log('section',data)
        this.state.element = data.data
        console.log(this.state);
      }catch(e) {
        console.error(e)
      }
    },
  }
}
</script>

<template>
  <div class="content-articles" v-for="item in state.element" v-bind:key="item.ID" v-html="item.DETAIL_TEXT">
  </div>

</template>

<style >

</style>
