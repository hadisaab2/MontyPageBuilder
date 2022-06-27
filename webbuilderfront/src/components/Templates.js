import React from 'react'
 import { CCarousel, CCarouselItem } from "@coreui/react";
//  import "@coreui/coreui/dist/css/coreui.min.css";
export default function Templates() {
  const ModalView = () => {
    document.getElementById("createpagemodal").style.width = "300px";
    document.getElementById("maindiv").style.opacity = "0.2";
  }
  return (
    <div className="templatescontainer">
          <CCarousel controls className="ccarousel">
          <CCarouselItem>
            <div className="template" onClick={ModalView} >Blank Document</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template" onClick={ModalView} style={{ backgroundImage: "url(" + "https://i.pinimg.com/564x/f3/7c/ef/f37cef3dc1024d0dd884f4bb61c2423f.jpg"+")"  ,backgroundSize:"cover"}}>Template 1</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template" onClick={ModalView}  style={{ backgroundImage: "url(" + "https://i.pinimg.com/564x/e7/ff/b6/e7ffb6b46bea940b85582ca8a98a6f07.jpg"+")"  ,backgroundSize:"cover"}} >Template 2</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template" onClick={ModalView} style={{ backgroundImage: "url(" + "https://i.pinimg.com/564x/d2/90/c5/d290c5f21780f99109a9dcf79f822067.jpg"+")" ,backgroundSize:"cover"}}>Template 3</div>
          </CCarouselItem>
        </CCarousel>
    </div>
  )
}
