import React from 'react'

const Home = () => {
  return (
    <>
      <h1>React Redux template</h1>
      <p>
        Production ready setup for React + Redux
      </p>
      <br />

      <h2>
        If you run ...
      </h2>
      <pre>
        git clone git@github.com:IvanDimanov/react-redux-template.git<br />
        cd react-redux-template<br />
        npm ci<br />
        npm start
      </pre>

      <h2>
        ... you will get
      </h2>
      <ul>
        <li>production Create React App with dynamic chunks - <em>npm start</em></li>

        <li>React app with routing and Material UI -
          {' '}
          <a
            href='https://material-ui.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://material-ui.com
          </a>
        </li>

        <li>Redux Toolkit state management architecture -
          {' '}
          <a
            href='https://redux-toolkit.js.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://redux-toolkit.js.org
          </a>
        </li>
      </ul>
    </>
  )
}

export default Home
