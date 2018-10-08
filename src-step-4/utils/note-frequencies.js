const A4 = 440;

class Octave {
  constructor(a) {
    this["B"] = a * Math.pow(2, 2 / 12);
    this["A#"] = a * Math.pow(2, 1 / 12);
    this["A"] = a;
    this["G#"] = a * Math.pow(2, -1 / 12);
    this["G"] = a * Math.pow(2, -2 / 12);
    this["F#"] = a * Math.pow(2, -3 / 12);
    this["F"] = a * Math.pow(2, -4 / 12);
    this["E"] = a * Math.pow(2, -5 / 12);
    this["D#"] = a * Math.pow(2, -6 / 12);
    this["D"] = a * Math.pow(2, -7 / 12);
    this["C#"] = a * Math.pow(2, -8 / 12);
    this["C"] = a * Math.pow(2, -9 / 12);
  }
}

let noteFrequencies = [];

for (let i = -4; i < 4; i++) {
  let a = A4 * Math.pow(2, i);
  let octave = new Octave(a);
  noteFrequencies.push(octave);
}

export default noteFrequencies;
