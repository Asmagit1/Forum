package tn.esprit.backendforum.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.backendforum.entities.Forum;
import tn.esprit.backendforum.service.IForumService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/forums")
@CrossOrigin(origins = "http://localhost:4200")
public class ForumController {
    private final IForumService forumService;
    @PostMapping
    public Forum createForum(@RequestBody Forum forum) {
        return forumService.createForum(forum);
    }

    @GetMapping
    public List<Forum> getAllForums() {
        return forumService.getAllForums();
    }

    @GetMapping("/{id}")
    public Forum getForumById(@PathVariable String id) {
        return forumService.getForumById(id);
    }

    @PutMapping("/{id}")
    public Forum updateForum(@PathVariable String id, @RequestBody Forum forum) {
        return forumService.updateForum(id, forum);
    }

    @DeleteMapping("/{id}")
    public void deleteForum(@PathVariable String id) {
        forumService.deleteForum(id);
    }

}
