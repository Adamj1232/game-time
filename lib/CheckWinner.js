class CheckForWinner {
  constructor() {

  // Check for winner
    this.checkLine = (a, b, c, d) => {
      return ((a != undefined) && (a == b) && (a == c) && (a == d));
    }

    this.checkForWinner = (board) => {
      let r = null
      let c = null

      // Check horizontal
      for (r = 0; r <= 3; r++) {
        for (c = 0; c < 7; c++) {
          if (this.checkLine(board[r][c], board[r+1][c], board[r+2][c], board[r+3][c])) {
            return board[r][c];
          }
        }
      }
      // Check vertical
      for (r = 0; r < 7; r++) {
        for (c = 0; c < 4; c++) {
          if (this.checkLine(board[r][c], board[r][c+1], board[r][c+2], board[r][c+3])) {
            return board[r][c];
          }
        }
      }
      // Check down-right
      for (r = 0; r <= 3; r++) {
        for (c = 0; c < 4; c++) {
          if (this.checkLine(board[r][c], board[r+1][c+1], board[r+2][c+2], board[r+3][c+3])) {
            return board[r][c];
          }
        }
      }
      // Check down-left
      for (r = 3; r <= 6; r++) {
        for (c = 0; c < 4; c++) {
          if (this.checkLine(board[r][c], board[r-1][c+1], board[r-2][c+2], board[r-3][c+3])) {
            return board[r][c];
          }
        }
      }
    }
  }
}

module.exports = CheckForWinner