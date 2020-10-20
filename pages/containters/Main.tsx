import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/** Actions */
import { AddItem, DeleteItem, CompleteItem, RestoreItem } from "../actions";

/** Components */
import { Item } from "../components/Item";
import { NewItem } from "../components/NewItem";

/** Styled components */
import styled from "styled-components";

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

/** Main */
interface IMainProps {
  todoList: Array<any>;

  AddItem(text: string);
  DeleteItem(index: number);
  CompleteItem(index: number);
  RestoreItem(index: number);
}

class Main extends React.Component<IMainProps> {
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
  return {
    todoList: state.todoList,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    AddItem: bindActionCreators(AddItem, dispatch),
    DeleteItem: bindActionCreators(DeleteItem, dispatch),
    CompleteItem: bindActionCreators(CompleteItem, dispatch),
    RestoreItem: bindActionCreators(RestoreItem, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
