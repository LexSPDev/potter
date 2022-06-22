export const getCharacters = async () => {
    const url =  "../API/hp-characters.json"
    const response = await fetch(url)
    .then((response) => {
        return response.json
    })
}
