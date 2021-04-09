import { Context, Router, RouterContext } from "../../mod.ts";
import { BadRequest } from "../../common/error.ts";
// import { VocabularyController } from "../interfaces/controllers/vocabulary/vocabularyController.ts";

const router = new Router();

router.get(
  "/tests",
  (context: RouterContext) => {
    // controller
    // const result = await vocabularyController.findAllVocabularies();
    console.log("400エラ-投げる");

    const result = "result";
    // context.response.status = 400;
    // const err = new BadRequest('400えらーだ');
    context.throw(400, "400errorororor");
    // const err = new BadRequest('badrequest');
    // console.log(err.stausCode);
    console.log("Ended process here is Router");
    console.log(result);
    // context.response.body = result;
  },
);

router.post(
  "/tests",
  (context: RouterContext) => {
    // controller
    // const result = await vocabularyController.findAllVocabularies();
    console.log("inside of post router");

    const result = "result";
    const err = new BadRequest("badrequest");
    // context.response.status = 400;
    // console.log(err);

    // console.log("Ended process here is Router");
    // console.log(result);
    context.response.body = err;
  },
);

// router.get(
//   "/vocabularies/:id",
//   async (context: RouterContext) => {
//     // controller
//     console.log(context.params.id);
//     const result = await vocabularyController.findVocabulary(context);
//     // const result = await vocabularyController.findAllVocabularies();
//     console.log("Ended process here is Router");
//     console.log(result);
//     context.response.body = result;
//   },
// );

export default router;
