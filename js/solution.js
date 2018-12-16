function solvecube()
{
    console.log("Now we are in solution.js file");
    console.log(movementArray);

    console.log(initCubeXMovement);
    console.log(initCubeYMovement);
    console.log(initCubeZMovement);
    var initCubeXXMovement=[];
    var initCubeYYMovement=[];
    var initCubeZZMovement=[];
    var colorArray=[];
    for(var i=0;i<initCubeXMovement.length;i++)
    {
        initCubeXXMovement.push(initCubeXMovement[i]+(cubeSize-1)*cubeSize*cubeSize);
        initCubeYYMovement.push(initCubeYMovement[i]+(cubeSize-1)*cubeSize);
        initCubeZZMovement.push(initCubeZMovement[i]+(cubeSize-1));
    }

    // var colorList = []
    for(var i=0;i<6;i++)
    {
        colorArray.push([colors[i],colors[i],colors[i],colors[i],colors[i],colors[i]]);
    }

    console.log(initCubeXXMovement);
    console.log(initCubeYYMovement);
    console.log(initCubeZZMovement);
    console.log(colorArray);

    for(i=0;i<movementArray.length;i++)
    {
        if(movementArray[i][0]==1)
        {
            var colorSide2 = colorArray[2].slice();
            var colorSide3 = colorArray[3].slice();
            var colorSide4 = colorArray[4].slice();
            var colorSide5 = colorArray[5].slice();
            var blnum =  movementArray[i][1];
            for(var j=0;j<cubeSize;j++)
            {
                colorArray[2][j+(cubeSize)*blnum]=colorSide5[j+blnum];
                colorArray[3][j+(cubeSize)*blnum]=colorSide4[j+blnum];
                colorArray[4][j+(cubeSize)*blnum]=colorSide2[cubeSize-1+j+blnum]
            }
            
        }
        }
    


}