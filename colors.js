export const getVideoCenterColor = (video) => {
    const canvas = document.createElement("canvas");

    let height = canvas.height = 300;
    let width = canvas.width = 300;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, width, height);

    let data, length;
    let i = -4;
    let count = 0;

    const range = 20;

    try {
        data = context.getImageData((width / 2) - (range / 2), (height / 2) - (range / 2), range, range);
        length = data.data.length;
    } catch (err) {
        return "rgb(0, 0, 0)";
    }
    
    let R = 0;
    let G = 0;
    let B = 0;

    while ((i += 4 * 4) < length) {
        ++count;

        R += data.data[i];
        G += data.data[i + 1];
        B += data.data[i + 2];
    }

    R = ~~(R / count);
    G = ~~(G / count);
    B = ~~(B / count);

    return `rgb(${R}, ${G}, ${B})`;
}

export const colors = [
    [128, 0, 0, 'vermelho escuro'],
    [139, 0, 0, 'vermelho escuro'],
    [165, 42, 42, 'vermelho escuro'],
    [178, 34, 34, 'vermelho escuro'],
    [220, 20, 60, 'vermelho'],
    [255, 0, 0, 'vermelho'],
    [255, 99, 71, 'vermelho'],
    [255, 127, 80, 'coral'],
    [205, 92, 92, 'vermelho'],
    [240, 128, 128, 'coral claro'],
    [233, 150, 122, 'salmão escuro'],
    [250, 128, 114, 'salmão'],
    [255, 160, 122, 'salmão claro'],
    [255, 69, 0, 'laranja'],
    [255, 140, 0, 'laranja'],
    [255, 165, 0, 'laranja'],
    [255, 215, 0, 'dourado'],
    [184, 134, 11, 'dourado escura'],
    [218, 165, 32, 'dourado'],
    [238, 232, 170, 'dourado claro'],
    [189, 183, 107, 'caqui escuro'],
    [240, 230, 140, 'caqui'],
    [128, 128, 0, 'oliva'],
    [255, 255, 0, 'amarelo'],
    [154, 205, 50, 'verde'],
    [85, 107, 47, 'marrom'],
    [107, 142, 35, 'verde'],
    [124, 252, 0, 'verde'],
    [127, 255, 0, 'verde'],
    [173, 255, 47, 'verde'],
    [0, 100, 0, 'verde'],
    [0, 128, 0, 'verde'],
    [34, 139, 34, 'verde'],
    [0, 255, 0, 'verde'],
    [50, 205, 50, 'verde'],
    [144, 238, 144, 'verde'],
    [152, 251, 152, 'verde'],
    [143, 188, 143, 'verde'],
    [0, 250, 154, 'verde'],
    [0, 255, 127, 'verde'],
    [46, 139, 87, 'verde'],
    [102, 205, 170, 'verde'],
    [60, 179, 113, 'verde'],
    [32, 178, 170, 'verde'],
    [47, 79, 79, 'marrom'],
    [0, 139, 139, 'ciano escuro'],
    [0, 255, 255, 'ciano'],
    [0, 255, 255, 'ciano'],
    [224, 255, 255, 'ciano claro'],
    [0, 206, 209, 'turquesa escuro'],
    [64, 224, 208, 'turquesa'],
    [72, 209, 204, 'turquesa'],
    [175, 238, 238, 'turquesa claro'],
    [127, 255, 212, 'azul'],
    [176, 224, 230, 'azul acinzentado'],
    [95, 158, 160, 'azul'],
    [70, 130, 180, 'azul'],
    [100, 149, 237, 'azul'],
    [0, 191, 255, 'azul'],
    [30, 144, 255, 'azul'],
    [173, 216, 230, 'azul claro'],
    [135, 206, 235, 'azul claro'],
    [135, 206, 250, 'azul claro'],
    [25, 25, 112, 'azul escuro'],
    [0, 0, 128, 'azul escuro'],
    [0, 0, 139, 'azul escuro'],
    [0, 0, 205, 'azul escuro'],
    [0, 0, 255, 'azul'],
    [65, 105, 225, 'azul'],
    [138, 43, 226, 'violeta'],
    [75, 0, 130, 'violeta'],
    [72, 61, 139, 'roxo escuro'],
    [106, 90, 205, 'roxo'],
    [123, 104, 238, 'roxo'],
    [147, 112, 219, 'roxo'],
    [139, 0, 139, 'roxo'],
    [148, 0, 211, 'roxo'],
    [153, 50, 204, 'roxo'],
    [186, 85, 211, 'roxo'],
    [128, 0, 128, 'roxo'],
    [216, 191, 216, 'roxo acinzentado'],
    [221, 160, 221, 'rosa'],
    [238, 130, 238, 'rosa'],
    [255, 0, 255, 'rosa'],
    [218, 112, 214, 'rosa'],
    [199, 21, 133, 'rosa'],
    [219, 112, 147, 'rosa'],
    [255, 20, 147, 'rosa'],
    [255, 105, 180, 'rosa'],
    [255, 182, 193, 'rosa'],
    [255, 192, 203, 'rosa'],
    [250, 235, 215, 'amarelo claro'],
    [245, 245, 220, 'amarelo claro'],
    [255, 228, 196, 'amarelo claro'],
    [255, 235, 205, 'amarelo claro'],
    [245, 222, 179, 'amarelo claro'],
    [255, 248, 220, 'amarelo claro'],
    [255, 250, 205, 'amarelo claro'],
    [250, 250, 210, 'amarelo claro'],
    [255, 255, 224, 'amarelo claro'],
    [139, 69, 19, 'marrom'],
    [160, 82, 45, 'marrom'],
    [210, 105, 30, 'marrom'],
    [205, 133, 63, 'marrom'],
    [244, 164, 96, 'marrom'],
    [222, 184, 135, 'marrom'],
    [210, 180, 140, 'marrom'],
    [188, 143, 143, 'marrom'],
    [255, 228, 181, 'amarelo claro'],
    [255, 222, 173, 'amarelo claro'],
    [255, 218, 185, 'amarelo claro'],
    [255, 228, 225, 'rosa claro'],
    [255, 240, 245, 'branco'],
    [250, 240, 230, 'amarelo claro'],
    [253, 245, 230, 'amarelo claro'],
    [255, 239, 213, 'amarelo claro'],
    [255, 245, 238, 'amarelo claro'],
    [245, 255, 250, 'verde'],
    [112, 128, 144, 'cinza'],
    [119, 136, 153, 'cinza'],
    [176, 196, 222, 'cinza'],
    [230, 230, 250, 'roxo'],
    [255, 250, 240, 'branco'],
    [240, 248, 255, 'cinza claro'],
    [248, 248, 255, 'branco'],
    [240, 255, 240, 'verde claro'],
    [255, 255, 240, 'marfim'],
    [240, 255, 255, 'azul claro'],
    [255, 250, 250, 'branco'],
    [0, 0, 0, 'preto'],
    [105, 105, 105, 'cinza escuro'],
    [128, 128, 128, 'cinza'],
    [169, 169, 169, 'cinza escuro'],
    [192, 192, 192, 'prata'],
    [211, 211, 211, 'cinza claro'],
    [220, 220, 220, 'cinza claro'],
    [245, 245, 245, 'cinza claro'],
    [255, 255, 255, 'branco'],
];