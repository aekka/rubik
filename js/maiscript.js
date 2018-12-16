var gid;
var cubeSize = 3;
var cube = [];
var line = [];
var initCubeOrientation = [];
var currentCubeOrientation = [];
var cubeXMovement=[];
var initCubeXMovement =[];
var cubeYMovement=[];
var initCubeYMovement=[];
var cubeZMovement=[];
var initCubeZMovement=[];
var movementArray=[];
var rot = 180; //rotation negative clockwise positive anticlockwise
var movementAxis; // 1 for x axis 2 for y axis 3 for z axis;
var blockNum; //number will range 0 to cubeSize-1
var rotationDirection; //rotation direction
var shuffleNum = 0;
var counter = 0;
var currIndex;
var rotArray=[-180,180];
var scrambleNum = 10;
for(var i=0;i<cubeSize*cubeSize*cubeSize;i++)
{
    initCubeOrientation.push(i);
}

currentCubeOrientation = initCubeOrientation;
//cubeOrientation.push(initCubeOrientation);
//x orientations
for(i=0;i<cubeSize;i++)
{
    for(var j=0;j<cubeSize;j++)
    {
        initCubeXMovement.push((i*cubeSize)+j);
        initCubeYMovement.push((i*cubeSize*cubeSize)+j);
        initCubeZMovement.push(((i*cubeSize)+j)*cubeSize);

        cubeXMovement.push(((cubeSize-1)*cubeSize+i)-(j*cubeSize));
        cubeYMovement.push((cubeSize-1-i)+(j*cubeSize*cubeSize));
        cubeZMovement.push(((cubeSize-1)*cubeSize*cubeSize+(i*cubeSize))-(j*cubeSize*cubeSize));
    }
}

console.log(initCubeXMovement);
console.log(initCubeYMovement);
console.log(initCubeZMovement);
console.log(cubeXMovement);
console.log(cubeYMovement);
console.log(cubeZMovement);

function randcubemove()
{   

        movementArray=[];
        for(var i=0;i<scrambleNum;i++)
        {
            
            var a = Math.floor(Math.random()*3+1);
            var b = Math.floor(Math.random()*cubeSize);
            var c = rotArray[Math.floor(Math.random()*2)];
            movementArray.push([a,b,c]);
        }
        console.log(movementArray);
        counter = 0;
        currIndex=0;

        movementAxis=movementArray[currIndex][0];
        blockNum = movementArray[currIndex][1];
        rot = movementArray[currIndex][2];
        
        runfunc();

    }

function reversecube()
{   

        var reverseArray=[];
        for(var i=movementArray.length-1;i>=0;i--)
        {
            var a = movementArray[i][0];
            var b = movementArray[i][1];
            var c = movementArray[i][2] * (-1);
            reverseArray.push([a,b,c]);
        }
        console.log(reverseArray);
        counter = 0;
        currIndex=0;
        movementArray=[];
        movementArray=reverseArray;
        movementAxis=movementArray[currIndex][0];
        blockNum = movementArray[currIndex][1];
        rot = movementArray[currIndex][2];
        
        runfunc();

}

function runfunc(){
    animate();
    console.log("You have clicked hello");
}
function cancelfunc(){
    
    cancelAnimationFrame(gid);
    animate1();
    
    
}
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );
control = new THREE.OrbitControls(camera,renderer.domElement);
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var edges = new THREE.EdgesGeometry(geometry);
// var lineA = new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color: 0x000000 }));
// var lineB = new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color: 0x000000 }));

var material = [    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } )
                ];
//geometry.faces[0].color.setHex(0xff0000);
console.log(geometry.faces.length);
var group = new THREE.Group();
var lgroup = new THREE.Group();

var colors =[0xffffff,0xcccc00,0xff0000,0xff8c00,0x008000,0x0000ff]; //colors =[white,yellow,red,orange,green,bule]

   // console.log(cube);
var ii = 0;
var l = Math.floor(cubeSize/2);
console.log(l);
for(var i=0;i<cubeSize;i++)
{
    for(var j=0;j<cubeSize;j++)
    {
        for(var k=0;k<cubeSize;k++)
            {   
                material = [    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } ),
                    new THREE.MeshBasicMaterial( { color: 0xffffff } )
                ];

                if(k==0){
                    material[5]=new THREE.MeshBasicMaterial( { color: colors[4] } );}
                if(k==cubeSize-1){
                    material[4]=new THREE.MeshBasicMaterial( { color: colors[5] } );}
                if(j==0){
                    material[3]=new THREE.MeshBasicMaterial( { color: colors[2] } );}
                if(j==cubeSize-1){
                    material[2]=new THREE.MeshBasicMaterial( { color: colors[3] } );}
                if(i==0){
                    material[1]=new THREE.MeshBasicMaterial( { color: colors[0] } );}
                if(i==cubeSize-1){
                    material[0]=new THREE.MeshBasicMaterial( { color: colors[1] } );}

                cube.push(new THREE.Mesh( geometry, material ));
                line.push(new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color: 0x000000, linewidth: 5 })));
                cube[ii].position.set(i-l,j-l,k-l);
                line[ii].position.set(i-l,j-l,k-l);
                
                ii  =  ii + 1;
            }
    }
}

if(cubeSize%2==0) //translate if cube dimention is even.
{
for(var i =0;i<cube.length;i++)
{
          
                    cube[i].translateX(1/2);
                    cube[i].translateY(1/2);
                    cube[i].translateZ(1/2);
                    line[i].translateX(1/2);
                    line[i].translateY(1/2);
                    line[i].translateZ(1/2);
                
}}

for(var i=0;i<cube.length;i++)
    {

        group.add(cube[i]);
        lgroup.add(line[i]);

    }

var axesHelper = new THREE.AxesHelper( 5 ); //Add world axis
// scene.add( axesHelper );

scene.add( group );
scene.add(lgroup);

camera.position.z = 10;

var rotWorldMatrix;

// Rotate an object around an arbitrary axis in world space       
function rotateAroundWorldAxis(object, axis, radians) {
rotWorldMatrix = new THREE.Matrix4();
rotWorldMatrix.makeRotationAxis(axis, radians);
rotWorldMatrix.multiply(object.matrix);        // pre-multiply
object.matrix = rotWorldMatrix;
object.rotation.setFromRotationMatrix(object.matrix);
}


function animate() {

    gid=requestAnimationFrame(animate);

        counter++; //conter to count number of frame animated 90 is for 90 deree
        
    // console.log(counter);

    if(movementAxis == 1)
    {
     var euler = new THREE.Euler((Math.PI/rot),0,0,'XYZ');

     //console.log(currentCubeOrientation);
     for(var i=0;i<cubeXMovement.length;i++)
     {
        var id = currentCubeOrientation[initCubeXMovement[i] + (blockNum*cubeSize*cubeSize)];
        // console.log(id);
        cube[id].position.applyEuler(euler);
        var axis = new THREE.Vector3(1,0,0);
        rotateAroundWorldAxis(cube[id],axis.normalize(),  Math.PI/rot);
        // cube[id].rotation.setRotation(euler);
    
        //cube[id].rotation.x += Math.PI/rot;
        line[id].position.applyEuler(euler);
        line[id].rotation.x += Math.PI/rot;
     }
     
    }
    else if(movementAxis == 2)
    {
        var euler = new THREE.Euler(0,(Math.PI/rot),0,'XYZ');
       // console.log(currentCubeOrientation);
        for(var i=0;i<cubeYMovement.length;i++)
         {
            var id = currentCubeOrientation[initCubeYMovement[i] + (blockNum*cubeSize)];
            // console.log(id);
            cube[id].position.applyEuler(euler);
            var axis = new THREE.Vector3(0,1,0);
            rotateAroundWorldAxis(cube[id],axis.normalize(),  Math.PI/rot);
            // cube[id].rotation.y += Math.PI/rot;
            line[id].position.applyEuler(euler);
            rotateAroundWorldAxis(line[id],axis.normalize(),  Math.PI/rot);
            // line[id].rotation.y += Math.PI/rot;
         }
    }
     else
     {
     var euler = new THREE.Euler(0,0,(Math.PI/rot),'XYZ');
    //  console.log(currentCubeOrientation);
     for(var i=0;i<cubeYMovement.length;i++)
        {
            var id = currentCubeOrientation[initCubeZMovement[i] + blockNum] ;
            // console.log(id);
            cube[id].position.applyEuler(euler);
            var axis = new THREE.Vector3(0,0,1);
            rotateAroundWorldAxis(cube[id],axis.normalize(),  Math.PI/rot);
            //cube[id].rotation.z += Math.PI/rot;
            line[id].position.applyEuler(euler);
            rotateAroundWorldAxis(line[id],axis.normalize(),  Math.PI/rot);
     }
    }

    //cancelAnimationFrame(gid);

    if(movementAxis ==  1)
    {   
        var id=currentCubeOrientation[initCubeXMovement[0]+ blockNum*cubeSize*cubeSize]
        // console.log(tempCubeOrientation);
        // console.log(cube[id].rotation.x );
        // if(Math.abs(cube[id].rotation.x)%Math.PI/2 >= Math.PI/2  )
        if(counter>=90)
        {
            // console.log(currentCubeOrientation);
            
            // console.log(tempCubeOrientation);
            var orientationsChange;
            if(rot < 0)
                orientationsChange = 1;
            else
                orientationsChange = 3;

            for(var k=0;k<orientationsChange;k++){
                var tempCubeOrientation= currentCubeOrientation.slice();
            for(var i=0;i<cubeXMovement.length;i++)
            {
                currentCubeOrientation[initCubeXMovement[i]+ blockNum*cubeSize*cubeSize]=tempCubeOrientation[cubeXMovement[i]+ blockNum*cubeSize*cubeSize];
                // console.log(tempCubeOrientation);
                // console.log(currentCubeOrientation[initCubeXMovement[i]+ blockNum*cubeSize*cubeSize]);
                // console.log(tempCubeOrientation[cubeXMovement[i]+ blockNum*cubeSize*cubeSize]);

            }}
            // console.log(movementAxis,blockNum,rotationDirection);
            console.log(currentCubeOrientation);
            if(currIndex<(movementArray.length-1))
            {   
                currIndex++;
                counter=0;
                movementAxis=movementArray[currIndex][0];
                blockNum = movementArray[currIndex][1];
                rot = movementArray[currIndex][2];
            }
            else
            {
            cancelfunc();
            }
            
        }
    }

    if(movementAxis ==  2)
    {
        var id = currentCubeOrientation[initCubeYMovement[0] + blockNum*cubeSize];
        // console.log(cube[id].rotation.y);
        // if(Math.abs(cube[id].rotation.y) >= Math.PI/2  )
        if(counter>=90)
        {
            // console.log(currentCubeOrientation);
            var tempCubeOrientation= currentCubeOrientation.slice();
            // console.log(tempCubeOrientation);
            if(rot < 0)
                orientationsChange = 1;
            else
                orientationsChange = 3;

            for(var k=0;k<orientationsChange;k++){
                var tempCubeOrientation= currentCubeOrientation.slice();
            for(var i=0;i<cubeYMovement.length;i++)
            {
                currentCubeOrientation[initCubeYMovement[i]+ blockNum*cubeSize]=tempCubeOrientation[cubeYMovement[i]+ blockNum*cubeSize];
                // console.log(tempCubeOrientation);
                // console.log(currentCubeOrientation[initCubeXMovement[i]+ blockNum*cubeSize*cubeSize]);
                // console.log(tempCubeOrientation[cubeXMovement[i]+ blockNum*cubeSize*cubeSize]);
            }}
            //console.log(movementAxis,blockNum,rotationDirection);
           console.log(currentCubeOrientation);
           
        //    cancelfunc();
        if(currIndex<(movementArray.length-1))
            {   
                currIndex++;
                counter=0;
                movementAxis=movementArray[currIndex][0];
                blockNum = movementArray[currIndex][1];
                rot = movementArray[currIndex][2];
            }
            else
            {
            cancelfunc();
            }

        }
    }
    if(movementAxis ==  3)
    {
        var id = currentCubeOrientation[initCubeZMovement[0] + blockNum];
        // console.log(cube[id].rotation.z);
        // if(Math.abs(cube[id].rotation.z) >= Math.PI/2  )
        if(counter>=90)
        {
            // console.log(currentCubeOrientation);
            var tempCubeOrientation= currentCubeOrientation.slice();
            // console.log(tempCubeOrientation);
            if(rot < 0)
                orientationsChange = 1;
            else
                orientationsChange = 3;

            for(var k=0;k<orientationsChange;k++){
                var tempCubeOrientation= currentCubeOrientation.slice();
            for(var i=0;i<cubeZMovement.length;i++)
            {
                currentCubeOrientation[initCubeZMovement[i]+ blockNum]=tempCubeOrientation[cubeZMovement[i]+ blockNum];
                // console.log(tempCubeOrientation);
                // console.log(currentCubeOrientation[initCubeXMovement[i]+ blockNum*cubeSize*cubeSize]);
                // console.log(tempCubeOrientation[cubeXMovement[i]+ blockNum*cubeSize*cubeSize]);

            }}
           // console.log(movementAxis,blockNum,rotationDirection);
           console.log(currentCubeOrientation);
            // cancelfunc();
            
            // cancelfunc();
            if(currIndex<(movementArray.length-1))
            {   
                currIndex++;
                counter=0;
                movementAxis=movementArray[currIndex][0];
                blockNum = movementArray[currIndex][1];
                rot = movementArray[currIndex][2];
            }
            else
            {
            cancelfunc();
            }
            
        }
    }
      
    renderer.render(scene,camera);

}
//animate();


function animate1()
{
    gid=requestAnimationFrame(animate1);
    renderer.render(scene,camera);
}
