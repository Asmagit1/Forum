package tn.esprit.backendforum.entities;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "forums")
@Getter
@Setter
public class Forum {
    @Id
    private String id;
    private String title;
    private String description;
    private String author;
    private String createdAt;
}
