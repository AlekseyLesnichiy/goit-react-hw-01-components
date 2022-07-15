import styled from '@emotion/styled';

export const FriendName = styled.span`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-left: 10px;
`;
export const FriendItemLi = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid;
  margin-bottom: 10px;
  width: 200px;
  box-shadow: 2px;
`;
export const FriendItemP = styled.p`
  display: inline-block;
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? '#32CD32' : '#FF0000';
  }};
`;
