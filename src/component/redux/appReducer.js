export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_MONEY":
        return {
          ...state,
          data: [...state.data, action.payload],
        };
  case "GET_MONEY":
    return{
      ...state,
          data: action.payload,
          loading: false

    }
      case "EDIT_MONEY":
        const updatedData = action.payload;
  
        const updatedDatas = state.Datas.map((data) => {
          if (data.id === updatedData.id) {
            return updatedData;
          }
          return data;
        });
  
        return {
          ...state,
          data: updatedDatas,
        };
  
      case "REMOVE_MONEY":
        return {
          ...state,
          data: state.data.filter(
            (datas) => datas._id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };