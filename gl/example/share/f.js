/*
裁剪空间坐标: 边框粗细 30, 长横 100， 短横 70

        (0, 150, 0)
        |
        |
        |____ (70, 70, 0)
        |
        |_______ (100, 0, 0)
    (0, 0, 0)

*/



/**
 * @description 获取 f 坐标
 * @returns {number[]}
*/
function getFPosition() {
    return [
        // 正面-长竖直 - red
         0,  150,  0,
         0,    0,  0,
        30,    0,  0,
        30,    0,  0,
        30,  150,  0,
         0,  150,  0,
         
        // 正面-长横 - red
        30, 30, 0,
        30,  0, 0,
        100, 0, 0,
        100, 0, 0,
        100, 30, 0,
        30, 30, 0,

        // 正面-短横 - red
        30, 100, 0,
        30, 70, 0,
        70, 70, 0,
        70, 70, 0,
        70, 100, 0,
        30, 100, 0,

        // 背面-长竖直 - green
        0,  150,  30,
        30,  150,  30,
        30,    0,  30,
        30,    0,  30,
        0,    0,  30,
        0,  150,  30,

        // 背面-长横 - green
        30, 30, 30,
        100, 30, 30,
        100, 0, 30,
        100, 0, 30,
        30,  0, 30,
        30, 30, 30,

        // 背面-短横 - green
        30, 100, 30,
        70, 100, 30,
        70, 70, 30,
        70, 70, 30,
        30, 70, 30,
        30, 100, 30,

        // 左侧面 - purple
        0, 150, 30,
        0, 0, 30,
        0, 0, 0,
        0, 0, 0,
        0, 150, 0,
        0, 150, 30,

        // 右侧面-1 - blue
        30, 150, 0,
        30, 100, 0,
        30, 100, 30,
        30, 100, 30,
        30, 150, 30,
        30, 150, 0,

        // 右侧面-2  - blue
        70, 100, 0,
        70, 70, 0,
        70, 70, 30,
        70, 70, 30,
        70, 100, 30,
        70, 100, 0,

        // 右侧面-3  - blue
        30, 70, 0,
        30, 30, 0,
        30, 30, 30,
        30, 30, 30,
        30, 70, 30,
        30, 70, 0,

        // 右侧面-4  - blue
        100, 30, 0,
        100, 0, 0,
        100, 0, 30,
        100, 0, 30,
        100, 30, 30,
        100, 30, 0,

        // 上-1   - yellow
        0, 150, 30,
        0, 150, 0,
        30, 150, 0,
        30, 150, 0,
        30, 150, 30,
        0, 150, 30,

        // 上-2 - yellow
        30, 100, 30,
        30, 100, 0,
        70, 100, 0,
        70, 100, 0,
        70, 100, 30,
        30, 100, 30,

        // 上-3 - yellow
        30, 30, 30,
        30, 30, 0,
        100, 30, 0,
        100, 30, 0,
        100, 30, 30,
        30, 30, 30,

        // 下-1 - cyan
        30, 70, 30,
        70, 70, 30,
        70, 70, 0,
        70, 70, 0,
        30, 70, 0,
        30, 70, 30,

        // 下-2 - cyan
        0, 0, 30,
        100, 0, 30,
        100, 0, 0,
        100, 0, 0,
        0, 0, 0,
        0, 0, 30,
    ]
}


function getFColors() {
    return [
        // 正面-长竖直
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

        // 正面-长横
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

        // 正面-短横
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

        // left column back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

        // top rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

        // middle rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

        // top
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,

        // top rung right
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,

        // under top rung
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,

        // between top rung and middle
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,

        // top of middle rung
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,

        // right of middle rung
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,

        // bottom of middle rung.
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,

        // right of bottom
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,

        // bottom
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,

        // left side
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220
    ];
}

export function createLetterF() {
    return {
        positions: getFPosition(),
        colors: getFColors(),
    }
}