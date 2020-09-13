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

  const exerciseAdded = (exercise) => {
    fetch('/exercises',{
      method: "POST",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(resp => resp.json()).then(e => e )

    return {type:"EXERCISE_ADDED", payload: exercise}
  }

  export const addExercise = (exercise)=>{
    return(dispatch)=>{
      dispatch({ type: "ADDING_EXERCISE"})
      fetch('/exercises',{
        method: "POST",
        body: JSON.stringify(exercise),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(exercise => dispatch(exerciseAdded(exercise)))
    }
  }
  
  export const deleteExercise = (id)=>{
    return(dispatch)=>{
      dispatch({ type: "DELETING_EXERCISE"})
      fetch(`/exercises/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      
      .then(() => dispatch({type:"EXERCISE_DELETED", payload: id}))
    }
  }