
const WhyUs = () => {
    const navbarContainer = document.getElementById("WhyUs");
    navbarContainer.innerHTML = WhyUsBar();
};

// const img = '../assets/logo.png';

const WhyUsBar = () => {
  return `
      <section class="md:mt-[170px] mt-[100px] pb-28">
        <div class="flex flex-col gap-y-9 items-center">
              <p class="lg:text-3xl md:text-2xl text-xl bolder md:mb-[100px]">Why Work with Techno Path</p> 
              <div class="md:flex items-center lg:gap-x-32 ">
                <img class="lg:w-[500px] w-[400px] pb-12" src="./assets/images/whyTechno.png" alt="Why Technology Image">
                <div class="flex flex-col bolder text-xl pl-3 gap-y-7 items-start">
                    <div class="flex gap-x-3 items-center justify-center w-[375px] lg:w-[500px] h-20 px-3 py-12 bg-slate-50 rounded-md border-l-4 shadow-md border-cyan-400  ">
                      <img class="w-16" src="./assets/images/whyChild (1).png" alt="">
                    <div>
                      <p>
                        Tailored Cybersecurity Solutions
                      </p>
                      <p>
                        <p class="thinText text-sm">
                          Every business is unique. Our customized security plans are designed to meet your specific needs, ensuring optimal protection for your digital assets.
                        </p>
                      </p>
                    </div>
                    </div>
                    <div class="flex gap-x-3 items-center justify-center ">
                      <img class="w-16" src="./assets/images/whyChild (2).png" alt=""><p>
                        Cutting-Edge Technology
                      </p></div>
                    <div class="flex gap-x-3 items-center justify-center ">
                      <img class="w-16" src="./assets/images/whyChild (3).png" alt=""><p>
                        24/7 Security Monitoring
                      </p></div>
                    <div class="flex gap-x-3 items-center justify-center ">
                      <img class="w-16" src="./assets/images/whyChild (4).png" alt=""><p>
                        Expert Cybersecurity Team
                      </p></div>
                </div>
              </div>
        </div>
      </section>
    `;
};

WhyUs();

  //  <div>
  //   <section class="flex justify-center WhySec rounded-md textBanner   ">
  //     <div class="w-fit space-x-3 md:mt-36 m-9 h-fit bg-black bg-opacity-15 rounded-lg backdrop-blur-md shadow-lg text-white  flex flex-col md:flex-row   items-center justify-between p-4">
  //          <div>
  //              <img class="w-[400px]" src="./assets/images/whypic.jpg" alt="">
  //          </div>
  //          <div class="">
  //                 <p class="md:text-5xl text-2xl pt-4 md:pt-0">Why Techno Path</p>
                  
  //                 <div class="flex items-center gap-x-2 py-4">
  //                   <i class="material-icons "style="font-size: 46px;">touch_app</i>
  //                   <div>
  //                      <p class="text-[19px] font-bold">Innovative Tech</p>
  //                      <p class="text-[15px] font-thin">Leading-edge cybersecurity tools</p>
  //                   </div>
  //                 </div>
  //                 <div class="flex items-center gap-x-2 py-4">
  //                   <i class="material-icons "style="font-size: 46px;">touch_app</i>
  //                   <div>
  //                      <p class="text-[19px] font-bold">Innovative Tech</p>
  //                      <p class="text-[15px] font-thin">Leading-edge cybersecurity tools</p>
  //                   </div>
  //                 </div>
  //                 <div class="flex items-center gap-x-2 py-4">
  //                   <i class="material-icons "style="font-size: 46px;">touch_app</i>
  //                   <div>
  //                      <p class="text-[19px] font-bold">Innovative Tech</p>
  //                      <p class="text-[15px] font-thin">Leading-edge cybersecurity tools</p>
  //                   </div>
  //                 </div>
  
  //          </div>
  //     </div>  
  //    </section>
  //   </div>