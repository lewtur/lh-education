import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const loadFontAwesomeLibrary = () => {
    library.add(faBars, faTimes, faChevronLeft, faChevronRight);
};


export default loadFontAwesomeLibrary;