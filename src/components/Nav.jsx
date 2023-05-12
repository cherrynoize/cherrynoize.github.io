import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>
          Home
        </button>
      </Link>
      <a className="button" target="_blank" href="gallery">
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
