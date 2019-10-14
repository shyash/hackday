function ReLU(number){
    if(number<10){
        return 10;
    }
    if(number>=30){
        return 30;
    }
    return number
}
let W = [0,0]
let B = 0
let dataset = [
  { age: 17, bmi: 15, target: 17 },
  { age: 47, bmi: 15, target: 14 },
  { age: 19, bmi: 18, target: 21 },
  { age: 48, bmi: 18, target: 18 },
  { age: 20, bmi: 20, target: 25 },
  { age: 49, bmi: 20, target: 23 },
  { age: 18, bmi: 17, target: 19 },
  { age: 46, bmi: 17, target: 17 },
  { age: 21, bmi: 16, target: 19 },
  { age: 50, bmi: 16, target: 17 },
  { age: 18, bmi: 18, target: 20 },
  { age: 18, bmi: 20, target: 23 },
  { age: 18, bmi: 21, target: 26 },
  { age: 19, bmi: 16, target: 18 },
  { age: 19, bmi: 17, target: 20 },
  { age: 22, bmi: 23, target: 29 },
  { age: 22, bmi: 21, target: 25 },
  { age: 24, bmi: 22, target: 32 },
  { age: 24, bmi: 20, target: 27 },
  { age: 23, bmi: 21, target: 28 }
];
