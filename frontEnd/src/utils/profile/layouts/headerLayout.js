const AdminHeader = () => {
  return `
         <div class="flex gap-10">
                    <div class="[direction:ltr] flex items-center gap-5">
                        <div class="flex items-center gap-3">
                            <img src="" class="size-10 bg-center bg-cover rounded-full hidden profile-image" alt="">
                            <div class="size-9 bg-linear-90 from-brand-accent to-brand-primary rounded-full flex items-center justify-center font-bold text-dark-text-primary profile-avatar"></div>
                            <div>
                                <p class="dark:text-dark-text-primary text-light-text-primary font-bold profile-username">Asuke</p>
                                <p class="dark:text-dark-text-secondary text-light-text-secondary profile-role">Administrator</p>
                            </div>
                        </div>
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
            <img src="" class="size-10 bg-center bg-cover rounded-full hidden profile-image" alt="">
            <div class="size-9 bg-linear-90 from-brand-accent to-brand-primary rounded-full flex items-center justify-center font-bold text-dark-text-primary profile-avatar">A</div>
            <div>
                <p class="dark:text-dark-text-primary text-light-text-primary font-bold profile-username">Asuke</p>
                <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs profile-role">Administrator</p>
            </div>
        </div>
    </div>
    `;
};
const changeHeaderContentHandler = (role) => {    
  if (role === "admin") {
    changeHeaderContent(AdminHeader());
  } else {
    changeHeaderContent(UserHeader());
  }
};
const changeHeaderContent = (content) => {
  const headerContainer = document.querySelector(".profile-header");  
  headerContainer.innerHTML = "";
  headerContainer.insertAdjacentHTML("afterbegin", content);
};

export default changeHeaderContentHandler;
