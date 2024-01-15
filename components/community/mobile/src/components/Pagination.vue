<template>
  <div class="community-expert__pagination">
    <div class="community-expert__pagination-contaiter-item">
      <div
        v-for="(page, index) in pages"
        v-bind:key="index"
        class="community-expert__pagination-item"
      >
        <button
          type="button"
          v-on:click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{
            'community-expert__pagination-active': isPageActive(page.name),
          }"
          :aria-label="`Go to page number ${page.name}`"
        >
          {{ page.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component-Pagination",
  data: function () {
    return {
      isAccordionHide: true,
    };
  },
  methods: {
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },

    isPageActive(page) {
      return this.currentPage === page;
    },
  },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const range = [];

      console.log("start", this.startPage);
      console.log("endPage", this.endPage);

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        console.log(i);
        if (i !== 0) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          });
        }
      }
      return range;
    },
    startPage() {
      console.log("currentPage", this.currentPage);
      console.log("totalPages", this.totalPages);
      console.log("maxVisibleButtons", this.maxVisibleButtons);
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return (
          this.totalPages -
          (this.maxVisibleButtons > this.totalPages
            ? this.totalPages
            : this.maxVisibleButtons) +
          1
        );
      }

      return this.currentPage - 1;
    },
    endPage() {
      console.log("currentPage", this.currentPage);
      console.log("totalPages", this.totalPages);
      console.log("maxVisibleButtons", this.maxVisibleButtons);
      return Math.min(
        this.startPage +
          (this.maxVisibleButtons > this.totalPages
            ? this.totalPages
            : this.maxVisibleButtons) -
          1,
        this.totalPages
      );
    },

    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
};
</script>

<style></style>
