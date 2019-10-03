import React, { Component } from 'react';

export default function async(...premises) {
  return Wrapped =>
    class Async extends Component {
      state = {
        results: {},
      };

      componentDidMount() {
        Promise.all(premises.map(premise => premise(this.props)))
          .then(results =>
            results.reduce((reducedResults, result) => {
              if (result === null) {
                return reducedResults;
              }

              return {
                ...reducedResults,
                ...result,
              };
            }, {}),
          )
          .then(results => {
            this.setState(state => ({
              ...state,
              results,
            }));
          });
      }

      render() {
        const { results } = this.state;

        return <Wrapped {...this.props} {...results} />;
      }
    };
}
