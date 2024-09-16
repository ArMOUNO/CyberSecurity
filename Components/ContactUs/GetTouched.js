
const getouched = () => {
    const getouchedContent = document.getElementById("getouched");
    getouchedContent.innerHTML = getouchedBar();
};

// const img = '../assets/logo.png';   

const getouchedBar = () => {
  return `
   <section>
    <div class="lg:pt-6">
        <div class="contact">
            <main class="row">
                
                <!--  *******   Left Section (Column) Starts   *******  -->
    
                <section class="col left">
    
                    <div class="space-y-3">
                       <p class="lg:text-2xl md:text-2xl text-lg bolder">Need more help?</p>
                        <p>We're here to assist you with any questions or concerns. Reach out to us via phone, email, or visit our office for personalized support. Your satisfaction is our priority, and we’re ready to help you with all your cybersecurity needs.</p>
                    </div>
    
                    <div class="contactInfo">
                        
                        <div class="iconGroup">
                            <div class="icon">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="details">
                                <span>Phone</span>
                                <span>+00 110 111 00</span>
                            </div>
                        </div>
    
                        <div class="iconGroup">
                            <div class="icon">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="details">
                                <span>Email</span>
                                <span>l@gmail.com</span>
                            </div>
                        </div>
    
                        <div class="iconGroup">
                            <div class="icon">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div class="details">
                                <span>Location</span>
                                <span>X Street, Y Road, San Fransisco</span>
                            </div>
                        </div>
    
                    </div>
    
                    <div class="socialMedia">
                        <a href="https://www.suffixit.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.suffixit.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.suffixit.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.suffixit.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
    
                    <!--  *******   Social Media Ends   *******  -->
    
                </section>
   
                <section class="col right ">
                    
                    <!--  *******   Form Starts   *******  -->
                    <p class=" bolder lg:text-4xl pb-6 md:text-2xl text-xl">Get In Touch</p>
                    <div class="flex p-5 shadow"> 
                    
                        <form class="messageForm  ">
                        
                            <div class="inputGroup halfWidth">
                                <input type="text" name="" required="required">
                                <label>Your Name</label>
                            </div>
                            
                            <div class="inputGroup halfWidth">
                                <input type="email" name="" required="required">
                                <label>Email</label>
                            </div>
        
                            <div class="inputGroup fullWidth">
                                <input type="text" name="" required="required">
                                <label>Subject</label>
                            </div>
        
                            <div class="inputGroup fullWidth">
                                <textarea required="required"></textarea>
                                <label>Say Something</label>
                            </div>
        
                            <div class="inputGroup fullWidth">
                                <button>Send Message</button>
                            </div>
        
                        </form>
                    </div>
                </section>
    
            </main>
        </div>
    </div>
   </section>
    
    `;
};

getouched();