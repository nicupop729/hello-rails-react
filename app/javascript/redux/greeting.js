const GET_GREETINGS_REQUEST = "GET_GREETINGS_REQUEST";
const GET_GREETINGS_SUCCES = "GET_GREETINGS_SUCCES";
const GET_GREETINGS_FAILED = "GET_GREETINGS_FAILED";

export const getGreetings = () => (dispatch) => {
  dispatch({ type: GET_GREETINGS_REQUEST });

  fetch("/v1/greetings")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_GREETINGS_SUCCES, payload: data.message });
    })
    .catch((err) => dispatch({ type: GET_GREETINGS_FAILED, payload: err }));
};

const initialState = {
  loading: false,
  greeting: "",
  error: null,
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS_REQUEST:
      return { loading: true, greeting: "", error: null };
    case GET_GREETINGS_SUCCES:
      return { loading: true, greeting: action.payload };
    case GET_GREETINGS_FAILED:
      return { loading: false, greeting: "", error: action.payload };
    default:
      return state;
  }
};

export default greetingsReducer;
