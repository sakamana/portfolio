const scene = new THREE.Scene();
scene.background = new THREE.Color(0xb8bebf);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.querySelector("#threeJS").appendChild( renderer.domElement );

var light = new THREE.DirectionalLight(0xffffff);
light.intensity = 2; // 光の強さを倍に

// directionalLight.shadow.camera.left = -10;
//     directionalLight.shadow.camera.right = 10;
//     directionalLight.shadow.camera.top = -10;
//     directionalLight.shadow.camera.bottom = 10;
//上追加すると真っ暗になる。光判定はあるっぽい？

// ライトの位置を変更
light.position.set(0, 1, 0).normalize();

scene.add(light);

const geometry1 = new THREE.BoxGeometry(2, 2, 2);
const material1 = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const cube1 = new THREE.Mesh( geometry1, material1 );

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const cube2 = new THREE.Mesh( geometry2, material2 );

const geometry3 = new THREE.BoxGeometry(1, 1, 1);
const material3 = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const cube3 = new THREE.Mesh( geometry2, material2 );

const geometry4 = new THREE.BoxGeometry(1, 1, 1);
const material4 = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const cube4 = new THREE.Mesh( geometry2, material2 );


scene.add( cube1 );

scene.add( cube2 );
cube2.position.set(3, 3, 0);

scene.add( cube3 );
cube3.position.set(5, -2, 0);

scene.add( cube4 );
cube4.position.set(-3, -1, 0);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame( animate );
  // cube.rotation.x +=　0.001 ;
  // cube.rotation.y +=　0.001 ;
  // //cube.rotation.x = window.scrollY * 0.001 ;//どんどん加速しちゃう
  //cube.rotation.y = window.scrollY * 0.001 ;
  renderer.render( scene, camera );

  // var isScrolling = 0 ;
  // var timeoutId ;

  // window.addEventListener( "scroll", function () {
	//   isScrolling = 1 ;

	  // スクロールを停止して500ms後に終了とする
	  //clearTimeout( timeoutId ) ;

	  // timeoutId = setTimeout( function () {
		//   isScrolling = 0 ;
	  // }, 500 ) ;
  //} ) ;

  // if(isScrolling = 1){
    cube1.rotation.x = window.scrollY * 0.001 ;
    cube1.rotation.y = window.scrollY * 0.001 ;

    cube2.rotation.x = window.scrollY * 0.002 ;
    cube2.rotation.y = window.scrollY * 0.002 ;

    cube3.rotation.x = window.scrollY * 0.0025 ;
    cube3.rotation.y = window.scrollY * 0.0025 ;

    cube4.rotation.x = window.scrollY * 0.002 ;
    cube4.rotation.y = -window.scrollY * 0.0025 ;
  // }
  // else if(isScrolling = 0){
  //   cube1.rotation.x +=　0.001 ;
  //   cube1.rotation.y +=　0.001 ;
  // }
};
animate();