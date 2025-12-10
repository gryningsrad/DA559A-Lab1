import { ask, rl } from './interface.js';
import { conn } from '../database.js';

function showMenu() {
  //console.clear();
  console.log("###       Menu       ###");
  console.log("1. Show all wines");
  console.log("2. Show all producers");
  console.log("3. Add a wine");
  console.log("4. Exit");
}

export async function getUserChoice() {
  const choice = await ask("Please select option: ");

  switch (choice) {
    case '1':
      //console.log("Showing all wines...");
      await menuChoice1();
      break;
    case '2':
      //console.log("Showing all producers...");
      await menuChoice2();
      break;
    case '3':
      await menuChoice3();
      break;
    case '4':
      console.log("Exiting...");
      return;
      break;
    default:
      console.log("Invalid choice. Please try again.");
  }
  return true;
}

async function menuChoice1 () {
  console.log("Menu choice 1 selected - Show all wines");
  const [resultset] = await conn.query('SELECT * FROM wines');
  console.table(resultset);
  await ask("Press Enter to continue...");
}

async function menuChoice2 () {
  console.log("Menu choice 2 selected - Show all producers");
  const [resultset] = await conn.query('SELECT * FROM producers');
  console.table(resultset);
  await ask("Press Enter to continue...");
}

async function menuChoice3 () {
  console.log("Menu choice 3 selected - Create wine");
  // Here we will add a new wine to the database based on the input of the user
  const name = await ask("Enter new wine name: ");
  const vintage = await ask("Enter vintage year: ");
  const producer_id = await ask("Enter producer ID: ");
  const quantity = await ask("Enter quantity: ");
  const price = await ask("Enter price: ");

  const sql = 'INSERT INTO wines (name, vintage, producer_id, quantity, price) VALUES (?, ?, ?, ?, ?)';
  const [result] = await conn.execute(sql, [name, vintage, producer_id, quantity, price]);
  console.log(`New wine added with ID: ${result.insertId}`);
  await ask("Press Enter to continue...");
}

export async function runMenu () {

  do {
    showMenu();
  } while (await getUserChoice() );


}

// await runMenu();

//rl.close();