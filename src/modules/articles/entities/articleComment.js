import { validateCreateAt } from "../../../utils/validateCreatedAt.js";
import { validateStringId } from "../../../utils/validateStringId.js";

const validateContent = (content) => {
  if (typeof content !== "string") {
    throw new Error(`Invalid content type ${typeof content}`);
  }
  if (content.length > 255) {
    throw new Error(`Title too long ${content.length}`);
  }
};

const validateArticleCommentInfo = ({ id, content, createdAt }) => {
  validateStringId(id);
  validateContent(content);
  validateCreateAt(createdAt);
};

export class ArticleComment {
  constructor({ id, content, createdAt, articleId }) {
    this.id = id;
    this.content = content;
    this.createdAt = createdAt;
    this.articleId = articleId;
  }

  static fromEntity({ id, content, createdAt, articleId }) {
    const info = {
      id: id.toString(),
      content,
      created_at: createdAt,
      article_id: articleId,
    };

    validateArticleCommentInfo(info);

    return new ArticleComment(info);
  }
}
