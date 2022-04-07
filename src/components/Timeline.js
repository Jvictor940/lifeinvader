import { useEffect, useState } from 'react'

const Timeline = ({}) => {
    const [Posts, setPost]= useState([])
    useEffect(() => {
        console.log('Rendering Timeline ...')
        let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
        let res = await req.json()
        setPost(res)
    }, [])
    return(
        <div>
            <h2>Timeline</h2>
        </div>
    )
}
export default Timeline