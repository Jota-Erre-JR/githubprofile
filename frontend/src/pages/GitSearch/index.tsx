import './styles.css';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import CardLoader from './CardLoader';

type FormData = {
  name: string;
};

type GitUser = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [formData, setformData] = useState<FormData>({
    name: '',
  });

  const [gitprofile, setGitProfile] = useState<GitUser>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((response) => {
        setGitProfile(response.data);
      })
      .catch((error) => {
       setGitProfile(undefined);
      }).finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="name"
              value={formData.name}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
            Encontrar
            </button>
          </div>
         </form>
         </div>
        {isLoading ? <CardLoader /> : (gitprofile && (
        <div className="result-card-container">
        <div className="profile-result-container">
          <div className="avatar-container">
              <img src={gitprofile.avatar_url} alt={gitprofile.avatar_url} />
            </div>
            <div className="information-card">
            <h1>Informações</h1>
            <a href={gitprofile.html_url} target="blank" className="profile-link" >
            <ResultCard title="Perfil: " description={gitprofile.html_url} />
            </a>
            <ResultCard
              title="Seguidores: "
              description={gitprofile.followers}
            />
            <ResultCard
              title="Localidade: "
              description={gitprofile.location}
            />
            <ResultCard title="Nome: " description={gitprofile.name} />
            </div> 
            </div>
            </div>      
        ))}
        </div>
       
  );
};

export default GitSearch;
