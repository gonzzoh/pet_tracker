/* ------------------------------- Fetch Data ------------------------------- */
const getOptsWithBody = (body, method = 'POST') => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
});

const handleError = (error) => alert(error.message);
// const fetchData = async (url, options) => {
//     try {
//         console.log('fetching:', url, options)
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             const errorMessage = await response.text();
//             console.log(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
//             // throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
//         }
//         if (response.status === 204) return [{}];
//         return [await response.json()];
//     } catch (error) {
//         return [null, error];
//     }
// }

const fetchData = async (url, options) => {
    try {
        console.log('fetching:', url, options);
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
            return [null, new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`)];
        }

        if (response.status === 204) return [{}];

        const jsonData = await response.json();
        return [jsonData];
    } catch (error) {
        return [null, error];
    }
};


/* ---------------------------- DOM Manipulation ---------------------------- */
const getPetTemplate = (name, profilePicture, species, is_friendly) => `
    <h3>${name}</h3>
    <img src="${profilePicture}" alt="${name}-${species}" class="pet-image"/>
    <p>${species}</p>
    <p>${is_friendly}</p>
`;


const renderPet = ({ name, profilePicture, species, is_friendly }) => {
    const newPet = document.createElement('li');
    newPet.classList.add('card');
    // console.log(name, profilePicture, species, is_friendly)
    newPet.innerHTML = getPetTemplate(name, profilePicture, species, is_friendly);
    // console.log(newPet,  document.querySelector("#pet-List"))
    document.querySelector("#pet-list").append(newPet);
}

const createPet = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const petInfo = Object.fromEntries(formData);

    if (!petInfo) return;

    // console.log('petInfo:', petInfo);
    const petOpts = getOptsWithBody(petInfo);
    console.log('petOpts:', petOpts);
    const [pet, error] = await fetchData('/pets', petOpts);
    console.log(pet);

    if (error) return handleError(error);

    // renderPet(pet);
    e.target.reset();
};
/* ----------------------------- Event Handlers ----------------------------- */
const loadInitialPets = async () => {
    const [pets, err] = await fetchData('/pets');
    if (err) return handleError(err);
    pets.forEach(renderPet);
    // console.log(pets);
};


// const getData = () => {

// }

/* ---------------------------------- MAIN ---------------------------------- */
const main = () => {
    loadInitialPets();
    let form = document.getElementById('add-pet-form');
    form.addEventListener('submit', createPet);
    // form.addEventListener("submit", handleSubmit);

}

main();