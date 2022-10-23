function Object3D() {
    // Atributos 
    var vertexBuffer = null;
    var indexBuffer = null;
    var matrixModel = mat4.create();
    var position=vec3.create();
    var rotation = vec3.create();
    var scale=vec3.create();
    var children=[];

    // metodos privados 
    function updateMatrixModel();

    // metodos publicos
    this.draw=function(matrixFather){
        var m=mat4.create();
        // concatenamos las transformaciones padre/hijo
        m.multiply(mat,matrixFather, matrixModel);

        if (vertexBuffer && indexBuffer){
            // dibujamos la malla de triángulos con WebGL
            // si el objeto tiene geometría asociada
        for (var i = 0; i < children.length; i++) 
            children[i].draw(m);
        }
    }
    
    this.setGeometry=function(vertexBuffer,indexBuffer){}
    this.addChild=function(h){}
    this.setPosition=function(x,y,z){}
    this.setRotation=function(x,y,z){}
    this.setScale=function(x,y,z){}
}

// triangle mesh

const filas = 4, columnas = 4;
var i, j;
for(j = 0; j < filas - 1; j++) {
    for(i = 0; i < columnas - 1; i++) {
    // agregar triangulos del quad (i,j)
    }
}