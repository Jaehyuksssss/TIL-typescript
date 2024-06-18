/**
생성자는 정해진 키-값 쌍을 가진 객체를 편리하게 생성할 수 있게 도와주는 도구입니다.
비슷한 객체들을 여러 개 생성할 때, 일일이 키-값을 입력해서 만드는 대신 하나의 생성자를 만들어 놓으면
그 생성자를 이용하여 간편하게 해당 객체(인스턴스)를 생성할 수 있게 해줍니다.
*/

class Student { // 클래스 이름은 첫 글자를 대문자로 시작합니다.
  constructor(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;

  this.sayHi = function () {
    console.log(
      `안녕하세요 저의 이름은 ${name}이고 나이는 ${age}이며, 키는 ${height}입니다.`
    );
  };
  }
  }
  
  let student1 = new Student("김비", "22", "170");
  let student2 = new Student("이동규", "31", "183");
  let student3 = new Student("임재혁", "30", "184");
  
  /**
  이런 식으로 new 생성자명(파라미터값)을 이용하여 객체(인스턴스)를 만들어주시면 됩니다.
  그러면 각기 다른 파라미터로 넘겨서 같은 구조의 객체 3개를 빠르게 만들어낼 수 있습니다.
  이러한 행위를 상속이라고 불리기도 합니다. 
  모(생성자)가 자식(인스턴스)에게 자신의 속성값들을 물려주는 것입니다.
  
  이처럼 여러 개의 비슷한 객체를 생성할 수 있게 도와주는 유용한 도구가 바로 생성자입니다.
  
  인스턴스명.sayHi() 를 호출하게 되면
  '안녕하세요 저의 이름은 홍길동이고 나이는 22이며, 키는 181입니다.'
  이런 식으로 각자 넘긴 파라미터 값을 기반으로 결과값이 나오게 될 것입니다.
 */

