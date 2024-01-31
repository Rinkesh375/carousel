import React, { useEffect, useState } from 'react';
import image_data from '../constants';


const ImageSlider = () => {
    const [imageCurrentIndex,setImageIndex] = useState(0);
    const handle_Update_ImageSlider = (value)=>{
        console.log(value)
         if(value<0) setImageIndex(image_data.length-1);
         else if(value === image_data.length) setImageIndex(0)
         else setImageIndex(value);
        
    }

    useEffect(()=>{
      let id =   setTimeout(() => {
            
            handle_Update_ImageSlider(imageCurrentIndex+1);
        }, 3000); 
        return ()=>clearTimeout(id);  
    },[imageCurrentIndex])
   
    return (
        <div className='flex justify-center '>
            <button onClick={()=>handle_Update_ImageSlider(imageCurrentIndex-1)}>◀</button>
            {
                image_data.map(({id,url},index) => <div key={id} className={`${id-1 === imageCurrentIndex?"block":"hidden"} `}>
                            <img className="w-[500px] h-[300px] object-contain" src={url} alt={"wallpaper"} />
                        </div>
                    )
            }
            <button onClick={()=>handle_Update_ImageSlider(imageCurrentIndex+1)}>▶</button>

        </div>
    );
}

export default ImageSlider;
