<template>
    <section class="w-full h-96 md:h-60 relative border-t-2 border-gray-700 bg-opacity-90 bg-gray-900 flex justify-center items-center overflow-hidden md:flex-col">
      <div class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-20">
        <!-- Your image container -->
        <img src="@/assets/Nfts/bighead.svg" alt="The Weirdos" width="7rem" class="md:w-28" />

        <img src="@/assets/Nfts/bighead-1.svg" alt="The Weirdos" class="w-40 md:w-28" />
        <img src="@/assets/Nfts/bighead-2.svg" alt="The Weirdos" class="w-40 md:w-28" />
        <img src="@/assets/Nfts/bighead-3.svg" alt="The Weirdos" class="w-40 md:w-28" />
        <img src="@/assets/Nfts/bighead-4.svg" alt="The Weirdos" class="w-40 md:w-28" />
        <img src="@/assets/Nfts/bighead-5.svg" alt="The Weirdos" class="w-40 md:w-28" />
      </div>
      
      <h1 class="text-4xl md:text-5xl text-white font-semibold z-10 w-1/3 text-center md:w-full md:py-4 md:text-center">Join the <br/> Weirdos Club</h1>
      <div class="w-1/3 flex justify-end z-10 md:w-full md:mt-2 md:justify-center">
        <button class="bg-gray-900 text-white font-semibold py-2 px-6 md:py-1 md:px-4 rounded-full transition-transform duration-200 transform hover:scale-95 hover:after">
          Join Now
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Banner'
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  /* No need to include the styled-component styles as they are translated into Tailwind CSS classes */
  
  /* Additional Tailwind CSS classes to match the styled-components styles */
  section {
    position: relative;
  }
  
  section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2px);
    height: 100%;
    border-top: 2px solid #374151;
  }
  
  /* Match the ImgContainer style */
  div > img {
    opacity: 0.2;
  }
  
  /* Match the Title style */
  h1 {
    width: 35%;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px #374151;
  }
  
  /* Match the BtnContainer style */
  div > button {
    padding: 1.5rem 3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
  }
  
  div > button:hover {
    transform: scale(0.9);
  }
  
  div > button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #1f2937;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  
  div > button:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  </style>
  