import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestRobots, setSearchField } from '../actions/robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, robots, isPending, error, onSearchChange } =
      this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error,
  isPending: state.requestRobots.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
