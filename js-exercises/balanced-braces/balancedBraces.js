
function balancedBraces(string) {
  let map = {
      ")" : "(",
      "}": "{",
      "]": "["
  };
  let stack = [];
  for (let i = 0; i < string.length; i++) {
      if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
          stack.push(string[i]); // "(["
          } else {
              let popped = stack.pop(); // "["
              if (popped !== map[string[i]]) {
                  return false;
              }
          }
  }
  if (stack.length === 0)
  return true;
}

export {
  balancedBraces,
};


