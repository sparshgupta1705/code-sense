const problems = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    tags: ["Array", "Hash Map"],
    companies: ["Amazon", "Google"],
    frequency: "High",
    description:
      "Given an array of integers and a target, return indices of the two numbers such that they add up to the target.",
    constraints: "2 <= n <= 100000",
    starterCode: `#include<iostream>
using namespace std;

int main(){

}`,
    publicTestCases: [
      {
        input: "2 7 11 15\n9",
        expectedOutput: "0 1",
      },
    ],
    hiddenTestCases: [
      {
        input: "3 2 4\n6",
        expectedOutput: "1 2",
      },
      {
        input: "3 3\n6",
        expectedOutput: "0 1",
      },
    ],
  },

  {
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    tags: ["Stack"],
    companies: ["Amazon", "Microsoft"],
    frequency: "High",
    description: "Determine if the input string has valid parentheses.",
    constraints: "1 <= s.length <= 10000",
    starterCode: `#include<iostream>
using namespace std;

int main(){

}`,
    publicTestCases: [
      {
        input: "()[]{}",
        expectedOutput: "true",
      },
    ],
    hiddenTestCases: [
      {
        input: "([)]",
        expectedOutput: "false",
      },
    ],
  },

  {
    title: "Binary Search",
    difficulty: "Easy",
    category: "Binary Search",
    tags: ["Binary Search"],
    companies: ["Google", "Adobe"],
    frequency: "Medium",
    description: "Find the index of a target element in a sorted array.",
    constraints: "1 <= n <= 100000",
    starterCode: `#include<iostream>
using namespace std;

int main(){

}`,
    publicTestCases: [
      {
        input: "1 2 3 4 5\n4",
        expectedOutput: "3",
      },
    ],
    hiddenTestCases: [
      {
        input: "1 3 5 7 9\n2",
        expectedOutput: "-1",
      },
    ],
  },

  {
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    tags: ["Two Pointers"],
    companies: ["Meta", "Amazon"],
    frequency: "High",
    description: "Find two lines that together with the x-axis form a container holding the most water.",
    constraints: "2 <= n <= 100000",
    starterCode: `#include<iostream>
using namespace std;

int main(){

}`,
    publicTestCases: [
      {
        input: "1 8 6 2 5 4 8 3 7",
        expectedOutput: "49",
      },
    ],
    hiddenTestCases: [
      {
        input: "1 1",
        expectedOutput: "1",
      },
    ],
  },

  {
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    tags: ["DP"],
    companies: ["Microsoft", "Uber"],
    frequency: "High",
    description: "Return the minimum number of coins required to make up the amount.",
    constraints: "1 <= amount <= 10000",
    starterCode: `#include<iostream>
using namespace std;

int main(){

}`,
    publicTestCases: [
      {
        input: "1 2 5\n11",
        expectedOutput: "3",
      },
    ],
    hiddenTestCases: [
      {
        input: "2\n3",
        expectedOutput: "-1",
      },
    ],
  },
];

export default problems;