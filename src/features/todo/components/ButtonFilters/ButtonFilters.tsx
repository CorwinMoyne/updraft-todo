import * as React from "react";
import Button from "../../../../shared/components/Button/Button";
import ButtonGroup from "../../../../shared/components/ButtonGroup/ButtonGroup";
import { TodoFilters } from "../../enums/todoFilters";

interface Props {
  filter: TodoFilters;
  handleFilter: (filter: TodoFilters) => void;
}

const ButtonFilters: React.FunctionComponent<Props> = (props) => {
  return (
    <ButtonGroup>
      <Button
        onclick={() => props.handleFilter(TodoFilters.All)}
        variant={props.filter === TodoFilters.All ? "accent" : "default"}
      >
        {TodoFilters.All}
      </Button>
      <Button
        onclick={() => props.handleFilter(TodoFilters.Incomplete)}
        variant={props.filter === TodoFilters.Incomplete ? "accent" : "default"}
      >
        {TodoFilters.Incomplete}
      </Button>
      <Button
        onclick={() => props.handleFilter(TodoFilters.Complete)}
        variant={props.filter === TodoFilters.Complete ? "accent" : "default"}
      >
        {TodoFilters.Complete}
      </Button>
    </ButtonGroup>
  );
};

export default ButtonFilters;
