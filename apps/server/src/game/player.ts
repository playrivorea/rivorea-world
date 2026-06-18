export class Player {
  id: string;
  name: string;
  balance: number = 0;
  inventory: string[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  earn(amount: number) {
    this.balance += amount;
  }

  spend(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }
  }
}
