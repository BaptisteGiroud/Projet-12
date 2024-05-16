const TOGGLE_FORM = "TOGGLE_FORM";

export const toggleForm = () => ({
  type: TOGGLE_FORM,
});

const initialState = {
  formType: "standard",
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FORM:
      return {
        ...state,
        formType: state.formType === "standard" ? "alternative" : "standard",
      };
    default:
      return state;
  }
}
