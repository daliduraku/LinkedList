class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    prepend(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removed;
    }

    size() {
        return this.length
    }

    head() {
        return this.head
    }

    tail() {
        return this.tail
    }
    at(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    contains(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let counter = 0;
        let current = this.head;

        while(current) {
            if(current.value === value) return counter;
            current = current.next;
            counter++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let result = '';

        while(current) {
            result += `( ${current.value} ) -> `;
            current = current.next;
        }
        result += 'null';
        return result;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.append(value);
        if(index === 0) return !!this.prepend(value);
        
        const newNode = new Node(value);
        let prev = this.at(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let previousNode = this.at(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

}