export default class ComplexNumber {
  constructor(public real: number, public imag: number) {}

  // (a + i * b) + (c + i * d) = (a + c) + (b + d) * i
  public add(complex: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + complex.real, this.imag + complex.imag);
  }

  // (a + i * b) - (c + i * d) = (a - c) + (b - d) * i
  public sub(complex: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - complex.real, this.imag - complex.imag);
  }

  // (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i
  public div(complex: ComplexNumber): ComplexNumber {
    const div = complex.real ** 2 + complex.imag ** 2;
    const real = (this.real * complex.real + this.imag * complex.imag) / div;
    const imag = (this.imag * complex.real - this.real * complex.imag) / div;
    return new ComplexNumber(real, imag);
  }

  // (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i
  public mul(complex: ComplexNumber): ComplexNumber {
    const real = this.real * complex.real - this.imag * complex.imag;
    const imag = this.imag * complex.real + this.real * complex.imag;
    return new ComplexNumber(real, imag);
  }

  // |z| = sqrt(a^2 + b^2)
  public get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  // a - b * i
  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, -this.imag || 0);
  }

  // e^(a + i * b) = e^a * e^(i * b)
  // e^(i * b) = cos(b) + i * sin(b).
  // e^(a + i * b) = e^a * cos(b) + i * sin(b)
  public get exp(): ComplexNumber {
    const real = (Math.E ** this.real) * Math.cos(this.imag);
    const imag = Math.sin(this.imag);
    return new ComplexNumber(real, imag);
  }
}
