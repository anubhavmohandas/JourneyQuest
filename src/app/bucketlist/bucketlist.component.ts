import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface BucketListItem {
  id: number;
  title: string;
  description: string;
  category: string;
  url?: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-bucketlist',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './bucketlist.component.html',
  styleUrl: './bucketlist.component.css'
})
export class BucketListComponent {
  bucketList: BucketListItem[] = [];
  newItem: BucketListItem = {
    id: 0,
    title: '',
    description: '',
    category: '',
    isCompleted: false
  };

  addItem() {
    // Generate a unique ID for the new item
    this.newItem.id = Date.now();
    
    // Add the new item to the bucket list
    this.bucketList.push(this.newItem);

    // Clear the form
    this.newItem = {
      id: 0,
      title: '',  
      description: '',
      category: '',
      isCompleted: false
    };
  }

  deleteItem(id: number) {
    this.bucketList = this.bucketList.filter(item => item.id !== id);
  }
}