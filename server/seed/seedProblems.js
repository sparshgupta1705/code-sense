const problems = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    tags: ["Array", "Hash Map"],
    companies: ["Amazon", "Google"],

    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",

    constraints:
      "2 <= nums.length <= 10^5",

    starterCode: `#include<iostream>
using namespace std;

int main(){

}`,

    publicTestCases: [
      {
        input: "2 7 11 15\n9",
        expectedOutput: "0 1"
      }
    ],

    hiddenTestCases: [
      {
        input: "3 2 4\n6",
        expectedOutput: "1 2"
      },
      {
        input: "3 3\n6",
        expectedOutput: "0 1"
      }
    ]
  }
];