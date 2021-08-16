import { useOutsideClick } from "@src/hooks";
import { useMemo } from "react";
import { useCallback } from "react";
import { FC, useState } from "react";
import styled from "styled-components";
// import useOutsideInput from "";

interface Option {
  name: string;
  value: string;
}

interface Props {
  placeholder: string;
  value?: string;
  options: Option[];
  onChange?: (option: Option) => void;
}

const SelectBox: FC<Props> = ({ value, placeholder, options, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  const switchIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const renderCategory = useMemo(() => {
    return (
      <ItemWraps>
        {options.map((option) => (
          <Item onClick={() => (onChange ? onChange(option) : null)}>
            {option.name}
          </Item>
        ))}
      </ItemWraps>
    );
  }, [options]);

  return (
    <Container ref={ref} onClick={switchIsOpen}>
      <div>{value || placeholder}</div>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.00709 0.36L-2.45973e-07 1.37279L5.6329 7L11.2658 1.36709L10.2587 0.36L5.6329 4.98581L1.00709 0.36Z"></path>
      </svg>
      {isOpen && renderCategory}
    </Container>
  );
};

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
  user-select: none;
`;

export const ItemWraps = styled.div`
  position: absolute;
  z-index: 4;
  background-color: #ffffff;
  top: calc(100% + 3px);
  width: 100%;
  left: 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  max-height: 120px;
  overflow-y: auto;
`;

export const Item = styled.div`
  width: 100%;
  height: 60px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 10px;

  & + & {
    border-top: 1px solid #ddd;
  }
`;

export default SelectBox;
