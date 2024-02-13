<template>
  <div>
    <Up />
    <div class="font-[montserrat]">
      <header id="header"
        class="z-50 transition-all ease-in-out duration-300 border border-b border-[#dee2e6] sticky top-0 bg-white py-2">
        <Navbar />
      </header>
      <div class="main-content">
        <slot />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup>
function handleScroll() {
  if (window.scrollY <= 100) {
    document.getElementById("header").classList.add('py-2');
  } else {
    document.getElementById("header").classList.remove('py-2');
  }
}

if (process.client) {
  window.addEventListener('scroll', handleScroll);
}
</script>
