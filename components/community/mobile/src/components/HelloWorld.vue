<template>
  <div class="hello">1232132132321312321321</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  created() {
    const id = this.$route.params.id;
    // const id = this.$route.query.id;
    this.getEducationItems(id);
    this.getEducationSection(id);
  },
  methods: {
    async getEducationItems(id) {
      try {
        const response = await fetch(
          `/services/community/?action=getEducationItems&section_id=${id}`
        );
        const data = await response.json();
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
