export default class Building {
  constructor(sqrft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqrft = sqrft;
  }

  get sqrft() {
    return this._sqrft;
  }

  set sqrft(sqrft) {
    this._sqrft = sqrft;
  }
}
