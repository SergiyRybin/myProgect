import React, { Component } from "react";
import s from "../SearchForm/SearchForm.module.css";

interface Iclas {
  onSubmit: (image: string) => void;
}

class SearchForm extends Component<Iclas> {
  state = {
    image: "",
  };

  formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit(this.state.image);
    this.setState({ image: "" });
  };

  fromCahnge = (e: React.FormEvent) => {
    const nameValue = (e.currentTarget as HTMLInputElement).value
      .toLowerCase()
      .trim();
    this.setState({ image: nameValue });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.formSubmit}>
          <button type="submit" className={s.SearchFormbutton}>
            <span className={s.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            onChange={this.fromCahnge}
            className={s.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchForm;
