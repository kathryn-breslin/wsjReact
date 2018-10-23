import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
    state = {
        articles: [],
        articleSearch: ""
    };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getArticles(this.state.articleSearch)
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            <div>
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <p>Please work</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;