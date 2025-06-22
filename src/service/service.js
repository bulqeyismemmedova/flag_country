const Base_Url = import.meta.env.VITE_BASE_URL
// console.log(Base_Url);

async function getAllCountries () {
    try {
        const res = await fetch(Base_Url)
        if(!res.ok){
            throw new Error("fetch emeliyyetinda xeta var")
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error.message)  
    }
}

export { 
    getAllCountries 
}
