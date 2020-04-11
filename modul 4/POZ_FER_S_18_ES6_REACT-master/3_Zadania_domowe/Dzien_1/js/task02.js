function Weather(temperatures) {
  this.temperatures = temperatures;
}

Weather.prototype.getAvgTemperature = function() {
  if(!this.temperatures.length > 0) throw new Error('No enough temperatures');
  return this.temperatures.reduce((a,b) => a+b) / this.temperatures.length;
};

const day1 = new Weather([-2, 4.4, 3]);
const meanTemperature = day1.getAvgTemperature();

document.querySelector('.avg').innerText = meanTemperature;