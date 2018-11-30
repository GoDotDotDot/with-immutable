import React from 'react';
import { Iterable, is } from 'immutable';

function toRawJS(props) {
  const KEY = 0;
  const VALUE = 1;
  return Object.entries(props).reduce((newProps, wrappedComponentProp) => {
    // eslint-disable-next-line
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE],
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE];
    return newProps;
  }, {});
}

// eslint-disable-next-line
const WithImmutable = (WrappedComponent, { showInfo = false, pure = true }) => {
  if (pure) {
    return class ImmutableComponent extends React.Component {
      shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        // eslint-disable-next-line
        nextState = nextState || {};
        // eslint-disable-next-line
        nextProps = nextProps || {};

        // eslint-disable-next-line
        if (
          Object.keys(thisProps).length !== Object.keys(nextProps).length || // eslint-disable-line
          Object.keys(thisState).length !== Object.keys(nextState).length
        ) {
          return true;
        }
        // eslint-disable-next-line
        for (const key in nextProps) {
          if (!is(thisProps[key], nextProps[key])) {
            return true;
          }
        }
        // eslint-disable-next-line
        for (const key in nextState) {
          if (!is(thisState[key], nextState[key])) {
            return true;
          }
        }
        return false;
      }

      componentDidUpdate() {
        showInfo &&
          console.info('WithImmutable Updated', WrappedComponent.name);
      }

      render() {
        const propsJS = toRawJS(this.props);
        return <WrappedComponent {...propsJS} />;
      }
    };
  }
  return props => {
    const propsJS = toRawJS(props);
    return <WrappedComponent {...propsJS} />;
  };
};

export default WithImmutable;
