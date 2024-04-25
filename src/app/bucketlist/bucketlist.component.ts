import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

export interface BucketListItem {
  // id: number;
  username: string;
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
    // id: 0,
    username:'',
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

      const item: BucketListItem ={
        username: this.apiService.currentUser,
        title:this.newItem.title,
        description:this.newItem.description,
        category:this.newItem.category,
        url:this.newItem.url,
        isCompleted:this.newItem.isCompleted
      }

      this.apiService.insertBucket(item).subscribe({
        complete:() => console.log('New Bucket Added Successfully'),
        error: (e) => { console.log('Problem'); },
      })

    // Add the new item to the bucket list
    this.bucketList.push(this.newItem);
    this.sortBucketList();

    // Clear the form
    this.newItem = {
      // id: 0,
      username:'',
      title: '',
      description: '',
      category: '',
      isCompleted: false
    };
  }

  // deleteItem(id: number) {
  //   this.bucketList = this.bucketList.filter(item => item.id !== id);
  // }

  sortBucketList() {
    this.bucketList.sort((a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0));
  }

  get filterActiveItems() {
    return this.bucketList.filter(item => !item.isCompleted);
  }

  insertBucketList(userId: string){
    this.apiService.insertBucket(this.bucketList[this.bucketList.length-1])
  }
  // updateBucketList(userId: string) {
  //   this.apiService.updateBucketList(userId, this.bucketList).subscribe(
  //     (res) => {
  //       console.log('Bucket list updated successfully:', res);
  //     },
  //     (error) => {
  //       console.error('Error updating bucket list:', error);
  //     }
    // );
  }
// }
