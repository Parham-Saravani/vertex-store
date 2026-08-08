const changeUserData = (username, role, email, createdTime, userImage) => {
  changeImageStyles(userImage, username);
  setUsername(username);
  setUserRole(role);
  if (role === "user") {
    changeUserAccountDetail(createdTime, username, email);
  }
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
const setUsername = (username) => {
  const profileUsername = document.querySelectorAll(".profile-username");
  profileUsername.forEach((item) => (item.textContent = username));
};
const setUserRole = (role) => {
  const profileRole = document.querySelector(".profile-role");
  if (role === "admin") {
    profileRole.textContent = "Administrator";
  } else {
    profileRole.textContent = role;
  }
};

const changeUserAccountDetail = (createdTime, username, email) => {
  findCreatedTime(createdTime);
  changeUserUsername(username);
  changeUserEmail(email);
};
const findCreatedTime = (time) => {
  const userJoinTime = document.querySelector(".user-join-date");
  const date = new Date(time);
  const calendar = date.toLocaleDateString("fa-IR", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  userJoinTime.textContent = calendar;
};
const changeUserUsername = (username) => {
  const userUsername = document.querySelector(".user-username");
  userUsername.textContent = username;
};
const changeUserEmail = (email) => {
  const userEmail = document.querySelector(".user-email");
  userEmail.textContent = email;
};
export default changeUserData;
