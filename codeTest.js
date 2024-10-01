function solveNQueens(n) {
  const solutions = [];

  const board = Array(n)
    .fill()
    .map(() => Array(n).fill("."));

  //判斷可擺放皇后的安全位置，若為安全位置則設為true
  function isSafe(row, col) {
    // 檢查左邊安全位置
    for (let i = 0; i < col; i++) {
      if (board[row][i] === "Q") return false;
    }

    // 檢查左上方安全位置
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // 檢查左下方安全位置
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(col) {
    //當成功放完n個皇后時，完成一個解
    if (col === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let row = 0; row < n; row++) {
      if (isSafe(row, col)) {
        //嘗試在下一列放一個Q，若沒有安全位置，則將前一個Q設為"."
        board[row][col] = "Q";
        backtrack(col + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return solutions;
}

const solutions = solveNQueens(8);

solutions.slice(0, 3).forEach((solution) => {
  solution.forEach((row) => console.log(row));
});
