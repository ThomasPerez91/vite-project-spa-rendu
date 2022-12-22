import ListCharacters from "../components/ListCharacters";
import { CharacterApi } from "../utils/Api";

const PageCharacter = async () => {
    const characterApi = new CharacterApi();
    const characters = await characterApi.getAll();
    return ListCharacters(characters.results);
}

export default PageCharacter;
