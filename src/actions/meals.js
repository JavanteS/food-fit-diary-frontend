 export const fetchMeals = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_MEALS"})
      fetch('/meals')
      .then(response => response.json())
      .then(meals => {
        dispatch({ type: 'MEALS_LOADED', payload: meals })
      })
    }
  }
  


  