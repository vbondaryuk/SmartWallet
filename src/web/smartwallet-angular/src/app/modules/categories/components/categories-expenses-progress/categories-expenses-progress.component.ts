import {Component, OnInit} from '@angular/core';

export class Entity {
  constructor(public Id: number,
              public Name: string) {
  }
}

export class HierarchyEntity extends Entity {
  constructor(Id: number,
              Name: string,
              ParentId: number | null,
              public Child: Entity[]) {
    super(Id, Name);
  }
}

export class Category extends HierarchyEntity {
  constructor(Id: number,
              Name: string,
              public Expenses: number,
              public Left: number,
              public Budget: number,
              ParentId: number | null,
              public Child: Category[]) {
    super(Id, Name, ParentId, Child);
  }
}

const Categories: Category[] = [
  new Category(1, 'Category', 500, 0, 500, null, [
    new Category(2, 'SubCategory1', 300, -100, 100, 1, null),
    new Category(3, 'SunCategory2', 50, 50, 100, 1, [
      new Category(2, 'SubCategory1', 100, 0, 100, 3, null),
      new Category(3, 'SunCategory2', 30, 70, 100, 3, null)])
  ])];

@Component({
  selector: 'app-categories-expenses-progress',
  templateUrl: './categories-expenses-progress.component.html',
  styleUrls: ['./categories-expenses-progress.component.scss']
})
export class CategoriesExpensesProgressComponent implements OnInit {

  categories: Category[];
  displayedColumns: string[] = ['name', 'progress', 'budget', 'left'];

  constructor() {
    this.categories = this.transform(Categories);
  }

  ngOnInit(): void {
  }

  progressBarColor(category: Category) {
    return category.Expenses === category.Budget ? 'warning'
      : category.Expenses > category.Budget ? 'danger' : 'success';
  }

  progressBarValue(category: Category) {
    return category.Expenses > category.Budget ? category.Budget : category.Expenses;
  }

  getLeftColor(category: Category) {
    return category.Expenses === category.Budget ? '#ffeb3b'
      : category.Expenses > category.Budget ? '#f44336' : '#4caf50';
  }


  private transform(categories: Category[], shift = ''): Category[] {
    return categories.reduce<Category[]>((accumulator, key) => {
      const category = new Category(key.Id, shift + key.Name, key.Expenses, key.Left, key.Budget, null, null);
      let acc = accumulator.concat(category);
      if (key.Child) {
        acc = acc.concat(this.transform(key.Child, shift + '   '));
      }
      return acc;
    }, []);
  }
}
