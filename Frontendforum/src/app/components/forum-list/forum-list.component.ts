import { Component } from '@angular/core';
import { Forum } from '../../models/Forum';
import { ForumService } from '../../services/forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-list',
  standalone: false,
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.scss'
})
export class ForumListComponent {
  forums: Forum[] = [];

  constructor(private forumService: ForumService, private router: Router) {}

  ngOnInit(): void {
    this.loadForums();
  }

  loadForums(): void {
    this.forumService.getAll().subscribe(data => {
      this.forums = data;
    });
  }

  onEdit(id: string): void {
    this.router.navigate(['/forums/edit', id]);
  }

  onDelete(id: string): void {
    if (confirm('Voulez-vous vraiment supprimer ce forum ?')) {
      this.forumService.delete(id).subscribe(() => {
        this.loadForums(); // refresh après suppression
      });
    }
  }

  onCreate(): void {
    this.router.navigate(['/forums/new']);
  }
}
