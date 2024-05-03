
<template>
    <Section >
        <Banner>

        </Banner>
        <Container>
            <Left>
                <Logo>

                </Logo>
                <IconList>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                    </a>
                </IconList>
                <MenuItems>
                    <ul>
                        <li v-for="link in root.footer.links1" >
                                    <NuxtLink  :to="link.to">{{ link.label }}</NuxtLink>
                        </li>
                    </ul>
                    
                </MenuItems>
            </Left>
        
        
            <!-- <div class="container mx-auto">
                <div class="flex flex-col md:flex-row">
                    <div class="pt-6">
                        <div class="flex md:flex-row">
                            <div class="">
                                <img class="" :src="root.footer.img" alt="footer-image">
                            </div>
                            <div class="pl-6 max-w-min md:max-w-96 w-96">
                                <p class="max-w-full md:max-w-36">{{ root.footer.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="columns-2 flex justify-around">
                        <div class="pt-6 text-left md:pl-4">
                            <ul class="mr-0 md:mr-20">
                                <li v-for="link in root.footer.links1" class="mb-5">
                                    <NuxtLink class="font-bold text-xl" :to="link.to">{{ link.label }}</NuxtLink>
                                </li>

                            </ul>
                        </div>
                        <div class="pt-6 text-left ">
                            <ul class="mr-0 md:mr-20">
                                <li v-for="link in root.footer.links2" class="mb-5">
                                    <NuxtLink class="font-bold text-xl" :to="link.to">{{ link.label }}</NuxtLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class=" pt-6 flex flex-col flex-grow">
                        <ul
                            class="flex flex-row flex- justify-evenly md:flex-col md:justify-center items-center md:justify-end md:items-center">
                            <li v-for="item in root.socialLinks" class=" mb-5">
                                <NuxtLink :to="item.to" target="_blank" rel="noopener">
                                    <img class="w-auto max-h-8 md:max-h-10 md:h-auto h-auto" :src="item.img"
                                        alt="social icons" />
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="px-12 md:pl-4 py-4 text-base text-black">{{ root.footer.endDescription }}</p>
            </div> -->
        </Container>
        <Bottom>
            <span >{{ root.footer.description }}</span>
      
      </Bottom>
    </Section>
</template>

<script setup>
import styled from 'vue-styled-components'

const Section = styled.section`
    min-height: 100vh;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
    color: ${(props) => props.theme.text};

    display: flex;
    flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};
@media (max-width: 48em) {
  width: 90%;
  h1{
    font-size: ${props => props.theme.fontxxl};
  }
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
  width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
  display: none;
}
`
const MenuItem = styled.li`
width: fit-content;
cursor: pointer;

&::after{ 
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-itms: center;

a{
  text-decoration: underline;
}
@media (max-width: 48em) {
  flex-direction: column;
  width: 100%;
span{
  margin-bottom: 1rem;
}
}
`

const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

  }
const root = useRootStore();
</script>