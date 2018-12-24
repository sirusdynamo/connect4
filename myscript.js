var player1 =prompt("Player one: Enter your name you will be blue")
var player1color ='rgb(86,151,255)'


var player2 =prompt("Player two: Enter your name you will be blue")
var player1color ='rgb(237,45,73)'


var game_on =true;

var table =$('table tr');



function reportWin(rowNum,colNum){
    console.log("You won starting at this row,col")
    console.log(rowNum);
    console.log(colNum);
}
 

function changeColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}


function checkColor(rowIndex, colIndex){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');

    
}


function checkBottom(colIndex){
    var colorReport =checkColor(5,colIndex);
    for(var row=5; row > -1 ;row--){
        colorReport =checkColor(row,colIndex);
        if (colorReport === 'rgb(128, 128, 128'){
            return row
        }
    }
}

function colorMatchCheck(oone,two,three,four){
    return(one === two && one !== two && one ===  three && one ===four && one === 'rgb(128, 128, 128)')

}
