import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDown, faAngleUp, faSearch, } from "@fortawesome/free-solid-svg-icons";
const addFontAwesomeIcon = () => {
    library.add(faSearch);
    library.add(faAngleDown);
    library.add(faAngleUp);
    return FontAwesomeIcon;
};
export default addFontAwesomeIcon;
