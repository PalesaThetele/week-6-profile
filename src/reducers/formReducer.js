export const initialFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "",
  acceptedTerms: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_TERMS":
      return {
        ...state,
        acceptedTerms: action.value,
      };

    case "RESET_FORM":
      return initialFormData;

    default:
      throw new Error(`Unknown form action: ${action.type}`);
  }
}




