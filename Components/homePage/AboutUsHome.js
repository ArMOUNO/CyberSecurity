
const imageDesignDot = () => {
  const imageDesignDotContent = document.getElementById("AboutUsHome");
  imageDesignDotContent.innerHTML = imageDesignDotBar();
};

// const img = '../assets/logo.png';   

const imageDesignDotBar = () => {
  return `
     <section class="flex mt-[270px] md:mt-0 flex-col-reverse md:flex-row items-center px-10 h-[500px] pt-16 justify-between gap-10 text-blue-950">
       
        <div class="lg:w-fit flex flex-col py-6 items-start justify-start font-bold">
          <p class="text-xl lg:text-4xl text-start">About US</p>
          <div class="py-10 flex justify-start">
            <p class="lg:text-3xl md:text-2xl text-start">
              Security for your digital products is just a <span class="text-teal lighten-2  hover:text-green-700 hover:cursor-pointer">click away</span>  with Techno Path.
              </p>
          </div>
          <p class=" text-start text-lg thinText">At Techno Path System, we are dedicated to providing top-notch network and cybersecurity solutions tailored to meet the unique needs of your business. With a team of experienced professionals and cutting-edge technology, we offer comprehensive protection for your data, network, databases, and cloud environments. Our commitment to excellence and innovation ensures that your digital assets are secure, allowing you to focus on what matters most—growing your business.</p>

        </div>
        <div class=" md:mt-0 md:p-0 p-6 z-10 lg:mr-10 py-6">
          <div class="relative w-full md:w-[310px] lg:w-[400px]">
            <img class=" relative z-10 object-cover" src="./assets/images/people.png" alt="">
            <div class="">
                <img class="absolute w-[40%] top-[-22px] left-[-22px] z-0" src="./assets/images/dot.png" alt="">
                <img class="absolute  w-[40%] bottom-[-22px] right-[-22px] z-0" src="./assets/images/dot.png" alt="">
            </div>
          </div>
        </div>

      </section>
    
    `;
};

imageDesignDot();