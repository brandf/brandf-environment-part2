class Foo {
  static async doIt() {
    for (let i = 0; i < 10; i++) {
      await Foo.delay(1);
      document.body.appendChild(document.createTextNode(i));
    }
  }
  static delay(seconds) {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, seconds * 1000);
    });
  }
}
Foo.doIt();
