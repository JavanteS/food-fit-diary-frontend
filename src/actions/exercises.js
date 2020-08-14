export const fetchExercises = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_EXERCISES"})
      fetch('/exercises')
      .then(response => response.json())
      .then(exercises=> {
        dispatch({ type: 'EXERCISES_LOADED', payload: exercises })
      })
    }
  }