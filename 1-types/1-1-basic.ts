{
  /**
   * Primitive: number, string, boolean, null, undefined, symbol, bigint
   * Object: function, array, object
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined
  let age: number | undefined;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let name: string | null;

  // unknown ❌
  /* unknown은 모든 타입의 슈퍼타입이다. 즉, 모든 타입을 할당할 수 있다. 쓰지 않는 것이 좋다. */
  let notSure: unknown = 0;
  notSure = "hello";
  notSure = true;

  // any ❌
  /* any는 모든 타입을 할당할 수 있다. 즉, 모든 타입을 할당할 수 있다. 쓰지 않는 것이 좋다. */
  let anything: any = 0;
  anything = "hello";
  anything = true;

  // void
  /* void는 함수에서 반환 값이 없는 경우에 사용한다.
   * void의 경우는 생략 가능하다.
   */
  function returnVoid(): void {
    console.log("void");
  }

  // never
  /* never는 함수에서 반환 값이 없는 경우에 사용한다.
   * 즉, 함수가 예외를 발생시키거나 무한 루프에 빠지는 경우에 사용한다.
   */
  function throwError(message: string): never {
    // message -> server (log)
    // while (true) {} 의 경우는 무한 루프이기 때문에 never 타입이다.
    throw new Error(message);
  }

  // object ❌
  /* object는 객체를 나타내는 타입이다.
   * 모든 타입을 할당할 수 있기 때문에 사용하지 않는 것이 좋다.
   * 가능하면 구체적인 타입을 사용하는 것이 좋다.
   * 예를 들어, 객체의 키와 값의 타입을 지정하는 것이 좋다.
   */
  let obj: object = {};
  obj = { name: "John", age: 20 };
  obj = [1, 2, 3];
  obj = () => {};

  function acceptObject(obj: object) {
    console.log(obj);
  }
}
