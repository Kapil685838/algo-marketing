im<template>
<svg
  xmlns="http://www.w3.org/2000/svg"
  :width="width || 30"
  :height="height || 30"
  fill="none"
  class="text-blue-700"
  :class="{ 'hover:text-blue-800': hoverable }"
  @mouseover="handleMouseOver"
  @mouseout="handleMouseOut"
>
  <path
    d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM10.954 22h-2.95v-9.492h2.95V22zM9.449 11.151a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zM22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.771 1.199-1.771 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.539 1.966 3.539 4.522V22z"
  />
</svg>
</template>

<script>
export default {
props: {
  width: {
    type: Number,
    default: 30
  },
  height: {
    type: Number,
    default: 30
  },
  hoverable: {
    type: Boolean,
    default: false
  }
},
methods: {
  handleMouseOver() {
    if (this.hoverable) {
      this.$el.classList.add('text-blue-800');
    }
  },
  handleMouseOut() {
    if (this.hoverable) {
      this.$el.classList.remove('text-blue-800');
    }
  }
}
};
</script>
