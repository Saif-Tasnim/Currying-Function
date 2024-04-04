// currying function is a pattern of functional programming

const currying = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

const result = currying(2)(3)(4);
// console.log(result);

const level1 = currying(10);
const level2 = currying(10)(20);

const fresher1 = level1(4)(5);
const fresher12 = level1(5)(6);
const fresher3 = level1(7)(8);

const intermediate = level2(3);
const pro = level2(18);

console.log(
  "Fresher--1 : ",
  fresher1,
  "\n",
  "Fresher--2 :",
  fresher12,
  "\n",
  "Fresher--3 :",
  fresher3,
  "\n",
  "Intermediate :",
  intermediate,
  "\n",
  "Pro :",
  pro,
  "\n"
);
