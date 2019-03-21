import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List as list } from 'immutable'

import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

// import { openModal, closeModal } from './../../actions'
import * as actions from './../../actions'

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleOpenModal = (mediaId) => {
    this.props.actions.openModal(mediaId)
  }

  handleCloseModal = (event) => {
    this.props.actions.closeModal()
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            results={this.props.results}
            isLoading={this.props.isLoading}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  const categories = state.getIn(['data', 'categories']).map((categoryId) => {
    return state.getIn(['data', 'entities', 'categories', categoryId])
  })

  let immResults = list()
  const query = state.getIn(['data', 'query'])

  if (query) {
    const immMedia = state.getIn(['data', 'entities', 'media'])
    immResults = immMedia.filter((immItem) => {
      return immItem.get('author').toLowerCase().includes(query.toLowerCase())
    }).toList()
  }

  return {
    categories: categories,
    results: immResults,
    modal: state.get('modal'),
    isLoading: state.getIn(['isLoading', 'active'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
