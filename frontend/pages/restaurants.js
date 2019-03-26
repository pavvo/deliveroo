import gql from "graphql-tag";
import { withRouter } from "next/router";
import { graphql } from "react-apollo";
import { compose } from "recompose";

import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap";

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      _id
      name
      dishes {
        _id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;



export default compose(
    withRouter,
    graphql(GET_RESTAURANT_DISHES, {
      options: props => {
        return {
          variables: {
            id: props.router.query.id
          }
        };
      },
      props: ({ data }) => ({ data })
    })
  )(Restaurants);