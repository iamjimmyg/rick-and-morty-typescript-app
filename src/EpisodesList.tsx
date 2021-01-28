import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): JSX.Element {
  const { episodes, toggleFavAction, favorites } = props;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={`Rick and Mory ${episode.name}`} />
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => {
              toggleFavAction(episode);
            }}
          >
            {favorites.includes(episode) ? "Remove" : "Add to Fav"}
          </button>
        </section>
      </section>
    );
  });
}
