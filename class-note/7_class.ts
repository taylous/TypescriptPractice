class Person {

  // ๐ก typescript๋ constructor ์์ type์ ์ง์ ํด์ค์ผ ํจ.
  // ์ ๊ทผ์ ํ์๋ ์ง์ ๊ฐ๋ฅ
  private name: string;
  public age: number;
  // ๊ฐ์๋ํด ์ ๊ทผ๋ง ๊ฐ๋ฅํ๊ณ  ๋ณ๊ฒฝ์ ๋ถ๊ฐ๋ฅ
  readonly log: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}