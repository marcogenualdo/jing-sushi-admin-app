import { Firestore } from "@google-cloud/firestore";

const firestore = new Firestore();

export async function resetInfo() {
  const coll = firestore.collection("info");
  const data = require("../backups/info.json");

  for (let key in data) {
    const doc = coll.doc(key);
    doc.set(data[key]);
    console.info("Wrote info/%s", key);
  }
}
