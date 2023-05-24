$shape = $("#shape");
var connection = new signalR.HubConnectionBuilder()
    .withUrl('/shapeHub')
    .build();

connection.on('shapeMoved', function (x, y) {
    $shape.css({ left: x, top: y });
});

connection.start().then(
    $shape.draggable({
        drag: function () {
            connection.invoke("MoveShape", this.offsetLeft, this.offsetTop || 0);
        }
    })
);