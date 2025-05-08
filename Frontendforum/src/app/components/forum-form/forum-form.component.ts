import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from '../../services/forum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from '../../models/Forum';

@Component({
  selector: 'app-forum-form',
  standalone: false,
  templateUrl: './forum-form.component.html',
  styleUrl: './forum-form.component.scss'
})
export class ForumFormComponent {
  forumForm!: FormGroup;
  forumId: string | null = null;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.forumForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      createdAt: [new Date().toISOString(), Validators.required]
    });

    this.forumId = this.route.snapshot.paramMap.get('id');
    if (this.forumId) {
      this.isEditMode = true;
      this.forumService.getById(this.forumId).subscribe(forum => {
        this.forumForm.patchValue(forum);
      });
    }
  }

  onSubmit(): void {
    const forum: Forum = this.forumForm.value;

    if (this.isEditMode && this.forumId) {
      this.forumService.update(this.forumId, forum).subscribe(() => {
        this.router.navigate(['/forums']);
      });
    } else {
      this.forumService.create(forum).subscribe(() => {
        this.router.navigate(['/forums']);
      });
    }
  }
}
