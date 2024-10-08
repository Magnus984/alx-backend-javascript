export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof (value) === 'string') {
      this._code = value;
    } else {
      throw new Error('Code must be string');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
