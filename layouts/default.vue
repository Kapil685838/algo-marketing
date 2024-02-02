<template>
  <div>
    <header
      id="header"
      class="transition-all ease-in-out duration-300 border border-bottom-1 sticky top-0 bg-white py-2"
    >
      <Navbar />
    </header>
    <div class="container mx-auto">
      <slot />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
function handleScroll() {
  if(window.scrollY <= 100){
    document.getElementById("header").classList.add('py-2');
  } else {
    document.getElementById("header").classList.remove('py-2');
  }
}

if (process.client) {
  window.addEventListener('scroll', handleScroll);
}
</script>
