<template>
    <h1 :style="{
      fontFamily: 'Akaya Telivigala, cursive',
      fontSize: fontSize,
      color: color,
      transition: 'all 0.2s ease'
    }"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    class="cursor-pointer"
    >
      {{ text }}
    </h1>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      fontSize: {
        type: String,
        default: '4rem' // default font size can be adjusted based on your design
      },
      color: {
        type: String,
        default: '#000000' // default text color can be adjusted based on your design
      }
    },
    methods: {
      handleMouseOver() {
        this.$refs.heading.style.transform = 'scale(1.1)';
      },
      handleMouseOut() {
        this.$refs.heading.style.transform = 'scale(1)';
      }
    }
  };
  </script>
  
  <style scoped>
  /* You can add any global or scoped styles here */
  </style>
  