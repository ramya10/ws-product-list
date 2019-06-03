import React, { Component } from 'react';
import data from './mock.json'


import ModalHeader from 'react-bootstrap/ModalHeader'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'

import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/Carousel'

data.groups = data.groups.map((group) => {
    group.showModal = false
    return group
})

export default class Product extends Component {
    state = {
        data: data,
        pimages: []
    }

    renderImage(product, index) {
        return (
            <div key={product.id} className="row product">
                <div  className="col-xs-4">
                    <div className="item-details">
                        <div className="image-wrapper">
                            <a href="javascript:void(0)" onClick={() => this.handleModel(product)}>
                                <img style={{height: '280px'}} src={product.hero.href} className="item-image" alt={product.name} />
                            </a>    
                        </div>
                        {product.showModal && this.renderModal(product, index)}
                        <div className="item-info">
                            <p className="item-title">{product.name}</p>
                            <div className="item-price">
                                <p>${product.priceRange.selling.low} - ${product.priceRange.selling.high}</p>
                            </div>
                        </div>
                    </div>
                </div>                           
            </div>           
        );
    }

    handleModel(product) {
        const group = this.state.data.groups.find(g => g.id === product.id)
        group.showModal = !group.showModal
        this.setState({data: this.state.data})
    }

    renderModal(product, index) {
        return (
            <div key={product.name + index}>
                <Modal show={product.showModal} animation={false} onHide={this.handleModel.bind(this, product)} className="modal-window">
                    <ModalHeader closeButton>{product.name}</ModalHeader>
                    <ModalBody>
                        <Carousel controls={true} indicators={true}>
                            { product.images.map((image) => {
                                return (
                                    <CarouselItem> 
                                        <img
                                            key={product.id}
                                            src={image.href}
                                            alt="product image"
                                        />
                                    </CarouselItem>
                                )
                            })}
                        </Carousel>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.data.groups.map((p, index) => this.renderImage(p, index))}
                </div>
            </div>
        )
    }
}