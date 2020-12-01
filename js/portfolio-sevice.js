'use strict'
var gProjs;

_createProjs();

// LIST 
function getProjsForDisplay() {
    return gProjs
}

function _createProjs() {
    gProjs = [
        _createProj('1', 'ball-board', 'ball-board', 'lorem ipsum', 'ball-board', '1606755576523', ['Matrixes', 'keyboard events']),
        _createProj('2', 'chess', 'chess', 'lorem ipsum', 'chess', '1606755576523', ['Matrixes', 'keyboard events']),
        _createProj('3', 'game-of-life', 'game-of-life', 'lorem ipsum', 'game-of-life', '1606755576523', ['Matrixes', 'keyboard events']),
        _createProj('4', 'in-picture', 'in-picture', 'lorem ipsum', 'in-picture', '1606755576523', ['Matrixes', 'keyboard events']),
        _createProj('5', 'mines-sweeper', 'mines-sweeper', 'lorem ipsum', 'mines-sweeper', '1606755576523', ['Matrixes', 'keyboard events']),
        _createProj('6', 'pacman', 'pacman', 'lorem ipsum', 'pacman', '1606755576523', ['Matrixes', 'keyboard events']),
        _createProj('7', 'touch-nums', 'touch-nums', 'lorem ipsum', 'touch-nums', '1606755576523', ['Matrixes', 'keyboard events']),
    ]
}

function _createProj(id, name, title, desc, publishedAt, labels) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: `img/proj/${title}-thumbnail.JPG`, //`projs/${title}/index.html`
        publishedAt: publishedAt,
        labels: labels
    }
}

// READ 
function getProjById(projId) {
    var proj = gProjs.find(function (proj) {
        return projId === proj.id
    })
    return proj;
}