<template>
  <section class="section">

      <!-- Banner Start -->
      <div class="banner" />
      <!-- Banner End -->

      <!-- Container Start -->
      <div class="container">
          <div class="left">
              <!-- Logo -->
              <h1 class="logo">
                  <NuxtLink to="/">
                      Weirdos
                  </NuxtLink>
              </h1>
              <div class="icon-list">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <div class="facebook">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                              <path
                                  d="M15 3C8.373 3 3 8.373 3 15c0 6.016 4.432 10.984 10.206 11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C22.481 26.083 27 21.075 27 15c0-6.627-5.373-12-12-12z" />
                          </svg>
                      </div>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <div class="instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                              <path
                                  d="M9.998 3C6.139 3 3 6.142 3 10.002v10C3 23.861 6.142 27 10.002 27h10C23.861 27 27 23.858 27 19.998v-10C27 6.139 23.858 3 19.998 3h-10zM22 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-7 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
                          </svg>
                      </div>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <div class="twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                              <path
                                  d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 0 0 2.345-2.951 10.696 10.696 0 0 1-3.388 1.295 5.334 5.334 0 0 0-9.089 4.864A15.143 15.143 0 0 1 3.809 5.411a5.321 5.321 0 0 0-.721 2.683 5.33 5.33 0 0 0 2.372 4.439 5.323 5.323 0 0 1-2.416-.667v.067a5.335 5.335 0 0 0 4.279 5.23 5.336 5.336 0 0 1-2.409.092 5.34 5.34 0 0 0 4.983 3.705 10.699 10.699 0 0 1-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 0 0 8.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0 0 28 6.937z" />
                          </svg>
                      </div>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <div class="linkedin">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                              <path
                                  d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM10.954 22h-2.95v-9.492h2.95V22zM9.449 11.151a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zM22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.771 1.199-1.771 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.539 1.966 3.539 4.522V22z" />
                          </svg>
                      </div>
                  </a>
              </div>
          </div>

          <ul class="menu-items">
              <li class="menu-item" @click="() => scrollTo('home')">Home</li>
              <li class="menu-item" @click="() => scrollTo('about')">About</li>
              <li class="menu-item" @click="() => scrollTo('roadmap')">Roadmap</li>
              <li class="menu-item" @click="() => scrollTo('showcase')">Showcase</li>
              <li class="menu-item" @click="() => scrollTo('team')">Team</li>
              <li class="menu-item" @click="() => scrollTo('faq')">Faq</li>
          </ul>
      </div>
      <!-- Container End -->

      <!-- Bottom Start -->
      <div class="bottom" style="">
          <span>
              &copy; {{ new Date().getFullYear() }} Weirdos Club. All rights reserved.
          </span>
          <span>
              Made with &#10084; by <a href="https://github.com/Kapil685838" target="_blank"
                  rel="noopener noreferrer">
                  Kapil
              </a>
          </span>
      </div>
      <!-- Bottom End -->
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  let element = document.getElementById(id);

  element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  })

}
</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: relative;
  color: #202020;
  display: flex;
  flex-direction: column;
}

.container {
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #202020;

  @media (max-width: 48em) {
      width: 90%;

      h1 {
          font-size: 3em;
      }
  }
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
      width: 100%;
  }
}

.logo {
  font-family: 'Akaya Telivigala', cursive;
  font-size: 4em;
  color: #202020;
  transition: all 0.2s ease;

  &:hover {
      transform: scale(1.1);
  }

  @media (max-width: 64em) {
      font-size: 3em;
  }
}

.icon-list {
  display: flex;
  align-items: center;
  margin: 1rem auto;

  &>* {
      padding-right: 0.5rem;
      transition: all 0.2s ease;

      &:hover {
          transform: scale(1.2);
      }
  }
}

.menu-items {
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
      display: none;
  }
}

.menu-item {
  width: fit-content;
  cursor: pointer;

  &::after {
      content: ' ';
      display: block;
      width: 0%;
      height: 2px;
      background: #202020;
      transition: width 0.3s ease;
  }

  &:hover::after {
      width: 100%;
  }
}

.bottom {
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
      text-decoration: underline;
  }

  @media (max-width: 48em) {
      flex-direction: column;
      width: 100%;

      span {
          margin-bottom: 1rem;
      }
  }
}
</style>

