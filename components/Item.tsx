import React from 'react';
import Done from '@material-ui/icons/Done';
import Restore from '@material-ui/icons/Restore';
import Delete from '@material-ui/icons/Delete';

/** Styled Components */
import styled from 'styled-components';
import { Button } from './styled/Button';

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  ${props =>
    props.accomplished
      ? `text-decoration: line-through;
      color: #929292;`
      : ''}
`;
const Text = styled.span`
  flex: 1 0 auto;
`;
const DeleteButton = styled(Button)`
  color: #f96e6e;
`;
const CompleteButton = styled(Button)`
  color: #3dd63d;
`;
const RestoreButton = styled(Button)`
  color: #41a9ff;
`;

/** Item */
interface _IItemProps {
  text: string;
  accomplished: boolean;

  delete();
  complete();
  restore();
}

export class Item extends React.Component<_IItemProps> {
  public constructor(props: _IItemProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <ListItem accomplished={this.props.accomplished}>
        <Text>{this.props.text}</Text>
        {this.props.accomplished ? (
          <RestoreButton onClick={this.props.restore}>
            <Restore />
          </RestoreButton>
        ) : (
          <CompleteButton onClick={this.props.complete}>
            <Done />
          </CompleteButton>
        )}
        <DeleteButton onClick={this.props.delete}>
          <Delete />
        </DeleteButton>
      </ListItem>
    );
  }
}
