let distort;

function setup() {
	createCanvas(1200, 850, WEBGL);	
	superMan = new createWord3D("活け花", depth = 6, size = 4, resolution = 50, bevelled = true, font = "Times New Roman", style = "bold");
	//saveCanvas('myCanvas', 'png');
    c1 = color(105,3,3);
  	c2 = color(37,0,0);	
	  angleMode(DEGREES);
    // distort = createWarp(({ glsl, millis, position }) => {
    //  const t = millis.div(1000)
    //  return glsl.vec3(
    //    t.mult(2).add(position.y().mult(4)).sin().mult(0.15),
    //    t.mult(0.5).add(position.z().mult(2)).sin().mult(0.15),
    //     t.mult(1.5).add(position.x().mult(3)).sin().mult(0.15)
    //   )
    // })
}

function draw() {
	lights();
    orbitControl();
	//directionalLight(10, 10, 250, 1, 0, -1);
	//directionalLight(255, 5, 100, 0, 1, -1);
	//ambientLight(255,0,155);
	background(0,0,0);

	for (let zAngle = 0; zAngle < 180; zAngle += 30) {
		// Rotate cubes in a full circle to create a ring of cubes
		for (let xAngle = 0; xAngle < 360; xAngle += 30) {
		  push();
		  angleMode(DEGREES);
		  // Rotate from center of sphere
		  rotateZ(zAngle);
		  rotateX(xAngle);
	
		  // Then translate down 400 units
		  translate(0, 400, 0);
		  //rotateY(frameCount * 0.02);
		  strokeWeight(5);
  			noFill();
  		  stroke(32, zAngle, 64);
			rotateY(zAngle);
		  box();
		  pop();
		}
	  }
	//image(fuente,-width/2,-height/2,900);
	//distort();
    //sphere(50);
	push();
    translate(0,0,200);
	angleMode(RADIANS);
    rotateY(frameCount * 0.02);
	normalMaterial();
	shininess(50);
	//noStroke()
	
	superMan.show()
	
	
	pop();
}
