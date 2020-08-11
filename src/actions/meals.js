 export const fetchMeals = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_MEALS"})
      fetch('http://localhost:3001/meals').then(response => {
        return response.json()
      }).then(meals => {
        dispatch({ type: 'MEALS_LOADED', payload: meals })
      })
    }
  }
  

//   fetch("http://localhost:3001/meals")
//   .then(resp => resp.json())
//   .then(meals => console.log(meals))
  