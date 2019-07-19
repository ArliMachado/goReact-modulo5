import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Silverchair_-_Diorama.jpg/220px-Silverchair_-_Diorama.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Silverchair_-_Diorama.jpg/220px-Silverchair_-_Diorama.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Silverchair_-_Diorama.jpg/220px-Silverchair_-_Diorama.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Silverchair_-_Diorama.jpg/220px-Silverchair_-_Diorama.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </Playlist>
    </List>
  </Container>
);
export default Browse;