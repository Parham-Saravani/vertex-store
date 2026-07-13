const createSlug = (title) => {
  return title.toLowerCase().replaceAll(" ", "-");
};
export default createSlug;
