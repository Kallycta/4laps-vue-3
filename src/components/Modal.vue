<template>
  <transition name="modal">
    <div class="modal-mask" v-if="show" >
      <div class="modal-wrapper">
        <div class="modal-container" ref="modalRef">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal-component',
  props: {
  },
  data() {
    return {
      mainTnxPic: null,
      show: false
    }
  },
  created() {
    this.mainTnxPic = require('../assets/mainTnxPic.svg');
  },
  methods: {
    closeModal() {
      document.removeEventListener('mouseup', this.closeModalOnClickOutside);
      this.show = false

    },
    openModal() {
      this.show = true
      document.addEventListener('mouseup', this.closeModalOnClickOutside);
    },
    closeModalOnClickOutside(event) {
      const modal = this.$refs.modalRef;
      if (!modal.contains(event.target)) {
        document.removeEventListener('mouseup', this.closeModalOnClickOutside);
        this.show = false
      }
    },
  }

}
</script>

<style scoped>

</style>
