
const whatWeDo = () => {
    const whatWeDocontent = document.getElementById("whatWeDo");
    whatWeDocontent.innerHTML = whatWeDoBar();
};

// const img = '../assets/logo.png';   

const whatWeDoBar = () => {
  return `
<section class="flex justify-center">
          <div class="  h-fit">
            <p class="lg:text-3xl thinText md:text-2xl bolder text-xl text-center  pb-4">Our Commitment to Excellence</p>
    <div class="grid gap-5 lg:gap-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 text-lg justify-center px-4 lg:px-16 z-40">
      <div class="shadow z-10 thinText lg:w-[377px] h-[270px] flex flex-col items-center justify-center">
        <img class="w-24  pt-5" src="/assets/images/security.png" alt="">
        <p class="font-bold text-cyan-600 text-xl">Quality Services</p>
        <p class="p-2 text-lg">We deliver superior cybersecurity solutions with a focus on exceptional quality and reliability, ensuring your business receives the highest level of protection.</p>
      </div>
      
      <div class="shadow thinText z-10  w-[377pxpx] h-[270px] flex flex-col items-center justify-center">
        <img class="w-24  pt-5" src="/assets/images/quality.png" alt="">
        <p class="font-bold text-cyan-600 text-xl">Quality Services</p>
        <p class="p-2 text-lg">Our services are designed to address even the most complex security challenges, offering customized solutions that meet the specific requirements of your business and industry.</p>
      </div>
    <div class="relative col-span-1 gap-20 md:col-span-2 lg:col-span-1 flex justify-center">
   <img class="w-[190px] z-0 top-[-60px] left-[200px] absolute hidden lg:block" src="../assets/images/circlehalf.png" alt="" />

      <div class="shadow thinText  w-[377pxpx] h-[270px] flex flex-col items-center justify-center">
        <img class="w-24  pt-5" src="/assets/images/quality.png" alt="">
        <p class="font-bold text-cyan-600 text-xl"> Services</p>
        <p class="p-2 text-lg">Embracing the latest advancements in cybersecurity, we continually innovate to stay ahead of emerging threats and provide you with state-of-the-art security solutions.</p>
      </div>
    </div>    
    </div>
      </div>
</section>
    
    `;
};

whatWeDo();