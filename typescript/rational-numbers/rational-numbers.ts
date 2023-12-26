function gcd(a: number, b: number): number {
  if (b === 0) return a
  return gcd(b, a % b)
}

export class Rational {
  constructor(public numerator: number, public denominator: number) {
    this.reduce()
  }

  /**
   * The sum of two rational numbers
   *  r₁ = a₁/b₁ and r₂ = a₂/b₂ is
   *    r₁ + r₂ = a₁/b₁ + a₂/b₂ = (a₁ * b₂ + a₂ * b₁) / (b₁ * b₂).
   */
  add(rational: Rational): Rational {
    const n = this.numerator * rational.denominator + rational.numerator * this.denominator
    const m = this.denominator * rational.denominator
    return new Rational(n, m)
  }

  /**
   * The difference of two rational numbers
   *  r₁ = a₁/b₁ and r₂ = a₂/b₂ is
   *    r₁ - r₂ = a₁/b₁ - a₂/b₂ = (a₁ * b₂ - a₂ * b₁) / (b₁ * b₂).
   */
  sub(rational: Rational): Rational {
    const n = this.numerator * rational.denominator - rational.numerator * this.denominator
    const m = this.denominator * rational.denominator
    return new Rational(n, m)
  }

  /**
   * The product (multiplication) of two rational numbers
   *  r₁ = a₁/b₁ and r₂ = a₂/b₂ is
   *    r₁ * r₂ = (a₁ * a₂) / (b₁ * b₂).
   */
  mul(rational: Rational): Rational {
    const n = this.numerator * rational.numerator
    const m = this.denominator * rational.denominator
    return new Rational(n, m)
  }

  /**
   * Dividing a rational number
   *  r₁ = a₁/b₁ by another r₂ = a₂/b₂ is
   *    r₁ / r₂ = (a₁ * b₂) / (a₂ * b₁) if a₂ is not zero.
   */
  div(rational: Rational): Rational {
    const n = this.numerator * rational.denominator
    const m = this.denominator * rational.numerator
    return new Rational(n, m)
  }

  /**
   * The absolute value |r| of the rational number
   *  r = a/b is equal to |a|/|b|.
   */
  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator))
  }

  /**
   * Exponentiation of a rational number r = a/b to a non-negative integer power n is r^n = (a^n)/(b^n).
   * Exponentiation of a rational number r = a/b to a negative integer power n is r^n = (b^m)/(a^m), where m = |n|.
   */
  exprational(exp: number): Rational {
    const n = this.numerator;
    const m = this.denominator;
    if (exp >= 0) {
      return new Rational(n ** exp, m ** exp)
    }

    return new Rational(m ** Math.abs(exp), n ** Math.abs(exp))
  }

  /**
   * Exponentiation of a real number x to a rational number r = a/b is x^(a/b) = root(x^a, b), where root(p, q) is the qth root of p.
   */
  expreal(exp: number): number {
    return exp ** (this.numerator / this.denominator)
  }

  /**
   * To reduce a rational number r = a/b,
   * divide a and b by the greatest common divisor (gcd) of a and b. 
   */
  reduce(): Rational {
    const gcdVal = gcd(this.numerator, this.denominator)
    this.numerator = this.numerator / gcdVal;
    this.denominator = this.denominator / gcdVal;

    // If the denominator is negative, the sign is carried to the numerator.
    if (this.denominator < 0) {
      this.numerator = -this.numerator
      this.denominator = -this.denominator
    }

    return this
  }
}
