
const ourService = () => {
    const ourServicecontent = document.getElementById("ourService");
    ourServicecontent.innerHTML = ourServiceBar();
};

// const img = '../assets/logo.png';   

const ourServiceBar = () => {
  return `
     <section>
         <div class="flex flex-col gap-y-11 md:mx-20 ">
            <p class="text-center lg:text-2xl md:text-2xl text-lg bolder">With Quality services for you</p>
             <div class="flex flex-col md:flex-row items-center justify-start gap-12">
                     <div class="bg-white border shadow-xl  z-10 thinText w-[340px] md:w-[377px] h-[320px] flex flex-col items-center justify-center">
                        <img class="w-24  pt-5" src="/assets/images/service (1).png" alt="">
                        <p class="font-bold  text-xl" style="color: #18AEA5;">Data security</p>
                        <p class="p-2 text-lg px-3">We utilize advanced encryption and access controls to protect your data from unauthorized access and breaches, ensuring its confidentiality and integrity.</p>
                        <button class="text-white p-1"  style="background-color: #18AEA5;">See Details</button>    
                  </div>
                      <div class="bg-white border shadow-xl  z-10 thinText w-[340px] md:w-[377px] h-[320px] flex flex-col items-center justify-center">
                        <img class="w-24  pt-5" src="/assets/images/service (2).png" alt="">
                        <p class="font-bold  text-xl" style="color: #18AEA5;">Network Security</p>
                        <p class="p-2 text-lg px-3">Our comprehensive network security solutions defend against intrusions, malware, and other threats, keeping your network infrastructure robust and resilient.</p>
                        <button class="text-white p-1"  style="background-color: #18AEA5;">See Details</button>
                  </div>
             </div>
             <div class="flex flex-col md:flex-row items-center justify-end gap-12">
                  <div class="bg-white border shadow-xl  z-10 thinText w-[340px] md:w-[377px] h-[320px] flex flex-col items-center justify-center">
                     <img class="w-24  pt-5" src="/assets/images/service (3).png" alt="">
                     <p class="font-bold  text-xl" style="color: #18AEA5;">Database security</p>
                     <p class="p-2 text-lg px-3">We implement stringent security measures to secure your databases from unauthorized access, breaches, and attacks, ensuring the safety and integrity of your valuable information.</p>
                     <button class="text-white p-1"  style="background-color: #18AEA5;">See Details</button>
                   </div>
                   <div class="bg-white border shadow-xl  z-10 thinText w-[340px] md:w-[377px] h-[320px] flex flex-col items-center justify-center">
                     <img class="w-24  pt-5" src="/assets/images/service (4).png" alt="">
                     <p class="font-bold  text-xl" style="color: #18AEA5;">Cloud security</p>
                     <p class="p-2 text-lg px-3">Our cloud security solutions provide advanced protection for your cloud-based applications and data, ensuring compliance and safeguarding against potential vulnerabilities and threats.</p>
                     <button class="text-white p-1"  style="background-color: #18AEA5;">See Details</button>
                  </div>
          </div>
         </div>
     </section>

    `;
};

ourService();