import React from 'react';
import { connect } from 'react-redux';

/** Actions */
import {
  AddItem,
  DeleteItem,
  CompleteItem,
  RestoreItem,
} from '../redux/actions/Main';

/** Components */
import { Item } from '../components/Item';
import { NewItem } from '../components/NewItem';

/** Styled components */
import styled from 'styled-components';

export const Header = styled.h1`
  font-family: Arial;
  font-size: 1.5em;
  color: #333;
`;

export const List = styled.div`
  font-family: Arial;
  color: #333;
  width: 400px;
`;

interface _IAppProps {
  todoList: Array<any>;

  AddItem(text: string);
  DeleteItem(index: number);
  CompleteItem(index: number);
  RestoreItem(index: number);
}

class App extends React.Component<_IAppProps> {
  private _timer;

  public constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className="container">
        <div>
          <Header>ToDo List:</Header>
          <List>
            <NewItem click={this.props.AddItem} />
            {this.props.todoList.map((listItem, i) => (
              <Item
                text={listItem.text}
                accomplished={listItem.accomplished}
                delete={this.props.DeleteItem.bind(this, i)}
                complete={this.props.CompleteItem.bind(this, i)}
                restore={this.props.RestoreItem.bind(this, i)}
              />
            ))}
          </List>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    todoList: state.MainReducer.todoList,
  };
}

const mapDispatchToProps = {
  AddItem: AddItem,
  DeleteItem: DeleteItem,
  CompleteItem: CompleteItem,
  RestoreItem: RestoreItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
