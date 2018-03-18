const initialState = {
  USDPrice: 0,
  uploader: {
    uploading: false
    files: []
  }
}

export default (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    case 'SET_USD_PRICE':
      return {
        ...state,
        USDPrice: action.payload.usd
      }
    case 'SET_FILE_LIST':
      return {
        ...state,
        uploader: {
          ...state.uploader,
          files: action.payload.files
        }
      }
    case 'RESET_FILES':
     return {
       ...state,
       uploader: {
         ...state.uploader,
         files: []
       }
     }
    default:
      return state;
  }
}
