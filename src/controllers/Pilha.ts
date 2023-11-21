class Pilha {
    private items: string[];
  
    constructor() {
      this.items = [];
    }
  
    push(name: string): void {
      this.items.push(name);
    }
  
    pop(): string | undefined {
      return this.items.pop();
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    getStack(): string[] {
      return this.items;
    }
  }
  
  export default Pilha;
  