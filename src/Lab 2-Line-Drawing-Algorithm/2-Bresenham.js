// To Implement Bresenham Line Drawing algorithm for 
//  both slopes(|m|<1 and |m|>=1).

function setup() {
    createCanvas(700, 750);
}

function draw() {
    background("#9b59b6");

    let x1 = 100, y1 = 100, x2 = 400, y2 = 400;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const m = dy / dx;

    fill(0, 0, 0)

    if (Math.abs(m) < 1) {
        let i;
        let p0 = 2 * dy - dx;
        beginShape();
        vertex(x1, y1);
        for (i = x1; i < x2; i++) {
            if (p0 < 0) {
                x1 += 1;
                p0 = p0 + 2 * dy
                vertex(x1, y1)
            } else {
                x1 += 1;
                y1 += 1;
                p0 = p0 + 2 * dy - 2 * dx
                vertex(x1, y1)
            }
        }
        vertex(x2, y2);
        endShape();
    } else if (Math.abs(m) >= 1) {
        let i;
        let p0 = 2 * dx - dy;
        beginShape();
        vertex(x1, y1);
        for (i = y1; i < y2; i++) {
            if (p0 < 0) {
                y1 += 1;
                p0 = p0 + 2 * dx
                vertex(x1, y1)
            } else {
                x1 += 1;
                y1 += 1;
                vertex(x1, y1)
                p0 = p0 + 2 * (dx - dy);
            }
        }
        vertex(x2, y2);
        endShape();
    }
}