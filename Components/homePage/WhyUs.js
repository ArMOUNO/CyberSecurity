
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
                  <div class="flex flex-col md:flex-row  items-center lg:gap-x-32 ">
                    <img class="lg:w-[500px] w-[380px] pb-12" src="./assets/images/whyTechno.png" alt="Why Technology Image">
                    <div class="flex flex-col bolder text-xl pl-3 items-start">
                        <div class="flex gap-x-3 items-center justify-center w-[350px] lg:w-[500px] h-28 px-3 py-12 hover:bg-slate-50 cursor-pointer rounded-md hover:border-l-4 hover:shadow-md hover:border-cyan-400 group">
                              <img class="w-16" src="./assets/images/whyChild (1).png" alt="">
                              <div>
                                <p class="lg:text-xl text-lg">Tailored Cybersecurity Solutions</p>
                                <p class="thinText lg:text-sm text-xs opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-28">
                                  Every business is unique. Our customized security plans are designed to meet your specific needs, ensuring optimal protection for your digital assets.
                                </p>
                              </div>
                            </div>
                            
                            
                            <div class="flex gap-x-3 items-center justify-center w-[350px] lg:w-[500px] h-28 px-3 py-12 hover:bg-slate-50 cursor-pointer rounded-md hover:border-l-4 hover:shadow-md hover:border-cyan-400 group">
                              <img class="w-16" src="./assets/images/whyChild (2).png" alt="">
                              <div>
                                <p class="lg:text-xl text-lg">Cutting-Edge Technology</p>
                                <p class="thinText lg:text-sm text-xs opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-28">
                                  We leverage the latest advancements in technology to provide state-of-the-art cybersecurity solutions, ensuring your systems remain resilient against emerging threats.
                                </p>
                              </div>
                            </div>
                            
                            <div class="flex gap-x-3 items-center justify-center w-[350px] lg:w-[500px] h-28 px-3 py-12 hover:bg-slate-50 cursor-pointer rounded-md hover:border-l-4 hover:shadow-md hover:border-cyan-400 group">
                              <img class="w-16" src="./assets/images/whyChild (3).png" alt="">
                              <div>
                                <p class="lg:text-xl text-lg">24/7 Security Monitoring</p>
                                <p class="thinText lg:text-sm text-xs opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-28">
                                  Our team provides round-the-clock security monitoring to ensure your business is protected at all times. With real-time threat detection and response, you can focus on growing your business while we safeguard it.
                                </p>
                              </div>
                            </div>
                            
                            <div class="flex gap-x-3 items-center justify-center w-[350px] lg:w-[500px] h-28 px-3 py-12 hover:bg-slate-50 cursor-pointer rounded-md hover:border-l-4 hover:shadow-md hover:border-cyan-400 group">
                              <img class="w-16" src="./assets/images/whyChild (4).png" alt="">
                              <div>
                                <p class="lg:text-xl text-lg">Expert Cybersecurity Team</p>
                                <p class="thinText lg:text-sm text-xs opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-28">
                                  Our team of cybersecurity experts brings years of experience and knowledge to the table, offering unparalleled guidance and support to protect your digital assets against ever-evolving threats.
                                </p>
                              </div>
                            </div>
                            
                    </div>
                  </div>
            </div>
          </section>
    `;
};

WhyUs();

  //  <div>
  //   <section class="flex justify-center WhySec rounded-md textBanner   ">
  //     <div class="w-fit space-x-3 md:mt-36 m-9 h-28 bg-black bg-opacity-15 rounded-lg backdrop-blur-md shadow-lg text-white  flex flex-col md:flex-row   items-center justify-between p-4">
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