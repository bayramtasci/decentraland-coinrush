// FILE WAS GENERATED BY DCL-EDIT
// DO NOT MODIFY

const myScene5 = new Entity("My Scene")
engine.addEntity(myScene5)
const myScene5transform = new Transform({
  position: new Vector3(27.381, 0.858, 30.631),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
myScene5.addComponentOrReplace(myScene5transform)
const myScene5GLTFShape = new GLTFShape("models/MyScene.glb")
myScene5GLTFShape.withCollisions = true
myScene5GLTFShape.isPointerBlocker = true
myScene5GLTFShape.visible = true
myScene5.addComponentOrReplace(myScene5GLTFShape)

// FILE WAS GENERATED BY DCL-EDIT
// DO NOT MODIFY



export let scene = {
}

