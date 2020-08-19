// To Implement Midpoint algorithm Line drawing for both slopes(|m|<1 and |m|>=1)

function setup() {
    createCanvas(700, 750);
}

function draw() {
    background("#9b59b6");

    let x1 = 100, y1 = 100, x2 = 400, y2 = 400;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const m = dy / dx;

    let d = dy - (dx / 2);
    let x = x1, y = y1;

    beginShape();
    vertex(x, y);
    if (Math.abs(m) < 1) {
        while (x < x2) {
            x++;
            if (d < 0) {
                d = d + dy;
            } else {
                d += (dy - dx);
                y++;
            }
            vertex(x, y);

        }
    } else {
        while (y < y2) {
            y++;
            if (d < 0) {
                d = d + dx;
            } else {
                d += (dx - dy);
                x++;
            }
            vertex(x, y);

        }
    }

    endShape();
}