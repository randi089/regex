function translatePigLatin(str) {
  return str
    .replace(/([aiueo])/i, " $1")
    .split(" ")
    .reverse()
    .map((value) => (value.split("").some((char) => "aiueo".includes(char)) ? value : value ? value + "ay" : "way"))
    .join("");
}

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
