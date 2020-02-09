(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.WebGL = {}));
}(this, (function (exports) { 'use strict';

    function init() {
        var canvas = document.getElementById('canvas');
        var gl = canvas.getContext('webgl');
        if (!initShaders()) {
            console.error('Failed to initialize shaders.');
            return;
        }
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, 1);
    }
    function initShaders(gl, vshader, fshader) {
        try {
            return true;
        }
        catch (e) {
            return false;
        }
    }

    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
