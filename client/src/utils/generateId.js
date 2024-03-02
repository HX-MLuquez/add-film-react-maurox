export default function generateID() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const randomNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

  const id = `${year}${month}${day}${randomNumber}`;

  return id.slice(8);
}

// console.log(generateID())
