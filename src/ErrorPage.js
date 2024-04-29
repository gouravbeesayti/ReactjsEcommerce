import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Wrapper>
            <div className='container'>
                <div>
                    <h2>404</h2>
                    <h3>UH OH ! You're lost.</h3>
                    <p>the page you're looking for , seems like dosen't exists.
                        how you got here is a mystery .But you can click the button below to go back to the homepage. </p>
                        <NavLink to="/">
                    <Button>go back to home page</Button>
                    </NavLink>
                </div>

            </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.container{
    padding: 9rem 5rem;
    text-align: center;
}
h2{
    font-size: 10rem;
}
h3{
    font-size: 3rem;
}
p{
    margin: 2rem 0;
}


`

export default ErrorPage