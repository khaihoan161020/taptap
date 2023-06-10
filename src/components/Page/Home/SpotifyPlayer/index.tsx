import { Spotify } from "react-spotify-embed";

interface SpotifyPlayerProps {
    spotify_url: string
}
export default function SpotifyPlayer ({spotify_url}: SpotifyPlayerProps) {
    return (
        <Spotify wide link={spotify_url} />
    )
}