import styled from 'styled-components';

interface CommonProps {
  readonly $customStyles?: string;
}

interface StyledBarProps {
  readonly $isSegmented?: boolean;
}

interface StyledBarItemProps {
  readonly $isActive: boolean;
  readonly $isSegmented: boolean;
}

export const StyledContainer = styled.div<CommonProps>`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: ${({ theme }) => theme?.maxContentWidth}px;
  height: 20px;
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);

  ${({ $customStyles }) => $customStyles};
`;

export const StyledSkip = styled.div<CommonProps>`
  font-size: 16px;
  line-height: 20px;
  margin-left: 20px;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme?.tabletMinWidth}px) and (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  ${({ $customStyles }) => $customStyles};
`;

export const StyledBar = styled.div<StyledBarProps & CommonProps>`
  display: flex;
  flex: 1 0 auto;
  height: 8px;
  border-radius: 20px;
  background-color: ${({ theme, $isSegmented }) => $isSegmented ? 'transparent' : theme?.colors?.progressBarBg || '#fff'};
  transition: background-color 300ms;
  overflow: hidden;

  ${({ $customStyles }) => $customStyles};
`;

export const StyledBarItem = styled.div<StyledBarItemProps & CommonProps>`
  flex-grow: 1;
  background-color: ${({ theme, $isActive }) => theme?.colors?.[`progressBar${$isActive ? 'Active' : 'Bg'}`]};
  transition: background-color 300ms;

  ${({ $isSegmented }) => $isSegmented && `
    border-radius: 14px;
    &:not(:first-child) {
      margin-left: 5px;
    }
  `}

  ${({ $customStyles }) => $customStyles};
`;
