import React from 'react'


const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url
    //console.log(video)
    //const video = props.video
    return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
        <div className='video-list media'>
            <div>
                <img className='media-object' src={imageUrl} />
                </div>
             <div className='media-body'>
                 <div className='media-heading'>{video.snippet.title}</div>
                 </div>   
            </div>
    </li>
    )
}

export default VideoListItem









// import React , {Component} from 'react'

// const VideoListItem = ({video}) => {
//     //const video = props.video
//     console.log(video)
//     return <li>Video</li>
// }

// export default VideoListItem