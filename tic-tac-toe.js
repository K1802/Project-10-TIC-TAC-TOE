// NOTE: Global variables
var board = [
  new Array(3),
  new Array(3),
  new Array(3)
];

var square = [
  new Array(3),
  new Array(3),
  new Array(3)
];

var turn;

function initialize() {
  // DEBUG:

  var squares = $(".square");

  for (let x = 0; x < 3; ++x)
    for (let y = 0; y < 3; ++y)
    {
      square[x][y] = squares.eq(x * 3 + y);
      square[x][y].css({
        "left" : `${x * 180}px`,
        "top" : `${y * 180}px`
      });
    }
}

//Bool
function isGameEnd()
{
  ///vertical
  for(let x = 0; x < 3; ++x)
  {
    if (board[x][0] != '')
    {
        let symbol = board[x][0];
        for (let y = 1; y < 3; ++y)
          if (board[x][y] != symbol) return false;
        return true;
    }
  }

  //Horizontal
  for(let y = 0; y < 3; ++y)
  {
    if (board[0][y] != '')
    {
        let symbol = board[0][y];
        for (let x = 1; x < 3; ++x)
          if (board[x][y] != symbol) return false;
        return true;
    }
  }
  //Diagonal
  for (let x = 0, y = 0; x < 3 && y < 3; ++x, ++y)
  


}


///Main
initialize();
