import './style.css';

export function SpaceshipNav(props) {
  return (
    <nav className={props.className}>
      <button>
        <span>Explore</span><span>⬆</span>
      </button>
      <button disabled>
        <span>Gallery</span><span>🖼</span>
      </button>
    </nav>
  );
}

export function SN1() {
  return (
    <SpaceshipNav className="sn1 playground" />
  );
}

export function SN2() {
  return (
    <SpaceshipNav className="sn2 playground" />
  );
}

export function SN3() {
  return (
    <SpaceshipNav className="sn2 sn3" />
  );
}
