import * as articleService from "./articleService.js";

export const createArticle = async (req, res, next) => {
  try {
    if (req.content === undefined || req.content.length === 0) {
      return res.status(400).json({
        success: false,
        message: "게시글 내용을 입력해주세요.",
        error: '필수 필드 "content" 누락.',
      });
    }

    const artcle = await articleService.createArticle(req.body);

    res.status(201).json({
      success: true,
      message: "게시글 생성 완료.",
      data: artcle,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedArticle = await articleService.deletedArticleById(id);

    res.status(200).json({
      success: true,
      massage: "게시글이 삭제되었습니다.",
      data: deletedArticle,
    });
  } catch (error) {
    next(error);
  }
};

export const updateArticle = async (req, res, next) => {
  try {
    const artcle = await articleService.updateArticleById(
      req.params.id,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "게시글 변경 완료.",
      data: artcle,
    });
  } catch (error) {
    next(error);
  }
};

export const getArticles = async (req, res, next) => {
  try {
    const articles = await articleService.getArticles(req.query);

    res.status(200).json({
      success: true,
      data: articles,
    });
  } catch (error) {
    next(error);
  }
};
