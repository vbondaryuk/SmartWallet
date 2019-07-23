import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

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
              public Description: string,
              public Budget: number,
              ParentId: number | null,
              public Child: Category[]) {
    super(Id, Name, ParentId, Child);
  }
}

const Categories: Category[] = [
  new Category(1, 'Category', 'wwwwwwwwwwwwwwascxc cxvxc vxc vx cv xcv xc vxc v', 500, null, [
    new Category(2, 'SubCategory1', '', 100, 1, null),
    new Category(3, 'SunCategory2', '', 100, 1, [
      new Category(2, 'SubCategory1', '', 100, 1, null),
      new Category(3, 'SunCategory2', '', 100, 1, null)])
  ])];

interface FlatNode<T> {
  expandable: boolean;
  node: T;
  level: number;
}

@Component({
  selector: 'app-category-treeview',
  templateUrl: './category.treeview.component.html',
  styleUrls: ['./category.treeview.component.sass'],
  // providers: [LoadmoreDatabase]
})
export class CategoryTreeViewComponent implements OnInit {
  treeControl: FlatTreeControl<FlatNode<Category>>;
  dataSource: MatTreeFlatDataSource<Category, FlatNode<Category>>;
  treeFlattener: MatTreeFlattener<Category, FlatNode<Category>>;

  constructor() {
    this.treeControl = new FlatTreeControl<FlatNode<Category>>(node => node.level, node => node.expandable);
    this.treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.Child);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = Categories;

  }

  hasChild = (_: number, item: FlatNode<Category>) => item.expandable;

  addNewItem(node: Category) {

  }

  ngOnInit(): void {
  }

  private transformer = (node: Category, level: number) => {
    return {
      expandable: !!node.Child && node.Child.length > 0,
      node,
      level,
    };
  }
}
