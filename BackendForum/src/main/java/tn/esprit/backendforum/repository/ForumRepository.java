package tn.esprit.backendforum.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tn.esprit.backendforum.entities.Forum;

public interface ForumRepository extends MongoRepository<Forum, String> {
}
