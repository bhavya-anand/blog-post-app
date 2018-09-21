const articles = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_ARTICLES':
        return [
          ...state,
          {           
           text: action.text           
          }
        ]
      default:
        return state
    }
  }
  ​
  export default articles