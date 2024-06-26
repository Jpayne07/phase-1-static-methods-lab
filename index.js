class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, "")
  }
  static titleize(sentence) {
    const excludedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const words = sentence.split(" ");
  
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word.toLowerCase();
      }
    });
  
    return capitalizedWords.join(" ");
  }

}