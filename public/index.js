/* ------------------------------- Submit Form ------------------------------ */
const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    const { name, petPic, species, friendly } = Object.fromEntries(formData);

    let movieInfo = [name, petPic, species, friendly]

    console.log(...movieInfo);

    form.reset();
};



/* ---------------------------------- MAIN ---------------------------------- */
const main = () => {
    let form = document.getElementById('add-pet-form');
    form.addEventListener("submit", handleSubmit);

}

main();