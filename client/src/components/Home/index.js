import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <Fragment>
        {this.props.token ? (
          // After login
          <Fragment>
            <h1>Welcome buddy</h1>
          </Fragment>
        ) : (
          // Not logged in
          <Container fluid style={styles.logoutContainer}>
            <h1 style={{ textAlign: "center", color: "yellow" }}>
              Agriculture as Commerce
            </h1>
            <Container style={styles.infoContainer}>
              <Row style={{ flex: 1, justifyContent: "center" }}>
                <Col xs={10} md={4}>
                  <Image
                    style={{ alignSelf: "center" }}
                    fluid
                    src={require("../../assets/salt-harvesting.jpg")}
                    thumbnail
                  />
                </Col>
                <Col>
                  <p
                    style={{
                      textAlign: "justify",
                      margin: 10,
                      alignSelf: "center",
                    }}
                  >
                    Trade and Commerce is a channel by which goods and services
                    are supposed to traverse from the producer to the consumer.
                    The basic need for trade and commerce arises from the fact
                    that none of us can fulfill our needs and wants by
                    ourselves, but need to depend upon others and this
                    dependence gives rise to exchange or more appropriately put
                    an interaction in the economic sense.
                  </p>
                </Col>
              </Row>
            </Container>

            <Container style={styles.infoContainer}>
              <Row style={{ flex: 1, justifyContent: "center" }}>
                <Col xs={10} md={4}>
                  <Image
                    style={{ alignSelf: "center" }}
                    fluid
                    src={require("../../assets/field-of-rapeseeds.jpg")}
                    thumbnail
                  />
                </Col>
                <Col>
                  <p
                    style={{
                      textAlign: "justify",
                      margin: 10,
                      alignSelf: "center",
                    }}
                  >
                    The inputs that go into production of agro-commodities and
                    associated services are outside of this purview. The channel
                    that we are talking about is in the form of a chain which
                    involves primary producers, middlemen, and consumers. It can
                    thus be logically deduced from this that on their journey
                    from the producer to the consumer, goods and services are
                    subject to some kind of transformation in the form of
                    processing and value addition.
                  </p>
                </Col>
              </Row>
            </Container>

            <Container style={styles.infoContainer}>
              <Row style={{ flex: 1, justifyContent: "center" }}>
                <Col xs={10} md={4}>
                  <Image
                    style={{ alignSelf: "center" }}
                    fluid
                    src={require("../../assets/harvest.jpg")}
                    thumbnail
                  />
                </Col>
                <Col>
                  <p
                    style={{
                      textAlign: "justify",
                      margin: 10,
                      alignSelf: "center",
                    }}
                  >
                    The world of trade and commerce is incomplete without
                    adequate physical infrastructure. Transport and
                    Communication facilities, Warehouses and God- owns, Power
                    and Water Supply, Lighting and Market yards etc. A Social
                    framework may be defined as a body or a set of laws,
                    policies and plans needed to conduct business.
                  </p>
                </Col>
              </Row>
            </Container>

            <center>
              <Container
                style={{
                  backgroundColor: "silver",
                  padding: 20,
                  margin: 20,
                  borderRadius: 10,
                }}
              >
                <h2>Why late? Let's get STARTED!</h2>
                <Button
                  onClick={() => this.props.history.push("/login")}
                  style={{
                    backgroundColor: "black",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Get Started
                </Button>
              </Container>
            </center>
          </Container>
        )}
      </Fragment>
    );
  }
}

const styles = {
  logoutContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#555c57",
    padding: 10,
  },
  infoContainer: {
    margin: 20,
  },
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Home);
