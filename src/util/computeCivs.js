import { civsList } from "../civilizations.js";

export const computeCivs = () =>
  Object.fromEntries(
    Object.keys(civsList)
      .filter((elem) => elem !== "default")
      .map((elem) => {
        civsList[elem].id = elem;
        civsList[elem].status = null;

        //makes sure all missing parameters are substituted with default parameters
        for (let param of Object.keys(civsList[elem])) {
          if (civsList[elem][param] === "")
            civsList[elem][param] = civsList.default[param];
        }

        // console.log(elem);
        return [elem, civsList[elem]];
      })
  );
