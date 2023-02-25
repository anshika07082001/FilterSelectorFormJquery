import React from "react";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const Header = () => {
  return (
    <div className="banner margin pr">
      <div className="banner__ellipse"></div>
      <div className="banner__ellipse banner__ellipse--sm"></div>
      {/* <div className='banner__ellipse banner__ellipse--lg'></div> */}
      <div className="banner__logo margin">
        <LibraryBooksOutlinedIcon className="logo__icon" />
        <span>Pages</span>
      </div>
      <p className="banner__heading margin">Book Website Template</p>
      <p className="banner__para">Pages is a professional author bookstore Webflow template bundled with a bunch of unique layouts. Impressive interface and practical sections put all the creative power right in your hands to publish your masterpiece.</p>
      <div className="images margin pr">
        <img src="image 1000.png" alt="" className="images__leftImg"/>
        <img src="image 1003.png" alt="" className="images__rightImg"/>
      </div>
    </div>
  );
};

export default Header;
