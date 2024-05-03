<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    :width="width || 16"
    :height="height || 16"
    fill="none"
    class="text-gray-600"
    :class="{ 'hover:text-gray-800': hoverable }"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <path
      fill-rule="evenodd"
      d="M0.5,8.5v-1h15v1Z"
    ></path>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 16
    },
    height: {
      type: Number,
      default: 16
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleMouseOver() {
      if (this.hoverable) {
        this.$el.classList.add('text-gray-800');
      }
    },
    handleMouseOut() {
      if (this.hoverable) {
        this.$el.classList.remove('text-gray-800');
      }
    }
  }
};
</script>
