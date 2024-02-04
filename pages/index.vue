<template>
    <div class="bg-primary group">
        <div class="container mx-auto h-[83vh] flex flex-col items-center justify-center">
            <div class="text-5xl text-center font-medium tracking-normal">
                <p class="text-6xl">We Are <span class="font-black group-has-hover:bg-black">Marketing Mafias</span></p>
                <p>Skilled enough to know <span class="font-black">better</span> </p>
                <p>Wild enough to think <span class="font-black">bigger</span></p>
            </div>
        </div>
    </div>

    <div class="">
        <div class="flex min-h-[80vh]">
            <div class="w-1/2 bg-[url('/images/manipal.png')] bg-cover bg-no-repeat bg-center 
            before:content-[''] before:w-full before:h-full before:bg-[#00000055] before:block">
            </div>
            <div class="w-1/2">
                <div class="p-5 h-full flex justify-center items-center text-center">
                    <div>
                        <p>MANIPAL HOSPITALS</p>
                        <img src="/images/manipal2.jpg" alt="">
                        <p>An ode to those who protect hope.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-72">
        <img src="/images/two-paperplane.png" class="img-fluid" alt="">
        <div class="container mx-auto">
            <div class="grid grid-cols-3 gap-8">
                
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                
            </div>
        </div>
        <img src="/images/single-paperplane.png" class="absolute w-[66vw]" alt="">

    </div>
</template>

<style>
[rel="active-featuredproject-1"] {
    background: url('https://socialpanga.com/wp-content/uploads/2021/07/manipal.png') no-repeat center/ cover;
}

[rel="active-featuredproject-2"] {
    background: url('https://socialpanga.com/wp-content/uploads/2020/12/SP-HomePage-Design-Images-11.jpg') no-repeat center/ cover;
}

[rel="active-featuredproject-3"] {
    background: url('https://socialpanga.com/wp-content/uploads/2021/04/bengaluru.png') no-repeat center/ cover;
}

[rel="active-featuredproject-4"] {
    background: url('https://socialpanga.com/wp-content/uploads/2021/07/MamaEarth_LeftSide-1.jpg') no-repeat center/ cover;
}

[rel="active-featuredproject-5"] {
    background: url('https://socialpanga.com/wp-content/uploads/2021/08/tint.png') no-repeat center/ cover;
}

[rel="active-featuredproject-6"] {
    background: url('https://socialpanga.com/wp-content/uploads/2021/04/SP-HomePage-Design-Images-09.jpg') no-repeat center/ cover;
}

[rel="active-featuredproject-7"] {
    background: url('https://socialpanga.com/wp-content/uploads/2021/02/cult-featured-large.jpg') no-repeat center/ cover;
}
</style>


