import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import SubscribeSection from './subscribeSection'
class SubscribeModal extends Component {
  state = {
    modalIsOpen: sessionStorage.getItem('modalShown') !== '1',
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
    sessionStorage.setItem('modalShown', '1')
  }

  render() {
    return (
      <Modal
        open={this.state.modalIsOpen}
        onClose={this.closeModal}
        center={true}
        blockScroll={false}
      >
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
                .subscribe-modal-content{
                   margin: 20px 5px;
                   color: #fff;
                }
                 .subscribe-modal-content a{
                    color: #fff;
                 }

                .subscribe-modal-content input {
                    width: 100%;
                }
                .styles_modal__gNwvD {
                    background:  rgba(0, 0, 0, 0.85);
                    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
                }

                .styles_modal__gNwvD svg {
                    fill: #fff;
                }
                .styles_overlay__CLSq-{
                    background: rgba(0, 0, 0, 0.25);
                    padding: 5px
                }
           }`,
          }}
        />
        <div className="subscribe-modal-content">
          <div className="text">
            <h1>
              SUBSCRIBE TO <br />
              OUR NEWSLETTER
            </h1>
          </div>

          <SubscribeSection onSuccess={this.closeModal} button={false} />
        </div>
      </Modal>
    )
  }
}

export default SubscribeModal
