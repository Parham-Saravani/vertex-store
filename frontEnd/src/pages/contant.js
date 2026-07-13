const ContactPage = () => {
  return `
        <div class="animate-fadeIn flex gap-3 mb-7">
          <div class="px-4 py-5 w-[75%] dark:bg-dark-section-bg bg-light-section-bg border-2 dark:border-dark-card-border border-light-card-border rounded-xl">
            <h3 class="dark:text-dark-text-primary text-light-text-primary font-bold">ارسال پیام</h3>
            <!-- Divider -->
             <div class="my-3 w-full h-0.5 dark:bg-dark-divider bg-light-divider rounded-xl"></div>

             <form>
              <div class="flex gap-2">
                <div class="flex flex-col grow">
                  <label for="fullName" class="dark:text-dark-text-primary text-light-text-primary font-bold">نام و نام خانوادگی :</label>
                  <input id="fullName" type="text" placeholder="نام و نام خانوادگی خود را وارد کنید" class="mt-2 px-3 py-4 grow dark:bg-dark-input-bg bg-light-input-bg rounded-xl border dark:border-dark-input-border border-light-input-border outline-hidden dark:placeholder:text-dark-text-secondary placeholder:text-[13px] dark:text-dark-text-primary text-light-text-primary text-[14px] fullname-input">
                </div>
                <div class="flex flex-col grow">
                   <label for="email" class="dark:text-dark-text-primary text-light-text-primary font-bold">ایمیل :</label>
                    <input id="email" type="email" placeholder="ایمیل خود را وارد کنید" class="mt-2 px-3 py-4 grow dark:bg-dark-input-bg bg-light-input-bg rounded-xl border dark:border-dark-input-border border-light-input-border outline-hidden dark:placeholder:text-dark-text-secondary placeholder:text-[13px] dark:text-dark-text-primary text-light-text-primary text-[14px] email-input">
                </div>
              </div>
              <div class="mt-3">
                <label for="test" class="dark:text-dark-text-primary text-light-text-primary font-bold">موضوع :</label>
                <input id="test" type="text" placeholder="موضوع پیام" class="mt-2 px-3 py-4 w-full dark:bg-dark-input-bg bg-light-input-bg rounded-xl border dark:border-dark-input-border border-light-input-border outline-hidden dark:placeholder:text-dark-text-secondary placeholder:text-[13px] dark:text-dark-text-primary text-light-text-primary text-[14px] title-input">
              </div>
              <div class="mt-3">
                <label for="message" class="dark:text-dark-text-primary text-light-text-primary font-bold">پیام شما :</label>
                <textarea id="message" placeholder="پیام خود را بنویسید" class="mt-2 px-3 py-4 resize-none w-full h-50 grow dark:bg-dark-input-bg bg-light-input-bg rounded-xl border dark:border-dark-input-border border-light-input-border outline-hidden dark:placeholder:text-dark-text-secondary placeholder:text-[13px] dark:text-dark-text-primary text-light-text-primary text-[14px] message-input"></textarea>
              </div>
              <div class="w-full flex items-center justify-center mt-3">
                <button class="rounded-xl bg-linear-90 from-brand-primary to-brand-accent w-120 py-3 font-bold text-dark-text-primary cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 submit-btn">ارسال پیام</button>
              </div>
             </form>
          </div>

          <div class="relative px-4 py-5 w-[25%] dark:bg-dark-section-bg bg-light-section-bg border-2 dark:border-dark-card-border border-light-card-border rounded-xl">
             <h3 class="dark:text-dark-text-primary text-light-text-primary font-bold">اطلاعات تماس</h3>
              <!-- Divider -->
             <div class="my-3 w-full h-0.5 dark:bg-dark-divider bg-light-divider rounded-xl"></div>

             <div class="mt-5 flex flex-col gap-2">
                <div class="flex gap-5 items-center">
                  <span class="flex justify-center items-center text-3xl dark:bg-dark-input-bg bg-light-input-bg w-18 h-20 rounded-xl">
                    <i class="fa-solid fa-location-dot bg-linear-90 from-brand-accent to-brand-primary text-transparent bg-clip-text"></i>
                  </span>
                  <div class="flex-col">
                    <h4 class="dark:text-dark-text-secondary text-light-text-secondary font-bold">آدرس</h4>
                    <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">تهران، خیابان ولیعصر</p>
                  </div>
                </div>
                <div class="flex gap-5 items-center">
                  <span class="flex justify-center items-center text-3xl dark:bg-dark-input-bg bg-light-input-bg w-18 h-20 rounded-xl">
                    <i class="fa-solid fa-headset bg-linear-90 from-brand-accent to-brand-primary text-transparent bg-clip-text"></i>
                  </span>
                  <div class="flex-col">
                    <h4 class="dark:text-dark-text-secondary text-light-text-secondary font-bold">تلفن</h4>
                    <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">021-12345678</p>
                  </div>
                </div>
                <div class="flex gap-5 items-center">
                  <span class="flex justify-center items-center text-3xl dark:bg-dark-input-bg bg-light-input-bg w-18 h-20 rounded-xl">
                    <i class="fa-solid fa-envelope bg-linear-90 from-brand-accent to-brand-primary text-transparent bg-clip-text"></i>
                  </span>
                  <div class="flex-col">
                    <h4 class="dark:text-dark-text-secondary text-light-text-secondary font-bold">ایمیل</h4>
                    <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">info@vertex.ir</p>
                  </div>
                </div>
                <div class="flex gap-5 items-center">
                  <span class="flex justify-center items-center text-3xl dark:bg-dark-input-bg bg-light-input-bg w-18 h-20 rounded-xl">
                    <i class="fa-solid fa-clock bg-linear-90 from-brand-accent to-brand-primary text-transparent bg-clip-text"></i>
                  </span>
                  <div class="flex-col">
                    <h4 class="dark:text-dark-text-secondary text-light-text-secondary font-bold">ساعت کاری</h4>
                    <p class="mt-1 dark:text-dark-text-secondary text-light-text-secondary text-xs">شنبه تا چهارشنبه</p>
                    <p class="mt-1 [direction:ltr] dark:text-dark-text-secondary text-light-text-secondary text-xs text-center">9:00 - 18:00</p>
                  </div>
                </div>
             </div>
             <p class="absolute bottom-7 text-xs text-center right-0 left-0 mx-auto dark:text-dark-text-secondary text-light-text-secondary">پس از بررسی با شما تماس گرفته خواهد شد</p>
          </div>
        </div>
    `;
};

export default ContactPage;