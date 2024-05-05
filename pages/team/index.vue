<template>
  <section class="section team" id="team">

    <!-- ConfettiComponent Start -->
    <!-- Confetti is Pending -->
    <!-- <ConfettiComponent /> -->
    <!-- ConfettiComponent End -->

    <h1 class="title">Team</h1>
    <div class="container">
      <div class="item" v-for="member in members" :key="member">
        <div class="image-container">
          <img :src="member.img" :alt="member.name" />
        </div>
        <h2 class="name">{{ member.name }}</h2>
        <h2 class="position">{{ member.position }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
const root = useRootStore();

const members = [
  { 
    img: "/images/Nfts/bighead.svg", 
    name: "SKYBLAZE", 
    position: "Founder" 
  },
  {
    img: "/images/Nfts/bighead-1.svg",
    name: "MEGNUM",
    position: "Co-Founder"
  },
  {
    img: "/images/Nfts/bighead-2.svg",
    name: "MONKEY KING",
    position: "Director"
  },
  {
    img: "/images/Nfts/bighead-3.svg",
    name: "BLACK PANTHER",
    position: "Manager"
  },
  {
    img: "/images/Nfts/bighead-4.svg",
    name: "DEATHSTROKE",
    position: "Artist"
  },
  {
    img: "/images/Nfts/bighead-5.svg",
    name: "LAZY KONG",
    position: "Social Media Manager"
  },
  {
    img: "/images/Nfts/bighead-6.svg",
    name: "CYBER PUNK",
    position: "Blockchain Specialist"
  },
  {
    img: "/images/Nfts/bighead-7.svg",
    name: "MONK",
    position: "Web3 Developer"
  },
  {
    img: "/images/Nfts/bighead-8.svg",
    name: "BANANA",
    position: "Graphic Designer"
  }
]
</script>

<style lang="scss" scoped>
.section.team {
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: relative;
}

.title {
  font-size: 3em;
  text-transform: capitalize;
  color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #202020;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 2em;
  }
}

.container {
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
}

.item {
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: #fff;
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid #202020;
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
}

.image-container {
  width: 80%;
  margin: 0 auto;
  background-color: #EEEDDE;
  border: 1px solid #202020;
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
}

.name {
  font-size: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #202020;
  margin-top: 1rem;
}

.position {
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: rgba(32, 32, 32, 0.9);
  font-weight: 400;
}
</style>
