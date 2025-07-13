
const emptyBoard = document.getElementById("board");
let isGameRunning = true;
let isGreenTurn = true;
let clickedLocation;
let isPieceClicked = false;
let isSqaureClicked = false;
let IsEaten = false;
let squaresToHighlight = [];
let currentPiece;
const currentTurnElement = document.getElementById("Turn");


function getCurrentPlayerName() {
    return isGreenTurn ? "Green Player" : "Red Player";
}
function getCurrentPlayercolor(){
    return isGreenTurn ? "green_piece" : "red_piece";
}
function getCurrentEnemycolor(){
    return isGreenTurn ? "red_piece" : "green_piece";
}
function IsGameOver(){
    if(IsNoPiecesLeftCheck()){
        alert("Game over on "+getCurrentPlayerName()+" turn");
        isGameRunning = false;
    }
    else if(IsNoPiecesCanMove()){
        alert("Game ended due to" +getCurrentPlayerName()+" blocking all options");
        isGameRunning = false;
    }
}
function HighlightKingMoves(target,parentID){ 
    let isMoveAble = false;
    let targetCanEat = false;
    let EnemypieceText = getCurrentEnemycolor();
    let friendlypieceText =  getCurrentPlayercolor();
    if(target.classList.contains(friendlypieceText)){
        for(let i = parentID-11;i>=0;i-=11){
            let PostEatLoc = document.getElementById(`${addZero(i-11)}`);
            let loc = document.getElementById(`${i}`);
            if(loc!=null && loc.classList.contains("black")){
                if(!IsEaten){
                    if(loc.hasChildNodes())
                        if(loc.childNodes[0].classList.contains(friendlypieceText))
                            break;
                        else if(PostEatLoc!=null){
                            if(PostEatLoc.hasChildNodes())
                                break;
                        }
                    if(!loc.hasChildNodes()){
                        squaresToHighlight.push(loc);
                        isMoveAble = true;
                    }
                    else if(PostEatLoc!=null){
                        if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                            squaresToHighlight.push(PostEatLoc);
                            targetCanEat = true;
                            isMoveAble = true;
                            break;
                        }
                    }
                }
            else{
                if(PostEatLoc!=null && loc!=null && loc.hasChildNodes()){
                    if(loc.hasChildNodes()&&PostEatLoc.hasChildNodes())
                            break;
                    if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                        squaresToHighlight.push(PostEatLoc);
                        isMoveAble = true;
                        break;
                    }
                }
            }
        }
        }
        for(let i = parentID-9;i>=0;i-=9){
            let PostEatLoc = document.getElementById(`${addZero(i-9)}`);
            let loc = document.getElementById(`${i}`);
            if(loc!=null && loc.classList.contains("black")){
                if(!IsEaten){
                    if(loc.hasChildNodes())
                        if(loc.childNodes[0].classList.contains(friendlypieceText))
                            break;
                         else if(PostEatLoc!=null){
                            if(PostEatLoc.hasChildNodes())
                                break;
                        }
                    if(!loc.hasChildNodes()){
                        squaresToHighlight.push(loc);
                        isMoveAble = true;
                    }
                    else if(PostEatLoc!=null){
                        if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                            squaresToHighlight.push(PostEatLoc);
                            targetCanEat = true;
                            isMoveAble = true;
                            break;
                        }
                    }
                }
                else{
                    if(PostEatLoc!=null && loc!=null && loc.hasChildNodes()){
                        if(loc.hasChildNodes()&&PostEatLoc.hasChildNodes())
                            break;
                        if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                            squaresToHighlight.push(PostEatLoc);
                            isMoveAble = true;
                            break;
                        }
                    }
                }
            }
        }
        for(let i = parentID+11;i<=77;i+=11){
            let PostEatLoc = document.getElementById(`${addZero(i+11)}`);
            let loc = document.getElementById(`${i}`);
            if(loc!=null && loc.classList.contains("black")){
                if(!IsEaten){
                    if(loc.hasChildNodes())
                        if(loc.childNodes[0].classList.contains(friendlypieceText))
                            break;
                         else if(PostEatLoc!=null){
                            if(PostEatLoc.hasChildNodes())
                                break;
                        }
                    if(!loc.hasChildNodes()){
                        squaresToHighlight.push(loc);
                        isMoveAble = true;
                    }
                    else if(PostEatLoc!=null){
                        if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                            squaresToHighlight.push(PostEatLoc);
                            targetCanEat = true;
                            isMoveAble = true;
                            break;
                        }
                    }
                }
                else{
                    if(PostEatLoc!=null && loc!=null && loc.hasChildNodes()){
                        if(loc.hasChildNodes()&&PostEatLoc.hasChildNodes())
                            break;
                        if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                            squaresToHighlight.push(PostEatLoc);
                            isMoveAble = true;
                            break;
                        }
                    }
                }
            }
        }
        for(let i = parentID+9;i<=70;i+=9){
            let PostEatLoc = document.getElementById(`${addZero(i+9)}`);
            let loc = document.getElementById(`${i}`);
            if(loc!=null && loc.classList.contains("black")){
                if(!IsEaten){
                    if(loc.hasChildNodes())
                        if(loc.childNodes[0].classList.contains(friendlypieceText))
                            break;
                         else if(PostEatLoc!=null){
                            if(PostEatLoc.hasChildNodes())
                                break;
                        }
                    if(!loc.hasChildNodes()){
                        squaresToHighlight.push(loc);
                        isMoveAble = true;
                    }
                    else if(PostEatLoc!=null ){
                        if(loc.hasChildNodes()&&PostEatLoc.hasChildNodes())
                            break;
                        if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                            squaresToHighlight.push(PostEatLoc);
                            targetCanEat = true;
                            isMoveAble = true;
                            break;
                        }
                    }
                }
                else{
                    if(PostEatLoc!=null && loc!=null && loc.hasChildNodes()){
                        if(loc.hasChildNodes()&&PostEatLoc.hasChildNodes())
                            break;
                        if(loc.childNodes[0].classList.contains(EnemypieceText) && PostEatLoc.innerHTML.trim()==''){
                            squaresToHighlight.push(PostEatLoc);
                            isMoveAble = true;
                            break;
                        }
                    }
                }
            
            }
        }
    }
    if(targetCanEat)
        target.classList.add("can-eat");
    return isMoveAble;
}

function IsNoPiecesLeftCheck(){
    let EnemypieceText = getCurrentEnemycolor();
    let Enemypiecelist = document.getElementsByClassName(EnemypieceText);
    if(Enemypiecelist!=null)
        return false;
    return true;
}

function IsNoPiecesCanMove(){
    let EnemypieceText = getCurrentEnemycolor();
    let Enemypiecelist = document.getElementsByClassName(EnemypieceText);
    for(let piece of Enemypiecelist){
        if(!piece.classList.contains("king")){
            let MarkedLocationLeftID;
            let MarkedLocationRightID;
            let MarkedLocationLeftEatID;
            let MarkedLocationRightEatID;
            let checkedPieceLocation = parseInt(piece.parentElement.id);
            if(!isGreenTurn) {
                MarkedLocationLeftID = `${addZero(checkedPieceLocation-11)}`;
                MarkedLocationRightID = `${addZero(checkedPieceLocation-9)}`;
                MarkedLocationLeftEatID = `${addZero(checkedPieceLocation-22)}`;
                MarkedLocationRightEatID = `${addZero(checkedPieceLocation-18)}`;
            }   
            else{
                MarkedLocationLeftID = `${(checkedPieceLocation)+9}`; 
                MarkedLocationRightID = `${checkedPieceLocation+11}`;
                MarkedLocationLeftEatID = `${checkedPieceLocation+18}`;
                MarkedLocationRightEatID = `${checkedPieceLocation+22}`;
            }
            let MarkedLocationLeft = document.getElementById(MarkedLocationLeftID);
            let MarkedLocationRight = document.getElementById(MarkedLocationRightID);
            let MarkedLocationLeftEat = document.getElementById(MarkedLocationLeftEatID);
            let MarkedLocationRightEat = document.getElementById(MarkedLocationRightEatID);

            if(MarkedLocationLeft!=null && !MarkedLocationLeft.hasChildNodes())
                return false;
            else if(MarkedLocationLeft!=null && MarkedLocationLeftEat!=null)
                if(MarkedLocationLeftEat.innerHTML.trim()=='' && MarkedLocationLeft.childNodes[0].classList.contains(EnemypieceText))
                    return false;
            if(MarkedLocationRight!=null && !MarkedLocationRight.hasChildNodes())
                return false;
            else if(MarkedLocationRightEat!=null && MarkedLocationRight!=null)
                if(MarkedLocationRightEat.innerHTML.trim()=='' &&MarkedLocationRight.childNodes[0].classList.contains(EnemypieceText))
                    return false;
            }
        else if(HighlightKingMoves(piece,piece.parentElement.id))   
            return false; 
    }
    return true;
}

function removeBurned(){
    let IsSecondEat = false;
    let ToBeRemoved = [];
    let MarkedLocationLeft;
    let MarkedLocationRight;
    let MarkedLocationLeftEat;
    let MarkedLocationRightEat;
    let EnemypieceText = getCurrentEnemycolor();
    let friendlypieceText = getCurrentPlayercolor();
    let FriendlyPiecesList = document.getElementsByClassName(friendlypieceText);
    for(let piece of FriendlyPiecesList){
        let isPieceRemovable = false;
        let checkedPieceLocation = parseInt(piece.parentElement.id);
        if(!piece.classList.contains("king")){
            if(isGreenTurn) {
                MarkedLocationLeft = document.getElementById(addZero(`${checkedPieceLocation-11}`));
                MarkedLocationRight = document.getElementById(addZero(`${checkedPieceLocation-9}`));
                MarkedLocationLeftEat = document.getElementById(addZero(`${checkedPieceLocation-22}`));
                MarkedLocationRightEat = document.getElementById(addZero(`${checkedPieceLocation-18}`));
            }   
            else{
                MarkedLocationLeft = document.getElementById(addZero(`${checkedPieceLocation+9}`)); 
                MarkedLocationRight = document.getElementById(`${checkedPieceLocation+11}`);
                MarkedLocationLeftEat = document.getElementById(`${checkedPieceLocation+18}`);
                MarkedLocationRightEat = document.getElementById(`${checkedPieceLocation+22}`);
            }
            if(MarkedLocationLeftEat!=null && MarkedLocationLeft!=null && MarkedLocationLeft.hasChildNodes())
                if(MarkedLocationLeftEat.innerHTML.trim()=='' && MarkedLocationLeft.childNodes[0].classList.contains(EnemypieceText))
                    isPieceRemovable = true;
            if(MarkedLocationRightEat!=null && MarkedLocationRight!=null && MarkedLocationRight.hasChildNodes())
                if(MarkedLocationRightEat.innerHTML.trim()=='' && MarkedLocationRight.childNodes[0].classList.contains(EnemypieceText))
                    isPieceRemovable = true;  

            if(piece.classList.contains("can-eat") ){
                IsSecondEat = true;
                ToBeRemoved.push(piece);
                
            }
            else if(isPieceRemovable && !piece.classList.contains("played") ){
                ToBeRemoved.push(piece);
                IsSecondEat = false;
            }
                
        }
        else if(HighlightKingMoves(piece,checkedPieceLocation)){
            if(piece.classList.contains("can-eat")&&!piece.classList.contains("played")){
                IsSecondEat = true;
                ToBeRemoved.push(piece);
            }
            else if(piece.classList.contains("played")){
                ToBeRemoved.push(piece);
                IsSecondEat = false;
            }
        }
        
    }
    for(let element of ToBeRemoved){
        if(IsSecondEat){
            if(element.classList.contains("can-eat")){
                element.remove();
                break;
            }
        }
        else {
            element.remove();
            break;
        }
    }
        
}

function clearAllSqauresAndPieces(){
     allSquares.forEach(element=>{
        element.classList.remove('highlighted');
        })
    allPieces.forEach(element=>{
            element.classList.remove('selected');
    })
}
function addZero(stringTochange){
    if(stringTochange.length<2)
        return "0"+stringTochange;
    return stringTochange;
}
function IsConvertableToKing(targetPiece){
        let targetLoc = targetPiece.parentElement.id;
        if(targetLoc[0]=="0" && targetPiece.classList.contains("green_piece")){
            targetPiece.classList.add("king");
            targetPiece.innerHTML = "king";
            return true;
        }
        if(targetLoc[0]=="7" && targetPiece.classList.contains("red_piece")){
            targetPiece.classList.add("king");
            targetPiece.innerHTML = "king";
            return true;
        }
    return false;
}

function highlightPiece(clickedpiece){
    clearAllSqauresAndPieces()
    clickedpiece.classList.toggle("selected");
}   

function isSelectedPieceValid(target){   
    if(target.classList.contains(getCurrentPlayercolor())){
        return true;
    }
    return false;
}

function unTogglePieces(target){
    if(target.classList.contains("white") || !target.classList.contains("highlighted"))
        clearAllSqauresAndPieces()
}

function highlightSquares(locationArr){
    for(let element of locationArr){
        element.classList.add("highlighted");
    }
}

function isPieceMoveAble(target){
    let isMoveAble = false;
    let pieces = document.getElementsByClassName("can-eat");
    for(let element of pieces){
        element.classList.remove("can-eat");
    }
    let EnemypieceText = isGreenTurn?"red_piece":"green_piece";
    let isSelectedPieceGreen  = target.classList.contains("green_piece")?true:false
    let targetParentID = parseInt(target.parentElement.id); 
    let MarkedLocationLeft;
    let MarkedLocationRight;
    let MarkedLocationLeftEat;
    let MarkedLocationRightEat;
    if(!IsEaten && !target.classList.contains("king")){
        if(isSelectedPieceGreen&&isGreenTurn) {
            MarkedLocationLeft= document.getElementById(addZero(`${targetParentID-11}`));
            MarkedLocationRight = document.getElementById(addZero(`${targetParentID-9}`));
            MarkedLocationLeftEat = document.getElementById(addZero(`${targetParentID-22}`));
            MarkedLocationRightEat = document.getElementById(addZero(`${targetParentID-18}`));
        }   
        else if((!isSelectedPieceGreen&&!isGreenTurn)){  
            MarkedLocationLeft = document.getElementById(addZero(`${targetParentID+9}`)); 
            MarkedLocationRight = document.getElementById(`${targetParentID+11}`);
            MarkedLocationLeftEat = document.getElementById(`${targetParentID+18}`);
            MarkedLocationRightEat = document.getElementById(`${targetParentID+22}`);
        }

        if(MarkedLocationLeft!=null && !MarkedLocationLeft.hasChildNodes()){
            squaresToHighlight.push(MarkedLocationLeft);
            isMoveAble = true;
        }
        else if(MarkedLocationLeft!=null && MarkedLocationLeftEat!=null){
            if(MarkedLocationLeftEat.innerHTML.trim()=='' && MarkedLocationLeft.childNodes[0].classList.contains(EnemypieceText)){
                squaresToHighlight.push(MarkedLocationLeftEat);
                isMoveAble = true;
                target.classList.add("can-eat");
            }}
        if(MarkedLocationRight!=null && !MarkedLocationRight.hasChildNodes()){
            squaresToHighlight.push(MarkedLocationRight);
            isMoveAble = true;
        }
        else if(MarkedLocationRightEat!=null && MarkedLocationRight!=null){
            if(MarkedLocationRightEat.innerHTML.trim()=='' &&MarkedLocationRight.childNodes[0].classList.contains(EnemypieceText)){
                squaresToHighlight.push(MarkedLocationRightEat);
                isMoveAble = true;
                target.classList.add("can-eat");
            }}
        return isMoveAble;
    }
    else if(target.classList.contains("king"))
        if(HighlightKingMoves(target,targetParentID))
            return true;
    return false;
}
function isAbleToContinueEating(target){
    if(target.parentElement!=null){
        let isEatAble = false;
        let EnemypieceText = isGreenTurn?"red_piece":"green_piece";
        let targetParentID = parseInt(target.parentElement.id);
        let LeftUp = document.getElementById(addZero(`${targetParentID-11}`));
        let LeftEatUp = document.getElementById(addZero(`${targetParentID-22}`));
        let LeftDown = document.getElementById(addZero(`${targetParentID+9}`));
        let LeftEatDown = document.getElementById(`${targetParentID+18}`);
        let RightUp = document.getElementById(addZero(`${targetParentID-9}`));
        let RightEatUp = document.getElementById(addZero(`${targetParentID-18}`));
        let RightDown = document.getElementById(`${targetParentID+11}`);
        let RightEatDown = document.getElementById(`${(targetParentID)+22}`);
        if(IsEaten && !target.classList.contains("king")){
            if( LeftEatUp!=null && LeftEatUp.innerHTML.trim()=='' && LeftUp.hasChildNodes() &&LeftUp.childNodes[0].classList.contains(EnemypieceText)){
                isEatAble = true;
                squaresToHighlight.push(LeftEatUp);}
            if( LeftEatDown!=null && LeftEatDown.innerHTML.trim()=='' && LeftDown.hasChildNodes() && LeftDown.childNodes[0].classList.contains(EnemypieceText)){
                isEatAble = true;
                squaresToHighlight.push(LeftEatDown);}
            if( RightEatUp!=null && RightEatUp.innerHTML.trim()=='' && RightUp.hasChildNodes() && RightUp.childNodes[0].classList.contains(EnemypieceText)){
                isEatAble = true;
                squaresToHighlight.push(RightEatUp); } 
            if( RightEatDown!=null && RightEatDown.innerHTML.trim()=='' && RightDown.hasChildNodes() && RightDown.childNodes[0].classList.contains(EnemypieceText)){
                isEatAble = true;
                squaresToHighlight.push(RightEatDown); }
            }
        else if(IsEaten && target.classList.contains("king")){
            if(HighlightKingMoves(target,targetParentID))
                isEatAble = true;
        }
        else{
            squaresToHighlight = [];
            IsEaten = false;
            return false;
        }
        return isEatAble;
}
}

function KingMove(piece,dest,gap){
    dest.appendChild(piece);
    if(gap%9==0){
        if(gap>=18 && document.getElementById(parseInt(dest.id)+9).hasChildNodes()){
            document.getElementById(parseInt(dest.id)+9).innerHTML = "";
            IsEaten = true;
        }
        if(gap<=-18 && document.getElementById(parseInt(dest.id)-9).hasChildNodes()){
            document.getElementById(parseInt(dest.id)-9).innerHTML = "";
            IsEaten = true;
        }
    }
    else if(gap%11==0){
        if(gap>=22 && document.getElementById(parseInt(dest.id)+11).hasChildNodes()){
            document.getElementById(parseInt(dest.id)+11).innerHTML = "";
            IsEaten = true;
        }
        if(gap<=-22 && document.getElementById(parseInt(dest.id)-11).hasChildNodes()){
            document.getElementById(parseInt(dest.id)-11).innerHTML = "";
            IsEaten = true;
        }
    }
    piece.classList.add("played");
    squaresToHighlight = [];
    clearAllSqauresAndPieces();
}
function movePiece(movedPiece,TargetLocation){
    let JumpGap = parseInt(movedPiece.parentElement.id) - parseInt(TargetLocation.id);
    if(TargetLocation.classList.contains("highlighted") && !IsEaten && !movedPiece.classList.contains("king")){
        TargetLocation.appendChild(movedPiece);
        movedPiece.classList.add("played");
        if(Math.abs(JumpGap)==18 || Math.abs(JumpGap)==22)
            {
            IsEaten = true;
            movedPiece.classList.remove("can-eat");
            
            if(movedPiece.classList.contains("green_piece")){
                if(Math.abs(JumpGap)==18)
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)+9}`)).innerHTML = "";
                else
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)+11}`)).innerHTML = "";
            }
            else{
                if(Math.abs(JumpGap)==18)
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)-9}`)).innerHTML = "";
                else
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)-11}`)).innerHTML = "";
            }    
        }
        else{
            IsEaten = false;
        }
        // if(!IsEaten && movedPiece.classList.contains("can-eat")){
        //     TargetLocation.innerHTML = "";
        // }
        squaresToHighlight = [];
        clearAllSqauresAndPieces();
    }
    else if(movedPiece.classList.contains("king") && TargetLocation.classList.contains("highlighted")){
        KingMove(movedPiece,TargetLocation,JumpGap);
    }
}

function continueEating(movedPiece,TargetLocation){
    if(TargetLocation.classList.contains("highlighted") && IsEaten){
        movedPiece.classList.add("played");
        let JumpGap = parseInt(movedPiece.parentElement.id) - parseInt(TargetLocation.id);
        TargetLocation.appendChild(movedPiece);
        if(Math.abs(JumpGap)==18 || Math.abs(JumpGap)==22 ){
            switch(JumpGap){
                case 18:
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)+9}`)).innerHTML = "";
                    break;
                case -18:
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)-9}`)).innerHTML = "";
                    break;
                case 22:
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)+11}`)).innerHTML = "";
                    break;
                case -22:
                    document.getElementById(addZero(`${parseInt(TargetLocation.id)-11}`)).innerHTML = "";
                    break;
                } 
            squaresToHighlight = [];   
            TargetLocation.classList.remove("highlighted");
        }
    }
}


document.addEventListener('click',(event)=>{
  if(isGameRunning){  
    currentTurnElement.innerHTML = isGreenTurn ? "Green Turn" : "Red Turn";
    let clickedTarget = event.target;
    if(clickedTarget.classList.contains("piece")){
        clickedLocation = clickedTarget.parentElement.id;
        if(isSelectedPieceValid(clickedTarget) && !IsEaten){
            currentPiece = clickedTarget;
            squaresToHighlight = [];
            highlightPiece(clickedTarget);
            if(isPieceMoveAble(clickedTarget))
                highlightSquares(squaresToHighlight);  
        }               
    }
    else if((clickedTarget.classList.contains("black") || clickedTarget.classList.contains("white")) && !clickedTarget.hasChildNodes()){
        clickedLocation = clickedTarget.id;
        let PlayedPieces = document.getElementsByClassName("played");
        if(clickedTarget.classList.contains("highlighted")){
            movePiece(currentPiece,clickedTarget);
            unTogglePieces(clickedTarget);
            if(IsConvertableToKing(currentPiece))
                clearAllSqauresAndPieces();
            removeBurned();
            IsGameOver();
            if(isAbleToContinueEating(currentPiece) && squaresToHighlight.length!=0){
                highlightSquares(squaresToHighlight);
                continueEating(currentPiece,clickedTarget);   
                PlayedPieces = document.getElementsByClassName("played");
                if(IsConvertableToKing(currentPiece))
                    clearAllSqauresAndPieces();
                if(!isAbleToContinueEating(currentPiece)){
                    isGreenTurn = !isGreenTurn;  
                    IsEaten = false;
                    currentPiece.classList.remove("played");
                }
                else
                    highlightSquares(squaresToHighlight);
            }
            else{
                IsGameOver();
                isGreenTurn = !isGreenTurn;
                IsEaten = false;  
                currentPiece.classList.remove("played");
            }
        }
        else if(PlayedPieces.length == 0)
            clearAllSqauresAndPieces();
    }
}
})


for(let i = 0;i<8;i++){
    for(let j=0;j<8;j++)
        {
        const square = document.createElement("div");
        square.classList.add("box");
        let piece = document.createElement("div");
        piece.classList.add("piece") ;

        if(i%2==0){
            square.className = j%2===0?"white":"black";
        }
        else{
            square.className = j%2===0?"black":"white";   
        }
        square.id = i+""+j;
        emptyBoard.appendChild(square)
        if(square.classList.contains("black")){
           if(i<3){
                piece.classList.add("red_piece") ;
                piece.style.gridArea = ""+i+""+j;
                square.appendChild(piece);
           }
        
            else if(i>4){
                piece.classList.add("green_piece");
                piece.style.gridArea = ""+i+""+j;
                square.appendChild(piece);
            }
        }  
        //for testing     
        // if(i==4&&j==5){
        //     piece.classList.add("red_piece");
        //     piece.classList.add("king");
        //     piece.innerText = "King"
        //     piece.style.gridArea = ""+i+""+j;
        //     square.appendChild(piece);
        // }
    }
}  
const allSquares = document.querySelectorAll(".black");
const allPieces = document.querySelectorAll(".piece");

const resignButton = document.getElementById("resign");
    resignButton.addEventListener('click',()=>{
        let resg = confirm("resign?");
        if(resg){
            const currentPlayerName = getCurrentPlayerName();
            alert(`${currentPlayerName} resigned`);
            isGameRunning=false;
        }
    })

const drawButton = document.getElementById("draw");
    drawButton.addEventListener('click',()=>{
        const currentPlayerName = getCurrentPlayerName();
        NextPlayerName = isGreenTurn?"Red Player":"Green Player";
        let draw = confirm(`${currentPlayerName} is asking for draw, ${NextPlayerName} confirm to allow draw`);
        if(draw){
            alert("Draw was confirmed");
            isGameRunning=false;
        }
    })






