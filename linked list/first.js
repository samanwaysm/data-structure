// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }
// }

// const list = new LinkedList()
// console.log('List is empty? ', list.isEmpty());
// console.log('List size ', list.getSize());

//---------------------------------------------------

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // Adding that element to the front of the list or array
    // O(1)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // O(n)
    append(value){
        const node =  new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    
    push(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node;
            this.tail = this.head
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
        return node.value
    }

    insert(value, index){
        if(index<0 || index>this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index >= this.size){
            return null
        }
        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr =this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()
console.log('List is empty? ', list.isEmpty());
console.log('List size ', list.getSize());


// Prepend --->
// list.print()

// list.prepend(10)
// list.print()

// list.prepend(20);
// list.prepend(30);
// list.print()

// Append --->

// list.print()

// list.append(10)
// list.print()

// list.append(20);
// list.append(30);
// list.print()

// Insert --->

// list.print()

// list.insert(10, 0)
// list.print()

// list.insert(20,0);
// list.print()

// list.insert(30,1);
// list.print()

// list.insert(40,2);
// list.print()
// console.log(list.getSize());
// console.log('---------------');

// list.removeFrom(2);
// list.print()

// console.log(list.removeValue(40));
// console.log(list.removeValue(20));

// list.print()

list.push(3)
list.print()
list.push(4)
list.print()
// list.push(5)
// list.print()