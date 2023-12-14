import React, {Component} from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Table from "./Table";

class ContentWrapper extends Component {

    constructor(){
        super();
        this.state = {
            lastSavedProduct: [],
            lastSavedUser: [],
            allProducts: []
        }
    }

    componentDidMount(){
        Promise.all([fetch('http://localhost:3000/api/products').then(response => response.json()),
                    fetch('http://localhost:3000/api/users').then(response => response.json())])
                    .then(values => {this.setState({lastSavedProduct: values[0].products}); 
                                    this.setState({lastSavedUser: values[1].users}); 
                                    this.setState({allProducts: values[0].products})
                    })
    }

    render() {
        return(
            <div id="content-wrapper" className="d-flex flex-column">
                
                {console.log(this.state.allProducts)}
                {/*Content Wrapper*/}
                {/*Main Content*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                </div>
                {/*End Of Main Content*/}
                <Table title={'Último producto guardado'} result={this.state.lastSavedProduct.slice(-1)}/>
                <Table title={'Último usuario guardado'} result={this.state.lastSavedUser.slice(-1)}/>
                <Table title={'Todos los productos'} result={this.state.allProducts}/>
                <Footer />
                {/*End Of Content Wrapper*/}
            </div> 
        )
    }
}

export default ContentWrapper;