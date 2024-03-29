const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.querySelector("#threeJS").appendChild( renderer.domElement );

for ( var j = 1 ; j <= 15 ; j++ ){
  for ( var i = 1 ; i <= 15 ; i++ ){
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x808080 } );
    const cube = new THREE.Mesh( geometry, material);
    scene.add( cube );
    cube.position.set(2.5*i-20, 2.5*j-6, 0);

    const animate = function () {
      cube.rotation.x = cube.rotation.x + 0.01;
      cube.rotation.y = cube.rotation.y + 0.01;
      renderer.render( scene, camera );
      requestAnimationFrame( animate );
    };
    animate();
  }
}
camera.position.z = 5;