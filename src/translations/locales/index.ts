import en from "./en/common.json";
import pl from "./pl/common.json";
import common from "./common.json";

const translations = {
  pl: { ...pl, ...common },
  en: { ...en, ...common },
};

export default translations;
