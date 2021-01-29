import React from 'react'
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Actions";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function FavPage() {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
      state.episodes.length === 0 && fetchDataAction(dispatch);
    });

    const props: IEpisodeProps = {
      episodes: state.favorites,
      store: { state, dispatch },
      toggleFavAction,
      favorites: state.favorites,
    };
    console.log(state)
    return (
        <React.Suspense fallback={<div>...loading</div>}>
            <div className='episode-layout'>
                <EpisodesList {...props} />
            </div>
        </React.Suspense>
    )
}
