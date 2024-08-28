import { CaretUpDown } from '@phosphor-icons/react';
import { MenuItem, Select, SelectLabel, SelectorContainer } from './styles';

interface ISelector {
  handleChanger: (selectedOption: string) => void
  selected: string
  error: boolean
  label: string
  dataList: string[]
}

export const Selector = ({ handleChanger, error, label, selected, dataList }: ISelector) => {
  return (
    <SelectorContainer>
      <SelectLabel htmlFor="selector">
        {label}
      </SelectLabel>
      <Select
        name="selector"
        id={
          error && selected === "" ? "error" :
          selected === "" ? "no-value-selected" :
          ""
        }
        value={selected}
        onChange={(e) => handleChanger(e.target.value)}
      >
        <MenuItem value={''} disabled>clique para selecionar</MenuItem>
        {
          dataList.map((option) => (
            <MenuItem value={option} key={option}>{option}</MenuItem>
          ))
        }
      </Select>
      <CaretUpDown size={24} />
    </SelectorContainer>
  )


};
