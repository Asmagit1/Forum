package tn.esprit.backendforum.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.backendforum.entities.Forum;
import tn.esprit.backendforum.repository.ForumRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ForumServiceImpl implements IForumService{

    private final ForumRepository forumRepository;

    @Override
    public Forum createForum(Forum forum) {
        return forumRepository.save(forum);
    }

    @Override
    public Forum getForumById(String id) {
        return forumRepository.findById(id).orElse(null);
    }

    @Override
    public List<Forum> getAllForums() {
        return forumRepository.findAll();
    }

    @Override
    public Forum updateForum(String id, Forum forum) {
        Optional<Forum> existing = forumRepository.findById(id);
        if (existing.isPresent()) {
            forum.setId(id);
            return forumRepository.save(forum);
        }
        return null;
    }

    @Override
    public void deleteForum(String id) {
        forumRepository.deleteById(id);
    }
}
