import "./styles.css";
import ResultCard from "components/ResultCard";
import ResultCardImg from "components/ResultCardImg";

import React, { useState } from "react";
import axios from "axios";

type FormData = {
  git: string;
};

type Addresses = {
  url: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
};

const GitSearch = () => {
  const [address, setAddress] = useState<Addresses>();

  const [formData, setFormData] = useState<FormData>({
    git: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.git}`)
      .then((response) => {
        setAddress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="CardSearch">
          <h1>Encontre um perfil Github</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-container form-container">
                <div className="mb-4">
                  <input
                    type="text"
                    name="git"
                    value={formData.git}
                    className="search-input"
                    placeholder="Usuário Github"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary search-button">
                  Encontrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {address && (
        <>
          <div className="container">
            <div className="container-result mt-5 p-5 ">
              <div className="row"> 
                <div className="col-12 col-md-4 container-img">
                  <ResultCardImg img={address.avatar_url} />
                </div>
                <div className="col-12 col-md-6 container-info ">
                  <div className="perfil-info">
                    <h2>Informações</h2>
                  </div>

                  <ResultCard title="Perfil:" description={address.url} />
                  <ResultCard
                    title="Seguidores:"
                    description={address.followers}
                  />
                  <ResultCard
                    title="Localidade:"
                    description={address.location}
                  />
                  <ResultCard title="Nome:" description={address.name} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GitSearch;
