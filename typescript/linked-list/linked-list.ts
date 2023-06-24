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

  constructor() { 
    this.head = null;
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
      return;
    }

    tail.next = newNode;
    newNode.prev = tail;
  }

  public pop(): T {
    const tail = this.getTail();
    if (tail === null) {
      throw new Error('Nothing to pop');
    }

    if (tail.prev === null) {
      this.head = null;
      return tail.data;
    }

    tail.prev.next = null;
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
    return head.data;
  }

  public unshift(element: T) {
    const newNode = new Node(element);
    newNode.next = this.head;
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  /**
   * deletes the element with the specified value from the list
   */
  public delete(element: T) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === element) {
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
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
    }
  }

  public count(): number {
    if (this.head === null) {
      return 0;
    }

    let count = 1;
    let current = this.head;
    while (current !== null && current.next !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
}
