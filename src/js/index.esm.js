function init() {
    var canvas = document.getElementById('canvas');
    var gl = canvas.getContext('webgl');
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

export { init };
