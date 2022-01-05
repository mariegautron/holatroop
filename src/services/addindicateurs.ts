import getNumberOfWeek from "../utils/getNumberOfWeek";
import { db } from "../context/Firebase";
import { IndicateursChart } from "../components/Indicateurs/Charts";

const addIndicateurs = ({
  occupation,
  facturable,
  nonfacturable,
  recette,
  poubelle,
  period,
}: IndicateursChart) => {
  db.collection("indicateurs")
    .where("periodName", "==", period)
    .where(
      "period",
      "==",
      period === "week" ? getNumberOfWeek() : new Date().getMonth()
    )
    .limit(1)
    .get()
    .then((query) => {
      if (query.empty) {
        db.collection("indicateurs")
          .add({
            occupation: occupation,
            facturable: facturable,
            nonfacturable: nonfacturable,
            recette: recette,
            poubelle: poubelle,
            periodName: period,
            period:
              period === "week" ? getNumberOfWeek() : new Date().getMonth(),
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        db.collection("indicateurs")
          .doc(query.docs[0].id)
          .set({
            occupation: occupation,
            facturable: facturable,
            nonfacturable: nonfacturable,
            recette: recette,
            poubelle: poubelle,
            periodName: period,
            period:
              period === "week" ? getNumberOfWeek() : new Date().getMonth(),
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    });
};

export default addIndicateurs;
