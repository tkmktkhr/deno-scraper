import { Router, RouterContext } from "../../mod.ts";
import { SearchAccommodationController } from "../../interfaces/controllers/SearchAccommodationController.ts";

const router = new Router();

const searchAccommodation = new SearchAccommodationController();
router.post(
  "/search/accommodation/:param",
  async (context: RouterContext) => {
    const reqBody = context.request.body();
    const val = await reqBody.value;
    const result = await searchAccommodation.searchAccommodation(val);
    context.response.body = result;
  },
);

router.get(
  "/tests",
  (context: RouterContext) => {
    // controller
    // const result = await vocabularyController.findAllVocabularies();
    // const a = new Deno.Buffer(new TextDecoder().decode([`%E6%9D%B1%E4%BA%AC`, ]));
    const a = new TextEncoder().encode("東京");
    console.log(a);
    console.log(new TextDecoder().decode(a));
    const b = new Deno.Buffer(a);
    console.log(b);

    context.response.redirect(
      "https://www.airbnb.jp/s/%E6%9D%B1%E4%BA%AC--%E6%9D%B1%E4%BA%AC%E9%83%BD--%E6%97%A5%E6%9C%AC/homes?place_id=ChIJXSModoWLGGARILWiCfeu2M0&refinement_paths%5B%5D=%2Fhomes&refinement_path=%2Fhomes&tab_id=home_tab&reset_filters=true&checkin=2021-05-09&checkout=2021-06-12&adults=2&children=0&infants=0&search_type=AUTOSUGGEST",
    );
  },
);

router.post(
  "/tests",
  async (context: RouterContext) => {
    const body = context.request.body();
    const result = await body.value;

    context.response.body = {
      title: `The title is ${result.title}.`,
    };
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
