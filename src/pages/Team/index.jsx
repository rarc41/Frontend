// import react
import React, { useRef, useEffect } from 'react';
// import Hero
import Hero from '../../components/Hero/index.jsx';
// import styles
import './styles.styl';

// create and export Team page
const Team = () => {
  // use ref hooks
  const ref = useRef(null)

  // use effect
  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div className="team__grid">
      <a className={`refLocation ${ref !== undefined && 'ref-is-different'}`} ref={ref} href="https://github.com/BernardoAguayoOrtega">
        <Hero
          type="small"
          caption="Bernardo Aguayo"
          background="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
      <a href="https://github.com/fleandro22">
        <Hero
          type="small"
          caption="Franklin Leandro"
          background="https://images.unsplash.com/photo-1602620502036-e52519d58d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
      <a href="https://github.com/johan-avila">
        <Hero
          type="small"
          caption="Johan Avila"
          background="https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
      <a href="https://github.com/alejandro1030">
        <Hero
          type="small"
          caption="Alejandro Gonzales"
          background="https://images.unsplash.com/photo-1597422009092-e0f9850b5b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
      <a href="https://github.com/JulesCubs">
        <Hero
          type="small"
          caption="Julian Cubillos"
          background="https://images.unsplash.com/photo-1564412811697-0e26195169ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
      <a href="https://github.com/OscarPalominoC">
        <Hero
          type="small"
          caption="Oscar Eduardo"
          background="https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
      <a href="https://github.com/ElXavs">
        <Hero
          type="small"
          caption="Xavier Garcia"
          background="https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
      <a>
        <Hero
          type="small"
          caption="Estefany"
          background="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </a>
    </div>
  );
};

export default Team;
