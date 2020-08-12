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

export const addMeal = (meal)=>{
  return(dispatch)=>{
    dispatch({ type: "ADDING_MEAL"})
    fetch('/meals',{
      method: "POST",
      body: JSON.stringify(meal),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(meal => dispatch({type:"MEAL_ADDED", payload: meal}))
  }


}
  


  