
const whatWeDo = () => {
    const navbarContainer = document.getElementById("whatWeDo");
    navbarContainer.innerHTML = whatWeDoBar();
};

// const img = '../assets/logo.png';

const whatWeDoBar = () => {
  return `
    <p class="lg:text-5xl md:text-3xl  pt-12 pb-4">Our Commitment to Excellence</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center p-10 z-40">
      <div class="shadow z-10  w-[300px] h-[190px] flex flex-col items-center justify-center">
        <img class="w-16  pt-2" src="/assets/images/security.png" alt="">
        <p class="font-bold text-cyan-600">Quality Services</p>
        <p class="p-2">We deliver superior cybersecurity solutions with a focus on exceptional quality and reliability, ensuring your business receives the highest level of protection.</p>
      </div>
      
      <div class="shadow z-10  w-[300px] h-[190px] flex flex-col items-center justify-center">
        <img class="w-16  pt-2" src="/assets/images/quality.png" alt="">
        <p class="font-bold text-cyan-600">Quality Services</p>
        <p class="p-2">Our services are designed to address even the most complex security challenges, offering customized solutions that meet the specific requirements of your business and industry.</p>
      </div>
    <div class="relative col-span-1 md:col-span-2 lg:col-span-1 flex justify-center">
   <img class="w-[190px] top-[-60px] left-[160px] absolute hidden lg:block" src="../assets/images/circlehalf.png" alt="" />

      <div class="shadow z-10  w-[300px] h-[190px] flex flex-col items-center justify-center">
        <img class="w-16 z-0 pt-2" src="/assets/images/quality.png" alt="">
        <p class="font-bold text-cyan-600">Quality Services</p>
        <p class="p-2">Embracing the latest advancements in cybersecurity, we continually innovate to stay ahead of emerging threats and provide you with state-of-the-art security solutions.</p>
      </div>
    </div>    
    </div>
    
    `;
};

whatWeDo();