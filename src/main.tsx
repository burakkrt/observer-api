import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Button, Container} from "./styled.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <>
            <Container>
                <p>dasdas</p>
                <h3>bu h3 etiketidir1</h3>
                <Button $primary>test butonu</Button>
            </Container>
        </>
    </React.StrictMode>,
)