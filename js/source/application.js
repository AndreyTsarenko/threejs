/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 12.02.14
 * Time: 11:55
 * To change this template use File | Settings | File Templates.
 */
(function () {
    window.application = {};
    require.config({
        baseUrl: "js",
        path: {
            text: "lib/requirejs/text"
        }
    });
    require(["lib/three/three.min"], function () {
        /**
         * step one
         */
        var scene = application.scene = new THREE.Scene();
        var camera = application.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        var renderer = application.renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, innerHeight);
        document.body.appendChild(renderer.domElement);
        /**
         * step two
         */
        var geometry = new THREE.CubeGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var cube = application.cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function render () {
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
//            cube.rotation.z += 0.01;
            renderer.render(scene, camera);
        }
        render();
    });
})();