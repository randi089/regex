function translatePigLatin(str) {
  // return str
  //   .replace(/([aiueo])/i, " $1")
  //   .split(" ")
  //   .reverse()
  //   .map((value) => (value.split("").some((char) => "aiueo".includes(char)) ? value : value ? value + "ay" : "way"))
  //   .join("");

  return str.match(/^[aiueo]/i) ? str + "way" : str.replace(/([^aiueo]+)(\w+)/, "$2$1ay");
}

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
