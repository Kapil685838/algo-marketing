<template>
  <svg
    :width="width || 50"
    :height="height || 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="text-gray-700"
    :class="{ 'hover:text-gray-900': hoverable }"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <g :filter="'url(#' + filterId + ')'">
      <path
        d="M8 24a1 1 0 1 0 0 2v-2Zm34.707 1.707a1 1 0 0 0 0-1.414l-6.364-6.364a1 1 0 0 0-1.414 1.414L40.586 25l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM8 26h34v-2H8v2Z"
        :fill="fill || '#000'"
      />
    </g>
    <defs>
      <filter
        :id="filterId"
        x="3"
        y="17.636"
        width="44"
        height="22.728"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood :flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset :dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_113" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_16_113" result="shape" />
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    },
    fill: {
      type: String,
      default: '#000000'
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    filterId() {
      return 'a' + Math.random().toString(36).substr(2, 9);
    }
  },
  methods: {
    handleMouseOver() {
      if (this.hoverable) {
        this.$el.classList.add('text-gray-900');
      }
    },
    handleMouseOut() {
      if (this.hoverable) {
        this.$el.classList.remove('text-gray-900');
      }
    }
  }
};
</script>
