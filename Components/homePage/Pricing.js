
const Pricing = () => {
    const PricingContent = document.getElementById("Pricing");
    PricingContent.innerHTML = PricingBar();
};

// const img = '../assets/logo.png';   

const PricingBar = () => {
  return `
<section class="pb-5 md:px-7 flex flex-col items-center">
      <div class="flex flex-col gap-y-4 md:flex-row justify-between px-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- First Column (Text Section) -->
  <div class="flex flex-col md:pb-6 ">
    <p class="text-lg bolder pb-3">Our Pricing</p>
    <p class="text-3xl bolder md:pb-9">suitable price for you</p>
  </div>

  <!-- Second Column (Description Section) -->
  <div class="md:w-[360px] pb-9 w-fit">
    <p>We offer competitive pricing tailored to fit your business needs and budget. Our transparent pricing model ensures you receive the best value for high-quality cybersecurity services, without any hidden costs.</p>
  </div>
</div>

      </div>
      <div class="grid gap-10 justify-center px-4 items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <!-- First Column (Basic) -->
        <div class="shadow h-[400px] flex flex-col justify-center items-center gap-y-10 ">
          <div class="flex flex-col justify-center pl-3 items-start">
            <p class="bolder">Basic</p>
            <p class="text-2xl bolder">৳ 115,99/<span class="teal-text lighten-2 text-sm">Service</span></p>
          </div>
          <div class="flex flex-col items-start gap-y-5 py-3">
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Network Security: Basic firewall protection</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Data Security: Standard encryption</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Database Security: Basic access controls</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Cloud Security: Essential cloud monitoring</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Support: Email support during business hours</p>
            </div>
          </div>
          <div class="teal lighten-2 flex my-3 items-center justify-center text-white w-28 h-8 transform transition-transform duration-200 hover:scale-110 active:scale-100">
            <button class="">Get Started</button>
          </div>
        </div>
      
        <!-- Second Column (Best Value) -->
        <div class="rounded-xl h-[400px] text-white teal lighten-2 flex flex-col justify-center items-center gap-y-10 ">
          <div class="flex flex-col justify-center pl-3 items-start">
            <p class="bolder">Best Value</p>
            <p class="text-2xl bolder">৳ 200,99/<span class=" text-sm">Service</span></p>
          </div>
          <div class="flex flex-col items-start gap-2 py-3">
            <div class="flex justify-center items-center">
              <i class="material-icons white-text">play_arrow</i>
              <p>Network Security: Advanced firewall and intrusion detection</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons white-text">play_arrow</i>
              <p>Data Security: Enhanced encryption and regular backups</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons white-text">play_arrow</i>
              <p>Database Security: Comprehensive access management and regular scans</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons white-text">play_arrow</i>
              <p>Cloud Security: Advanced cloud protection and threat detection</p>
            </div>
          </div>
          <div class="bg-white my-3 hover:cursor-pointer flex items-center justify-center teal-text lighten-2 w-28 h-8 transform transition-transform duration-200 hover:scale-110 active:scale-100">
            <p  class="">Get Started</p>
          </div>
        </div>
      
        <!-- Third Column (Premium) with Col Span on Small Screens -->
        <div class="shadow h-[400px] flex flex-col justify-center items-center gap-y-4  lg:col-span-1 md:col-span-2 col-span-1">
          <div class="flex flex-col justify-center pl-3 items-start">
            <p class="bolder">Premium</p>
            <p class="text-2xl bolder">৳ 200,99/<span class="teal-text lighten-2 text-sm">Service</span></p>
          </div>
          <div class="flex flex-col gap-2 items-start py-3">
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Network Security: Enterprise-grade firewall, intrusion prevention, and network segmentation</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Data Security: Top-level encryption, advanced threat protection, and compliance management</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Database Security: Complete database monitoring, real-time alerts, and compliance support</p>
            </div>
            <div class="flex justify-center items-center">
              <i class="material-icons teal-text lighten-2">play_arrow</i>
              <p>Cloud Security: Full-spectrum cloud security, including advanced threat intelligence and automated responses</p>
            </div>
          </div>
          <div class="teal lighten-2 lg:mt-0 md:mt-4 lg:my-3 flex items-center justify-center text-white w-28 h-8 transform transition-transform duration-200 hover:scale-110 active:scale-100">
            <button class="">Get Started</button>
          </div>
        </div>
      </div>
      
  </section>

    
    `;
};

Pricing();