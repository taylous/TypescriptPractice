enum Shoes {
  // π‘ enumλ μ΄κΈ°νκ° κ°λ₯
  // ex) Nike = 'λμ΄ν€',
  Nike,
  Adidas
}

let myShoes = Shoes.Nike; // 0

enum Answer {
  Yes = 'Y',
  No = 'N',
}
/**
 * enum νμ©
 * @param answer 
 */
function askQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log('μ λ΅μλλ€.');
  }
  if(answer === Answer.No) {
    console.log('μ€λ΅μλλ€.');
  }
}
// π μμΈ μ²λ¦¬λ₯Ό μμ½κ² ν΄κ²°ν  μ μλ€.
askQuestion(Answer.Yes);

/**
 * β λ€μν μμΈμΌμ΄μ€κ° λμ¬ κ°λ₯μ±μ΄ λλ€.
 * λμ²νκΈ° μν΄μ  λ§μ μ½λκ° μμ±λμ΄μΌ νλ€.
 */
// askQuestion('μμ€');
// askQuestion('y');
// askQuestion('Yes');