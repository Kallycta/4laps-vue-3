<script>
export default {
  name: "Component-Accordion",
  components: {},
  props: {
    item: Object,
    index: Number,
    likes: Number,
    alreadyLiked: Boolean,
    views: Number,
    alreadyViewed: Boolean,
  },
  emits: ["changeAmountLikes", "addView"],

  data() {
    return {
      isAccordionHide: true,
      testHtml: `<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>`,
    };
  },
  methods: {
    onClickLikes(id) {
      if (this.alreadyLiked) {
        this.$emit("changeAmountLikes", id, "removeLike");
        this.removeLike(id);
      } else {
        this.$emit("changeAmountLikes", id, "addLike");
        this.addLike(id);
      }
    },

    toggleAccordion(id) {
      if (this.isAccordionHide && !this.alreadyViewed) {
        this.$emit("addView", id);
        this.addView(id);
      }
      this.isAccordionHide = !this.isAccordionHide;
    },
    async addLike(id) {
      try {
        const response = await fetch(
          `/services/community/?action=addLike&element_id=${id}`
        );
        const data = await response;
      } catch (e) {
        console.error(e);
      }
    },
    async addView(id) {
      try {
        const response = await fetch(
          `/services/community/?action=addView&element_id=${id}`
        );
        const data = await response;
      } catch (e) {
        console.error(e);
      }
    },
    async removeLike(id) {
      try {
        const response = await fetch(
          `/services/community/?action=removeLike&element_id=${id}`
        );
        const data = await response;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<template>
  <div class="community-expert-container-expand">
    <div class="community-expert-question-expand">
      <div class="community-expert-question-expand_visible">
        <div class="community-expert-question-expand_visible_text">
          {{ item.NAME }}
        </div>
        <div class="community-expert-question-expand_visible_container">
          <div class="community-expert-question-expand_visible_like">
            <svg
              v-on:click="onClickLikes(item.ID)"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7406 10.0641C18.6248 9.097 19.1187 7.76784 18.9755 6.3246C18.7532 4.05312 16.9157 2.22304 14.6484 2.0197C12.6478 1.84116 10.8745 2.89259 9.99521 4.50444C9.11596 2.89755 7.34756 1.84612 5.35195 2.02962C3.08959 2.23296 1.25204 4.05808 1.02482 6.3246C0.861811 7.96126 1.51384 9.44913 2.62526 10.4311L9.10608 16.8984C9.53583 17.3299 10.2323 17.3348 10.667 16.9133L17.375 10.4212C17.4788 10.327 17.5825 10.2327 17.6764 10.1286L17.7455 10.0641H17.7406Z"
                :fill="alreadyLiked ? '#FF6A00' : '#C4C4C4'"
              />
            </svg>
            <div>{{ likes }}</div>
          </div>
          <div class="community-expert-question-expand_visible_viewing">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 13.3333C11.0417 13.3333 11.9271 12.9687 12.6563 12.2395C13.3855 11.5103 13.75 10.6249 13.75 9.58325C13.75 8.54159 13.3855 7.65617 12.6563 6.927C11.9271 6.19784 11.0417 5.83325 10 5.83325C8.95837 5.83325 8.07296 6.19784 7.34379 6.927C6.61462 7.65617 6.25004 8.54159 6.25004 9.58325C6.25004 10.6249 6.61462 11.5103 7.34379 12.2395C8.07296 12.9687 8.95837 13.3333 10 13.3333ZM10 11.8333C9.37504 11.8333 8.84379 11.6145 8.40629 11.177C7.96879 10.7395 7.75004 10.2083 7.75004 9.58325C7.75004 8.95825 7.96879 8.427 8.40629 7.9895C8.84379 7.552 9.37504 7.33325 10 7.33325C10.625 7.33325 11.1563 7.552 11.5938 7.9895C12.0313 8.427 12.25 8.95825 12.25 9.58325C12.25 10.2083 12.0313 10.7395 11.5938 11.177C11.1563 11.6145 10.625 11.8333 10 11.8333ZM10 15.8333C7.97226 15.8333 6.12504 15.2673 4.45837 14.1353C2.79171 13.0034 1.58337 11.486 0.833374 9.58325C1.58337 7.68047 2.79171 6.16311 4.45837 5.03117C6.12504 3.89922 7.97226 3.33325 10 3.33325C12.0278 3.33325 13.875 3.89922 15.5417 5.03117C17.2084 6.16311 18.4167 7.68047 19.1667 9.58325C18.4167 11.486 17.2084 13.0034 15.5417 14.1353C13.875 15.2673 12.0278 15.8333 10 15.8333Z"
                :fill="alreadyViewed ? '#FF6A00' : '#C4C4C4'"
              />
            </svg>
            <div>{{ views }}</div>
          </div>
          <div
            class="community-expert-question-expand_visible_plus"
            v-on:click="toggleAccordion(item.ID)"
          >
            <svg
              v-if="isAccordionHide === true"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#FF6A00" />
              <path d="M15 8V22.5" stroke="white" stroke-width="2" />
              <path d="M22.5 15L8 15" stroke="white" stroke-width="2" />
            </svg>

            <svg
              v-if="isAccordionHide === false"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#FF6A00" />
              <path d="M22.5 15L8 15" stroke="white" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="community-expert-question-expand_hidden accordion"
        :class="{ accordiooon: isAccordionHide === false }"
      >
        <div
          class="community-expert-question-expand_hidden-container"
          v-if="isAccordionHide === false"
        >
          <div class="community-expert-question-expand_hidden-divider"></div>
          <div class="community-expert-question-expand_hidden_text">
            {{ item.PROPERTY_ANSWER_VALUE.TEXT }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
