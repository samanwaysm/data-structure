// function fibo(n){
//     if(n<2) return n
//     return fibo(n-1)+fibo(n-2)
// }

// console.log(fibo(6));

//------------------------------------------

// function isPalindrome(word){
//     let str = word.toLowerCase()
//     if(str[0]!==str[str.length-1]){
//         return false
//     }
//     if(str.length<=1){
//         return true
//     }
//     return isPalindrome(str.slice(1,-1))
// }

// let word = 'Malayalam'
// console.log(isPalindrome(word));

//--------------------------------------------

// function isPalindrome(word,i){


//     if(i == Math.floor(word.length/2)){
//         return true
//     }
   
//     if(word[i]!=word[word.length-1-i]){
//         return false
//     }
//     return isPalindrome(word,i+1)
// }

// let word = 'Malayalam'
// console.log(isPalindrome(word,0));

//--------------------------------------------------

// function revereseString(str){
//     if(str.length <= 1){
//         return str
//     }
//     let lastWord = str[str.length-1]
//     str.pop()
//     return lastWord + " " + revereseString(str)
// }

// let string = 'my name is samanway'
// let str = string.split(' ')
// console.log(revereseString(str));

//----------------------------------------------------

// function fact(n){
// if(n===0){
//     return n
// }
// return n*fact(n-1)
// }

// console.log(fact(4));

//----------------------------------------------

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
    

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size === 0  
//     }

//     push(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//         return this
//     }
//     pop(){
//         if(this.isEmpty()){
//             return undefined
//         }
//         if(this.size===1){
//             this.head = null
//             this.tail = null
//             this.size--
//         }else{
//             let prev
//             let temp = this.head
//             while(temp.next!== null){
//                 prev = temp
//                 temp = temp.next
//             }
//             prev.next = null
//             this.size--
//         }
//     }

//     unshift(value){
//         const node =  new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             let temp = this.head
//             this.head = node
//             this.head.next = temp
//         }
//         this.size++
//     }

//     shift(){
//         if(this.isEmpty()){
//             return undefined
//         }
//         if(this.size ===1){
//             this.head = null
//             this.tail == null
//             this.size--
//         }else{
//             this.head = this.head.next
//             this.size --
//         }
//     }
//     get(index){
//         let pos=0
//         let temp = this.head
//         while(pos !== index){
//             pos++
//             temp = temp.next
//         }
//         // console.log(temp.value);
//         return temp
//     }

//     set(value,index){
//         let temp = this.get(index)
//         temp.value = value
//     }

//     insert(value,index){
//         const node  = new Node(value)
//         if(this.isEmpty()|| index === this.length){
//             return this.push(value)
//         }
//         if(index === 0){
//             return this.unshift(value)
//         }
//         let pos = 0
//         let temp = this.head
//         let prev
//         while(pos !== index){
//             pos++
//             prev = temp
//             temp = temp.next
//         }
//         prev.next = node
//         prev.next.next = temp
//         this.size++
//     }

//     remove(index){
//         if(index===0){
//             return this.shift()
//         }
//         if(index === this.size){
//             return this.pop()
//         }
//         let pos =0
//         let temp = this.head
//         let prev
//         while(pos !== index){
//             pos++
//             prev = temp
//             temp = temp.next 
//         }
//         prev.next=temp.next
//         this.size--
//     }

//     reverse(){
//         let currNode = this.head
//         let nextNode
//         let prev = null;
//         this.head = this.tail
//         this.tail = currNode
//         while(currNode !== null){
//             nextNode = currNode.next
//             currNode.next = prev
//             prev = currNode
//             currNode = nextNode
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty'); 
//         }else{
//             let temp = this.head;
//             let listValues = ''
//             while(temp){
//                 listValues += `${temp.value} `
//                 temp = temp.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// // console.log(isEmpty());

// const list = new LinkedList();

// list.push(20)
// list.push(25)
// list.push(30)
// list.push(35)
// list.unshift(15)
// // list.pop()
// // list.shift()
// list.print()
// // list.get(3)
// // list.set(50,2)
// list.insert(34,2)
// list.print()
// // list.remove(3)
// list.reverse()
// list.print()

//--------------------------------------------------

// function fact(n){
// if(n<=1){
//     return n
// }
// return n *fact(n-1)
// }

// console.log(fact(4));

//-----------------------------------------------------

// function isPalindrome(str){
//     if(str.length<1){
//         return true
//     }
//     if(str[0]!==str[str.length-1]){
//         return false
//     }
//     return isPalindrome(str.slice(1,-1))
// }

// let send = 'Malayalam'
// let str = send.toLowerCase()
// console.log(isPalindrome(str));

//--------------------------------------------

// function revereseString(str){
//     if(str.length<1){
//         return str
//     }
//     let lastValue = str[str.length-1]
//     str.pop()
//     return lastValue + " " + revereseString(str)
// }
// let string = 'my name is samanway'
// let str = string.split(' ')
// console.log(revereseString(str));

//------------------------------------------------

// function collectOdd(arr,i){
//     let result =[]
//     if(arr.length === i){
//         return result
//     }
//     if(arr[i]%2 !== 0){
//         result.push(arr[i])
//     }
//     return result.concat(collectOdd(arr,i+1))
// }

// let arr = [1,2,3,4,5]

// console.log(collectOdd(arr,0));

//---------------------------------------------------
// function binarySearch(arr,target){
//     // let leftIndex = 0
//     // let rightIndex = arr.length-1
//     return Search(arr,target,0,arr.length-1)
// }
// function Search(arr,target,leftIndex,rightIndex){
//     let middleIndex
//     if(leftIndex<rightIndex){
//         middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//             return Search(arr,target,leftIndex,middleIndex-1)
//         }else{
//             return Search(arr,target,middleIndex+1,rightIndex)
//         }
//     }
// }

// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(binarySearch(arr,7));

//---------------------------------------------------

// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1
//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//             rightIndex = middleIndex-1
//         }else{
//             leftIndex = middleIndex+1
//         }
//     }
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(binarySearch(arr,3));
//---------------------------------------------------

// function fact(n){
//     if(n<=1){
//         return n
//     }
//     return n*fact(n-1)
// }

// console.log(fact(4));

//---------------------------------------------------

function isPalindrome(str){
    if(str.length<1){
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }
    return isPalindrome(str.slice(1,-1))
}

let string = 'Malayalam'
let str = string.toLowerCase()
console.log(isPalindrome(str));
//---------------------------------------------------



//---------------------------------------------------