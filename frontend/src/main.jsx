import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import App from "./App";

// import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";
import Menu from "./pages/Menu";
import Level from "./pages/Level";
import Speech from "./pages/Speech";
import ListenGameBis from "./components/ListenGameBis";
import WordSynonymComponent from "./components/WordSynonymComponent";
import WordSynonymComponentBIS from "./components/WordSynonymComponentBIS";
import Quizz from "./pages/Quizz";
import QuizzBis from "./components/QuizzBis";
import Reward from "./pages/Reward";
import End from "./pages/End";
import JeuOrdreLettres from "./pages/JeuOrdreLettres";
import JeuOrdreLettresBis from "./pages/JeuOrdreLettresBis";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Onboarding />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/level",
        element: <Level />,
      },
      {
        path: "/speech",
        element: <Speech />,
      },
      {
        path: "/ListenGameBis",
        element: <ListenGameBis />,
      },
      {
        path: "/synonym",
        element: <WordSynonymComponent />,
      },
      {
        path: "/WordSynonymComponentBis",
        element: <WordSynonymComponentBIS />,
      },
      {
        path: "/quizz",
        element: <Quizz />,
      },
      {
        path: "/QuizzBis",
        element: <QuizzBis />,
      },
      {
        path: "/reward",
        element: <Reward />,
      },
      {
        path: "/JeuOrdreLettres",
        element: <JeuOrdreLettres />,
      },
      {
        path: "/JeuOrdreLettresBis",
        element: <JeuOrdreLettresBis />,
      },
      {
        path: "/end",
        element: <End />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
