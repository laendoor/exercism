class Node<T> {
  public data: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null;
  private length: number;

  constructor() { 
    this.head = null;
    this.length = 0;
  }

  private getTail(): Node<T> | null {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  public push(element: T) {
    const newNode = new Node(element);
    const tail = this.getTail();
    if (tail === null) {
      this.head = newNode;
      this.length += 1;
      return;
    }

    tail.next = newNode;
    newNode.prev = tail;
    this.length += 1;
  }

  public pop(): T {
    const tail = this.getTail();
    if (tail === null) {
      throw new Error('Nothing to pop');
    }

    if (tail.prev === null) {
      this.head = null;
      this.length -= 1;
      return tail.data;
    }

    tail.prev.next = null;
    this.length -= 1;
    return tail.data;
  }

  public shift(): T {
    if (this.head === null) {
      throw new Error('Nothing to shift');
    }

    const head = this.head;
    this.head = head.next;
    if (this.head !== null) {
      this.head.prev = null;
    }
    
    this.length -= 1;
    return head.data;
  }

  public unshift(element: T) {
    const newNode = new Node(element);
    newNode.next = this.head;
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length += 1;
  }

  public delete(element: T) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === element) {
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
      this.length -= 1;
      return;
    }

    let current = this.head;
    while (current.data !== element && current.next !== null) {
      current = current.next;
    }

    if (current.data === element) {
      if (current.prev !== null) {
        current.prev.next = current.next;
      }
      if (current.next !== null) {
        current.next.prev = current.prev;
      }
      this.length -= 1;
    }
  }

  public count(): number {
    return this.length;
  }
}
