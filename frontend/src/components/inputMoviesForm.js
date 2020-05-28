import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const InputMoviesForm = ({ movies }) => {
  const [movieState, setMovies] = useState(movies);

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log("onSubmit DATA <---------------");
    console.log(data);
    setMovies([...movieState, data]);
    console.log("OnSubmit MovieState post Data <---------");
    console.log(movieState);
  };
  console.log("Movie State ####################");
  console.log(movieState);
  console.log(movies);

  return (
    <>
      <div>
        <ul>
          {movieState?.map((element, index) => (
            <li key={index}>{element.title}</li>
            //- {element?.genres.map((e) => `${e} `)} -{" "}
          ))}
        </ul>
      </div>
      <p>Add New Movie</p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Title</label>
            <input
              name="title"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Genre</label>
            <input
              name="genres"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ movies: state.movies });

export default connect(mapStateToProps)(InputMoviesForm);
