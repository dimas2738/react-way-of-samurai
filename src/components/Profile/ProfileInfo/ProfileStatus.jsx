import React from 'react';


export default class ProfileStatus extends React.Component {
    state = {
        // status: 'Hey',
        editMode: false
    }

    onEditMode=()=> {
        this.setState({
            editMode: true
        })

    }

    offEditMode=()=>{
        this.setState({
            editMode: false
        })

    }

    render() {
        return <>
            {!this.state.editMode ?
                (<div>
                        <span onDoubleClick={this.onEditMode}>{this.props.status} </span>
                    </div>)
                :
                (<div>
                    <input  autoFocus={true} onBlur={this.offEditMode} value={this.state.status}/>
                </div>)
            }
                < />
            }
            }


