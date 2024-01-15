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
    // const id = this.$route.query.id;
    this.getEducationSection(id)
  },
  methods: {
    async getEducationSection(id) {
      try {
        const response = await fetch(`/services/community/?action=getEducationItem&element_id=${id}`);
        const data = await response.json();
        this.state.element = data.data

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
