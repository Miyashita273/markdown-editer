
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

import * as React from 'react'
// const ReactMarkdown = require('react-markdown')

const GlobalStyle = createGlobalStyle`
body * {
    box-sizing:border-box;
}
`


const Main = () => {
    return (
        <>
            <GlobalStyle />
            <Editor />
        </>

    )
}

render(<Main />, document.getElementById('app'))