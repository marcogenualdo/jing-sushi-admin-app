const { Firestore } = require("@google-cloud/firestore");

// Create a new client
const firestore = new Firestore();

async function upload() {
  //load menu
  const menu = require("./menu.json");

  // Obtain a collection reference.
  const coll = firestore.collection("menu");

  // Enter new data into the document.
  for (let category of menu) {
    const document = coll.doc(category.name);
    await document.set(category);
    console.log(`Entered ${category.name} data.`);
  }
}
upload();
