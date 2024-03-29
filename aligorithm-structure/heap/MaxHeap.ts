import { ArrayList } from '../list/ArrayList';

/**
 * 使用列表实现大顶堆
 */
export class MaxHeap<E> {
  private list = new ArrayList<E>();

  private get(index: number):E | undefined {
    return this.list.get(index);
  }

  /**
   * 交换两个索引的值
   * @param i 
   * @param j 
   */
  private swap(i: number, j: number) {
    const a = this.list.get(i)!;
    const b = this.list.get(j)!;
    this.list.set(i, b);
    this.list.set(j, a);
  }

  /**
   * 获取当前节点所对的父节点索引
   * @param i 
   * @returns 
   */
  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  /**
   * 获取当前节点所对的左子节点索引
   * @param i 
   * @returns 
   */
  private left(i: number): number {
    return 2 * i + 1;
  }

  /**
   * 获取当前节点所对的右子节点索引
   * @param i 
   * @returns 
   */
  private right(i: number):number {
    return 2 * i + 2;
  }

  /**
   * 如何比较两个节点的大小
   * @param node 当前操作的节点
   * @param referenceNode  referenceNode 为父节点
   * @returns 
   */
  compare(node:E, referenceNode :E):number {
    return Number(node) - Number(referenceNode);
  }

  /**
   * 重置堆
   * @param elements 
   */
  reset(...elements: E[]) {
    this.list.push(...elements);

    // 最后一个叶子节点的父节点是最后一个树节点   
    // 从底层往上，保证底层的树节点是一个符合条件的堆，
    for (let i = this.parent(this.size() - 1); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  
  size() {
    return this.list.size();
  }

  /**
   * 获取堆顶部数据
   * @returns 
   */
  top(): E | undefined {
    return this.list.get(0);
  }

  /**
   * 从指定索引处开始自下而上进行堆化
   * @param index 
   * @returns 
   */
  siftUp(index: number) {
    while(true) {
      const parentIndex = this.parent(index);
      if (parentIndex < 0) return;
      const parentData = this.get(parentIndex)!;
      const data = this.get(index)!;
      const res = this.compare(data, parentData);
      if (res > 0) this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /**
   * 从指定索引处开始自上而下进行堆化
   * @param index 
   * @returns 
   */
  siftDown(index: number) {
    const leftIndex = this.left(index);
    const rightIndex = this.right(index);
    const length = this.size();
    if (leftIndex >= length - 1) return;

    let max:E;
    const topData = this.get(index)!;
    const leftData = this.get(this.left(index))!;
    const rightData = this.get(this.right(index))!;

    let res = this.compare(topData, leftData);
    max = res < 0 ? leftData : topData;
    if (rightIndex <= length - 1) {
      res = this.compare(max, rightData);
      max = res < 0 ? rightData : max;
    }
    if (max === topData) { 
      return 
    } else if (max === leftData) {
      this.swap(index, leftIndex);
      this.siftDown(leftIndex);
    } else {
      this.swap(index, rightIndex);
      this.siftDown(rightIndex);
    }
  }

  /**
   * 元素入堆
   * @param data 
   */
  push(data: E): void {
    const index = this.list.push(data) - 1;
    this.siftUp(index);
  }

  /**
   * 堆顶元素出堆
   * @returns 返回出堆的堆顶元素
   */
  pop(): E|undefined {
    if (this.size() === 0) return;
    const top = this.get(0);
    const last = this.get(this.size() - 1)!;
    this.list.set(0, last);
    this.list.splice(-1, 1);
    this.siftDown(0);
    return top;
  }
}