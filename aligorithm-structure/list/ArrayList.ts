import { List } from './List';

/**
 * 使用数组实现 List
*/
export class ArrayList<E> extends List<E> {
  // 初始容积，指定初始容器大小
  private capacity: number = 50;
  // 每次扩容倍数
  private multiple: number = 1.5;
  // 当前存储的元素个数
  private length: number = 0;
  // 数据容器
  private container: (E|undefined)[];

  constructor(capacity: number = 50) {
    super();
    this.capacity = capacity;
    this.container = new Array(this.capacity);
  }

  private ensureCapacity(count: number) {
    if (this.length + count < this.capacity) return;

    this.capacity = Math.ceil((this.length + count) * this.multiple);
    const container = new Array(this.capacity);

    for (let i = 0; i < this.container.length; i++)
    container[i] = this.container[i];

    this.container = container;
  }
  
  /**
   * @override
  */
  size(): number {
    return this.length;
  }

  /**
   * @override
  */
  get(index: number): E|undefined {
    return this.container[this.getIndex(index)];
  }

  /**
   * @override
  */
  set(index: number, data: E): boolean {
    if (index < -1 * this.length) return false;
    if (index >= this.length) return false;
    index = this.getIndex(index);
    this.container[index] = data;
    return true;
  }

  /**
   * @override
  */
  forEach(cb: (e: E, index: number) => any): void {
    let i = 0;
    while(i < this.length) {
      if (cb(this.container[i]!, i) === false) return
      i += 1;
    }
  }
    
  /**
   * @override
  */
  splice(start: number, deleteCount: number, ...items: E[]): E[] {
    start = this.getIndex(start);
    deleteCount = Math.min(deleteCount, this.length - start);

    const removeItems = new Array(deleteCount);
    const diff = Math.abs(items.length - deleteCount);

    if (items.length > deleteCount) this.ensureCapacity(diff);

    for (let i = 0; i < deleteCount; i++)
    removeItems[i] = this.container[start + i];

    if (items.length < deleteCount) {
      for (let i = start + deleteCount; i < this.length; i++) 
      this.container[i - diff] = this.container[i];
      for (let i = 0; i < diff; i++)
      this.container[this.length - 1 - i] = undefined;
    } else {
      for (let i = this.length - 1; i >= start; i--)
      this.container[i + diff] = this.container[i];
    }

    for (let i = 0; i < items.length; i++)
    this.container[start + i] = items[i];

    this.length += items.length - deleteCount;
    return removeItems;
  }
}