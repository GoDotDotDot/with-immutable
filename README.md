<div align="center">
  <h1>with-immutable</h1>
</div>

[![npm version](https://img.shields.io/npm/v/with-immutable.svg)](https://www.npmjs.com/package/with-immutable) [![npm downloads](https://img.shields.io/npm/dt/with-immutable.svg)](https://npm-stat.com/charts.html?package=with-immutable) [![Github All Releases](https://img.shields.io/github/downloads/godotdotdot/with-immutable/total.svg)](https://github.com/GoDotDotDot/with-immutable/releases)

A higher order component for translating immutable objects to raw javascript objects.

## Installation

```shell
yarn add with-immutable
```

or

```shell
npm install with-immutable
```

## Usage

```javascript
import withImmutable from 'with-immutable';
```

Example:

```javascript
import React from 'react';
import { connect } from 'react-redux';
import withImmutable from 'with-immutable';

class ContainerComponent extends React.Component {
  render() {
    const { data } = this.props; // raw js object
    return (
      <div>
        {data.map((ele, idx) => (
          <span key={indx}>{ele.name}</span>
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => {
  const state = store.get('test');
  return {
    data: state.get('data'), // immutable object
  };
};

export default connect(mapStateToProps)(withImmutable(ContainerComponent));
```

### Config

`with-immutable` has a second parameter that is an object. See the following:

| param    | type | Default |
| -------- | ---- | ------- |
| showInfo | bool | false   |
| pure     | bool | true    |

When the `showInfo` is `true`, `with-immutable` will print the update info when the component did updated.



When the `pure` is `true`, `with-immutable` will add `shouldComponentUpdate` lifecycle method for solving the performance issue.