import changeStats from "./changeStats";
const changeHeaderData = (username, userImage, role) => {
  changeHeaderUsernameAndRole(username , role)
  changeImageStyles(username, userImage);
};

const changeHeaderUsernameAndRole = (username , role) => {
  document.querySelectorAll(".profile-username").forEach(item=> item.textContent = username);
  document.querySelectorAll(".profile-role").forEach(item=> item.textContent = role === "admin" ? 'Administrator' : 'User');
}
const changeImageStyles = (username , imageUrl) => {  
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

export default changeHeaderData;