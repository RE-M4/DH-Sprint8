import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Table from "./Table";

function ContentWrapper () {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            {/*Content Wrapper*/}
            {/*Main Content*/}
            <div id="content">
                <TopBar />
                <ContentRowTop />
            </div>
            {/*End Of Main Content*/}
            <Table />
            <Footer />
            {/*End Of Content Wrapper*/}
        </div> 
    )
}

export default ContentWrapper;