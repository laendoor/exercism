export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  isTriangle() {
    return this.s1 > 0 && this.s2 > 0 && this.s3 > 0 && this.hasInequalityProp();
  }

  hasInequalityProp() {
    return (this.s1 + this.s2 >= this.s3) &&
           (this.s1 + this.s3 >= this.s2) &&
           (this.s2 + this.s3 >= this.s1);
  }

  isEquilateral() {
    return this.isTriangle() && this.s1 === this.s2 && this.s1 === this.s3;
  }

  isIsosceles() {
    return this.isTriangle() && !this.isScalene();
  }

  isScalene() {
    return this.isTriangle() && this.s1 !== this.s2 && this.s1 !== this.s3 && this.s2 !== this.s3;
  }
}
