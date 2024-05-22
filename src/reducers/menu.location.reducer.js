const SET_PAGE = "SET_PAGE";
const SET_SCROLL_POSITION = "SET_SCROLL_POSITION";

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setScrollPosition = (position) => ({
  type: SET_SCROLL_POSITION,
  payload: position,
});

const initialState = {
  currentPage: "",
  previousPagePath: "",
  scrollPosition: 0,
};

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE: {
      let pageName = "";
      let pagePath = "";
      switch (action.payload) {
        case "/info":
          pagePath = "/info";
          pageName = "Présentation";
          break;
        case "/projets":
          pagePath = "/projets";
          pageName = "Projets";
          break;
        case "/contact":
          pagePath = "/contact";
          pageName = "Contact";
          break;
        case "/menu":
          pagePath = "/menu";
          pageName = "Menu";
          break;
        case "/galerie":
          pagePath = "/galerie";
          pageName = "Galerie";
          break;
        default:
          pageName = "";
      }
      return {
        ...state,
        previousPagePath: state.currentPagePath,
        currentPage: pageName,
        currentPagePath: pagePath,
      };
    }
    case SET_SCROLL_POSITION: {
      return {
        ...state,
        scrollPosition: action.payload,
      };
    }
    default:
      return state;
  }
}
