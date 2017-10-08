class Circulo {
  constructor(radio){
  this.radio = radio;
  }
  getArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}
const oliver = new Circulo(3);
console.log(oliver.getArea());

/////////////////////////////////////////////////////////

class Perro {
  constructor(anos) {
    this.anos = anos;
  }
  
  getEdad() {
    return this.anos * 7;
  }
}

const Hola = new Perro(5);
console.log(Hola.getEdad());

/////////////////////////////////////////////////////////

class Promedio {
  constructor(exam1, exam2, trabajo) {
    this.exam1 = exam1;
    this.exam2 = exam2;
    this.trabajo = trabajo;
  }
  
  calcularProm(){
    return this.exam1 * 0.3 + this.exam2 * 0.3 + this.trabajo * 0.4;
  }
}

const nota = new Promedio(20, 18, 16);
console.log(nota.calcularProm());

///////////////////////////////////////////////////////

class Triangulo {
  constructor(base) {
    this.base = base;
  }

  getAreaT() {
      return (Math.sqrt(3) / 4) * Math.pow(this.base, 2);
  }
}

const triangulo = new Triangulo(10);
console.log(triangulo.getAreaT());