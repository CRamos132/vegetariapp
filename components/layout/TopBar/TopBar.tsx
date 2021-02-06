import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding-top: 2vh;
  padding-left: 5vw;
`;
const ContentMini = styled.div`
  border: solid 1px white;
  border-radius: 25px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 3px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1vh;
`;

interface TopBarProps {
  title: string;
  content?: string[]
}

const TopBar: React.FC<TopBarProps> = ({ title, content }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <ContentWrapper>
        {content?.map((title, index) => {
          return <ContentMini key={index}>{title}</ContentMini>;
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default TopBar;
