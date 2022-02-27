// Cree una interfaz que sirva para validar el siguiente objeto
interface JusticeLeague {
  nombre: string;
  artesMarciales: string[];
}

const batman: JusticeLeague = {
  nombre: "Bruno Días",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"],
};
console.log(batman);
