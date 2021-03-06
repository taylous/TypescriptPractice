// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// ๐ก union type
//    ํน์  parameter์ ํ์์ ์ฌ๋ฌ๊ฐ ์ธ ์ ์๋๋ก ํด์ค
function logMessage(value: string | number) {
  // ๐ ํ์ ๊ฐ๋
  //      ํน์  ํ์์ผ๋ก ํ์์ ๋ฒ์๋ฅผ ์ขํ๋๊ฐ๋(ํํฐ๋ง ํ๋) ๊ณผ์ 
  if(typeof value === 'number') {
    // type์ด ์ง์ ๋๊ธฐ ๋๋ฌธ์ ์๋์์ฑ(intellisence)๊ฐ number์ ๋ง์ถฐ์ ๋ํ๋๋ค.
    value.toLocaleString();
  }
  if(typeof value === 'string') {
    value.toString();
  }
}
logMessage('hello');
logMessage(100);

// union type ์์ 
let test: string | number | boolean;
test = true;


interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

/**
 * Union type์ ํน์ง
 * @param someone 
 */
function unionType(someone: Developer | Person) {
  /**
   * ๐ฏ Develper, Person์ด ๊ฐ์ง๊ณ  ์๋ ๋ณ์์ ์ ๊ทผํ  ์ ์์ ๊ฒ ๊ฐ์ง๋ง,
   *     ๊ณตํต๋ ์์ฑ(name)๋ง ์ ๊ทผํ  ์ ์๋ค.
   */
  someone.name;
  // โ ์ด ๋ ํ์๊ฐ๋๊ฐ ํ์ํ๋ค.
  // someone.skill;
  // someone.age;
}

/**
 * Intersection type์ ํน์ง
 * @param someone 
 */
function intersectionType(someone: Developer & Person) {
  /**
   * ๐ฏ Intersection type์ Union type๊ณผ ๋ค๋ฅด๊ฒ ํด์๋๋ค.
   *     "|" => "&"์ผ๋ก ๋ฐ๋๋๋ฐ, ์ด ๋ป์ Developer์ ๋ณ์์ Person์ ๋ณ์๋ฅผ ๋ชจ๋ ๊ฐ์ง๋
   *     ํ๋์ ์๋ก์ด ํ์์ผ๋ก ํด์ํ๋ค.
   *     ๊ทธ๋์ Union type์ ์์ ์ ๋ค๋ฅด๊ฒ ์๋์ someone object๋ Developer, Person์ ๋ณ์๋ฅผ
   *     ๋ค ๊ฐ์ง๊ณ  ์๋ค๊ณ  ๋์ค๊ณ  ์ค๋ฅ๊ฐ ๋ฐ์ํ์ง ์๋๋ค.
   */
   someone.name;
   someone.skill;
   someone.age;
}

// union type์ Developer OR Person์ ๊ฐ์ฒด๋ฅผ ์ฃผ๋ฉด๋๋ค.
unionType({name: '๋๋ฒจ๋กญํผ', skill: '์น ๊ฐ๋ฐ'});
unionType({name: '์บกํด', age: 100});

// โ ๊ทธ๋ฌ๋ intersection์ Developer + Person ํฉ์น ์ํ๋ฅผ ๋๊ฒจ์ค์ผ ํ๋ค.
intersectionType({name: '๋๋ฒจ๋กญํผ', skill: '์น ๊ฐ๋ฐ', age: 100});