import { NextPage } from "next"
import Image from 'next/image'

import image from '../public/images/sample.png'

const ImageSample:NextPage<void> = (props) =>{
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imageタグで表示した場合</p>
            <img src={image.src} alt='sample' width={100} height={100} />
            <p>Imageコンポーネントで表示した場合</p>
            <Image src={image} alt='sample' width={100} height={100} />
        </div>
    )
}

export default ImageSample

