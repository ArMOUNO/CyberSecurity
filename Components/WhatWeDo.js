
const whatWeDo = () => {
    const navbarContainer = document.getElementById("whatWeDo");
    navbarContainer.innerHTML = whatWeDoBar();
};

// const img = '../assets/logo.png';   

const whatWeDoBar = () => {
  return `
      <div class=" h-fit">
            <p class="lg:text-5xl thicktext md:text-3xl  pt-12 pb-4">Our Commitment to Excellence</p>
    <div class="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-lg justify-center p-10 z-40">
      <div class="shadow z-10 thicktext  w-[350px] h-[250px] flex flex-col items-center justify-center">
        <img class="w-24  pt-2" src="/assets/images/security.png" alt="">
        <p class="font-bold text-cyan-600 text-xl">Quality Services</p>
        <p class="p-2 text-lg">We deliver superior cybersecurity solutions with a focus on exceptional quality and reliability, ensuring your business receives the highest level of protection.</p>
      </div>
      
      <div class="shadow thicktext z-10  w-[350px] h-[250px] flex flex-col items-center justify-center">
        <img class="w-24  pt-2" src="/assets/images/quality.png" alt="">
        <p class="font-bold text-cyan-600 text-xl">Quality Services</p>
        <p class="p-2 text-lg">Our services are designed to address even the most complex security challenges, offering customized solutions that meet the specific requirements of your business and industry.</p>
      </div>
    <div class="relative col-span-1 gap-20 md:col-span-2 lg:col-span-1 flex justify-center">
   <img class="w-[190px] z-0 top-[-60px] left-[200px] absolute hidden lg:block" src="../assets/images/circlehalf.png" alt="" />

      <div class="shadow thicktext  w-[350px] h-[250px] flex flex-col items-center justify-center">
        <img class="w-24  pt-2" src="/assets/images/quality.png" alt="">
        <p class="font-bold text-cyan-600 text-xl">Quality Services</p>
        <p class="p-2 text-lg">Embracing the latest advancements in cybersecurity, we continually innovate to stay ahead of emerging threats and provide you with state-of-the-art security solutions.</p>
      </div>
    </div>    
    </div>
      </div>
    
    `;
};

whatWeDo();