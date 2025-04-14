import SinglyLinkedList from "./SinglyLinkedList.js";

const list = new SinglyLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());