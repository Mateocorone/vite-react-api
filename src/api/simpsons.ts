BASE_URL ='https://thesimpsonsapi.com/api'
async function getCharacters(page=1): Promise<CharactersRespose>
fetch ${BASE_URL}/characters?page=${page}
