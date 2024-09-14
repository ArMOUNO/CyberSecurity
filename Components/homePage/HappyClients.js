
const happyClient = () => {
    const happyClientContent = document.getElementById("happyClient");
    happyClientContent.innerHTML = happyClientBar();
};

// const img = '../assets/logo.png';   

const happyClientBar = () => {
  return `
<section class="lg:mt-[60px] mt-[50px]">
    <div class="flex flex-col items-center justify-center p-14">
     <img class="w-52" src="./assets/images/handshake.png" alt="">
     <p class="lg:text-3xl md:text-2xl text-xl bolder mb-[50px]">Our Happy Clients</p>
     <div class="wrapper">
       <div class="item item1"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
       <div class="item item2"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
       <div class="item item3"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
       <div class="item item4"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
       <div class="item item5"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
       <div class="item item6"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
       <div class="item item7"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
       <div class="item item8"><img src="./assets/images/autoPlay/bmw.png" alt=""></div>
     </div>
   
   </div>
</section>
    
    `;
};

happyClient();