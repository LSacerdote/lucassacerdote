import React from "react";

interface SpotifyEmbedProps {
  playlistId: string;
  title?: string;
}

const SpotifyPlaylist: React.FC<SpotifyEmbedProps> = ({
  playlistId,
  title = "Spotify Playlist",
}) => {
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}`;

  return (
    <iframe
      title={title}
      src={embedUrl}
      width="100%"
      height="100%"
      style={{ minHeight: "360px" }}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default SpotifyPlaylist;
