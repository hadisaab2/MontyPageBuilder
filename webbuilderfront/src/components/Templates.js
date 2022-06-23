import React from 'react'
 import { CCarousel, CCarouselItem } from "@coreui/react";
//  import "@coreui/coreui/dist/css/coreui.min.css";
export default function Templates() {
  return (
    <div className="templatescontainer">
          <CCarousel controls className="ccarousel">
          <CCarouselItem>
            <div className="template">Blank Document</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template">Template 1</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template">Template 2</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template">Template 3</div>
          </CCarouselItem>
        </CCarousel>
    </div>
  )
}
