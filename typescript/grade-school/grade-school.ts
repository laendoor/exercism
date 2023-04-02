export class GradeSchool {
  private _roster: Record<number, string[]> = {};

  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(student: string, grade: number) {
    // Create grade if not exists
    if (!(grade in this._roster)) {
      this._roster[grade] = [];
    }

    // Remove received student from all grades to avoid duplication
    for (const gr in this._roster) {
      this._roster[gr] = this._roster[gr].filter(st => st != student);
    }

    // Add student to its grade
    this._roster[grade].push(student);
    this._roster[grade].sort();
  }

  grade(gr: number) {
    return this.roster()[gr] || [];
  }
}
