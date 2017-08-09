function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1)
        return -1
    return i + cols * j
}

function Cell(i, j) {
    this.i = i // column number
    this.j = j // row number
    this.walls = [true, true, true, true]
    this.visited = false
}

Cell.prototype.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255)

    if (this.walls[0])
        line(x, y, x + w, y) // top

    if (this.walls[1])
        line(x + w, y, x + w, y + w) // right

    if (this.walls[2])
        line(x, y + w, x + w, y + w) // bottom

    if (this.walls[3])
        line(x, y, x, y + w) // left

    if (this.visited) {
        fill(255, 0, 255, 100)
        noStroke()
        rect(x, y, w, w)
    }
}

Cell.prototype.checkNeighbors = function () {
    var neighbors = []
    var i = this.i
    var j = this.j
    var top = grid[index(i, j - 1)]
    var right = grid[index(i + 1, j)]
    var bottom = grid[index(i, j + 1)]
    var left = grid[index(i - 1, j)]

    if (top && !top.visited) {
        neighbors.push(top)
    }
    if (right && !right.visited) {
        neighbors.push(right)
    }
    if (bottom && !bottom.visited) {
        neighbors.push(bottom)
    }
    if (left && !left.visited) {
        neighbors.push(left)
    }
    if (neighbors.length > 0) {
        var r = floor(random(0, neighbors.length))
        return neighbors[r]
    } else {
        return undefined
    }
}

Cell.prototype.highlight = function() {
    var x = this.i * w;
    var y = this.j * w;
    fill(50, 0, 255, 255)
    noStroke()
    rect(x, y, w, w)
}