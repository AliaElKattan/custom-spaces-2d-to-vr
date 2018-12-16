var item1_xpos, item2_xpos, item3_xpos, item4_xpos;
var item1_zpos,item2_zpos,item3_zpos,item4_zpos;
var item1_yrotation = 0, item2_yrotation = 0,item3_yrotation = 0, item4_yrotation = 0;
var selection1,selection2,selection3,selection4;
var item1_x,item1_y,item2_x,item2_y,item3_x,item3_y,item4_x,item4_y;
var count = 1;
var click = false;

var sketchCode1 = function(p) {

//if (vrOn == true) {
	p.setup = function() {
		// var myCanvas = p.createCanvas(500,500);
		// myCanvas.id("firstCanvas");
		world = new World('VRScene');

	 // plane primitive
	 var frontwall = new Plane({
						 x: 0, y:2, z:2,
						 width: 10, height:4,
						 red:210, green:180, blue:180,
						 side:'double'
					 });

	 var backwall = new Plane({
										 x: 0, y:2, z:8,
										 width: 10, height:4,
										 red:210, green:180, blue:180,
										 side:'double'
									 });

		 var sidewall1 = new Plane({
					 x: 3, y:2, z:5,
					 width: 6, height:4,
					 rotationY: 90,
			 red:210, green:180, blue:180,
		 side:'double'
							 });

							 var sidewall2 = new Plane({
							 x: -3, y:2, z:5,
							 width: 6, height:4,
							 rotationY: 90,
							 red:210, green:180, blue:180,
							 side:'double'
							 });

							 var ceiling = new Plane({
							 x: 0, y:4, z:5,
							 width: 15, height:10,
							 rotationX: 90,
							 red:50, green:180, blue:180,
							 side:'double'
							 });


	 world.add(frontwall);
	 world.add(backwall);
	 world.add(sidewall1);
	 world.add(sidewall2);

//first object
if (selection1 == 1) {
	console.log('drawing chair');
	 var chair = new OBJ({
		 asset: 'chair_obj',
		// mtl: 'chair_mtl',
		 x: item1_xpos,
		 y: 0,
		 z: item1_zpos,
		 rotationX:0,
		 rotationY:item1_yrotation-90,
		 scaleX:.07,
		 scaleY:.12,
		 scaleZ:.09,
	 });
	 world.add(chair);
}

if (selection1 == 2) {

	 var desk = new OBJ({
	 	asset: 'desk_obj',
	   mtl: 'desk_mtl',
	 	x: item1_xpos,
	 	y: 0,
	 	z: item1_zpos,
	 	rotationX:0,
	 	rotationY:item1_yrotation+180,
	 	scaleX:.17,
	 	scaleY:.22,
	 	scaleZ:.16,
	 });
	 world.add(desk);

	 var laptop = new OBJ({
	   asset: 'laptop_obj',
	   mtl: 'laptop_mtl',
	   x: item1_xpos,
	   y: .6,
	   z: item1_zpos,
	   rotationX:-90,
	   rotationY:0,
	   rotationZ:item1_yrotation-90,
	   scaleX:.0035,
	   scaleY:.0035,
	   scaleZ:.0035,
	 });
	 world.add(laptop);}

	 if (selection1 == 3) {

	 	 var desk = new OBJ({
	 	 	asset: 'bed_obj',
	 	   mtl: 'bed_mtl',
	 	 	x: item1_xpos,
	 	 	y: 0,
	 	 	z: item1_zpos,
	 	 	rotationX:0,
	 	 	rotationY:item1_yrotation,
	 	 	scaleX:.14,
	 	 	scaleY:.14,
	 	 	scaleZ:.14,
	 	 });
	 	 world.add(desk);
	 }

if (selection1 ==4) {
	var couch = new OBJ({
 	asset: 'couch_obj',
 	 mtl: 'couch_mtl',
 	x: item1_xpos,
 	y: 0,
 	z: item1_zpos,
 	rotationX:0,
 	rotationY:item1_yrotation+180,
 	scaleX:.14,
 	scaleY:.14,
 	scaleZ:.14,
  });
  world.add(couch);
 }

if (selection2 == 1) {
	console.log('drawing chair');
	 var chair = new OBJ({
		 asset: 'chair_obj',
		// mtl: 'chair_mtl',
		 x: item2_xpos,
		 y: 0,
		 z: item2_zpos,
		 rotationX:0,
		 rotationY:item2_yrotation-90,
		 scaleX:.07,
		 scaleY:.12,
		 scaleZ:.09,
	 });
	 world.add(chair);
}

if (selection2 == 2) {

	 var desk = new OBJ({
	 	asset: 'desk_obj',
	   mtl: 'desk_mtl',
	 	x: item2_xpos,
	 	y: 0,
	 	z: item2_zpos,
	 	rotationX:0,
	 	rotationY:item2_yrotation+180,
	 	scaleX:.17,
	 	scaleY:.22,
	 	scaleZ:.16,
	 });
	 world.add(desk);

	 var laptop = new OBJ({
	   asset: 'laptop_obj',
	   mtl: 'laptop_mtl',
	   x: item2_xpos,
	   y: .6,
	   z: item2_zpos,
	   rotationX:-90,
	   rotationY:0,
	   rotationZ:item2_yrotation-90,
	   scaleX:.0035,
	   scaleY:.0035,
	   scaleZ:.0035,
	 });
	 world.add(laptop);}

	 if (selection2 == 3) {

	 	 var desk = new OBJ({
	 	 	asset: 'bed_obj',
	 	   mtl: 'bed_mtl',
	 	 	x: item2_xpos,
	 	 	y: 0,
	 	 	z: item2_zpos,
	 	 	rotationX:0,
	 	 	rotationY:item2_yrotation,
	 	 	scaleX:.14,
	 	 	scaleY:.14,
	 	 	scaleZ:.14,
	 	 });
	 	 world.add(desk);
	 }

if (selection2 ==4) {
	var couch = new OBJ({
 	asset: 'couch_obj',
 	 mtl: 'couch_mtl',
 	x: item2_xpos,
 	y: 0,
 	z: item2_zpos,
 	rotationX:0,
 	rotationY:item2_yrotation+180,
 	scaleX:.14,
 	scaleY:.14,
 	scaleZ:.14,
  });
  world.add(couch);
 }



if (selection3 == 1) {
	console.log('drawing chair');
	 var chair = new OBJ({
		 asset: 'chair_obj',
		// mtl: 'chair_mtl',
		 x: item3_xpos,
		 y: 0,
		 z: item3_zpos,
		 rotationX:0,
		 rotationY:item3_yrotation-90,
		 scaleX:.07,
		 scaleY:.12,
		 scaleZ:.09,
	 });
	 world.add(chair);
}

if (selection3 == 2) {

	 var desk = new OBJ({
	 	asset: 'desk_obj',
	   mtl: 'desk_mtl',
	 	x: item3_xpos,
	 	y: 0,
	 	z: item3_zpos,
	 	rotationX:0,
	 	rotationY:item3_yrotation+180,
	 	scaleX:.17,
	 	scaleY:.22,
	 	scaleZ:.16,
	 });
	 world.add(desk);

	 var laptop = new OBJ({
	   asset: 'laptop_obj',
	   mtl: 'laptop_mtl',
	   x: item3_xpos,
	   y: .6,
	   z: item3_zpos,
	   rotationX:-90,
	   rotationY:0,
	   rotationZ:item3_yrotation-90,
	   scaleX:.0035,
	   scaleY:.0035,
	   scaleZ:.0035,
	 });
	 world.add(laptop);}

	 if (selection3 == 3) {

	 	 var bed = new OBJ({
	 	 	asset: 'bed_obj',
	 	   mtl: 'bed_mtl',
	 	 	x: item3_xpos,
	 	 	y: 0,
	 	 	z: item3_zpos,
	 	 	rotationX:0,
	 	 	rotationY:item3_yrotation,
	 	 	scaleX:.14,
	 	 	scaleY:.14,
	 	 	scaleZ:.14,
	 	 });
	 	 world.add(bed);
	 }

if (selection3 ==4) {
	var couch = new OBJ({
	asset: 'couch_obj',
	 mtl: 'couch_mtl',
	x: item3_xpos,
	y: 0,
	z: item3_zpos,
	rotationX:0,
	rotationY:item3_yrotation+180,
	scaleX:.14,
	scaleY:.14,
	scaleZ:.14,
 });
 world.add(couch);
}


if (selection4 == 1) {
	console.log('drawing chair');
	 var chair = new OBJ({
		 asset: 'chair_obj',
		// mtl: 'chair_mtl',
		 x: item4_xpos,
		 y: 0,
		 z: item4_zpos,
		 rotationX:0,
		 rotationY:item4_yrotation-90,
		 scaleX:.07,
		 scaleY:.12,
		 scaleZ:.09,
	 });
	 world.add(chair);
}

if (selection4 == 2) {

	 var desk = new OBJ({
	 	asset: 'desk_obj',
	   mtl: 'desk_mtl',
	 	x: item4_xpos,
	 	y: 0,
	 	z: item4_zpos,
	 	rotationX:0,
	 	rotationY:item4_yrotation+180,
	 	scaleX:.17,
	 	scaleY:.22,
	 	scaleZ:.16,
	 });
	 world.add(desk);

	 var laptop = new OBJ({
	   asset: 'laptop_obj',
	   mtl: 'laptop_mtl',
	   x: item4_xpos,
	   y: .6,
	   z: item4_zpos,
	   rotationX:-90,
	   rotationY:0,
	   rotationZ:item4_yrotation-90,
	   scaleX:.0035,
	   scaleY:.0035,
	   scaleZ:.0035,
	 });
	 world.add(laptop);}

	 if (selection4 == 3) {

	 	 var desk = new OBJ({
	 	 	asset: 'bed_obj',
	 	   mtl: 'bed_mtl',
	 	 	x: item4_xpos,
	 	 	y: 0,
	 	 	z: item4_zpos,
	 	 	rotationX:0,
	 	 	rotationY:item4_yrotation,
	 	 	scaleX:.14,
	 	 	scaleY:.14,
	 	 	scaleZ:.14,
	 	 });
	 	 world.add(desk);
	 }

if (selection4 ==4) {
	var couch = new OBJ({
	asset: 'couch_obj',
	 mtl: 'couch_mtl',
	x: item4_xpos,
	y: 0,
	z: item4_zpos,
	rotationX:0,
	rotationY:item4_yrotation+180,
	scaleX:.14,
	scaleY:.14,
	scaleZ:.12,
 });
 world.add(couch);
}


	 // create a plane to serve as our "ground"
	 var g = new Plane({x:0, y:0, z:0, width:100, height:100, red:0, green:102, blue:153, rotationX:-90, metalness:0.25});

	 // add the plane to our world
	 world.add(g);


	}
	p.draw = function() {
		if (p.mouseIsPressed) {
			world.moveUserForward(0.02);
		}

		var pos = world.getUserPosition();

		// now evaluate
		if (pos.x > 50) {
			world.setUserPosition(-50, pos.y, pos.z);
		}
		else if (pos.x < -50) {
			world.setUserPosition(50, pos.y, pos.z);
		}
		if (pos.z > 50) {
			world.setUserPosition(pos.x, pos.y, -50);
		}
		else if (pos.z < -50) {
			world.setUserPosition(pos.x, pos.y, 50);
		}

	}

//	}

}

// run the the first sketch and add it to the page
// it will be added to the page using an id of 'firstCanvas' (see the setup function)


// var sketch1 = new p5(sketchCode1);


var vrOn = false;
var intro = true;
var gameState = 0;
var selection = -1;
var furniture = "";
var xpos, ypos;
var clicked = false;
var select = false;

function preload() {
  zoning = loadImage("zoning.png");
  bed = loadImage("bed.png");
  chair = loadImage("chair.png");
  desk = loadImage("desk.png");
  couch = loadImage("couch.png");

  bed2 = loadImage("bed2.png");
  chair2 = loadImage("chair2.png");
  desk2 = loadImage("desk2.png");
  couch2 = loadImage("couch2.png");

}

function setup() {
    cnv = createCanvas(500,500);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x,y);
    rectMode(CENTER);
    fill(100);
    imageMode(CENTER);
		textStyle(BOLD);

}

function mouseClicked() {
	click = true;
if (gameState == 0) {
		click = false;
	gameState = 1;
}


if (gameState == 1 && click == true) {

//choosing the furniture item
if (mouseX > 40 && mouseX < 240 && mouseY >55 && mouseY < 255) {
  selection = 1; //chair
  furniture = "chair";
}

if (mouseX > 260 && mouseX < 460 && mouseY > 55 && mouseY < 255 ) {
  selection = 2; //desk
  furniture = "desk";
}

if (mouseX > 40 && mouseX < 240 && mouseY > 270 && mouseY < 470) {
  selection = 3; //bed
  furniture = "bed";
}

if (mouseX > 260 && mouseX < 460 && mouseY > 270 && mouseY < 470 ) {
  selection = 4; //couch
  furniture = "couch";
}

gameState = 2;
click = false;
}


if (gameState == 2 && click == true) {
 if (count <5 ) {
//	selection = -1;
 count++;
		gameState = 3;
		click = false;
 }


if (count == 5) {
 	noCanvas();
 		var sketch1 = new p5(sketchCode1);
 }
}

if (gameState ==3 && click == true) {
	if (mouseX > 100 && mouseX <400) {
		if (mouseY > 90 && mouseY < 210) {

gameState = 1;
 }

if (mouseY > 290 && mouseY <390) {
	noCanvas();
 		var sketch1 = new p5(sketchCode1);
 }

}
}



}


function draw() {

background(0);
fill(255,200,200);
rect(250,250,495,495);

if  (gameState == 0) {

		click = false;

		fill(0)
		textSize(50);
		textStyle(BOLD);
		textAlign(CENTER);
		stroke(255);
		text("VR SPACES CREATOR",265,180,300,140);
		noStroke();
		textAlign(NORMAL);


		textSize(15);
		text("Make your own customized VR room",410,300,300,100);

stroke(0);
		fill(255);
		rect(250,340,190,50);
		textSize(25);
		fill(0);
		noStroke();
		text("Start Making",250,350);

		if (mouseX > 155 && mouseX < 345 && mouseY >315 && mouseY <365) {
			stroke(0);
					fill(0);
					rect(250,340,190,50);
					textSize(25);
					fill(255);
					noStroke();
					text("Start Making",250,350);

		}


//title screen



//next button
}

if (gameState == 1) {
	click = false;
fill(0);
textSize(25);
textStyle(BOLD);
textAlign(LEFT);
stroke(0);
text('Choose a furniture item:',40,40);
fill(255);


rect(140,155,200,200); //container 1
image(chair,140,155,125,125);

//rect(140,370,70,70); //desk
rect(360,155,200,200); //container 3
image(desk,360,155,135,135);


rect(140,370,200,200); //container 2
image(bed,140,370,100,85);


//rect(360,155,70,70);//bed
rect(360,370,200,200); //container 4
image(couch,360,370,100,85);
//rect(360,370,70,70);//couch

if (mouseX > 40 && mouseX < 240 && mouseY >55 && mouseY < 255) {
image(chair2,141,155,199,199);
}

if (mouseX > 260 && mouseX < 460 && mouseY > 55 && mouseY < 255 ) {
  image(desk2,361,155,198,198);
}

if (mouseX > 40 && mouseX < 240 && mouseY > 270 && mouseY < 470) {
  image(bed2,140,370,198,198);

}

if (mouseX > 260 && mouseX < 460 && mouseY > 270 && mouseY < 470 ) {
	image(couch2,361,370,198,198);
}

noStroke();
fill(0);

textSize(20);
text('1. Chair', 50,80);
text('2. Desk', 270,80);
text('3. Bed', 50,295);
text('4. Couch', 270,295);

}

if (gameState == 2) {
	click = false;
image(zoning,250,250,490,490);

textSize(18);
fill(255,200,200,100);
rect (250,25,460,25);
fill(0);
// textStyle(NORMAL);
text("Place your furniture in the desired part of your room",25,30);



if (mouseX < 166) {
  xpos = 83;
}

if (mouseX > 166 && mouseX < 333) {
  xpos = 249;
}

if (mouseX > 333 && mouseX < 500) {
  xpos = 416;
}

if (mouseY > 0 && mouseY < 166) {
ypos = 83;
}

if (mouseY >166 && mouseY < 333) {
  ypos = 249;
}

if (mouseY > 333 && mouseY < 500) {
  ypos = 416;
}

//rect(xpos,ypos,70,70);
// console.log(furniture);

if (selection == 1) {
  image(chair, xpos,ypos,90,90);
}

if (selection == 2) {
  image(desk, xpos,ypos,100,100);
}

if (selection == 3) {
  image(bed, xpos,ypos,90,90);
}

if (selection == 4) {
  image(couch, xpos,ypos,80,70);
}

if (count == 1) {
	item1_x=xpos;
	item1_y = ypos;
	item1_xpos = map(xpos,0,500,-3,3);
	item1_zpos = map(ypos,0,500,2,8);
	selection1 = selection;
	if (ypos == 249 && xpos == 83) {
		item1_yrotation = 90;
	}

	if (ypos == 249 && xpos == 416) {
		item1_yrotation = -90;
	}

	if (ypos == 416) {
		item1_yrotation = 180;
	}
}

if (count == 2) {
	console.log("count = 2");
	item2_x = xpos;
	item2_y = ypos;
	item2_xpos = map(xpos,0,500,-3,3);
	item2_zpos = map(ypos,0,500,2,8);
	selection2 = selection;
	if (ypos == 249 && xpos == 83) {
		item2_yrotation = 90;
	}

	if (ypos == 249 && xpos == 416) {
		item2_yrotation = -90;
	}

	if (ypos == 416) {
		item2_yrotation = 180;
	}

}
if (count == 3) {
	console.log("count = 3");
	item3_x=xpos;
	item3_y=xpos;
	item3_xpos = map(xpos,0,500,-3,3);
	item3_zpos = map(ypos,0,500,2,8);
	selection3 = selection;
	if (ypos == 249 && xpos == 83) {
		item3_yrotation = 90;
	}

	if (ypos == 249 && xpos == 416) {
		item3_yrotation = -90;
	}

	if (ypos == 416) {
		item3_yrotation = 180;
	}

}
if (count == 4) {
	console.log("count = 4");
	item4_xpos = map(xpos,0,500,-3,3);
	item4_zpos = map(ypos,0,500,2,8);
	selection4 = selection;
	if (ypos == 249 && xpos == 83) {
		item4_yrotation = 90;
	}

	if (ypos == 249 && xpos == 416) {
		item4_yrotation = -90;
	}

	if (ypos == 416) {
		item4_yrotation = 180;
	}

}
//pointer

	if (count >1) { //count == 2+
if (selection1 == 1) {
	image(chair,item1_x,item1_y,90,90);
	console.log("added chair");
}

if (selection1 ==2) {
	image(desk,item1_x,item1_y,100,100);
}

if (selection1 == 3) {
image(bed,item1_x,item1_y,90,90);
}

if (selection1 == 4) {
image(couch,item1_x,item1_y,80,70);
}

}

if (count >2) { //count = 3+
	if (selection2 == 1) {
		image(chair,item2_x,item2_y,90,90);
		console.log("added chair");
	}

	if (selection2 ==2) {
		image(desk,item2_x,item2_y,100,100);
	}

	if (selection2 == 3) {
	image(bed,item2_x,item2_y,90,90);
	}

	if (selection2 == 4) {
	image(couch,item2_x,item2_y,80,70);
	}
}

if (count >3) { //count = 4+
	if (selection3 == 1) {
		image(chair,item3_x,item3_y,90,90);
		console.log("added chair");
	}

	if (selection3 ==2) {
		image(desk,item3_x,item3_y,100,100);
	}

	if (selection3 == 3) {
	image(bed,item3_x,item3_y,90,90);
	}

	if (selection3 == 4) {
	image(couch,item3_x,item3_y,80,70);
	}
}


}

if (gameState == 3) {
	fill(255);
	rect(250,160,300,100);
	rect(250,340,300,100);
	fill(0);
	textSize(25);
	textAlign(CENTER);
	textStyle(BOLD);
	text("Add another item to your room",250,175,280,90);
	text("Finalize your space and go to VR",250,355,280,90);

	if (mouseX > 100 && mouseX <400) {
		if (mouseY > 90 && mouseY < 210) {

	 fill(0);
	 rect(250,160,300,100);
	 fill(255);
	 text("Add another item to your room",250,175,280,90);;
 }

if (mouseY > 290 && mouseY <390) {
	fill(0);
	rect(250,340,300,100);
	fill(255);
	text("Finalize your space and go to VR",250,355,280,90);
 }

}


 }

}
