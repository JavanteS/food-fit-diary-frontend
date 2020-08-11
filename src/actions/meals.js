export const fetchMeals = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_Meals'})
      fetch('meals').then(response => {
        return response.json()
      }).then(data => {
        dispatch({ type: 'ADD_MEALS', payload: data })
      })
    }
  }