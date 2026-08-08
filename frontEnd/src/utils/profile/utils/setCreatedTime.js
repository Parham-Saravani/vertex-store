const findCreatedTime = (time) => {
  const userJoinTime = document.querySelector(".user-join-date");
  const date = new Date(time);
  const calendar = date.toLocaleDateString("fa-IR");  
  return calendar;
};
export default findCreatedTime;
