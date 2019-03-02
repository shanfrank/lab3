'use strict';

import react, {Component} from 'react';
import ProTypes from 'prop-types';

import user from './User.js'

export default class Users extends Component{
    static get propTypes(){
        return {
            usres: propTypes.array
        }
    }

    constructor(props){
        super(props);
    }

    render(){
        const {usres} = this.props;
        return<div>
            <table>
            <thead>
            <tr>
        <th>ID</th>
        <th>Name</th>
        </tr>
        </thead>

        <tbody>
        {
            users.map(user => {
                return <Usre key ={user.id} user={user}/>
            })
        }
        </tbody>
        </table>
        </div>;
    }
}