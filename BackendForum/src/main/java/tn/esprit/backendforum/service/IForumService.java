package tn.esprit.backendforum.service;

import tn.esprit.backendforum.entities.Forum;

import java.util.List;

public interface IForumService {
    Forum createForum(Forum forum);
    Forum getForumById(String id);
    List<Forum> getAllForums();
    Forum updateForum(String id, Forum forum);
    void deleteForum(String id);
}
