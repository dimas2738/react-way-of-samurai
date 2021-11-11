import React from 'react';


export default class ProfileStatus extends React.Component {

    statusInputRef=React.createRef()

    state = {
        status: this.props.status,
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

        this.props.updateStatus(this.state.status)
    }

    onStatusChange=(e)=>{

        this.setState({
            status:  e.currentTarget.value
        })

        this.props.updateStatus(this.state.status)



    }

    render() {
        return <>
            {!this.state.editMode ?
                (<div>
                        <span onDoubleClick={this.onEditMode}>{this.props.status} </span>
                    </div>)
                :
                (<div>
                    <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.offEditMode} value={this.state.status}/>
                </div>)
            }
                < />
            }
            }


