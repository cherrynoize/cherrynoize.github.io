import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="navbar">
      <Link to="/">
        <button>
          Home
        </button>
      </Link>
      <a target="_blank" rel="noreferrer" className="button" href="https://open.spotify.com/artist/4SEMUz1c0Z8kEc9E9NbnS3">
        Music
      </a>
      <a className="button" href="gallery">
        Gallery
      </a>
      <Link to="cool-stuff">
        <button>
          Cool shit
        </button>
      </Link>
      <Link to="blog">
        <button>
          Blog
        </button>
      </Link>
    </nav>
  );
}
