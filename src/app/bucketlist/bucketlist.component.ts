import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

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
  styleUrls: ['./bucketlist.component.css']
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

  constructor(private apiService: ApiService) {}

  addItem() {
    // Validation
    if (this.newItem.title.trim() === '') {
      alert('Please enter a title.');
      return;
    }

    // Generate a unique ID for the new item
    this.newItem.id = Date.now();

    // Add the new item to the bucket list
    this.bucketList.push(this.newItem);
    this.sortBucketList();

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

  sortBucketList() {
    this.bucketList.sort((a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0));
  }

  get filterActiveItems() {
    return this.bucketList.filter(item => !item.isCompleted);
  }

  updateBucketList(userId: string) {
    this.apiService.updateBucketList(userId, this.bucketList).subscribe(
      (res) => {
        console.log('Bucket list updated successfully:', res);
      },
      (error) => {
        console.error('Error updating bucket list:', error);
      }
    );
  }
}
