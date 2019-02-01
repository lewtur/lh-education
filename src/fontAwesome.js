import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const loadFontAwesomeLibrary = () => {
    library.add(faBars, faTimes);
};


export default loadFontAwesomeLibrary;