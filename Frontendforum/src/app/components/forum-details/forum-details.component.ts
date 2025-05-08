import { Component } from '@angular/core';
import { Forum } from '../../models/Forum';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum-details',
  standalone: false,
  templateUrl: './forum-details.component.html',
  styleUrl: './forum-details.component.scss'
})
export class ForumDetailsComponent {
  forum!: Forum;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.forumService.getById(id).subscribe(data => {
        this.forum = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/forums']);
  }
}
