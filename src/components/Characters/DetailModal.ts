import Swal from 'sweetalert2';
import {CharacterApi} from "../../utils/Api";

const showCharacter = async (id: string) => {
    const {name, image, status, species, origin, episode} = await new CharacterApi().getById(id);
    await Swal.fire({
            title: name,
            html: `<div class="swal-html-container">` + `
            <p><span style="color: green">Status: </span> ${status}</p>` + `
            <p><span style="color: green">Species: </span> ${species}</p>` + `
            </div>` + `
            <div class="swal-html-container">` + `
            <p><span style="color: green">Origin: </span> ${origin.name}</p>` + `
            <p><span style="color: green">Episode(s): </span> ${episode.length}</p>` + `
            </div>`,
            imageUrl: image,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: `${name} image`,
        }
    )
};

export default showCharacter;