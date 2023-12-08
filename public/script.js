/* ------------------------------- Fetch Data ------------------------------- */
const getOptsWithBody = (body, method = 'POST') => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
});

const handleError = (error) => alert(error.message);

const fetchData = async (url, options) => {
    try {
        console.log('fetching:', url, options);
        const response = await fetch(url, options);
        // if (!response.ok) {
        //     const errorMessage = await response.text();
        //     console.log(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
        //     return [null, new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`)];
        // }

        if (response.status === 204) return [{}];

        const jsonData = await response.json();
        console.log("jsonData", jsonData)
        return [jsonData];
    } catch (error) {
        return [null, error];
    }
};


/* ---------------------------- DOM Manipulation ---------------------------- */
const getPetTemplate = (name, profile_picture, species, is_friendly) => `
    <h3>${name}</h3>
    <img src="${profile_picture}" alt="${name}-${species}" class="pet-image"/>
    <p>${species}</p>
    <p>${is_friendly}</p>
`;


const renderPet = ({ name, profile_picture, species, is_friendly }) => {
    const newPet = document.createElement('li');
    newPet.classList.add('card');
    // console.log(name, profile_picture, species, is_friendly)
    newPet.innerHTML = getPetTemplate(name, profile_picture, species, is_friendly);
    // console.log(newPet,  document.querySelector("#pet-List"))
    document.querySelector("#pet-list").append(newPet);
}

const createPet = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const petInfo = Object.fromEntries(formData);
    console.log("petInfo", petInfo)
    if (petInfo['is_friendly'] === undefined) {
        petInfo['is_friendly'] = false
    } else petInfo['is_friendly'] = true;
    console.log("data being sent:", petInfo)
    if (!petInfo) return;

    // const petOpts = getOptsWithBody(petInfo);
    // const [pet, error] = await fetchData('/pets', petOpts);
    const pet = await fetch('/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(petInfo),
    });
    const data = await pet.json();
    console.log(data);
    // if (error) return handleError(error);


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

/* ---------------------------------- MAIN ---------------------------------- */
const main = () => {
    loadInitialPets();
    let form = document.getElementById('add-pet-form');
    form.addEventListener('submit', createPet);
    // form.addEventListener("submit", handleSubmit);

}

main();