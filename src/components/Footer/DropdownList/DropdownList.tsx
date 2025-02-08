import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Container } from './styles';
import { useStore } from '../../../hooks';
import convertDropdownValue from './utils';
import { periods } from './constants';

export default function DropdownList() {
  const numOfDays = useStore((state) => state.numOfDays);
  const setNumOfDays = useStore((state) => state.setNumOfDays);
  const setStartTime = useStore((state) => state.setStartTime);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeDropdownIcon = () => {
    setDropdownOpen((prevState) => (prevState ? false : true));
  };

  const selectNumOfDays = (e: React.MouseEvent<HTMLElement>): void => {
    const dropdownvalue = e.currentTarget.textContent;
    if (dropdownvalue) {
      setNumOfDays(dropdownvalue);
      setStartTime(convertDropdownValue(dropdownvalue));
    }
  };

  return (
    <Container>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={changeDropdownIcon}
        direction={dropdownOpen ? 'up' : 'down'}>
        <DropdownToggle style={{color: '#ffffff', backgroundColor: '#111111'}} caret>{numOfDays}</DropdownToggle>
        <DropdownMenu style={{color: '#ffffff', backgroundColor: '#111111'}}>
          {periods.map(({ id, name }) => (
            <DropdownItem style={{color: '#ffffff', textAlign: 'center', background: '#111111'}} key={id} onClick={selectNumOfDays}>
              {name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </Container>
  );
}
