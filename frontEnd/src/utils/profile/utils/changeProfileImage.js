import changeStats from "./changeStats";

const changeProfileImage = (username , userImage) => {
  changeImageStyles(userImage, username);
};
const changeImageStyles = (imageUrl, username) => {
  const profileImage = document.querySelectorAll(".profile-image");
  const profileAvatar = document.querySelectorAll(".profile-avatar");
  if (imageUrl) {
    profileImage.forEach((item) => item.classList.remove("hidden"));
    profileAvatar.forEach((item) => item.classList.add("hidden"));
    profileImage.forEach((item) => item.setAttribute("src", `${imageUrl}`));
  } else {
    profileAvatar.forEach((item) => (item.textContent = username.slice(0, 1)));
  }
};

export default changeProfileImage;
