import { Container } from "./styles";
import logo from "../assets/logo.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { useState } from "react";
import api from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    try {
      const {data} = await api.get(`repos/${currentRepo}`);
      if(data?.id) {
  
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(value => [...value, data]);
          setCurrentRepo('');
        }
  
        return;
      }
    } catch (err) {
      alert('Repositório não encontrado');
    }

  }

  const handleRemoveRepo = (repoId) => {
    setRepos(repos => repos.filter(repo => repo.id !== repoId));
  }

  return (
    <Container>
      <img src={logo} width={72} height={72} alt="Logo do site" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} removeRepo={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
