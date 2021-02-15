import '../scss/content.scss'
import Data from '../data/content.json'
import human from '../images/human.jpg'
import images from '../images/content/content-images.js'

function Content() {
    return (
        <div>
            <h1>Content Page</h1>
            <div className="content">
                <div className="content-text">
                    {Data.map(item => {
                        return (
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        );
                    })}
                    <Images />
                </div>
                <div class="content-img">
                    <img src={human}></img>
                </div>
            </div>
        </div>
    );
}

function Images(params) {
    return (
        <div className="content-images">
                <div className="small-image img-1"><img src={images[0][0]} />
                {images[0][1]}
                </div>
                <div className="small-image img-2"><img src={images[1][0]} />
                {images[1][1]}
                </div>
                <div className="small-image image-3 img-3"><img src={images[2][0]} />
                {images[2][1]}
                </div>
        </div>
    )
}


export default Content;
