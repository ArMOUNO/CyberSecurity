
const happyClient = () => {
    const happyClientContent = document.getElementById("happyClient");
    happyClientContent.innerHTML = happyClientBar();
};

// const img = '../assets/logo.png';   

const happyClientBar = () => {
  return `
<section class="lg:mt-[30px] mt-[30px] ">
    <div class="flex flex-col items-center justify-center p-14">
     <img class="w-28" src="./assets/images/handshake.png" alt="">
     <p class="lg:text-3xl md:text-2xl text-xl bolder mb-[50px]">Our Happy Clients</p>
     <div class="wrapper">
       <div class="item w-40 item1"><img src="../../assets/images/autoPlay/brac.png" alt=""></div>
       <div class="item w-40 item2"><img src="../../assets/images/autoPlay/ngt.png" alt=""></div>
       <div class="item w-40 item3"><img src="../../assets/images/autoPlay/parcel.png" alt=""></div>
       <div class="item w-40 item4"><img src="../../assets/images/autoPlay/pure.png" alt=""></div>
       <div class="item w-40 item5"><img src="../../assets/images/autoPlay/brac.png" alt=""></div>
       <div class="item w-40 item6"><img src="../../assets/images/autoPlay/ngt.png" alt=""></div>
       <div class="item w-40 item7"><img src="../../assets/images/autoPlay/parcel.png" alt=""></div>
       <div class="item w-40 item8"><img src="../../assets/images/autoPlay/pure.png" alt=""></div>
     </div>
   
   </div>
</section>
    
    `;
};

happyClient();