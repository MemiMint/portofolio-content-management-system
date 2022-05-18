import React, { FC } from 'react';
import { Navbar, ProjectList, ProjectForm, Loading } from "../components";
import { useApp } from "./hook"
import { AppProvider, useAppContext } from "../context"

export const App: FC = () => {
  const { isClose, onClick } = useApp();
  const { state } = useAppContext();

  return (
    <AppProvider>
      <>
        <Navbar onClick={onClick} />
        <ProjectList />
        { state.isLoading && <p>Loading...</p> }
        { !isClose && <ProjectForm onClose={onClick} /> }
      </>
    </AppProvider>
  );
}

export default App;
