import React, { Component } from 'react';
export default class Box extends React.Component {
    render() {
        const { name } = this.props;
        return (<div>{name}</div>);
    }
}