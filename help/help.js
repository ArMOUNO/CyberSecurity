
const happyClient = () => {
    const happyClientContent = document.getElementById("happyClient");
    happyClientContent.innerHTML = happyClientBar();
};

// const img = '../assets/logo.png';   

const happyClientBar = () => {
  return `

    
    `;
};

happyClient();



<div class="inputGroup fullWidth">
<input type="text" name="" id="name" required="required">
<label>Subject</label>
</div>
<section class="flex flex-col items-center justify-center">
 <p class="text-center md:mb-[40px] font-bold lg:text-3xl md:text-2xl text-xl">With Quality Services for You</p>    
<div class="carousel lg:mt-1">
        <div id="listLg" class="list lg:mt-10">
            <div class="banner ">
                <img src="../../assets/images/blurSlide/img1.png" alt="Data security image" />
                <div id="intro" class="introduce ">
                    <div class="bolder text-xl md:text-2xl pb-6">Data Security</div>
                    <div class="des text-xl">
                        We utilize advanced encryption and access controls to protect your data from unauthorized access and breaches, ensuring its confidentiality and integrity.
                    </div>
                </div>
            </div>
            <div class="banner">
                <img src="../../assets/images/blurSlide/network.png" alt="Network security image" />
                <div class="introduce">
                    <div class="bolder text-xl md:text-2xl pb-6">Network Security</div>
                    <div class="des text-xl">
                        Our comprehensive network security solutions defend against intrusions, malware, and other threats, keeping your network infrastructure robust and resilient.
                    </div>
                </div>
            </div>
            <div class="banner">
                <img class="lg:pl-20 md:pl-30" src="../../assets/images/blurSlide/database.png" alt="Database security image" />
                <div class="introduce">
                    <div class="bolder text-xl md:text-2xl pb-6">Database Security</div>
                    <div class="des text-xl  ">
                        <p>We implement stringent security measures to secure your ensuring the safety and integrity of your valuable information.
                    </div>
                </div>
            </div>
            <div class="banner">
                <img src="../../assets/images/blurSlide/cloud.png" alt="Cloud security image" />
                <div class="introduce">
                    <div class="bolder text-xl md:text-2xl pb-6">Cloud Security</div>
                    <div class="des text-xl">
                        Our cloud security solutions provide advanced protection for your cloud-based applications and data, ensuring compliance and safeguarding against potential vulnerabilities and threats.
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="flex gap-40 lg:mt-10">
  <!-- Previous Button -->
  <div id="prev" class="flex justify-center items-center cursor-pointer rounded-3xl bg-cyan-200 hover:bg-green-200 bg-opacity-25 w-32 transform transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95">
    <img  class="w-12" src="./assets/images/chevrons-left.svg" alt="Previous" />
  </div>

  <!-- Next Button -->
  <div id="next" class="flex justify-center items-center cursor-pointer rounded-3xl bg-cyan-200 hover:bg-green-200 bg-opacity-25 w-32 transform transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95">
    <img  class="w-12" src="./assets/images/chevrons-right.svg" alt="Next" />
  </div>
</div>

</section>