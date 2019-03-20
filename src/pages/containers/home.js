import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

import { connect } from 'react-redux'
import { List as list } from 'immutable'

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleOpenModal = (mediaId) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId
      }
    })
  }

  handleCloseModal = (event) => {
    this.props.dispatch({
      type: 'CLOSE_MODAL'
    })
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
  }
}

export default connect(mapStateToProps)(Home)
