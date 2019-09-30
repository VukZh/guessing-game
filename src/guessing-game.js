class GuessingGame {
  constructor() {
    this.mn = 0;
    this.mx = 0;
    this.currFundNum = 0;
  }
  setRange(mn, mx) {
    this.mn = mn;
    this.mx = mx;
    console.log("min " + this.mn + " max " + this.mx);
  }

  guess() {
    this.currFundNum = Math.round((this.mx - this.mn) / 2) + this.mn;
    // console.log("min " +  this.mn + " max " + this.mx + " --currFundNum-- " + this.currFundNum);
    return this.currFundNum;
  }

  lower() {
    this.mx = this.currFundNum;
    // console.log(this.mn + " ----------------- " + this.mx);
  }

  greater() {
    this.mn = this.currFundNum;
    // console.log(this.mn + " ----------------- " + this.mx);
  }
}

module.exports = GuessingGame;
