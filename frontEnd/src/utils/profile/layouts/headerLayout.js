const AdminHeader = () => {
  return `
         <div class="flex gap-10">
                    <div class="[direction:ltr] flex items-center gap-5">
                        <div class="flex items-center gap-3">
                            <img src="" class="size-9 rounded-full hidden" alt="">
                            <div class="size-9 bg-linear-90 from-brand-accent to-brand-primary rounded-full flex items-center justify-center font-bold text-dark-text-primary">A</div>
                            <div>
                                <p class="dark:text-dark-text-primary text-light-text-primary font-bold">Asuke</p>
                                <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">Administrator</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="hidden items-center justify-center rounded-full transition-colors duration-300 hover:text-black text-gray-700 cursor-pointer w-10 h-10 dark-theme-btn"><i class="fa-solid fa-moon"></i></button>
                        <button class="flex items-center justify-center rounded-full border dark:border-dark-card-border transition-colors duration-300 hover:bg-dark-card-border text-dark-text-primary cursor-pointer w-10 h-10 light-theme-btn"><i class="fa-solid fa-sun"></i></button>
                    </div>
                </div>
                <div class="dark:bg-dark-bg-primary bg-light-bg-primary transition-colors duration-300 focus-within:border-brand-accent border dark:border-dark-input-border border-light-input-border  h-11 w-80 rounded-xl">
                    <input class="[direction:rtl] w-full h-full rounded-xl outline-hidden px-4 dark:text-dark-text-secondary text-light-text-secondary" placeholder="جستجو ...">
                </div>
    `;
};
const UserHeader = () => {
  return `
    <div class="flex items-center gap-7">
        <div class="gap-3 flex items-center">
            <img src="" class="size-9 rounded-full hidden" alt="">
            <div class="size-9 bg-linear-90 from-brand-accent to-brand-primary rounded-full flex items-center justify-center font-bold text-dark-text-primary">A</div>
            <div>
                <p class="dark:text-dark-text-primary text-light-text-primary font-bold">Asuke</p>
                <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">Administrator</p>
            </div>
        </div>
        <div>
            <button class="hidden items-center justify-center rounded-full transition-colors duration-300 hover:text-black text-gray-700 cursor-pointer w-10 h-10 dark-theme-btn"><i class="fa-solid fa-moon"></i></button>
            <button class="flex items-center justify-center rounded-full border dark:border-dark-card-border transition-colors duration-300 hover:bg-dark-card-border text-dark-text-primary cursor-pointer w-10 h-10 light-theme-btn"><i class="fa-solid fa-sun"></i></button>
        </div>
    </div>
    `;
};
const changeHeaderContentHandler = (role) => {
  const headerContainer = document.querySelector(".profile-header");
  if (role === "admin") {
    changeHeaderContent(AdminHeader());
  } else {
    changeHeaderContent(UserHeader());
  }
};
const changeHeaderContent = (content) => {
  headerContainer.innerHTML = "";
  headerContainer.insertAdjacentHTML("afterbegin", content);
};
export default changeHeaderContentHandler;
