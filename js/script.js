const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
      console.log(this.isTired);
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`${this.name} is too tired to sleep`);
        this.sleep();
      } else {
        console.log`Yay! ${this.name} loves to play!`;
        this.isTired += 1;
        console.log(this.isTired);
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "fettet");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hampster");
const cleo = createPet("Cleo", "cat");
const francine = createPet("Francine", "turtle");

// console.log(sora, clover, baxter, cleo, francine);

// clover.sleep();

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let pet of allPets) {
    let status = "ready to play";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    let li = document.createElement("li");
    li.innerHTML = `<span class = "pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});

// for (let key in sora) {
//   console.log(key, sora[key]);
// }

for (let pet of allPets) {
  for (let key in pet) {
    console.log(key, pet[key]);
  }
}
