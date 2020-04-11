import Calculator from "./Calculator";




class DecCalculator extends Calculator {
  constructor(settings) {
    super(settings);
    console.log(this.getName());
  }

  add(arr1, arr2) {
    const res = arr1.map((el1, i) => el1 + arr2[i]);
    for(let i = 0; i < res.length; i++) {
      if(res[i] >= 10) {
        res[i] -= 10;
        res[i-1] += 1;
      }
    }

    return res;
  }

  changeNumber(root) {
    let activeElement = root.querySelector(".active");
    activeElement.innerHTML++;
    if(activeElement.innerHTML === "10") {
      activeElement.innerHTML = "0";
    }

    this.checkNumber();
    this.updateResult();
  }

  updateResult() {
    const l = this.resultNumberArray.length - 1;
    console.log(this.resultNumberArray);
    this.calculatorDOMElement
      .querySelectorAll('.result-bit span')
      .forEach((el, i) => el.innerText = this.resultNumberArray[l-i]);
  }
}

export default DecCalculator;