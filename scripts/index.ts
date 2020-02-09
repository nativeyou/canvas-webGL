function init() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const gl = canvas.getContext('webgl') as WebGLRenderingContext


    const vsSource = `
        attribute vec4 position;
        void main() {
            glPosition = position;
            glSize = 10.0
        }
    `
    const fsSource = ``

    if (!initShaders(gl, ``, ``)) {
        console.error('Failed to initialize shaders.')
        return
    }

    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS, 0, 1)
}

function initShaders(gl: WebGLRenderingContext, vshader: string, fshader: string): boolean {
    try {

        return true
    } catch (e) {
        return false
    }
}

export {
    init
}