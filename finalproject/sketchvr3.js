// create a variable which holds a reference to an anonymous function
// this function encapsulates all of the functionality of a p5 sketch
// note that you have to prefix every call to a p5.js API element with the argument 'p'
var sketchCode1 = function(p) {

	p.setup = function() {
		var myCanvas = p.createCanvas(500,500);
		myCanvas.id("firstCanvas");
	}
	p.draw = function() {
		p.fill(p.random(255),p.random(255),p.random(255));
		p.ellipse(p.random(p.width), p.random(p.height), 25, 25);
	}
}

// run the the first sketch and add it to the page
// it will be added to the page using an id of 'firstCanvas' (see the setup function)
var sketch1 = new p5(sketchCode1);

// variable to hold a reference to our A-Frame world
var world, chair;
var song;

 //world = new World('VRScene');
var a;
var b;
var c;




// class Bonus {
//   constructor(x,z) {
//     this.x = x;
//     this.z = z;
//     this.alive = true;
//
//     if (this.alive == true) {
//     console.log("drawing");
//
// 	  this.object = new Dodecahedron({
//               x: this.x, y:0, z:this.z,
//               radius: 0.04,
//               red:random(255), green:random(255), blue:random(255),
//             });
//     world.add(this.object);
//   }
// }
// }


function setup() {
 // no canvas needed
 noCanvas();

// a = new Bonus(-.1,1);
// b = new Bonus(.1,1);
// c = new Bonus(0,1);

 world = new World('VRScene');
 container = new Container3D({x:0, y:0.8, z:2.6});

world.add(container);




 // box primitive
 // var b = new Box({
	// 				 x:-1, y:1, z:2,
	// 				 width:.2, height: .2, depth: .2,
	// 				 red:random(255), green:random(255), blue:random(255)
	// 			 });
 //  world.add(b);


	var bonus = new Dodecahedron({
						x: 0, y:.88, z:3.9,
						radius: .05,
						asset: 'gold',
			});
	world.add(bonus);

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

 var chair = new OBJ({
	 asset: 'chair_obj',
	// mtl: 'chair_mtl',
	 x: 2,
	 y: 0,
	 z: 2.5,
	 rotationX:0,
	 rotationY:-90,
	 scaleX:.07,
	 scaleY:.12,
	 scaleZ:.09,
 });
 world.add(chair);


 var desk = new OBJ({
 	asset: 'desk_obj',
   mtl: 'desk_mtl',
 	x: 0,
 	y: 0,
 	z: 2.8,
 	rotationX:0,
 	rotationY:180,
 	scaleX:.17,
 	scaleY:.22,
 	scaleZ:.16,
 });
 world.add(desk);

 var laptop = new OBJ({
   asset: 'laptop_obj',
   mtl: 'laptop_mtl',
   x: -0.04,
   y: .6,
   z: 2.7,
   rotationX:-90,
   rotationY:0,
   rotationZ:-90,
   scaleX:.0035,
   scaleY:.0035,
   scaleZ:.0035,
 });
 world.add(laptop);



 // create a plane to serve as our "ground"
 var g = new Plane({x:0, y:0, z:0, width:100, height:100, red:0, green:102, blue:153, rotationX:-90, metalness:0.25});

 // add the plane to our world
 world.add(g);
}

function draw() {



 if (mouseIsPressed) {
	 world.moveUserForward(0.05);
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

 // var sky = select('#theSky');
 // sky.attribute('src', '#sky1');


}
