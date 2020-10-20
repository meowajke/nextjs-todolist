import React from "react";
import AddCircle from "@material-ui/icons/AddCircle";

/** Styled Components */
import styled from "styled-components";
import { Button } from "./styled/Button";

const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  flex: 1 0 auto;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 6px;
  outline: none;
  margin-right: 5px;
`;
const AddButton = styled(Button)`
  color: #41a9ff;
`;

/** NewItem */
interface _INewItemProps {
  click(text: string);
}

interface _INewItemState {
  text: string;
}

export class NewItem extends React.Component<_INewItemProps, _INewItemState> {
  public constructor(props) {
    super(props);

    this.updateText = this.updateText.bind(this);
    this.click = this.click.bind(this);

    this.state = {
      text: "",
    };
  }

  public render(): JSX.Element {
    return (
      <ListItem>
        <Input value={this.state.text} onChange={this.updateText} />
        <AddButton onClick={this.click}>
          <AddCircle />
        </AddButton>
      </ListItem>
    );
  }

  private updateText(event: React.ChangeEvent) {
    const input = event.target as HTMLInputElement;
    this.setState({ text: input.value });
  }

  private click() {
    this.props.click(this.state.text);
    this.setState({ text: "" });
  }
}
