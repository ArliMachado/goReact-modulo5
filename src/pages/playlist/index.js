import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Silverchair_-_Diorama.jpg/220px-Silverchair_-_Diorama.jpg"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>RocK Forever</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Greatest view</td>
          <td>Silverchair</td>
          <td>Diorama</td>
          <td>3:51</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Greatest view</td>
          <td>Silverchair</td>
          <td>Diorama</td>
          <td>3:51</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Greatest view</td>
          <td>Silverchair</td>
          <td>Diorama</td>
          <td>3:51</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Greatest view</td>
          <td>Silverchair</td>
          <td>Diorama</td>
          <td>3:51</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Greatest view</td>
          <td>Silverchair</td>
          <td>Diorama</td>
          <td>3:51</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Greatest view</td>
          <td>Silverchair</td>
          <td>Diorama</td>
          <td>3:51</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);
export default Playlist;
