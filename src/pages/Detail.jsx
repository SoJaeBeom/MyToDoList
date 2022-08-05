import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getTodoById } from "../redux/modules/detailSlice";

export default function Detail() {
  let { id } = useParams();
  let todos = useSelector((state) => state.todoSlice);

  const dispatch = useDispatch();

  dispatch(
    getTodoById({
      id,
      todos,
    })
  );

  const details = useSelector((state) => state.detailSlice);

  return (
    <DetailContainer>
      <DetailsContent>
        <DetailId>ID :{details.id}</DetailId>
        <DetailTitle>{details.title}</DetailTitle>
        <DetailBody>{details.body}</DetailBody>
        <StyledLink to="/">뒤로가기</StyledLink>
      </DetailsContent>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailsContent = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const DetailId = styled.h3``;

const DetailTitle = styled.h1``;

const DetailBody = styled.h2``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  width: 100px;
  text-align: center;
  padding: 10px;
  margin: 20px;
  margin-left: 477px;
  border: 2px solid black;
  border-radius: 8px;
`;
