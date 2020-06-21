class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }

}


class BinarySearchTree{
constructor(){
    this.root = null;
}

insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }


}
lookup(value){

}
remove(value){

}
breathFirstSearch(){

    let currentNode=this.root;
    let list=[];
    let queue=[];

    queue.push(currentNode);

    while(queue.length > 0){
        currentNode= queue.shift(); // removes the first element in the queue
        list.push(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }


    }
    return list;
}
breathFirstSearchr(queue,list){

    if(!queue.length){
        return list;
    }
    currentNode=this.queue.shift();
    list.push(currentNode.value);
    if(currentNode.left){
        queue.push(currentNode.left)
    }
    if(currentNode.right){
        queue.push(currentNode.right)
    }



    return this.breathFirstSearchr(queue,list)
}

DFSInorder(){
    return traveseInorder(this.root,[])

}

DFSPostorder(){
    
    return traversePostorder(this.root,[])
}

DFSPreorder(){
    

    return traversePreorder(this.root,[])
}




}

function  traveseInorder(node,list) {
    
    if(node.left){
        traveseInorder(node.left,list)
    }
     list.push(node.value)
     if(node.right){
        traveseInorder(node.right,list)
    }
    return list;

}

const tree = new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//console.log('BFS', tree.breathFirstSearch());
console.log('DFSin', tree.DFSInorder());