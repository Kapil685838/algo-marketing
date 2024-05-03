<!-- <template>
    <section class="min-h-screen w-screen relative">
      <ConfettiComponent />
      <div class="title">
        <h1>
            Team
        </h1>
        </div>
      <Container>
        <MemberComponent :img="img1" name="SKYBLAZE" position="Founder" />
        <MemberComponent :img="img2" name="MEGNUM" position="Co-Founder" />
        <MemberComponent :img="img3" name="MONKEY KING" position="Director" />
        <MemberComponent :img="img4" name="BLACK PANTHER" position="Manager" />
        <MemberComponent :img="img5" name="DEATHSTROKE" position="Artist" />
        <MemberComponent :img="img6" name="LAZY KONG" position="Social Media Manager" />
        <MemberComponent :img="img7" name="CYBER PUNK" position="Blockchain Specialist" />
        <MemberComponent :img="img8" name="MONK" position="Web3 Developer" />
        <MemberComponent :img="img9" name="BANANA" position="Graphic Designer" />
      </Container>
    </section>
  </template>
  
  <script>
  import ConfettiComponent from "@/components/Confetti.vue";
  import img1 from "@/assets/Nfts/bighead.svg";
  import img2 from "@/assets/Nfts/bighead-1.svg";
  import img3 from "@/assets/Nfts/bighead-2.svg"; 
  import img4 from "@/assets/Nfts/bighead-3.svg";
  import img5 from "@/assets/Nfts/bighead-4.svg"; 
  import img6 from "@/assets/Nfts/bighead-5.svg"; 
  import img7 from "@/assets/Nfts/bighead-6.svg";
  import img8 from "@/assets/Nfts/bighead-7.svg";
  import img9 from "@/assets/Nfts/bighead-8.svg";
  
  export default {
    components: {
      ConfettiComponent
    },
    data() {
      return {
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Add your CSS styles here */
    .Section{
        min-height: 100vh;
        width: 100vw;
        background-color :#fff;
        position: relative;
    }
    .title h1{
        font-size: 3em;
        text-transform: capitalize;
        color: #202020;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        border-bottom: 2px solid #202020;
        width: fit-content;
        @media (max-width: 40em){
            font-size:2em;
        }
    }
    .Container{
        width: 75%;
        margin: 2rem auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        @media (max-width: 64em){
        width: 80%;
        }
        @media (max-width: 48em){
        width: 90%;
        justify-content: center;
        }
    }

  </style>
   -->

   <template>
    <div class="Section" >
      <ConfettiComponent />
      <h1 >Team</h1>
      <div class="Container">
        <div class="Item">
            <div class="imageContainer" >
                <MemberComponent :img="img1"  class="mem" />
            </div>
            <h2 class="name">SKYBLAZE</h2>
            <h2 class="position">Founder</h2>
        </div>
            
            <MemberComponent :img="img2" name="MEGNUM" position="Co-Founder" />
            <MemberComponent :img="img3" name="MONKEY KING" position="Director" />
            <MemberComponent :img="img4" name="BLACK PANTHER" position="Manager" />
            <MemberComponent :img="img5" name="DEATHSTROKE" position="Artist" />
            <MemberComponent :img="img6" name="LAZY KONG" position="Social Media Manager" />
            <MemberComponent :img="img7" name="CYBER PUNK" position="Blockchain Specialist" />
            <MemberComponent :img="img8" name="MONK" position="Web3 Developer" />
            <MemberComponent :img="img9" name="BANANA" position="Graphic Designer" />
        
      </div>
    </div>
  </template>
  
  <script>
  import ConfettiComponent from './ConfettiComponent.vue'
  
  export default {
    components: {
      ConfettiComponent
    },
    data() {
      return {
        teamMembers: [
          { img: require('@/assets/Nfts/bighead.svg'), name: 'SKYBLAZE', position: 'Founder' },
          { img: require('@/assets/Nfts/bighead-1.svg'), name: 'MEGNUM', position: 'Co-Founder' },
          { img: require('@/assets/Nfts/bighead-2.svg'), name: 'MONKEY KING', position: 'Director' },
          { img: require('@/assets/Nfts/bighead-3.svg'), name: 'BLACK PANTHER', position: 'Manager' },
          { img: require('@/assets/Nfts/bighead-4.svg'), name: 'DEATHSTROKE', position: 'Artist' },
          { img: require('@/assets/Nfts/bighead-5.svg'), name: 'LAZY KONG', position: 'Social Media Manager' },
          { img: require('@/assets/Nfts/bighead-6.svg'), name: 'CYBER PUNK', position: 'Blockchain Specialist' },
          { img: require('@/assets/Nfts/bighead-7.svg'), name: 'MONK', position: 'Web3 Developer' },
          { img: require('@/assets/Nfts/bighead-8.svg'), name: 'BANANA', position: 'Graphic Designer' }
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add any custom styles here */
  .Section{
        min-height: 100vh;
        width: 100vw;
        background-color :#fff;
        position: relative;
    }
    h1{
        font-size: 3em;
        text-transform: capitalize;
        color: #202020;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        border-bottom: 2px solid #202020;
        width: fit-content;
        @media (max-width: 40em){
            font-size:2em;
        }
    }
    .Container{
        width: 75%;
        margin: 2rem auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        @media (max-width: 64em){
        width: 80%;
        }
        @media (max-width: 48em){
        width: 90%;
        justify-content: center;
        }
    }
    .item{
        width: calc(20rem - 4vw);
        padding: 1rem 0;
        color: #202020;
        margin: 2rem 1rem;
        position: relative;
        z-index:5;

        backdrop-filter: blur(4px);

        border: 2px solid #202020;
        border-radius: 20px;

        &:hover{
        img{
            transform: translateY(-2rem) scale(1.2);
        }
        }

        @media (max-width: 30em){
        width: 70vw;
        }
    }
    .imageContainer{
        width: 80%;
margin: 0 auto;
background-color:#EEEDDE;
border: 1px solid  #202020;
padding: 1rem;

border-radius: 20px;
cursor: pointer;


    }
    .mem{
  width: 100%;
  height: auto;
  transition: all 0.3s ease; 
}
.name{
    font-size:1.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color:#202020;
    margin-top: 1rem;
    }
    .postion{
        font-size:1em;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        color: #202020;
        font-weight: 400;
    }
  </style>
  