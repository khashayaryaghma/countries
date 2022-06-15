

const baseUrl = "https://restcountries.com/v2/all";

export default async function getData(){
    try {
        const dat= await fetch(baseUrl);
        const data = await dat.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}