import 'css/example.post.css'
import React, {Component} from 'react'

import MaterialSelect from 'components/MaterialSelect'

class Example extends Component {
    constructor() {
        super()

        this.state = {
            selected1: {},
            selected2: {},
            selected3: {},
        }

        this.callbackFunction1 = this.callbackFunction1.bind(this)
        this.callbackFunction2 = this.callbackFunction2.bind(this)
        this.callbackFunction3 = this.callbackFunction3.bind(this)
    }

    callbackFunction1(selected) {
        this.setState({selected1: selected})
    }

    callbackFunction2(selected) {
        this.setState({selected2: selected})
    }

    callbackFunction3(selected) {
        this.setState({selected3: selected})
    }

    // function to render object values
    renderObject(state) {
        return <div className="display-value">
            <p>{'{'}</p>
            <p className="label">label: {state.label}</p>
            <p className="value">value: {state.value}</p>
            <p>{'}'}</p>
        </div>
    }

    render() {
        return (
            <div>
                <section id="example-1">

                    <MaterialSelect onChange={this.callbackFunction1}>
                        <option dataValue="@#!$RGSAFSDF">First Option</option>
                        <option dataValue="fgfsdgfdsg">Second Option</option>
                        <option dataValue="43523454232">Third Option</option>
                        <option dataValue="vxvbvbx">Fourth Option</option>
                        <option dataValue="@agsfdg">Darth Vader</option>
                    </MaterialSelect>

                    {this.renderObject(this.state.selected1)}
                </section>

                <section id="example-2">

                    <MaterialSelect label="Test Label" resetLabel="Join to the dark side" onChange={this.callbackFunction2}>
                        <option dataValue="@#!$RGSAFSDF">First Option</option>
                        <option dataValue="fgfsdgfdsg">Second Option</option>
                        <option dataValue="43523454232">Third Option</option>
                        <option dataValue="vxvbvbx">Fourth Option</option>
                        <option dataValue="@agsfdg">Darth Vader</option>
                    </MaterialSelect>

                    {this.renderObject(this.state.selected2)}
                </section>

                <section id="example-3">

                    <MaterialSelect label="Test Label" resetLabel="Join to the dark side" defaultValue="@#!$RGSAFSDF" onChange={this.callbackFunction3}>
                        <option dataValue="@#!$RGSAFSDF">First Option</option>
                        <option dataValue="fgfsdgfdsg">Second Option</option>
                        <option dataValue="43523454232">Third Option</option>
                        <option dataValue="vxvbvbx">Fourth Option</option>
                        <option dataValue="@agsfdg">Darth Vader</option>
                    </MaterialSelect>

                    {this.renderObject(this.state.selected3)}
                </section>
            </div>
        )
    }
}

export default Example