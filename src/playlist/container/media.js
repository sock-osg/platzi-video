import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Media from '../components/media'
// import { openModal } from './../../actions'
import * as actions from './../../actions'

class MediaContainer extends Component {

  openModal = (mediaId) => {
    this.props.actions.openModal(mediaId)
  }

  render() {
    return <Media openModal={this.openModal} {...this.props.data.toJS()} />
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'media', props.id])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)
