const createSlug = (title) => {
    console.log(title.replaceAll(' ', '-'));
    return title.toLowerCase().replaceAll(' ', '-')
}
export default createSlug;