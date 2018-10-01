import React from 'react';
import { Form } from 'semantic-ui-react'
import axios from 'axios'

class AddIngredient extends React.Component {
    state = { name: '' }

    handeChange = (e) => {
      this.setState({ name: e.target.value })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const ingredient = { name: this.state.name }
      axios.post('/api/ingredients', { ingredient })
        .then( () => this.resetForm() )
    }

    resetForm = () => {
      this.setState({ name: '' })   
      this.props.history.push('/ingredients')
    }

    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
            placeholder="Add Indegredient"
            value={this.state.name}
            onChange={this.handeChange}
            required
            />
            <Form.Button type="button" onClick={this.resetForm}>
                Cancel
            </Form.Button> 
            <Form.Button>Add</Form.Button>
        </Form>  
      )
    }
}


export default AddIngredient;
