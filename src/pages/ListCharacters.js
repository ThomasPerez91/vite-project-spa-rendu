import ListCharacters from "../components/ListCharacters";
import { CharacterApi } from "../utils/Api";

const ListOfCharacters = async () => {
    const characterApi = new CharacterApi();
    const characters = await characterApi.getAll();
    return ListCharacters(characters.results);
}

export default ListOfCharacters;
