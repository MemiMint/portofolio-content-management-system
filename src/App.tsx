import React from 'react';
import { Navbar } from "./components";
import { ProjectCard } from "./components/ProjectCard";

function App() {

  return (
    <>
      <Navbar />
      <ProjectCard title="Hate my life" image="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRgjNeqYzjgKRaNE5Qgl08HMn3qCXHNDuajY6v1rBiLLvmcL5_E16UtCNjOYy5fpIfCuumYy_yzX3w3m5zfNeA" />
    </>
  );
}

export default App;
