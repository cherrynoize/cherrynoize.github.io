import React from 'react';

let blogEntries = {}
blogEntries['main'] = toMap(require.context('./Blog/Main/Entries/', false, /\.(jsx?)$/));

/* Returns map from context */
function toMap(ctx) {
  return ctx.keys().map(ctx);
}

/* Returns blog post */
function Post() {
  return (
    <>
      <h3>My blog</h3>
      <p>
        I mean, I just thought it would be cool, starting a blog...
        but now I realize I&apos;ve got nothing to say.
      </p>
    </>
  )
}

/* Returns blog entry */
function Entry(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    const curDom = domRef.current;
    observer.observe(curDom);
    return () => observer.unobserve(curDom);
  }, []);

  /*
   * BUGGY PART !!
   *     V

  let Post;

  (async () => {
   Post = await import(src);
  })();

   *
   *     /\
   */

  return (
    <div
      id={props.key}
      className={'entry fade-in ' + (isVisible ? 'is-visible' : '')}
      ref={domRef}
    >
      <Post />
    </div>
  );
}

/* Returns collection of posts */
export default function Blog(props) {
  const entries = blogEntries[props.dir];

  return (
    entries.map((entry, index) => (
      <Entry key={index} src={entry} />
    ))
  )
}
