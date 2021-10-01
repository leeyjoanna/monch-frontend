import React from 'react' 

const Welcome = ({name}) => {
    if (name === ''){
        return(
            <div></div>
        )
    }
    return (
        <div id='welcome-title'>
        Hi {name}, let's decide where to eat!
        </div>
    )
}
export default Welcome
