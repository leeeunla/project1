import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
const Container = styled.div`
  /* background-color: white; */
`;

const Card = styled.div`
  border-top: 1px solid gray;
  margin: 1.5rem;
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export function Footer() {
  return (
    <>
      <Container>
        <Card>
          <p style={{ color: "white" }}> &#169; DW 아카데미 </p>
          <div style={{ fontSize: "1.5rem" }}>
            <FaFacebook style={{ color: "navy", marginRight: "3px" }} />
            <CiInstagram />
            <FaTwitter style={{ color: "lightblue", marginLeft: "3px" }} />
          </div>
        </Card>
      </Container>
    </>
  );
}
